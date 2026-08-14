import React from "react";

interface VideoItem {
  title: string;
  file: string;

}

interface HighlightItem {
  title: string;
  link: string;
  image: string;
}

const videos: VideoItem[] = [
  {
    title: "Yuhong Liu - IEEE CS GAC Chair",
    file: "/videos/Yuhong Liu.mp4",
  
  },
  {
    title: "George J. Proeller - IEEE CS Distinguished Contributor Program Chair",
    file: "/videos/Proeller.mp4",
 
  },
  {
    title: "Islam Tharwat - IEEE CS R8 Coordinator",
    file: "/videos/Islam.mp4",
 
  },
];

const highlights: HighlightItem[] = [
  { title: "Nile TV|Interview about the IEEE AI Caravan Activities", link: "https://www.youtube.com/watch?v=7YLPGCZ1tGA", image: "/imgs/h13.jpg" },
  { title: "EUI Hosts IEEE AI Caravan Closing Ceremony", link: "https://www.youtube.com/shorts/Vu6lgcmficc", image: "/imgs/h1.jpg" },
  { title: "Watan Rakamy| A segment on the AI ​​caravan at universities", link: "https://www.youtube.com/watch?v=D_vBjFfz2zE", image: "/imgs/h2.jpg" },
  { title: "The Egyptian Tax Authority participates in the IEEE CS AI Caravan 2025.", link: "https://m2.youm7.com/story/2025/8/25/%D8%A7%D9%84%D8%B6%D8%B1%D8%A7%D8%A6%D8%A8-%D8%A7%D9%84%D8%B0%D9%83%D8%A7%D8%A1-%D8%A7%D9%84%D8%A7%D8%B5%D8%B7%D9%86%D8%A7%D8%B9%D9%89-%D8%A3%D8%B5%D8%A8%D8%AD-%D8%B6%D8%B1%D9%88%D8%B1%D8%A9-%D9%85%D9%84%D8%AD%D8%A9-%D9%84%D8%AA%D8%B7%D9%88%D9%8A%D8%B1-%D8%A7%D9%84%D8%A3%D8%AF%D8%A7%D8%A1-%D8%A7%D9%84%D9%85%D8%A4%D8%B3%D8%B3%D9%8A/7100068", image: "/imgs/h3.jpg" },
  { title: "AI.gov.eg Event Page", link: "https://ai.gov.eg/events/events-list/event-details/23", image: "/imgs/h4.jpg" },
  { title: "Watan Rakamy|Details of the first stop of the IEEE Artificial Intelligence Caravan", link: "https://www.facebook.com/watch/?v=941859354585043", image: "/imgs/h12.jpg" },
  { title: "EUI News - IEEE CS R8 Concludes AI Caravan", link: "https://eui.edu.eg/ar/news/ieee-computer-society-region-8-concludes-ai-caravan", image: "/imgs/h5.jpg" },
  { title: "TKH University Collaboration", link: "https://tkh.edu.eg/coventry-cairo-branch-leads-ai-collaboration-with-ieee-computer-society/", image: "/imgs/h6.jpg" },
  { title: "EG-CERT participates in the IEEE CS AI Caravan 2025 ", link: "https://ae.linkedin.com/posts/egyptiancomputeremergencyreadinessteam_%D8%B4%D8%A7%D8%B1%D9%83-%D8%A7%D9%84%D9%85%D8%B1%D9%83%D8%B2-%D8%A7%D9%84%D9%88%D8%B7%D9%86%D9%8A-%D9%84%D9%84%D8%A7%D8%B3%D8%AA%D8%B9%D8%AF%D8%A7%D8%AF-%D9%84%D8%B7%D9%88%D8%A7%D8%B1%D8%A6-%D8%A7%D9%84%D8%AD%D8%A7%D8%B3%D8%A8%D8%A7%D8%AA-activity-7330866273414717440-q5pp", image: "/imgs/h7.jpg" },
  { title: "Elsabah News Report", link: "https://elsabahnews.com/360842/", image: "/imgs/h8.jpg" },
  { title: "Watan Raqami Report", link: "https://watanraqami.com/%D9%82%D8%A7%D9%81%D9%84%D8%A9-ieee-%D9%84%D9%84%D8%B0%D9%83%D8%A7%D8%A1-%D8%A7%D9%84%D8%A7%D8%B5%D8%B7%D9%86%D8%A7%D8%B9%D9%8A-%D8%AA%D9%86%D8%B7%D9%84%D9%82-%D9%85%D9%86-%D8%A7%D9%84%D8%B9%D8%A7/", image: "/imgs/h9.jpg" },
 
  { title: "ICT Business Report", link: "https://ictbusiness.org/%D9%85%D8%B5%D8%B1-%D8%AA%D8%B7%D9%84%D9%82-%D9%82%D8%A7%D9%81%D9%84%D8%A9-%D8%A7%D9%84%D8%B0%D9%83%D8%A7%D8%A1-%D8%A7%D9%84%D8%A7%D8%B5%D8%B7%D9%86%D8%A7%D8%B9%D9%8A-ieee-computer-society-r8-ai-carav/ ", image: "/imgs/h11.jpg" },
  
];

const RecordedVideos: React.FC = () => {
  return (
    <section id="recorded-videos" className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Highlights - AI Caravan
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Watch recorded sessions and explore media highlights from our AI workshops and events.
          </p>
        </div>

        {/* Videos Section */}
        <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          🎥 Recorded Videos
        </h3>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {videos.map((video, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow"
            >

              <video
                className="rounded-lg mb-4"
                style={{ width: "100%", height: "300px", objectFit: "cover" }}
                controls
                preload="metadata"
              >
                <source src={video.file} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <h3 className="text-lg font-semibold text-gray-800 text-center">
                {video.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Highlights Section */}
        <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          🌐 Web & Media Highlights
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-50 rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow hover:scale-[1.02] duration-300 block"
            >
              <img
                src={item.image}
                alt={item.title}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-lg font-semibold text-gray-800 text-center">
                {item.title}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecordedVideos;
