// Timeline Data
export interface TimelinePhase {
  title: string;
  date: string;
  items: string[];
}

export const phases: TimelinePhase[] = [
  {
    title: 'Preparation Phase',
    date: 'March-April 2025',
    items: [
      'Initial assessments and group formation',
      'Resource distribution and platform setup'
    ]
  },
  {
    title: 'Launch Event',
    date: '29th April 2025',
    items: [
      'Caravan launch and participant onboarding',
    ]
  },
  {
    title: 'Training Phase',
    date: 'May-July 2025',
    items: [
      'Intensive AI fundamentals workshops',
      'Specialized track training sessions',
      'Mentorship program initiation'
    ]
  },
  {
    title: 'Practical Application',
    date: 'August-November 2025',
    items: [
      'Project development and implementation',
      'GenZ Juniors competition',
      'Industry collaboration workshops'
    ]
  },
  {
    title: 'AI Summit & Closure',
    date: 'December 2025',
    items: [
      'International conference',
      'Project showcase and competitions',
      'Awards ceremony and networking event'
    ]
  }
];
