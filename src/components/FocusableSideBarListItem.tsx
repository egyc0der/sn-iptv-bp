import React from 'react'
import { useFocusable, FocusableComponentLayout, FocusDetails, KeyPressDetails } from "@noriginmedia/norigin-spatial-navigation";
const FocusableSideBarListItem: React.FC<{
  title: string;
  onSelect: (props: object, details: KeyPressDetails) => void;
  onFocus: (
    layout: FocusableComponentLayout,
    props: object,
    details: FocusDetails
  ) => void;
}> = ({ title, onFocus, onSelect }) => {
  const { ref, focused } = useFocusable({ onFocus, onEnterPress: onSelect,extraProps:{title} });
  return (
    <div ref={ref} className='flex items-center justify-start gap-2 min-w-max min-h-max duration-100'
      style={{ borderBottom: focused ? '5px solid aqua' : '' }}
    >
      {title}
    </div>
  )
}

export default FocusableSideBarListItem