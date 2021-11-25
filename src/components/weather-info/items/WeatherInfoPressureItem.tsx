import React from 'react'
import WeatherInfoContentRowItem from '../WeatherInfoContentRowItem'
import PressureIcon from '../../icons/PressureIcon'
import {formatStringNumber} from '../../../utils/StringUtil'
import {WeatherInfoItemProps} from './WeatherInfoItemProps'

const WeatherInfoPressureItem = ({city}: WeatherInfoItemProps) => {
    const pressure = `${formatStringNumber(city.data?.current.pressure || 0)}mBar`

    const renderIcon = () => {
        return (
            <PressureIcon size={24}/>
        )
    }

    return (
        <WeatherInfoContentRowItem
            title={pressure}
            subtitle="Pressure"
            renderIcon={renderIcon}
        />
    )
}

export default WeatherInfoPressureItem
