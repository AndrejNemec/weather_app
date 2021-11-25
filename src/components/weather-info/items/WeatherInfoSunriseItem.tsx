import React from 'react'
import WeatherInfoContentRowItem from '../WeatherInfoContentRowItem'
import SunriseIcon from '../../icons/SunriseIcon'
import {unixDateUtcToTime} from '../../../utils/DateUtil'
import {WeatherInfoItemProps} from './WeatherInfoItemProps'

const WeatherInfoSunriseItem = ({city}: WeatherInfoItemProps) => {
    const sunrise = city.data?.current.sunrise ?
        unixDateUtcToTime(city.data?.current.sunrise) : ''

    const renderIcon = () => {
        return (
            <SunriseIcon size={24}/>
        )
    }

    return (
        <WeatherInfoContentRowItem
            title={sunrise}
            subtitle="Sunrise"
            renderIcon={renderIcon}
        />
    )
}

export default WeatherInfoSunriseItem
