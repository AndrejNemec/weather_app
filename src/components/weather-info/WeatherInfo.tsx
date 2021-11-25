import React from 'react'
import WeatherInfoHeader from './WeatherInfoHeader'
import WeatherInfoContent from './WeatherInfoContent'
import {City} from '../../api/types/City'

export type WeatherInfoProps = {
    city: City
    onCityButtonClick: () => void
}

const WeatherInfo = ({city, onCityButtonClick}: WeatherInfoProps) => {
    return (
        <div className="weather-info-container">
            <WeatherInfoHeader
                onCityButtonClick={onCityButtonClick}
                city={city}/>
            <WeatherInfoContent city={city}/>
        </div>
    )
}

export default WeatherInfo
