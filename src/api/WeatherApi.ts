import axios, {AxiosResponse} from 'axios'
import {Weather} from './types/Weather'
import config from '../config/config.json'

export const api = axios.create({
    baseURL: config.OPEN_WEATHER_API.BASE_URL,
    params: {
        appid: config.OPEN_WEATHER_API.APP_ID,
        units: 'metric'
    }
})

export const getWeatherData = async (latitude: number, longitude: number): Promise<AxiosResponse<Weather>> => {
    return await api.get<Weather>('/data/2.5/onecall', {
        params: {
            lat: latitude,
            lon: longitude
        }
    })
}