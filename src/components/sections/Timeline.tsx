import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle, X, ZoomIn, ZoomOut, ChevronLeft, ChevronRight } from 'lucide-react';
import TopSection from '../TopSection';

const phases = [
  {
    title: 'Kick off Meeting',
    date: '27th February 2025',
    description:
      'Initial team introductions, overview of AI Caravan objectives, alignment on roles and responsibilities',
    items: [
      {
        title: 'The Knowledge Hub Universities (TKH)',
        images: [
          '/imgs/agenda/01 TKH Agenda.png', '/imgs/agenda/TKH03.jpg',
          '/imgs/agenda/TKH00.jpg',
        ],
      },
    ],
  },
  {
    title: 'Preparation Phase',
    date: 'March-April 2025',
    description:
      'Initial assessments and group formation, resource distribution and platform setup',
    items: [
      {
        title: 'IEEE Computer Society',
        images: ['/imgs/agenda/Preparation.jpg', '/imgs/agenda/Preparation.jpg'],
      },
    ],
  },
  {
    title: 'Launch Event',
    date: '29th April 2025',
    description: 'Caravan launch and participant onboarding',
    items: [
      {
        title: 'Launch Event',
        images: ['/imgs/agenda/02 FDC Agenda.png','/imgs/agenda/d3.png','/imgs/agenda/d4.png','/imgs/agenda/d5.png',  '/imgs/agenda/d0.png'],
        description: 'FDC Summit',
      },
    ],
  },
  {
    title: 'Training Phase',
    date: 'May-August 2025',
    description:
      'Intensive AI fundamentals workshop, Specialized track training, Hands-on projects and assignments',
    items: [
      { date: 'Thursday, May 08th, 2025', title: 'Training Session 1', images: ['/imgs/agenda/03 NAID Agenda.png', '/imgs/agenda/n3.png', '/imgs/agenda/n0.png'], description: '8th May 2025 - NAID' },
      { date: 'Thursday, May 15th, 2025', title: 'Training Session 2', images: ['/imgs/agenda/04 AUC Agenda.png', '/imgs/agenda/u5.jpg','/imgs/agenda/u0.jpg', '/imgs/agenda/u1.jpg'], description: '15th May 2025 - American University in Cairo' },
      { date: 'Thursday, May 22th, 2025', title: 'Training Session 3', images: ['/imgs/agenda/05 GUC Agenda.png', '/imgs/agenda/g2.jpg', '/imgs/agenda/g1.jpg'], description: '22nd May 2025 - German University in Cairo' },
      { date: 'Thursday, May 29th, 2025', title: 'Training Session 4', images: ['/imgs/agenda/06 NU Agenda.png', '/imgs/agenda/nu01.jfif', '/imgs/agenda/nu11.jfif', '/imgs/agenda/nu00.jfif'], description: '29th May 2025 - Nile University' },
      { date: 'Thursday, June 19th, 2025', title: 'Training Session 5', images: ['/imgs/agenda/07 CS Agenda.png', '/imgs/agenda/cs02.png', '/imgs/agenda/cs04.png', '/imgs/agenda/cs13.png'], description: '19th June 2025 - IEEE Computer Society' },
      { date: 'Thursday, July 10th, 2025', title: 'Training Session 6', images: ['/imgs/agenda/08 SUT Agenda.png', '/imgs/agenda/sut01.jfif', '/imgs/agenda/sut00.jfif'], description: '10th July 2025 - Elsewedy University of Technology' },
      { date: 'Thursday, July 17th, 2025', title: 'Training Session 7', images: ['/imgs/agenda/09 Arab Academy Agenda.png', '/imgs/agenda/AAST01.jpg', '/imgs/agenda/AAST17.jpg'], description: '17th July 2025 - Arab Academy for Science, Technology & Maritime Transport' },
      { date: 'Thursday, July 31th, 2025', title: 'Training Session 8', images: ['/imgs/agenda/10 EUI Agenda.png', '/imgs/agenda/e8.jpg', '/imgs/agenda/e0.jpg'], description: '31st July 2025 - Egyptian University of Informatics' },
      { date: 'Thursday, August 14th, 2025', title: 'Training Session 9', images: ['/imgs/agenda/11 AUC Agenda.png', '/imgs/agenda/j7.jpg', '/imgs/agenda/j1.jpg'], description: '14th August 2025 - American University in Cairo' },
      { date: 'Saturday, August 16th, 2025', title: 'Training Session 10', images: ['/imgs/agenda/12 AUC Agenda.png', '/imgs/agenda/j2.jpg', '/imgs/agenda/j0.jpg'], description: '16th August 2025 - American University in Cairo' },
      { date: 'Monday, August 18th, 2025', title: 'Training Session 11', images: ['/imgs/agenda/13 CS Agenda.png', '/imgs/agenda/ee0.jpg'], description: '18th August 2025 - IEEE Computer Society' },
      { date: 'Wednesday, August 20th, 2025', title: 'Training Session 12', images: ['/imgs/agenda/14 CS Agenda.png', '/imgs/agenda/ee7.jpg'], description: '20th August 2025 - IEEE Computer Society' },
      { date: 'Thursday, August 21st, 2025', title: 'Training Session 13', images: ['/imgs/agenda/15 NU Agenda.png', '/imgs/agenda/nn0.jpg'], description: '21st August 2025 - Nile University' },
      { date: 'Saturday, August 23rd, 2025', title: 'Training Session 14', images: ['/imgs/agenda/16 NU Agenda.png', '/imgs/agenda/nn1.jpg'], description: '22nd August 2025 - Nile University' },
    ],
  },
  {
    title: 'Practical Application',
    date: 'September-November 2025',
    description:
      'Project development and implementation, GenZ Juniors competition, Industry collaboration workshops',
    items: [
      {
        title: 'Practical Application',
        images: ['/imgs/agenda/sep-nov.jpg', '/imgs/agenda/sep-nov.jpg'],
        description: 'Government and Industry collaboration R&D',
      },
    ],
  },
  {
    title: 'AI Summit & Closure',
    date: '11-13 December 2025',
    description:
      'International conference, project showcase and competitions, Awards ceremony and networking event',
    items: [
      {
        title: 'AI Summit & Closure',
        images: ['/imgs/agenda/Day 1.png', '/imgs/agenda/Day 2.png', '/imgs/agenda/Day 3.png'],
        description: 'Harnessing AI for Sustainable Economic Growth',
      },
    ],
  },
];

const Timeline = () => {
  const [modalImages, setModalImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [showArrows, setShowArrows] = useState(false);

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.2, 3));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.2, 0.5));

  const openModal = (images: string[], index: number = 0) => {
    setModalImages(images);
    setCurrentIndex(index);
    setZoom(1);
    setShowArrows(index === 0 && images.length > 1);
  };

  const closeModal = () => {
    setModalImages([]);
    setCurrentIndex(0);
    setShowArrows(false);
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? modalImages.length - 1 : prev - 1));
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === modalImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <TopSection
        title="AI Caravan Timeline"
        subtitle="A comprehensive journey from learning to practical implementation throughout 2025."
      />
      <motion.section
        id="agenda"
        className="py-20 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#f9a31a] hidden md:block"></div>
            <div className="space-y-12">
              {phases.map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div
                    className={`flex flex-col md:flex-row gap-8 ${
                      index % 2 === 0 ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    <div className="flex-1 md:w-1/2"></div>
                    <div className="relative flex items-center justify-center">
                      <div className="h-12 w-12 rounded-full bg-[#f9a31a] flex items-center justify-center">
                        <Calendar className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1 md:w-1/2">
                      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{phase.title}</h3>
                        <p className="text-[#f9a31a] font-semibold mb-2">{phase.date}</p>

                        {phase.description && (
                          <ul className="space-y-3 mb-4">
                            <li className="flex items-start">
                              <CheckCircle className="w-5 h-5 text-[#f9a31a] mt-1 mr-3 flex-shrink-0" />
                              <span className="text-gray-700">{phase.description}</span>
                            </li>
                          </ul>
                        )}

                        {phase.items.map((item: any, i) => (
                          <div key={i} className="mb-4">
                            {item.images?.[0] && (
                              <div
                                className="mb-2 rounded-lg w-full overflow-hidden cursor-pointer hover:opacity-90 relative"
                                style={{ height: '150px' }}
                                onClick={() => openModal(item.images, 0)}
                              >
                                <img
                                  src={item.images[0]}
                                  alt={`${item.title || phase.title} Agenda`}
                                  className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center text-white font-semibold text-sm">
                                  Click to expand
                                </div>
                              </div>
                            )}
                            <p className="text-gray-600 font-semibold italic">{item.description || item.title}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Modal */}
      {modalImages.length > 0 && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 overflow-auto"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl w-full flex flex-col items-center">
            <button
              className="absolute top-2 right-2 text-white p-2 rounded-full hover:bg-gray-700 z-10"
              onClick={closeModal}
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex justify-end mb-2 space-x-2 z-10">
              <button
                className="bg-white p-2 rounded hover:bg-gray-200"
                onClick={(e) => {
                  e.stopPropagation();
                  handleZoomIn();
                }}
              >
                <ZoomIn className="w-5 h-5" />
              </button>
              <button
                className="bg-white p-2 rounded hover:bg-gray-200"
                onClick={(e) => {
                  e.stopPropagation();
                  handleZoomOut();
                }}
              >
                <ZoomOut className="w-5 h-5" />
              </button>
            </div>

            <div className="relative overflow-auto max-h-screen flex items-center justify-center w-full">
              <img
                src={modalImages[currentIndex]}
                alt="Expanded Agenda"
                className="rounded-lg shadow-lg object-contain"
                style={{ transform: `scale(${zoom})`, transition: 'transform 0.2s' }}
                onClick={(e) => e.stopPropagation()}
              />

              {showArrows && modalImages.length > 1 && (
                <>
                  <button
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-40 p-2 rounded-full hover:bg-opacity-70"
                    onClick={showPrev}
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-40 p-2 rounded-full hover:bg-opacity-70"
                    onClick={showNext}
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Timeline;
