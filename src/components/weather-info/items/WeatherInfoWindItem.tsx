import React from 'react'
import WeatherInfoContentRowItem from '../WeatherInfoContentRowItem'
import WindIcon from '../../icons/WindIcon'
import {metresPerSecondToKilometersPerHour} from '../../../utils/UnitUtil'
import {WeatherInfoItemProps} from './WeatherInfoItemProps'

const WeatherInfoWindItem = ({city}: WeatherInfoItemProps) => {
    const wind = `${metresPerSecondToKilometersPerHour(city.data?.current.wind_speed || 0)} km/h`

    const renderIcon = () => {
        return (
            <WindIcon size={24}/>
        )
    }

    return (
        <WeatherInfoContentRowItem
            title={wind}
            subtitle="Wind"
            renderIcon={renderIcon}
        />
    )
}

export default WeatherInfoWindItem
