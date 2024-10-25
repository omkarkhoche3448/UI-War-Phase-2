import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeroSection from './HeroSection';
import Navbar from "./Navbar";
import TechCells from "./TechCells";
import StatisticsSection from "./StatisticsSection";
import Footer from "./Footer";
import UpcomingEvents from "./UpcomingEvents";
import SpeakerSuggestionForm from  "./SpeakerSuggestionForm";
import TeamSection from "./TeamSection";
import TestimonialSwiper from "./TestimonialSwiper"

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          {/* Home Route */}
          <Route path="/" element={
            <>
              <HeroSection />
              <TechCells />
              <StatisticsSection />
              <TeamSection />
              <TestimonialSwiper/>
              
              
             
            </>
          } />

          {/* Events Route */}
          <Route path="/events" element={<UpcomingEvents />} />
          <Route path="/organize-talk" element={ <SpeakerSuggestionForm />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
