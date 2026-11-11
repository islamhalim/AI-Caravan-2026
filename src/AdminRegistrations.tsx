import { useEffect, useMemo, useState } from 'react';
import { onAuthStateChanged, signInWithPopup, signOut, type User } from 'firebase/auth';
import { collection, deleteDoc, doc, getDocs, type Timestamp } from 'firebase/firestore';
import { Download, FileSpreadsheet, LogIn, LogOut, RefreshCw, Search, ShieldCheck, Trash2 } from 'lucide-react';
import { auth, db, googleProvider } from './components/config/firebase';

const adminEmail = 'islamhalim@ieee.org';
type RegistrationView = 'tracks' | 'summit';
type Registration = {
  id:string; name:string; title:string; email:string; phone:string; country:string; affiliation:string; ieeeId:string;
  dateOfBirth?:string; gender?:string; track?:string; residency?:string; ieeeMembership?:string;
  attendancePackage?:string; feeUsd?:number; dietaryOrAccessibility?:string; paymentStatus?:string;
  submittedAt?:Timestamp; confirmationEmail?:{status?:string;sentAt?:Timestamp;error?:string};
};
type ChartDatum = {label:string;value:number};

const packageLabels:Record<string,string> = {
  accommodation:'Accommodation Registration Package',
  'without-accommodation':'Full Registration Package',
  access:'Access Registration Package',
};

function timestampText(value?:Timestamp){if(!value?.toDate)return '';return value.toDate().toLocaleString('en-GB',{timeZone:'Africa/Cairo'});}
function displayValue(field:string,value?:string|number){
  if(value===undefined||value===null||value==='')return 'Not specified';
  if(field==='attendancePackage')return packageLabels[String(value)]||String(value);
  if(field==='residency')return value==='egyptian'?'Egyptian':value==='non-egyptian'?'Non-Egyptian':String(value);
  if(field==='ieeeMembership')return value==='member'?'IEEE member':value==='non-member'?'Not an IEEE member':String(value);
  return String(value);
}
function countBy(items:Registration[],field:keyof Registration):ChartDatum[]{
  const counts=new Map<string,number>();
  items.forEach(item=>{const label=displayValue(String(field),item[field] as string|number|undefined);counts.set(label,(counts.get(label)||0)+1);});
  return [...counts.entries()].map(([label,value])=>({label,value})).sort((a,b)=>b.value-a.value||a.label.localeCompare(b.label));
}
function ageRangeData(items:Registration[]):ChartDatum[]{
  const ranges=[{label:'Under 18',min:0,max:17},{label:'18–24',min:18,max:24},{label:'25–34',min:25,max:34},{label:'35–44',min:35,max:44},{label:'45–54',min:45,max:54},{label:'55+',min:55,max:200}];
  const counts=new Map(ranges.map(range=>[range.label,0]));let unknown=0;const today=new Date();
  items.forEach(item=>{const match=/^(\d{4})-(\d{2})-(\d{2})$/.exec(item.dateOfBirth||'');if(!match){unknown+=1;return;}const year=Number(match[1]);const month=Number(match[2]);const day=Number(match[3]);let age=today.getFullYear()-year;if(today.getMonth()+1<month||(today.getMonth()+1===month&&today.getDate()<day))age-=1;const range=ranges.find(value=>age>=value.min&&age<=value.max);if(range)counts.set(range.label,(counts.get(range.label)||0)+1);else unknown+=1;});
  const result=ranges.map(range=>({label:range.label,value:counts.get(range.label)||0}));if(unknown)result.push({label:'Not specified',value:unknown});return result;
}
function BarChart({title,subtitle,data,tone}:{title:string;subtitle:string;data:ChartDatum[];tone:string}){
  const maximum=Math.max(...data.map(item=>item.value),1);
  return <article className={`admin-chart ${tone}`}><div className="admin-chart-heading"><div><h2>{title}</h2><p>{subtitle}</p></div><strong>{data.reduce((sum,item)=>sum+item.value,0)}</strong></div><div className="admin-bars" role="img" aria-label={`${title}: ${data.map(item=>`${item.label}, ${item.value}`).join('; ')}`}>{data.map(item=><div className="admin-bar" key={item.label}><div><span>{item.label}</span><b>{item.value}</b></div><div className="admin-bar-track"><i style={{width:`${(item.value/maximum)*100}%`}}/></div></div>)}</div></article>;
}

export default function AdminRegistrations(){
  const [user,setUser]=useState<User|null>(null);const [authReady,setAuthReady]=useState(false);
  const [activeView,setActiveView]=useState<RegistrationView>('tracks');const [registrations,setRegistrations]=useState<Registration[]>([]);
  const [loading,setLoading]=useState(false);const [error,setError]=useState('');const [search,setSearch]=useState('');
  const [deletingId,setDeletingId]=useState('');const [notice,setNotice]=useState('');
  const [category,setCategory]=useState('All categories');const [country,setCountry]=useState('All countries');const [emailStatus,setEmailStatus]=useState('All email statuses');
  const isAdmin=user?.email?.toLowerCase()===adminEmail;const isTrackView=activeView==='tracks';

  async function loadRegistrations(){
    setLoading(true);setError('');setNotice('');
    try{const collectionName=isTrackView?'registrations-2026':'summit-registrations-2026';const snapshot=await getDocs(collection(db,collectionName));const rows=snapshot.docs.map(document=>({id:document.id,...document.data()} as Registration));rows.sort((a,b)=>(b.submittedAt?.toMillis?.()||0)-(a.submittedAt?.toMillis?.()||0));setRegistrations(rows);}
    catch(loadError){console.error('Could not load registrations',loadError);setError('Registrations could not be loaded. Confirm that the Firestore rules allow the authorized admin to read this collection.');}
    finally{setLoading(false);}
  }
  useEffect(()=>onAuthStateChanged(auth,currentUser=>{setUser(currentUser);setAuthReady(true);if(!currentUser)setRegistrations([]);}),[]);
  useEffect(()=>{if(isAdmin)void loadRegistrations();},[isAdmin,activeView]);

  const categories=useMemo(()=>[...new Set(registrations.map(item=>isTrackView?item.track:item.attendancePackage).filter(Boolean) as string[])].sort(),[registrations,isTrackView]);
  const countries=useMemo(()=>[...new Set(registrations.map(item=>item.country).filter(Boolean))].sort(),[registrations]);
  const filtered=useMemo(()=>registrations.filter(item=>{const haystack=[item.name,item.email,item.phone,item.affiliation,item.ieeeId].join(' ').toLowerCase();const itemCategory=isTrackView?item.track:item.attendancePackage;const status=item.confirmationEmail?.status||'not sent';return(!search||haystack.includes(search.toLowerCase()))&&(category==='All categories'||itemCategory===category)&&(country==='All countries'||item.country===country)&&(emailStatus==='All email statuses'||status===emailStatus);}),[registrations,search,category,country,emailStatus,isTrackView]);
  const primaryStatistics=useMemo(()=>countBy(registrations,isTrackView?'track':'attendancePackage'),[registrations,isTrackView]);
  const countryStatistics=useMemo(()=>countBy(registrations,'country'),[registrations]);
  const thirdStatistics=useMemo(()=>isTrackView?ageRangeData(registrations):countBy(registrations,'residency'),[registrations,isTrackView]);

  function switchView(view:RegistrationView){setActiveView(view);setRegistrations([]);setSearch('');setCategory('All categories');setCountry('All countries');setEmailStatus('All email statuses');setError('');}
  async function login(){setError('');try{await signInWithPopup(auth,googleProvider);}catch(loginError){console.error('Admin sign-in failed',loginError);setError('Google sign-in could not be completed. Please try again.');}}
  async function deleteRegistration(item:Registration){
    const registrationType=isTrackView?'track':'summit';
    const confirmed=window.confirm(`Delete the ${registrationType} registration for ${item.name} (${item.email})?\n\nThis action cannot be undone.`);
    if(!confirmed)return;
    setDeletingId(item.id);setError('');setNotice('');
    try{
      const collectionName=isTrackView?'registrations-2026':'summit-registrations-2026';
      await deleteDoc(doc(db,collectionName,item.id));
      setRegistrations(current=>current.filter(registration=>registration.id!==item.id));
      setNotice(`Registration for ${item.name} was deleted successfully.`);
    }catch(deleteError){
      console.error('Could not delete registration',deleteError);
      setError('The registration could not be deleted. Confirm that you are signed in with the authorized admin account and try again.');
    }finally{setDeletingId('');}
  }
  async function exportExcel(){
    const {default:ExcelJS}=await import('exceljs');const workbook=new ExcelJS.Workbook();workbook.creator='IEEE CS Region 8 AI Caravan';const sheet=workbook.addWorksheet(isTrackView?'Track Registrations':'Summit Registrations',{views:[{state:'frozen',ySplit:1}]});
    sheet.columns=isTrackView?[
      {header:'Full Name',key:'name',width:28},{header:'Title',key:'title',width:25},{header:'Date of Birth',key:'dateOfBirth',width:16},{header:'Gender',key:'gender',width:18},{header:'Email',key:'email',width:34},{header:'Phone',key:'phone',width:20},{header:'Country',key:'country',width:20},{header:'Affiliation',key:'affiliation',width:32},{header:'IEEE ID',key:'ieeeId',width:16},{header:'Track',key:'track',width:24},{header:'Submitted (Cairo)',key:'submittedAtText',width:23},{header:'Confirmation Email',key:'emailStatus',width:20},{header:'Confirmation Sent (Cairo)',key:'emailSentAt',width:25},
    ]:[
      {header:'Full Name',key:'name',width:28},{header:'Title',key:'title',width:25},{header:'Email',key:'email',width:34},{header:'Phone',key:'phone',width:20},{header:'Country',key:'country',width:20},{header:'Affiliation',key:'affiliation',width:32},{header:'Residency',key:'residencyText',width:18},{header:'IEEE Membership',key:'membershipText',width:20},{header:'IEEE ID',key:'ieeeId',width:16},{header:'Package',key:'packageText',width:38},{header:'Fee (USD)',key:'feeUsd',width:14},{header:'Payment Status',key:'paymentStatus',width:18},{header:'Dietary / Accessibility',key:'dietaryOrAccessibility',width:32},{header:'Submitted (Cairo)',key:'submittedAtText',width:23},{header:'Confirmation Email',key:'emailStatus',width:20},
    ];
    filtered.forEach(item=>sheet.addRow({...item,submittedAtText:timestampText(item.submittedAt),emailStatus:item.confirmationEmail?.status||'not sent',emailSentAt:timestampText(item.confirmationEmail?.sentAt),residencyText:displayValue('residency',item.residency),membershipText:displayValue('ieeeMembership',item.ieeeMembership),packageText:displayValue('attendancePackage',item.attendancePackage)}));
    sheet.getRow(1).font={bold:true,color:{argb:'FFFFFFFF'}};sheet.getRow(1).fill={type:'pattern',pattern:'solid',fgColor:{argb:'FF002855'}};sheet.autoFilter={from:'A1',to:isTrackView?'M1':'O1'};sheet.eachRow(row=>{row.alignment={vertical:'middle',wrapText:true};});
    const buffer=await workbook.xlsx.writeBuffer();const blob=new Blob([buffer],{type:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});const url=URL.createObjectURL(blob);const link=document.createElement('a');link.href=url;link.download=`AI-Caravan-2026-${isTrackView?'Track':'Summit'}-Registrations-${new Date().toISOString().slice(0,10)}.xlsx`;link.click();URL.revokeObjectURL(url);
  }

  if(!authReady)return <section className="admin-access"><RefreshCw className="spin"/><h1>Checking secure access…</h1></section>;
  if(!user)return <section className="admin-access"><ShieldCheck/><span className="eyebrow">Protected administration</span><h1>Registration Admin</h1><p>Sign in with the authorized Google account to view and export participant registrations.</p>{error&&<div className="form-message error">{error}</div>}<button className="btn primary" onClick={login}><LogIn/> Sign in with Google</button><small>Access is restricted to {adminEmail}</small></section>;
  if(!isAdmin)return <section className="admin-access"><ShieldCheck/><span className="eyebrow">Access denied</span><h1>This account is not authorized.</h1><p>You are signed in as <strong>{user.email}</strong>. Only {adminEmail} can access registration data.</p><button className="btn secondary" onClick={()=>signOut(auth)}><LogOut/> Sign out</button></section>;

  const sentCount=registrations.filter(item=>item.confirmationEmail?.status==='sent').length;const paidCount=registrations.filter(item=>item.paymentStatus==='paid').length;
  return <><section className="admin-hero"><div className="container"><div><span className="eyebrow">Protected administration</span><h1>2026 Registrations</h1><p>Signed in securely as {user.email}</p></div><button className="btn secondary" onClick={()=>signOut(auth)}><LogOut/> Sign out</button></div></section><section className="admin-dashboard container">
    <div className="admin-tabs" role="tablist" aria-label="Registration type"><button role="tab" aria-selected={isTrackView} className={isTrackView?'active':''} onClick={()=>switchView('tracks')}>Track Registrations</button><button role="tab" aria-selected={!isTrackView} className={!isTrackView?'active':''} onClick={()=>switchView('summit')}>Summit Registrations</button></div>
    <div className="admin-view-heading"><div><span className="eyebrow">{isTrackView?'Arabic online cohort':'Cairo · 16–18 December'}</span><h2>{isTrackView?'Track registrations':'Summit registrations'}</h2></div><p>{isTrackView?'Applications across the six online learning pathways.':'Summit packages, fees, membership, and participant logistics.'}</p></div>
    <div className="admin-metrics"><article><strong>{registrations.length}</strong><span>Total registrations</span></article><article><strong>{categories.length}</strong><span>{isTrackView?'Selected tracks':'Package types'}</span></article><article><strong>{countries.length}</strong><span>Countries represented</span></article><article><strong>{isTrackView?sentCount:paidCount}</strong><span>{isTrackView?'Confirmations sent':'Marked paid'}</span></article></div>
    <div className="admin-charts"><BarChart title={isTrackView?'Registrations by track':'Registrations by package'} subtitle={isTrackView?'Demand across the six learning pathways':'Participation package selections'} data={primaryStatistics} tone="orange"/><BarChart title="Registrations by country" subtitle="Geographic reach of current applications" data={countryStatistics} tone="blue"/><BarChart title={isTrackView?'Participant age ranges':'Residency categories'} subtitle={isTrackView?'Calculated from each submitted date of birth':'Egyptian and non-Egyptian participants'} data={thirdStatistics} tone="cyan"/></div>
    <div className="admin-toolbar"><label className="admin-search"><Search/><input value={search} onChange={event=>setSearch(event.target.value)} placeholder="Search name, email, phone or affiliation" aria-label="Search registrations"/></label><select value={category} onChange={event=>setCategory(event.target.value)} aria-label={isTrackView?'Filter by track':'Filter by package'}><option value="All categories">{isTrackView?'All tracks':'All packages'}</option>{categories.map(value=><option key={value} value={value}>{isTrackView?value:displayValue('attendancePackage',value)}</option>)}</select><select value={country} onChange={event=>setCountry(event.target.value)} aria-label="Filter by country"><option>All countries</option>{countries.map(value=><option key={value}>{value}</option>)}</select><select value={emailStatus} onChange={event=>setEmailStatus(event.target.value)} aria-label="Filter by confirmation email status"><option>All email statuses</option><option value="sent">sent</option><option value="error">error</option><option value="not sent">not sent</option></select><button className="btn secondary" onClick={loadRegistrations} disabled={loading}><RefreshCw className={loading?'spin':''}/> Refresh</button><button className="btn primary" onClick={exportExcel} disabled={!filtered.length}><Download/> Download Excel</button></div>
    {error&&<div className="form-message error">{error}</div>}{notice&&<div className="form-message success">{notice}</div>}<div className="admin-results"><span>{filtered.length} of {registrations.length} {isTrackView?'track':'summit'} registrations</span>{filtered.length!==registrations.length&&<button onClick={()=>{setSearch('');setCategory('All categories');setCountry('All countries');setEmailStatus('All email statuses');}}>Clear filters</button>}</div>
    <div className="admin-table-wrap"><table className="admin-table"><thead>{isTrackView?<tr><th>Name</th><th>Contact</th><th>Country</th><th>Track</th><th>Affiliation</th><th>Submitted</th><th>Email status</th><th>Actions</th></tr>:<tr><th>Name</th><th>Contact</th><th>Country</th><th>Package</th><th>IEEE status</th><th>Fee</th><th>Payment</th><th>Submitted</th><th>Actions</th></tr>}</thead><tbody>{filtered.map(item=>isTrackView?<tr key={item.id}><td><strong>{item.name}</strong><small>{item.title}</small></td><td><a href={`mailto:${item.email}`}>{item.email}</a><small>{item.phone}</small></td><td>{item.country}</td><td>{item.track}</td><td>{item.affiliation||'—'}</td><td>{timestampText(item.submittedAt)||'—'}</td><td><span className={`email-state ${item.confirmationEmail?.status||'not-sent'}`}>{item.confirmationEmail?.status||'not sent'}</span></td><td><button className="admin-delete" onClick={()=>void deleteRegistration(item)} disabled={Boolean(deletingId)} aria-label={`Delete registration for ${item.name}`}><Trash2/>{deletingId===item.id?'Deleting…':'Delete'}</button></td></tr>:<tr key={item.id}><td><strong>{item.name}</strong><small>{item.title} · {item.affiliation}</small></td><td><a href={`mailto:${item.email}`}>{item.email}</a><small>{item.phone}</small></td><td>{item.country}<small>{displayValue('residency',item.residency)}</small></td><td>{displayValue('attendancePackage',item.attendancePackage)}</td><td>{displayValue('ieeeMembership',item.ieeeMembership)}<small>{item.ieeeId||'No IEEE ID'}</small></td><td>{item.feeUsd===0?'Free':item.feeUsd!==undefined?`$${item.feeUsd}`:'—'}</td><td><span className={`email-state ${item.paymentStatus||'pending'}`}>{item.paymentStatus||'pending'}</span></td><td>{timestampText(item.submittedAt)||'—'}</td><td><button className="admin-delete" onClick={()=>void deleteRegistration(item)} disabled={Boolean(deletingId)} aria-label={`Delete registration for ${item.name}`}><Trash2/>{deletingId===item.id?'Deleting…':'Delete'}</button></td></tr>)}</tbody></table>{!loading&&!filtered.length&&<div className="admin-empty"><FileSpreadsheet/><h2>No {isTrackView?'track':'summit'} registrations match these filters.</h2></div>}</div>
  </section></>;
}
