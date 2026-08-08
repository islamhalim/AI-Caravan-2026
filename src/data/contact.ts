// Contact Information Data
export interface ContactInfo {
  icon: string;
  label: string;
  items: ContactItem[];
}

export interface ContactItem {
  text: string;
  link?: string;
  type?: 'email' | 'phone' | 'address';
}

export interface SocialLink {
  platform: string;
  icon: string;
  url: string;
}

export const contactData = {
  title: "Get in Touch",
  subtitle: "Have questions? We're here to help!",
  
  contactInfo: [
    {
      icon: "Mail",
      label: "Email",
      items: [
        { text: "help@computer.org", link: "mailto:help@computer.org", type: "email" as const },
        { text: "islamhalim@ieee.org", link: "mailto:islamhalim@ieee.org", type: "email" as const }
      ]
    },
    {
      icon: "Phone",
      label: "Phone",
      items: [
        { text: "+1-202-371-0101", link: "tel:+12023710101", type: "phone" as const },
        { text: "+2-010-0114-6444", link: "tel:+201001146444", type: "phone" as const }
      ]
    },
    {
      icon: "MapPin",
      label: "Address",
      items: [
        { 
          text: "Washington, DC Office\n2001 L Street N.W., Suite 700\nWashington, DC 20036-4928",
          type: "address" as const
        }
      ]
    }
  ] as ContactInfo[],
  
  socialLinks: [
    {
      platform: "LinkedIn",
      icon: "Linkedin",
      url: "https://www.linkedin.com/company/ieee-computer-society-r8-ai-caravan/"
    },
    {
      platform: "Twitter",
      icon: "Twitter",
      url: "#"
    },
    {
      platform: "Facebook",
      icon: "Facebook",
      url: "https://www.facebook.com/profile.php?id=61573846683564"
    }
  ] as SocialLink[]
};
