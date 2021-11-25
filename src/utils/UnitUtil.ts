/*
  Convert m/s to km/h
 */
export const metresPerSecondToKilometersPerHour = (metres: number): number => {
    return Math.round((metres / 1000) * 3600)
}