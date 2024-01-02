
import { useFocusable, FocusContext } from "@noriginmedia/norigin-spatial-navigation";
import { useEffect, useRef, useCallback } from "react";
import FocusableSideBarListItem from "./FocusableSideBarListItem";





const SideBarList: React.FC<{
  sections: string[];
  setSelectedSection: (section: string) => void
}> = ({ setSelectedSection, sections }) => {

  const onSectionSelect = ({ title }: { title: string }) => { setSelectedSection(title) }
  const { ref, focusSelf, focusKey, hasFocusedChild } = useFocusable({ trackChildren: true });
  useEffect(() => { focusSelf() }, [focusSelf])
  const scrollingRef = useRef<any>();
  const onSectionFocus = useCallback(({ y }: { y: number; }) => {
    scrollingRef?.current?.scrollTo({
      top: y,
      behavior: 'smooth'
    })
  }, [scrollingRef])
  return (
    <FocusContext.Provider value={focusKey}>
      <div ref={ref} className="h-full py-12 ">
        <div ref={scrollingRef} className=" flex-1 h-full flex flex-col items-center gap-8 duration-100 overflow-hidden"
          style={{ width: hasFocusedChild ? '200px' : '0px' }}>
          {
            sections.map((title, id) => (<FocusableSideBarListItem key={id} title={title} onFocus={onSectionFocus} onSelect={onSectionSelect} />))
          }
        </div>
      </div>
    </FocusContext.Provider>
  )
}

export default SideBarList