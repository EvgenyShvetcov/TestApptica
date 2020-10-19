import React from 'react';
import { Visual } from '../Visual/Visual';
import style from './main.module.css'

export const Main = () => {
    return (
        <div className={style.container}>
            <h1 className={style.h1}>Check the app highlights</h1>
            <Visual />
        </div>
    );
}

