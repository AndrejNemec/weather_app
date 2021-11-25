import React from 'react'
import Modal from '../Modal'
import WeatherInfo, {WeatherInfoProps} from './WeatherInfo'
import {City} from '../../api/types/City'
import WeatherInfoNotAvailable from './WeatherInfoNotAvailable'

export type WeatherInfoModalProps = Omit<WeatherInfoProps, 'city'> & {
    city?: City
}

const WeatherInfoModal = ({city, onCityButtonClick}: WeatherInfoModalProps) => {
    return (
        <Modal top={279}>
            {city ? <WeatherInfo city={city} onCityButtonClick={onCityButtonClick}/> : <WeatherInfoNotAvailable/>}
        </Modal>
    )
}

export default WeatherInfoModal
