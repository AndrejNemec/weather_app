import moment from 'moment'

/*
  Convert unix timestamp to formatted datetime (Thursday, 18 Nov 2021  |  1:10PM)
 */
export const unixToDateTime = (unixTimestamp: number): string => {
    return moment.unix(unixTimestamp).local().format('dddd, DD MMM YYYY \xa0|\xa0 h:mmA')
}

/*
  Convert unix timestamp to formatted time (7:03 AM)
 */
export const unixDateUtcToTime = (unixTimestamp: number): string => {
    return moment.unix(unixTimestamp).local().format('h:mm A')
}

/*
  Convert unix timestamp to formatted week and day (Fr, 19)
 */
export const unixDateUtcToWeekAndDay = (unixTimestamp: number): string => {
    return moment.unix(unixTimestamp).local().format('dd, DD')
}

/*
  Format seconds to hours and minutes (1h, 8m)
 */
export const formatSecondsToHoursAndMinutes = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    return `${hours}h ${minutes}m`
}