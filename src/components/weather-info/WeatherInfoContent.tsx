import React from 'react'
import WeatherInfoContentRow from './WeatherInfoContentRow'
import WeatherInfoTypeItem from './items/WeatherInfoTypeItem'
import WeatherInfoTemperatureItem from './items/WeatherInfoTemperatureItem'
import WeatherInfoTemperatureVariationItem from './items/WeatherInfoTemperatureVariationItem'
import WeatherInfoHumidityItem from './items/WeatherInfoHumidityItem'
import WeatherInfoWindItem from './items/WeatherInfoWindItem'
import WeatherInfoPressureItem from './items/WeatherInfoPressureItem'
import WeatherInfoSunriseItem from './items/WeatherInfoSunriseItem'
import WeatherInfoSunsetItem from './items/WeatherInfoSunsetItem'
import WeatherInfoDaytimeItem from './items/WeatherInfoDaytimeItem'
import WeatherInfoForecastItem from './items/WeatherInfoForecastItem'
import {WeatherInfoProps} from './WeatherInfo'

export type WeatherInfoContentProps = Pick<WeatherInfoProps, 'city'> & {}

const WeatherInfoContent = ({city}: WeatherInfoContentProps) => {
    return (
        <div className="content">
            {/* First row */}
            <WeatherInfoContentRow>
                <WeatherInfoTypeItem city={city}/>
                <WeatherInfoTemperatureItem city={city}/>
                <WeatherInfoTemperatureVariationItem city={city}/>
            </WeatherInfoContentRow>

            {/* Second row */}
            <WeatherInfoContentRow>
                <WeatherInfoHumidityItem city={city}/>
                <WeatherInfoPressureItem city={city}/>
                <WeatherInfoWindItem city={city}/>
            </WeatherInfoContentRow>

            {/* Third row */}
            <WeatherInfoContentRow>
                <WeatherInfoSunriseItem city={city}/>
                <WeatherInfoSunsetItem city={city}/>
                <WeatherInfoDaytimeItem city={city}/>
            </WeatherInfoContentRow>

            {/* Fourth row */}
            <WeatherInfoContentRow>
                <WeatherInfoForecastItem day={2} city={city}/>
                <WeatherInfoForecastItem day={3} city={city}/>
                <WeatherInfoForecastItem day={4} city={city}/>
            </WeatherInfoContentRow>
        </div>
    )
}

export default WeatherInfoContent
