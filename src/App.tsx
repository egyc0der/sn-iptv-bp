import MainContent from "./components/MainContent"
import SideBar from "./components/SideBar"
import { init } from "@noriginmedia/norigin-spatial-navigation";
import { useState } from 'react';

const sectionsArr = () => {
  var sectionsArray = [];

  for (var i = 1; i <= 100; i++) {
    sectionsArray.push("Section" + i);
  }

  return sectionsArray;
}

const MoviesGenerator = () => {
  var moviesArr = [];

  for (var i = 1; i <= 100; i++) {
    moviesArr.push("Movie" + i);
  }

  return moviesArr;
}

function App() {

  init({
    debug: false,
    visualDebug: false
  });

  const sections = sectionsArr();
  const movies = MoviesGenerator();

  const [selectedSection, setSelectedSection] = useState<string>(sections[0]);
  console.log('selectedSection : ', selectedSection)
  return (
    <div className='w-screen h-screen bg-gradient-to-r from-indigo-950 from-10%  to-emerald-800 to-70% text-white'>
      <div className='flex items-center justify-center w-full h-full p-2'>
        <SideBar sections={sections} setSelectedSection={setSelectedSection} />
        <MainContent section={selectedSection} movies={movies} />
      </div>
    </div>
  )
}

export default App
