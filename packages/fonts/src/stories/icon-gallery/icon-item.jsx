import React from 'react'

export const IconItem = ({ iconSvg, iconClass }) => {
  return (
    <div className={`icon sbdocs sbdocs-ig-icon ${iconClass}`} dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
