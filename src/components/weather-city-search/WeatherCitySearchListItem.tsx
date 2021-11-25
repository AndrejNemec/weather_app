import React from 'react'
import {City} from '../../api/types/City'
import {WeatherCitySearchListProps} from './WeatherCitySearchList'

export type WeatherCitySearchListItemProps = Pick<WeatherCitySearchListProps, 'onSelectCity'> & {
    city: City,
}

const WeatherCitySearchListItem = ({city, onSelectCity}: WeatherCitySearchListItemProps) => {
    const onClick = () => {
        onSelectCity(city)
    }

    return (
        <li className="search-item">
            <button onClick={onClick}>
                {city.name}
                <small>{Math.round(city.data?.current.temp || 0)}°C</small>
            </button>
        </li>
    )
}

export default WeatherCitySearchListItem
