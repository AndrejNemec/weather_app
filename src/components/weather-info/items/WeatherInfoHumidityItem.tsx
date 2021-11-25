import React from 'react'
import WeatherInfoContentRowItem from '../WeatherInfoContentRowItem'
import HumidityIcon from '../../icons/HumidityIcon'
import {WeatherInfoItemProps} from './WeatherInfoItemProps'

const WeatherInfoHumidityItem = ({city}: WeatherInfoItemProps) => {
    const humidity = `${city.data?.current.humidity}%`

    const renderIcon = () => {
        return (
            <HumidityIcon size={24}/>
        )
    }

    return (
        <WeatherInfoContentRowItem
            title={humidity}
            subtitle="Humidity"
            renderIcon={renderIcon}
        />
    )
}

export default WeatherInfoHumidityItem
