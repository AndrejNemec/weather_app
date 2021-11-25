import React from 'react'
import WeatherCitySearchListItem from './WeatherCitySearchListItem'
import {WeatherCitySearchProps} from './WeatherCitySearch'

export type WeatherCitySearchListProps = Pick<WeatherCitySearchProps, 'cities' | 'onSelectCity'> & {}

const WeatherCitySearchList = ({cities, onSelectCity}: WeatherCitySearchListProps) => {
    return (
        <ul className="search-items">
            {cities.map(city => <WeatherCitySearchListItem key={city.id} city={city} onSelectCity={onSelectCity}/>)}
        </ul>
    )
}

export default WeatherCitySearchList
