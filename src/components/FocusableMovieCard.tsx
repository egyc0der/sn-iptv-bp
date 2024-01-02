import React from 'react'
import { useFocusable, FocusableComponentLayout, FocusDetails } from "@noriginmedia/norigin-spatial-navigation"



const FocusableMovieCard: React.FC<
  {
    title: string;
    onFocus: (
      layout: FocusableComponentLayout,
      props: object,
      details: FocusDetails) => void
  }> = ({ title, onFocus }) => {
    const { ref, focused } = useFocusable({ onFocus });
    return (
      <div ref={ref} className="w-48 h-[290px] rounded-lg bg-slate-500 flex flex-col items-center justify-center overflow-hidden duration-100"
        style={{ border: focused ? '3px solid aqua' : '' }}
      >
        <div className='flex-[9] w-full flex items-center justify-center'>Img Container</div>
        <div className='flex-1 bg-slate-600 w-full text-center'>{title}</div>
      </div>
    )
  }

export default FocusableMovieCard