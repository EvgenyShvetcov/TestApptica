import React, { useState, useEffect } from 'react';
import style from './nav.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { selectCountry } from '../../redux/actionCreator'
import { getCatigories, getCountries, getScheduleData } from '../../redux/actionCreator';


export const ScheduleNav = () => {
    const contries = useSelector(state => state.contries[0])
   
    const dispatch = useDispatch();
    

    return (
        <div className={style.all}>
            <div className={style.h1}>Top History</div>
            <div className={style.right}>
                <button className={style.btn}>PNG</button>
                <button className={style.btn}>CSV</button>
            </div>
            <div className={style.selector}>
                <div>Country:</div>
                <select placeholder={'Choose ur country'} className={style.slct} onChange={e => dispatch(selectCountry(e.target.value))}>
                    {contries && contries.data.map((el) => <option style={{ backgroundImage: `url(${el.icon})` }} key={el.country} id={el.id}>
                        {el.country}</option>)}
                </select>
            </div>
        </div>
    );
}

