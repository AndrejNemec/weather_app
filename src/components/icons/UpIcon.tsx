import React from 'react'
import {IconProps} from './IconProps'

const UpIcon = ({size = 16, color, className}: IconProps) => {
    return (
        <svg className={className} style={{width: size, height: size, color: color}} viewBox="0 0 5 8" fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <path
                d="M4.14647 2.8535L3 1.70703V7.49998C3 7.77636 2.77636 8 2.49999 8C2.22361 8 1.99997 7.77636 1.99997 7.49998V1.70703L0.853509 2.8535C0.658181 3.04883 0.341776 3.04883 0.146496 2.8535C-0.0488319 2.65817 -0.0488319 2.34177 0.146496 2.14648L2.1459 0.147079C2.19216 0.100672 2.24757 0.0638757 2.30911 0.0384226C2.37019 0.0131569 2.43497 -1.52588e-05 2.50004 -1.52588e-05C2.5651 -1.52588e-05 2.62988 0.0131569 2.69096 0.0384226C2.7525 0.0638757 2.80791 0.100672 2.85417 0.147079L4.85357 2.14648C5.0489 2.34181 5.0489 2.65822 4.85357 2.8535C4.6582 3.04883 4.3418 3.04883 4.14647 2.8535Z"
                fill="#AAAAAA"/>
        </svg>
    )
}

export default UpIcon