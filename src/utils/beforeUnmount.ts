export function beforeUnmount(callback: (ev: Event) => void) {
  const fn = window.onbeforeunload || function () {}
  window.onbeforeunload = function (ev: Event) {
    callback?.(ev)
    fn.call(this as any, ev)
  }
  return callback
}
