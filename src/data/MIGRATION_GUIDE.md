# 🚀 Data Migration Guide

This guide explains how to migrate components to use the centralized data structure.

## Quick Reference

### Import Pattern
```typescript
// Before: Hardcoded data in component
// After: Import from centralized data
import { teamMembers, heroData, partnersData } from '@/data';
```

---

## Component-by-Component Migration

### ✅ Team.tsx
**Before:**
```typescript
const Team = () => {
  const teamMembers = [
    { name: 'Andrew Seely', photo: 'https://...' },
    // ... 40+ members
  ];
  // Component logic
};
```

**After:**
```typescript
import { teamMembers } from '@/data';

const Team = () => {
  // Component logic using imported teamMembers
};
```

---

### ✅ Partners.tsx
**Before:**
```typescript
const partnersData = [
  {
    category: 'Academic',
    logos: [...]
  }
];
```

**After:**
```typescript
import { partnersData } from '@/data';
// Use imported partnersData with proper TypeScript types
```

---

### ✅ Timeline.tsx
**Before:**
```typescript
const phases = [
  { title: 'Preparation Phase', date: '...', items: [...] }
];
```

**After:**
```typescript
import { phases } from '@/data';
// Component uses imported phases
```

---

### ✅ Hero.tsx
**Before:**
```typescript
const Hero = () => {
  const registrationDeadline = new Date("2025-11-20T23:59:59");
  // ... hardcoded text
};
```

**After:**
```typescript
import { heroData } from '@/data';

const Hero = () => {
  const registrationDeadline = new Date(heroData.registration.deadline);
  // Use heroData.title, heroData.subtitle, etc.
};
```

---

### ✅ Contact.tsx
**Before:**
```typescript
// Hardcoded contact info
<a href="mailto:help@computer.org">help@computer.org</a>
```

**After:**
```typescript
import { contactData } from '@/data';

// Dynamic rendering
{contactData.contactInfo.map(info => (
  // Render contact items
))}
```

---

### ✅ Navbar.tsx
**Before:**
```typescript
const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  // ... more items
];
```

**After:**
```typescript
import { navItems, logoLinks } from '@/data';

// Use navItems for navigation
// Use logoLinks for logo display
```

---

### ✅ Outcomes.tsx
**Before:**
```typescript
const outcomesData = {
  cards: [...],
  impactMetrics: [...]
};
```

**After:**
```typescript
import { outcomesData } from '@/data';
// Use imported outcomesData
```

---

### ✅ Registration.tsx
**Before:**
```typescript
const availableVouchers = ["111111", "970584", ...];
const basePrices = { without: 100, with: 300 };
```

**After:**
```typescript
import { registrationData, availableVouchers } from '@/data';

// Use registrationData.options for prices
// Use availableVouchers for validation
// Use registrationData.discounts for discount logic
```

---

### ✅ SummitInfo.tsx
**Before:**
```typescript
const speakers = [
  { name: '...', title: '...', img: '...' },
  // ... 27 speakers
];
```

**After:**
```typescript
import { summitData } from '@/data';

// Use summitData.speakers
// Use summitData.honoraryChair
// Use summitData.strategicPartners
// Use summitData.venues
```

---

### ✅ About.tsx
**Before:**
```typescript
<h2>About the Program</h2>
<p>Bridging the AI knowledge gap...</p>
```

**After:**
```typescript
import { aboutData } from '@/data';

<h2>{aboutData.title}</h2>
<p>{aboutData.subtitle}</p>
```

---

## TypeScript Benefits

### Before Migration
- No type checking for data
- Typos in property names go unnoticed
- Hard to refactor

### After Migration
```typescript
// Full IntelliSense support
import { TeamMember, Speaker, Partner } from '@/data';

// Type-safe access
const member: TeamMember = teamMembers[0];
member.name; // ✅ Autocomplete works
member.nam;  // ❌ TypeScript error
```

---

## Icon Mapping

Some components use Lucide React icons. Map icon names from data:

```typescript
import * as Icons from 'lucide-react';

const iconName = 'GraduationCap'; // From data
const Icon = Icons[iconName as keyof typeof Icons];
<Icon className="w-6 h-6" />
```

Or use a helper function:

```typescript
import { getIcon } from '@/utils/icons';

const Icon = getIcon(iconName);
```

---

## Image Paths

Images are imported in data files and re-exported:

```typescript
// In data file
import logo from "../components/imgs/caravanlogo.png";

export const heroData = {
  logo, // Already imported
  // ...
};

// In component
import { heroData } from '@/data';
<img src={heroData.logo} alt="Logo" />
```

---

## Testing After Migration

1. **Check TypeScript compilation:**
   ```bash
   npm run build
   ```

2. **Verify no console errors:**
   - Open browser dev tools
   - Navigate through all pages
   - Check for missing data or broken images

3. **Test dynamic features:**
   - Registration form
   - Navigation
   - Contact links
   - Partner logos

4. **Hot reload:**
   - Make changes to data files
   - Verify changes reflect immediately

---

## Best Practices

✅ **DO:**
- Import only what you need
- Use TypeScript interfaces
- Keep data files focused and organized
- Update README.md when adding new data

❌ **DON'T:**
- Copy data back into components
- Mix data and logic
- Hardcode strings that might change
- Forget to export new data in index.ts

---

## Troubleshooting

### Problem: Import not found
**Solution:** Check that the data is exported in both the data file AND `index.ts`

### Problem: TypeScript errors
**Solution:** Ensure interfaces match the actual data structure

### Problem: Images not loading
**Solution:** Verify image paths are correct relative to data file location

### Problem: Hot reload not working
**Solution:** 
- Check Vite config
- Restart dev server
- Clear browser cache

---

## Performance Considerations

- ✅ All data is statically imported (no runtime fetch)
- ✅ Tree-shaking removes unused exports
- ✅ Images are bundled efficiently by Vite
- ✅ TypeScript types are compiled away (zero runtime cost)

---

## Next Steps

1. Update components to import from `@/data`
2. Remove hardcoded data from component files
3. Test thoroughly
4. Commit changes with clear message:
   ```
   git commit -m "refactor: centralize data into /src/data folder"
   ```

---

## Questions?

Refer to:
- `src/data/README.md` - Data structure documentation
- Individual data files - See comments and interfaces
- Original components - Compare before/after patterns

---

**Remember:** This migration improves:
- Maintainability 🔧
- Type Safety 🛡️
- Reusability ♻️
- Developer Experience 🚀

Happy coding! 🎉
