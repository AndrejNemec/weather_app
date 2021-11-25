import React from 'react'
import WeatherInfoContentRowItem from '../WeatherInfoContentRowItem'
import SandClockIcon from '../../icons/SandClockIcon'
import {formatSecondsToHoursAndMinutes} from '../../../utils/DateUtil'
import {WeatherInfoItemProps} from './WeatherInfoItemProps'

const WeatherInfoDaytimeItem = ({city}: WeatherInfoItemProps) => {
    const sunrise = city.data?.current.sunrise || 0
    const sunset = city.data?.current.sunset || 0
    const seconds = sunset - sunrise
    const daytime = formatSecondsToHoursAndMinutes(seconds)

    const renderIcon = () => {
        return (
            <SandClockIcon size={24}/>
        )
    }

    return (
        <WeatherInfoContentRowItem
            title={daytime}
            subtitle="Daytime"
            renderIcon={renderIcon}
        />
    )
}


export default WeatherInfoDaytimeItem
