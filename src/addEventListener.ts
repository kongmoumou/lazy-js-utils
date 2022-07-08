import { isStr } from './isStr'

export function addEventListener(target: Window | Document | Element | string, eventName: string, callback: (e: any) => void, useCapture?: boolean, autoRemove?: boolean): (() => void) {
  if (isStr(target))
    target = document.querySelector(target as string) as Element
  if (isStr(target))
    throw new Error(`${target} is not a Element`)

  const remove = () => (target as Element)?.removeEventListener(eventName, event, useCapture)

  function event(e: Event) {
    callback.call(e.target, e)
    if (autoRemove)
      remove()
  }

  (target as Element).addEventListener(eventName, event, useCapture)
  return remove
}

