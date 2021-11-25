import React from 'react'
import WeatherInfoContentRowItem from '../WeatherInfoContentRowItem'
import SunsetIcon from '../../icons/SunsetIcon'
import {unixDateUtcToTime} from '../../../utils/DateUtil'
import {WeatherInfoItemProps} from './WeatherInfoItemProps'

const WeatherInfoSunsetItem = ({city}: WeatherInfoItemProps) => {
    const sunset = city.data?.current.sunset ?
        unixDateUtcToTime(city.data?.current.sunset) : ''

    const renderIcon = () => {
        return (
            <SunsetIcon size={24}/>
        )
    }

    return (
        <WeatherInfoContentRowItem
            title={sunset}
            subtitle="Sunset"
            renderIcon={renderIcon}
        />
    )
}

export default WeatherInfoSunsetItem
