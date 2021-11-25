import React from 'react'
import SunImage from './assets/img/sun.png'
import WeatherCitySearchModal from './components/weather-city-search/WeatherCitySearchModal'
import WeatherInfoModal from './components/weather-info/WeatherInfoModal'
import Loading from './components/Loading'
import {useApp} from './hooks/useApp'


function App() {
    const {
        loading,
        cities,
        currentCity,
        setCurrentCity,
        showWeatherSearchCityModal,
        setShowWeatherSearchCityModal
    } = useApp()

    const renderModal = () => {
        if (!showWeatherSearchCityModal)
            return (
                <WeatherInfoModal city={currentCity}
                                  onCityButtonClick={() => setShowWeatherSearchCityModal(true)}
                />
            )
        return (
            <WeatherCitySearchModal cities={cities}
                                    onSelectCity={setCurrentCity}
                                    onOutsideClick={(value) => value && setShowWeatherSearchCityModal(false)}
            />
        )
    }

    const renderLoading = () => {
        if (loading)
            return (<Loading/>)
    }

    return (
        <>
            <img src={SunImage} alt="Sunny" className="weather-image"/>
            {renderModal()}
            {renderLoading()}
        </>
    )
}

export default App
