import React, {PropsWithChildren} from 'react'

export type WeatherInfoContentRowProps = {
    className?: string
}

const WeatherInfoContentRow = ({children, className = ''}: PropsWithChildren<WeatherInfoContentRowProps>) => {
    return (
        <ul className={`row ${className}`}>
            {children}
        </ul>
    )
}

export default WeatherInfoContentRow
