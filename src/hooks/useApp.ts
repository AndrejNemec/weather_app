import {useEffect, useState} from 'react'
import {City} from '../api/types/City'
import {Weather} from '../api/types/Weather'
import {getWeatherData} from '../api/WeatherApi'
import cityData from '../config/citites.json'
import {AxiosResponse} from 'axios'

export const useApp = () => {
    const [loading, setLoading] = useState(true)
    const [showWeatherSearchCityModal, setShowWeatherSearchCityModal] = useState<boolean>(false)
    const [cities, setCities] = useState<City[]>(cityData)
    const [city, setCity] = useState<City | undefined>()

    /* Load cities */
    useEffect(() => {
        loadCitiesData()
    }, [])

    /* Update current city */
    useEffect(() => {
        updateCurrentCity()
    }, [cities])

    const setCurrentCity = (city: City) => {
        //Set temporary data until load
        setCity(cities.find(item => item.id === city.id))
        //Close search modal
        setShowWeatherSearchCityModal(false)
        //Load new data
        loadCurrentCityData()
    }

    const loadCitiesData = () => {
        if (cities.length > 0) setCity(cities[0])
        setLoading(true)
        Promise.all(
            cities.map(
                async ({location: {latitude, longitude}}: City) => await getWeatherData(latitude, longitude))
        )
            .then((results: AxiosResponse<Weather>[]) => {
                updateCitiesData(results.map(item => item.data))
            })
            .finally(() => setLoading(false))
    }


    const loadCurrentCityData = () => {
        if (!city) return
        setLoading(true)
        getWeatherData(
            city.location.latitude,
            city.location.longitude
        )
            .then(({data}: AxiosResponse<Weather>) => {
                updateCurrentCityData(data)
            })
            .finally(() => setLoading(false))
    }

    const updateCurrentCityData = (data: Weather) => {
        if (!city) return
        const currentCityId = city.id
        const updatedCities = cities.map((item) => {
            if (item.id === currentCityId)
                return {...item, data}
            return item
        })
        setCities(updatedCities)
    }

    const updateCitiesData = (data: Weather[]) => {
        const updatedCities = cities.map((item, index) => {
            return {...item, data: data[index]}
        })
        setCities(updatedCities)
    }

    const updateCurrentCity = () => {
        if (!city) return
        const currentCityId = city.id
        setCity(cities.find(item => item.id === currentCityId))
    }

    return {
        loading,
        cities,
        currentCity: city,
        setCurrentCity,
        showWeatherSearchCityModal,
        setShowWeatherSearchCityModal
    }
}