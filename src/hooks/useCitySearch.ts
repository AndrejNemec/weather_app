import {useEffect, useState} from 'react'
import {City} from '../api/types/City'
import {normalizeText} from '../utils/StringUtil'

export const useCitySearch = (cities: City[]) => {
    const [cityResults, setCityResults] = useState<City[]>(cities)

    useEffect(() => {
        setCityResults(cities)
    }, [cities])

    const filterCities = (text: string) => {
        const normalizedTextFieldValue = normalizeText(text) || ''
        setCityResults(cities.filter(item => {
            const normalizedCityName = normalizeText(item.name) || ''
            return normalizedCityName.toLowerCase().includes(normalizedTextFieldValue.toLowerCase())
        }))
    }

    return {cityResults, filterCities}
}