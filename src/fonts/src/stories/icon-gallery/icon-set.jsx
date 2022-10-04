import React from 'react'
import { IconWrapper } from './icon-wrapper'

const defaultDisplayNameGetter = (iconName) => iconName
const defaultCopyValueGetter = (iconName) => `${iconName}.svg`

export function IconSet ({
  icons,
  getDisplayName = defaultDisplayNameGetter,
  getCopyValue = defaultCopyValueGetter,
  iconClass = ''
}) {
  const context = {
    getDisplayName,
    getCopyValue,
    iconClass
  }
  return (
    <div className="icon-set sbdocs sbdocs-pb">
      { icons && icons.map((icon) => (
        <IconWrapper key={icon} iconName={icon} context={context}/>
      ))
      }
    </div>
  )
}
