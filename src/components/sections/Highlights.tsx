// components/Highlights.jsx
import TopSection from '../TopSection';
import RecordedVideos from '../RecordedVideos';

const Highlights = () => {
  return (
    <>
      <TopSection
        title="Event Highlights"
        subtitle="Watch recordings from our AI Caravan sessions featuring expert talks, workshops, and panel discussions."
      />
      <RecordedVideos />
    </>
  );
};

export default Highlights;