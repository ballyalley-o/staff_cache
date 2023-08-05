import React from 'react'
import { useState } from 'react'
// styles
import {
  StyledWrapperDiv,
  StyledExpandableWrapperDiv,
  StyledExpandableDiv,
  ExpandableCursor,
  ExpandableChildren,
} from '../theme'
// assets
import { GoChevronDown, GoChevronLeft } from 'react-icons/go'

export default function ExpandablePanel({ header, children }) {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleExpand = () => {
    setIsExpanded(!isExpanded)
  }
  return (
    <div className={StyledExpandableDiv}>
      <div className={StyledExpandableWrapperDiv}>
        <div className={StyledWrapperDiv}>{header}</div>
        <div onClick={handleExpand} className={ExpandableCursor}>
          {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
        </div>
      </div>
      {isExpanded && <div className={ExpandableChildren}>{children}</div>}
    </div>
  )
}
