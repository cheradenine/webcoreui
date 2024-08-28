import React from 'react'
import type { ReactSheetProps } from './sheet'

import Modal from '../Modal/Modal.tsx'

import styles from './sheet.module.scss'
import { classNames } from '../../utils/classNames'

const Sheet = ({
    position,
    className,
    children,
    ...rest
}: ReactSheetProps) => {
    const classes = classNames([
        styles.sheet,
        position && styles[position],
        className
    ])

    return (
        <Modal
            className={classes}
            {...rest}
        >
            {children}
        </Modal>

    )
}

export default Sheet