import React from 'react'
import MarkerIcon from '../icons/MarkerIcon'
import {unixToDateTime} from '../../utils/DateUtil'
import {WeatherInfoProps} from './WeatherInfo'

export type WeatherInfoHeaderProps = Pick<WeatherInfoProps, 'city' | 'onCityButtonClick'> & {}

const WeatherInfoModalHeader = ({city, onCityButtonClick}: WeatherInfoHeaderProps) => {
    const date = unixToDateTime(city.data?.current.dt || new Date().getTime() / 1000)
    return (
        <div className="header">
            { /* City last update datetime */}
            <h2 className="item update-date">
                {date}
            </h2>
            {/* City formatted name  */}
            <button className="item select-city-button" onClick={() => onCityButtonClick()}>
                {`${city.name}, ${city.country}`}
                <MarkerIcon size={16} className="icon"/>
            </button>
        </div>
    )
}

export default WeatherInfoModalHeader
