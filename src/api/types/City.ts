import {Weather} from './Weather'

export type Location = {
    latitude: number
    longitude: number
}

export type City = {
    id: number
    name: string
    country: string
    location: Location
    data?: Weather
}