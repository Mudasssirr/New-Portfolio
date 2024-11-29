import '../App.css';
import Navbar from '../components/navbar';
import MainText from '../components/mainText';
import MiddleImage from '../components/middleImage';
import Projects from '../components/projects';
import About from '../components/about';
import Skills from '../components/skills';

function MainPage() {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <MainText />
          <MiddleImage />
          <Projects />
          <About />
          <Skills />
        </div>
      </div>
    </>
  );
}

export default MainPage;