import React, {ReactNode} from 'react'

export enum WeatherInfoContentRowItemType {
    PLAIN = '',
    CARD = 'card'
}

export type WeatherInfoContentRowItemProps = {
    type?: WeatherInfoContentRowItemType,
    className?: string,
    renderIcon?: () => ReactNode
    title: string | (() => ReactNode)
    subtitle?: string | (() => ReactNode)
}

const WeatherInfoContentRowItem = ({
                                       type = WeatherInfoContentRowItemType.PLAIN,
                                       className = '',
                                       renderIcon,
                                       title,
                                       subtitle
                                   }: WeatherInfoContentRowItemProps) => {

    const renderTitle = () => {
        if (typeof title === 'string')
            return (<h2>{title}</h2>)
        return title()
    }

    const renderSubtitle = () => {
        if (!subtitle) return null
        if (typeof subtitle === 'string')
            return (<h3>{subtitle}</h3>)
        return subtitle()
    }

    return (
        <li className={`col ${type} ${className}`}>
            {renderIcon && renderIcon()}
            {renderTitle()}
            {renderSubtitle()}
        </li>
    )
}

export default WeatherInfoContentRowItem
