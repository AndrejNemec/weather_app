import React from 'react'
import TextField from '../TextField'
import WeatherCitySearchList from './WeatherCitySearchList'
import MarkerIcon from '../icons/MarkerIcon'
import {useCitySearch} from '../../hooks/useCitySearch'
import {City} from '../../api/types/City'

export type WeatherCitySearchProps = {
    cities: City[],
    onSelectCity: (city: City) => void
}

const WeatherCitySearch = ({cities, onSelectCity}: WeatherCitySearchProps) => {
    const {cityResults, filterCities} = useCitySearch(cities)

    const onChangeTextField = ({target: {value: text}}: React.ChangeEvent<HTMLInputElement>) => {
        filterCities(text)
    }

    const renderTextFieldIcon = () => {
        return <MarkerIcon size={20}/>
    }

    return (
        <div className="search-container">
            <h2 className="search-title">Location</h2>
            <div className="search-input">
                <TextField onChange={onChangeTextField} label="Search city ..." renderIcon={renderTextFieldIcon}/>
            </div>
            <WeatherCitySearchList cities={cityResults} onSelectCity={onSelectCity}/>
        </div>
    )
}

export default WeatherCitySearch
