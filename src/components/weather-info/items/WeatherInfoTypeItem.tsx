import React from 'react'
import WeatherInfoContentRowItem from '../WeatherInfoContentRowItem'
import CloudsIcon from '../../icons/CloudsIcon'
import SunIcon from '../../icons/SunIcon'
import HazyIcon from '../../icons/HazyIcon'
import PartlyCloudySkiesIcon from '../../icons/PartlyCloudySkiesIcon'
import {WeatherInfoItemProps} from './WeatherInfoItemProps'

const WeatherInfoTypeItem = ({city}: WeatherInfoItemProps) => {
    const type = city.data?.current.weather[0]?.main || 'Clouds'

    const renderIcon = () => {
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

    return (
        <WeatherInfoContentRowItem
            title={type}
            renderIcon={renderIcon}
        />
    )
}

export default WeatherInfoTypeItem
