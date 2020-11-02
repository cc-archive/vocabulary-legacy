import React from 'react'
import { IconControls } from './icon-controls'
import { IconItem } from './icon-item'
import { iconFiles } from '../../assets/svg'

const getIconSvgString = (name) => {
  console.log('name: ', name, 'iconFiles:', iconFiles)
  return iconFiles[name]
}

export const IconWrapper = ({ iconName, context }) => {
  const { getDisplayName, getCopyValue, iconClass } = context
  const displayName = getDisplayName(iconName)
  const copyValue = getCopyValue(iconName)
  const iconSvg = getIconSvgString(iconName)

  return (
    <div className="icon-wrapper sbdocs sbdocs-pb">
      <div className="icon-box sbdocs sbdocs-pb">
        <IconItem iconName={iconName} iconSvg={iconSvg} iconClass={iconClass} />
        <IconControls iconSvg={iconSvg} context={{ displayName, copyValue }} />
      </div>
      <div className="icon-name sbdocs sbdocs-pb">{displayName}</div>
    </div>
  )
}
