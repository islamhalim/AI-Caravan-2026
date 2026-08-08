// Outcomes Data
export interface OutcomeCard {
  icon: string; // Icon name as string
  title: string;
  value?: number;
  suffix?: string;
  staticValue?: string;
  description: string;
}

export interface ImpactMetric {
  label: string;
  value: number;
  suffix: string;
}

export const outcomesData = {
  title: "Expected Outcomes",
  subtitle: "Measurable impact and tangible results from our program",
  
  cards: [
    {
      icon: "Target",
      title: "Pilot Projects",
      value: 10,
      suffix: "+",
      description: "Successful AI implementations across different sectors"
    },
    {
      icon: "Lightbulb",
      title: "New Startups",
      staticValue: "3-5",
      description: "AI-focused startups launched from the program"
    },
    {
      icon: "TrendingUp",
      title: "Sector Strategies",
      value: 5,
      suffix: "+",
      description: "Industry-specific AI implementation strategies"
    }
  ] as OutcomeCard[],
  
  impactMetrics: [
    { label: 'Trained Professionals', value: 150, suffix: '+' },
    { label: 'Student Participants', value: 250, suffix: '+' },
    { label: 'Workshop Hours', value: 100, suffix: '+' },
    { label: 'Industry Partners', value: 10, suffix: '+' }
  ] as ImpactMetric[]
};
