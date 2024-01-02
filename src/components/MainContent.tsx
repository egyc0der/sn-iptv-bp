import { FocusContext, useFocusable } from "@noriginmedia/norigin-spatial-navigation"
import FocusableMovieCard from "./FocusableMovieCard";
import { useRef, useCallback } from 'react'

interface MainContentProps {
  section: string;
  movies: string[];
}


const MainContent: React.FC<MainContentProps> = ({ section, movies }) => {

  const { ref, focusKey } = useFocusable({ trackChildren: true });

  const scrollingRef = useRef<any>(null);
  const handMovieFocus = useCallback((obj: any) => {
    console.log(obj.y)
    scrollingRef.current.scrollTo({
      top: obj.y,
      behavior: 'smooth'
    });
  }, [scrollingRef])
  return (
    <FocusContext.Provider value={focusKey}>
      <div ref={ref} className="flex-1  w-full h-full p-4">
        <div>{section}</div>
        <div ref={scrollingRef} className='w-full h-full flex gap-4 flex-wrap items-start justify-start overflow-hidden'>
          {movies.map((movie, id) => (<FocusableMovieCard key={id} title={movie} onFocus={handMovieFocus} />))}
        </div>

      </div>
    </FocusContext.Provider>
  )
}

export default MainContent