import React, {InputHTMLAttributes, ReactNode} from 'react'

export type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
    label: string
    renderIcon?: () => ReactNode
}

const TextField = ({label, renderIcon, ...props}: TextFieldProps) => {
    return (
        <div className="text-field-container">
            <input {...props} className="text-field" placeholder={label}/>
            {
                renderIcon &&
                <div className="icon">
                    {renderIcon()}
                </div>
            }
        </div>
    )
}

export default TextField
