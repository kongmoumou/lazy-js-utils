export const jsCookie = {
  get(cname: string) {
    const name = `${cname}=`
    const ca = document.cookie.split(';')
    for (let i = 0; i < ca.length; i++) {
      const c = ca[i].trim()
      if (c.indexOf(name) === 0)
        return c.substring(name.length, c.length)
    }
    return ''
  },
  set(cname: string, cvalue: string, exdays?: any) {
    const d = new Date()
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
    const expires = `expires=${d.toUTCString()}`
    document.cookie = `${cname}=${cvalue}; ${expires}`
  },
  remove(this: any, name: string) {
    this.set(name, '', -1)
  },
}
