// components/Activities.jsx
import TopSection from '../TopSection';
import SectionDivider from '../ui/SectionDivider';
// Gallery components
import FDC from '../galleries/FDC';
import TKH from '../galleries/TKH';
import NAID from '../galleries/NAID';
import AUC from '../galleries/AUC';
import GUC from '../galleries/GUC';
import NU from '../galleries/NU';
import CS from '../galleries/CS';
import SUT from '../galleries/SUT';
import AASTMT from '../galleries/AASTMT';
import EUI from '../galleries/EUI';
import AUC2 from '../galleries/AUC2';
import CS2 from '../galleries/CS2';
import NU2 from '../galleries/NU2';
import Kenya from '../galleries/Kenya';
import Tunisia from '../galleries/Tunisia';
import Summit from '../galleries/Summit';


const Activities = () => {
  return (
    <>
      <TopSection
        title="AI Caravan Activities"
        subtitle="Explore our comprehensive range of professional training sessions and student workshops across multiple institutions."
      />
      <SectionDivider title="Professional Activities" />
      <Summit />
      <Kenya />
      <Tunisia />
      <EUI />
      <AUC />
      <GUC />
      <NU />
      <AASTMT />
      <SUT />
      <NAID />
      <FDC />
      <TKH />
      <CS />
      
      <SectionDivider title="Students Activities" />
      <NU2 />
      <AUC2 />
      <CS2 />
    </>
  );
};

export default Activities;
