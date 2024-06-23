import React from 'react'
import type { ToastProps } from './toast'
import Alert from '../Alert/Alert.tsx'

import './toast.scss'

type ReactToastProps = {
    children: React.ReactNode
    icon?: string
} & ToastProps

const Toast = ({
    icon,
    position,
    className,
    children,
    ...rest
}: ReactToastProps) => {
    const classes = [
        'w-toast',
        position,
        className
    ].filter(Boolean).join(' ')

    return (
        <Alert {...rest} className={classes} icon={icon}>
            {children}
        </Alert>

    )
}

export default Toast
