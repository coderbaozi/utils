export const TimeUnit = {
  second: 1e3,
  minute: 60 * 1e3,
  hour: 3600 * 1e3,
  day: 24 * 3600 * 1e3,
  month: 30 * 24 * 3600 * 1e3,
  year: 12 * 30 * 24 * 3600 * 1e3
} as const

export const TIMEMACHINE_MAP:Record<number,any> = {
  [TimeUnit.second]: (diff:number) => {
    return `${Math.floor(diff / TimeUnit.second)} seconds ago`
  },
  [TimeUnit.minute]: (diff:number) => {
    return `${Math.floor(diff / TimeUnit.minute)} minutes ago`
  },
  [TimeUnit.hour]: (diff:number) => {
    return `${Math.floor(diff / TimeUnit.hour)} hours ago`
  },
  [TimeUnit.day]: (diff:number) => {
    return `${Math.floor(diff / TimeUnit.day)} days ago`
  },
  [TimeUnit.month]: (diff:number) => {
    return `${Math.floor(diff / TimeUnit.month)} months ago`
  },
  [TimeUnit.year]: (diff:number) => {
    return `${Math.floor(diff / TimeUnit.year)} years ago`
  },
}

