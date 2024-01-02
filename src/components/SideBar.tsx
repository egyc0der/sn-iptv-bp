import { useState } from "react";
import SideBarList from "./SideBarList";
import React from 'react';


const SideBar: React.FC<{
  sections: string[];
  setSelectedSection: (section:string) => void
}> = ({ setSelectedSection, sections }) => {

  return (

    <div className='h-full text-xl font-semibold'>
      <SideBarList sections={sections} setSelectedSection={setSelectedSection} />
    </div>

  )
}

export default SideBar