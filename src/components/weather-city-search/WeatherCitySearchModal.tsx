import React from 'react'
import Modal, {ModalProps} from '../Modal'
import WeatherCitySearch, {WeatherCitySearchProps} from './WeatherCitySearch'

export type WeatherCitySearchModalProps = Pick<ModalProps, 'onOutsideClick'> & WeatherCitySearchProps & {}

const WeatherCitySearchModal = ({cities, onSelectCity, ...props}: WeatherCitySearchModalProps) => {
    return (
        <Modal zIndex={10} {...props}>
            <WeatherCitySearch cities={cities} onSelectCity={onSelectCity}/>
        </Modal>
    )
}

export default WeatherCitySearchModal
