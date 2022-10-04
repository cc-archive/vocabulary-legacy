import React from 'react'

export const IconControls = ({ iconSvg, context }) => {
  const { copyValue } = context
  // state can be "idle"/"copied"/"active"
  const [state, setState] = React.useState('idle')
  // can be "svg" | "name | "download"
  const [activeType, setActiveType] = React.useState(undefined)

  function activate () {
    if (state === 'idle') {
      setState('active')
    }
  }
  function deactivate () {
    if (state === 'active') {
      setState('idle')
      setActiveType(undefined)
    }
  }

  React.useEffect(() => {
    if (state === 'copied') {
      const handler = window.setTimeout(() => {
        setState('idle')
      }, 1000)

      return () => {
        window.clearTimeout(handler)
      }
    }
  }, [state])

  React.useEffect(() => {
    function perform (action) {
      if (state === 'copied') { return }
      if (action === 'download') {
        // Create a link element
        const link = document.createElement('a')
        link.type = 'image/svg+xml'
        link.download = copyValue
        const svgBlob = new Blob([iconSvg], { type: 'image/svg+xml;charset=utf-8' })
        link.href = URL.createObjectURL(svgBlob)

        // Append link to the body
        document.body.appendChild(link)
        // Dispatch click event on the link
        // This is necessary action link.click() does not work on the latest firefox
        link.dispatchEvent(
          new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window
          })
        )
        // Remove link from body
        document.body.removeChild(link)
      } else if (action === 'copyName') {
        navigator.clipboard.writeText(copyValue)
          .then(() => console.log())
      } else {
        navigator.clipboard.writeText(iconSvg)
          .then(() => console.log())
      }
      setState('copied')
    }

    if (!activeType) { return }
    const action = { svg: 'copySvg', name: 'copyName', download: 'download' }[activeType]
    perform(action)
    const handler = window.setTimeout(() => {
      setActiveType(undefined)
    }, 2000)

    return () => {
      window.clearTimeout(handler)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeType])

  const className = 'icon-actions'
  const onCopySvgClick = () => {
    setActiveType('svg')
  }
  const onCopyNameClick = () => {
    setActiveType('name')
  }
  const onDownloadClick = () => {
    setActiveType('download')
  }

  return (
    <div className={`${className} ${state === 'active' ? 'active' : ''} sbdocs sbdocs-ig actions-container`}
      onMouseEnter={activate}
      onMouseLeave={deactivate}
      onClick={activate}
    >
      <button
        className={`${className} ${state} action-button copy-action sbdocs sbdocs-ig`}
        onClick={onCopySvgClick}
        type="button"
      >
        {activeType === 'svg' ? 'Copied!' : 'Copy svg'}
      </button>
      <button
        className={`${className} ${state} action-button copy-action sbdocs sbdocs-pb`}
        onClick={onCopyNameClick}
        type="button"
      >
        {activeType === 'name' ? 'Copied!' : 'Copy name'}
      </button>
      <button
        className={`${className} ${state} action-button download-action sbdocs sbdocs-ig`}
        onClick={onDownloadClick}
        type="button"
      >
        Download
      </button>
    </div>
  )
}
