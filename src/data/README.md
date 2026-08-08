# AI Caravan Data Structure

This folder contains all centralized data for the IEEE Computer Society AI Caravan 2025 website. All hardcoded data has been extracted from components and organized into logical data files.

## 📁 File Structure

### `index.ts`
Central export file that re-exports all data modules for easy importing.

**Usage:**
```typescript
import { teamMembers, heroData, partnersData } from '@/data';
```

---

### `about.ts`
Contains data for the About section including:
- Executive summary paragraphs
- Three main program sections (Professionals, Students, Summit)
- Associated images and descriptions

**Exports:**
- `aboutData`: Complete about section configuration

---

### `team.ts`
Team members data with photos and names.

**Exports:**
- `TeamMember` interface
- `teamMembers`: Array of 40+ team members with names and photo URLs

---

### `timeline.ts`
Program timeline/agenda data.

**Exports:**
- `TimelinePhase` interface
- `phases`: Array of 5 timeline phases from preparation to summit

**Phases:**
1. Preparation Phase (March-April 2025)
2. Launch Event (29th April 2025)
3. Training Phase (May-July 2025)
4. Practical Application (August-November 2025)
5. AI Summit & Closure (December 2025)

---

### `partners.ts`
Partner organizations categorized by type.

**Exports:**
- `PartnerCategory` type
- `Partner` interface
- `PartnerCategoryData` interface
- `partnersData`: Array of partner categories with logos

**Categories:**
- Academic, Research, and Educational Partners (20+ partners)
- Community Partners (10+ partners)
- Industrial Partners (2 partners)
- Media Partners (1 partner)

---

### `outcomes.ts`
Expected outcomes and impact metrics.

**Exports:**
- `OutcomeCard` interface
- `ImpactMetric` interface
- `outcomesData`: Contains outcome cards and impact metrics

**Metrics:**
- Pilot Projects: 10+
- New Startups: 3-5
- Sector Strategies: 5+
- Trained Professionals: 150+
- Student Participants: 250+
- Workshop Hours: 100+
- Industry Partners: 10+

---

### `hero.ts`
Hero section data including logo, background, and countdown.

**Exports:**
- `heroData`: Complete hero section configuration

**Includes:**
- Event title and edition
- Summit announcement details
- Registration deadline (November 20, 2025)
- Venue and theme information

---

### `contact.ts`
Contact information and social media links.

**Exports:**
- `ContactInfo` interface
- `ContactItem` interface
- `SocialLink` interface
- `contactData`: Complete contact section data

**Includes:**
- Email addresses
- Phone numbers
- Physical address
- Social media links (LinkedIn, Twitter, Facebook)

---

### `navbar.ts`
Navigation menu items and logo links.

**Exports:**
- `NavItem` interface
- `LogoLink` interface
- `navItems`: Array of 9 navigation items
- `logoLinks`: Array of 5 organization logos with links

**Navigation Items:**
- Home, About, Activities, Highlights, Partners, Timeline, Gallery, Registration, Contact

---

### `summit.ts`
Complete summit information including speakers, venues, and partners.

**Exports:**
- `Speaker` interface
- `StrategicPartner` interface
- `Venue` interface
- `summitData`: Complete summit configuration

**Includes:**
- Honorary chair information
- 3 strategic partners
- 2 hosting venues (AUC & Nile University)
- 27 featured speakers with photos, titles, and affiliations

---

### `registration.ts`
Registration form configuration and voucher codes.

**Exports:**
- `RegistrationFormField` interface
- `RegistrationOption` interface
- `DiscountOption` interface
- `availableVouchers`: Array of voucher codes
- `registrationData`: Complete registration form configuration

**Features:**
- Form field definitions
- Registration options (with/without accommodation)
- Discount options (IEEE, IEEE CS, Student, Developing Country)
- Voucher validation
- Price calculation logic
- User messages

**Pricing:**
- Without Accommodation: $100
- With Accommodation: $300
- Various discounts available

---

## 🔄 Migration Guide

To use this centralized data in components:

### Before:
```typescript
const teamMembers = [
  { name: 'John Doe', photo: 'https://...' },
  // ... hardcoded data
];
```

### After:
```typescript
import { teamMembers } from '@/data';
// Use teamMembers directly
```

---

## 📝 Adding New Data

1. **Choose or create appropriate data file** based on the content type
2. **Define TypeScript interfaces** for type safety
3. **Export data constants** with descriptive names
4. **Add exports to `index.ts`** for centralized access
5. **Update this README** with new data documentation

---

## 🎯 Benefits

✅ **Centralized Management**: All data in one location
✅ **Type Safety**: TypeScript interfaces for all data structures
✅ **Easy Updates**: Modify data without touching component logic
✅ **Reusability**: Import same data across multiple components
✅ **Maintainability**: Clear separation of data and presentation
✅ **Scalability**: Easy to add new data files as needed

---

## 🔍 Data Sources

- **Images**: Stored in `src/components/imgs/`
- **External Images**: URLs to external resources (team photos, partner logos)
- **Text Content**: All hardcoded strings extracted to data files
- **Configuration**: Form fields, navigation items, etc.

---

## 📊 Statistics

- **Total Data Files**: 10
- **Team Members**: 40+
- **Partners**: 30+
- **Speakers**: 27
- **Timeline Phases**: 5
- **Navigation Items**: 9
- **Voucher Codes**: 8+

---

Last Updated: November 10, 2025
