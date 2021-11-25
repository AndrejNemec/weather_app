/*
  Remove diacritics from string
  More info: https://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript
 */
export const normalizeText = (str?: string): string | undefined => {
    if (!str) return
    return str.normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
}

/*
  Format number (1000 = 1,000)
  More info: https://stackoverflow.com/questions/5731193/how-to-format-numbers
 */
export const formatStringNumber = (num: number): string => {
    return num.toString().replace(/(.)(?=(\d{3})+$)/g, '$1,')
}