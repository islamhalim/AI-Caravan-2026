// About Section Data
import p1 from "../components/imgs/nu33.jpg";
import p2 from "../components/imgs/g3.jpg";
import p3 from "../components/imgs/j10.jpg";
import p4 from "../components/imgs/p4.png";
import p5 from "../components/imgs/p5.png";
import p6 from "../components/imgs/p6.png";

export const aboutData = {
  title: "About the Program",
  subtitle: "Bridging the AI knowledge gap and fostering innovation through comprehensive training and practical application.",
  
  executiveSummary: {
    title: "Executive Summary",
    paragraphs: [
      "The IEEE Computer Society AI Caravan is an outreach initiative designed to promote access to artificial intelligence (AI) knowledge as a means of advancing human development, aligning with the core value of the 2030 Agenda for Sustainable Development — \"leaving no one behind.\" The Caravan launched in February 2025 with its first edition (R8) held in Egypt with plans to extend across Europe, the Middle East, and Africa. The Caravan brought together universities, research institutions, and global AI experts to deliver talks and panel discussions, along with hands-on training. The theme behind the caravan is \"The Right to Knowledge and Practical Application in AI,\" which emphasizes addressing locally relevant challenges while promoting the responsible and ethical use of AI technologies.",
      "Over the course of 9 months, 30 events have been held in Egypt, Tunisia, Uganda, Greece, Jordan, and Kenya engaging more than 600 participants including students, faculty, professionals, and policymakers through in-person and hybrid sessions that addressed both technical foundations and domain-specific applications in areas such as healthcare, finance, accessibility, and cybersecurity.",
      "The R8 Edition will culminate in a leading international summit in December 2025 focused on applied and multidisciplinary research and technologies for AI. The initiative has strengthened ties between academic and professional communities, broadened awareness of AI's practical uses, and laid the groundwork for long-term collaboration and future programs across Region 8 with efforts to expand to other regions across the world."
    ]
  },
  
  sections: [
    {
      id: "professionals",
      icon: "Briefcase",
      title: "Empowering Professionals",
      items: [
        "Advanced AI training",
        "Practical AI project development",
        "Industry-focused implementation"
      ],
      images: [p1, p2]
    },
    {
      id: "students",
      icon: "GraduationCap",
      title: "Educating Students",
      items: [
        "Fundamental AI concepts",
        "Entrepreneurship skills development",
        "GenZ Juniors competition participation"
      ],
      images: [p4, p3]
    },
    {
      id: "summit",
      icon: "Rocket",
      title: "AI Summit",
      items: [
        "AI leaders",
        "Knowledge exchange",
        "Fostering collaboration"
      ],
      images: [p5, p6]
    }
  ]
};
