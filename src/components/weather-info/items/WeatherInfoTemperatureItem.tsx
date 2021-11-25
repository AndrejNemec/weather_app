import React from 'react'
import WeatherInfoContentRowItem from '../WeatherInfoContentRowItem'
import {WeatherInfoItemProps} from './WeatherInfoItemProps'

const WeatherInfoTemperatureItem = ({city}: WeatherInfoItemProps) => {
    const renderTitle = () => {
        const temperature = Math.round(city.data?.current.temp || 0)
        return (
            <h2>
                {temperature}
                <small>
                    °C
                </small>
            </h2>
        )
    }

    return (
        <WeatherInfoContentRowItem
            className="temperature-item"
            title={renderTitle}
        />
    )
}

export default WeatherInfoTemperatureItem
