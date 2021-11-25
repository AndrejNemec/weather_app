import React from 'react'
import WeatherInfoContentRowItem, {WeatherInfoContentRowItemType} from '../WeatherInfoContentRowItem'
import CloudsIcon from '../../icons/CloudsIcon'
import {unixDateUtcToWeekAndDay} from '../../../utils/DateUtil'
import UpIcon from '../../icons/UpIcon'
import DownIcon from '../../icons/DownIcon'
import SunIcon from '../../icons/SunIcon'
import PartlyCloudySkiesIcon from '../../icons/PartlyCloudySkiesIcon'
import HazyIcon from '../../icons/HazyIcon'
import {WeatherInfoItemProps} from './WeatherInfoItemProps'

export type WeatherInfoForecastItemProps = WeatherInfoItemProps & {
    day?: number
}

const WeatherInfoForecastItem = ({city, day = 1}: WeatherInfoForecastItemProps) => {
    const dailyData = city.data?.daily[day - 1]
    const weekAndDayDate = unixDateUtcToWeekAndDay(dailyData?.dt || 0)

    const renderIcon = () => {
        const type = dailyData?.weather[0]?.main || 'Clouds'
        switch (type) {
            case 'Rain':
            case 'Drizzle':
            case 'Thunderstorm':
                return (<CloudsIcon size={40}/>)
            case 'Clear':
                return (<SunIcon size={40}/>)
            case 'Clouds':
                return (<PartlyCloudySkiesIcon size={40}/>)
            default:
                return (<HazyIcon size={40}/>)
        }
    }

    const renderMinAndMaxTemperature = () => {
        const maxTemperature = Math.round(dailyData?.temp.max || 0)
        const minTemperature = Math.round(dailyData?.temp.min || 0)
        return (
            <h3>
                <small>
                    {maxTemperature}°C <UpIcon size={8}/>
                </small>
                <small>
                    {minTemperature}°C <DownIcon size={8}/>
                </small>
            </h3>
        )
    }

    return (
        <WeatherInfoContentRowItem
            className="weather-forecast-item"
            type={WeatherInfoContentRowItemType.CARD}
            title={weekAndDayDate}
            subtitle={renderMinAndMaxTemperature}
            renderIcon={renderIcon}
        />
    )
}


export default WeatherInfoForecastItem
