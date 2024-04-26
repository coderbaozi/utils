import { TIMEMACHINE_MAP, TimeUnit } from "./constants";

/**
 * The method to calculate time such as 
 * just recently、 a few seconds ago、The next few days
 * This is a romantic thing, named a time machine
 * @param {Date| string} date 
 * @param {'en'|'zh'} [lang='zh'] - default value is 'zh'
 * @returns {string}
 */
export const timeMachine = (date: Date | string, lang: 'zh' | 'en' = 'zh') => {
  const now = Date.now();
  const target = date instanceof Date ? date.getTime() : new Date(date).getTime();
  const diff = now - target;
  if(Number.isNaN(diff)) throw new Error('date is invalid');
  if(diff< 5 * TimeUnit.second) {
    return TIMEMACHINE_MAP[TimeUnit.second](diff)
  }
  if(diff < 60 * TimeUnit.minute) {
    return TIMEMACHINE_MAP[TimeUnit.minute](diff)
  }
  if(diff < 24 * TimeUnit.hour) {
    return TIMEMACHINE_MAP[TimeUnit.hour](diff)
  }
  if(diff < 30 * TimeUnit.day) {
    return TIMEMACHINE_MAP[TimeUnit.day](diff)
  }
  if(diff < 12 * TimeUnit.month) {
    return TIMEMACHINE_MAP[TimeUnit.month](diff)
  }
  return TIMEMACHINE_MAP[TimeUnit.year](diff)
}
