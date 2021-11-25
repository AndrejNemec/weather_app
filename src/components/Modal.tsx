import React, {PropsWithChildren} from 'react'
import {useOutsideComponentClick} from '../hooks/useOutsideComponentClick'

export type ModalProps = {
    className?: string
    zIndex?: number
    top?: number,
    onOutsideClick?: (value: boolean) => void
}

const Modal = ({
                   children,
                   className,
                   zIndex = 10,
                   top = 29,
                   onOutsideClick
               }: PropsWithChildren<ModalProps>) => {
    const [outsideModalClickRef] = useOutsideComponentClick((value: boolean) => {
        if (onOutsideClick)
            onOutsideClick(value)
    })
    return (
        <div ref={outsideModalClickRef}
             className={`modal ${className || ''}`}
             style={{
                 minHeight: `calc(100% - ${top}px)`,
                 marginTop: top,
                 zIndex
             }}>
            {children}
        </div>
    )
}

export default Modal
