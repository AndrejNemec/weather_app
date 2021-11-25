import {useEffect, useRef} from 'react'

export const useOutsideComponentClick = (onOutsideClick: (value: boolean) => void) => {
    const ref = useRef<any>(null)

    /* Registration of click-off events outside the component */
    useEffect(() => {
        window.addEventListener('click', onClickOutside, false)
        return () => {
            window.removeEventListener('click', onClickOutside, false)
        }
    }, [])

    const onClickOutside = (event: MouseEvent) => {
        if (!(event.target instanceof HTMLElement) ||
            !ref.current ||
            !ref.current.contains(event.target)) {
            onOutsideClick(true)
            return
        }
        onOutsideClick(false)
    }

    return [ref]
}