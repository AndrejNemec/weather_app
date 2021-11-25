import React from 'react'
import UpIcon from '../../icons/UpIcon'
import DownIcon from '../../icons/DownIcon'
import WeatherInfoContentRowItem from '../WeatherInfoContentRowItem'
import {WeatherInfoItemProps} from './WeatherInfoItemProps'

const WeatherInfoTemperatureVariationItem = ({city}: WeatherInfoItemProps) => {
    const renderTitle = () => {
        const maxTemperature = Math.round(city.data?.daily[0]?.temp.max || 0)
        const minTemperature = Math.round(city.data?.daily[0]?.temp.min || 0)
        return (
            <>
                <small>
                    {maxTemperature}°C <UpIcon size={8}/>
                </small>
                <small>
                    {minTemperature}°C <DownIcon size={8}/>
                </small>
            </>
        )
    }

    return (
        <WeatherInfoContentRowItem
            className="temperature-variation-item"
            title={renderTitle}
        />
    )
}

export default WeatherInfoTemperatureVariationItem
