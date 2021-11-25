export type Weather = {
    lat: number
    lon: number
    current: Current
    daily: Daily[]
}

type WeatherInfo = {
    main: string
}

type Daily = Omit<Current, 'temp'> & {
    temp: DailyTemp
}

type Current = {
    dt: number
    sunrise: number
    sunset: number
    temp: number
    pressure: number
    humidity: number
    wind_speed: number
    weather: WeatherInfo[]
}

type DailyTemp = {
    day: number
    min: number
    max: number
}

