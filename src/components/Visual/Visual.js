import React, { useEffect, useState } from 'react';
import { ScheduleNav } from '../ScheduleNav/ScheduleNav';
import style from './visual.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { Line } from 'react-chartjs-2'
import useCheckbox from '../../hooks/useCheckbox';
import { getStatistics, getCatigories, getCountries } from '../../redux/actionCreator'





export const Visual = () => {

    const dispatch = useDispatch();
    const [percentage, setpercentage] = useState(1);
    const [chart, setChart] = useState([])
    // const categories = useSelector(state => state.categories[0]);



    // const data = useSelector(state => state.scheduleData[0])
    const selectedContry = useSelector(state => state.selectedCountry)
    const contries = useSelector(state => state.contries[0])
    const dataNow = useSelector(state => state.currentData[0])
    
    const [checkboxes, setCheckboxes] = useCheckbox({ checkbox: true, checkbox2: true, checkbox3: true, checkbox4: true, checkbox5: true, checkbox6: true })
    const [schedules, setSchedules] = useState([])
    useEffect(() => {
        console.log('first');
        dispatch(getCountries())
        dispatch(getCatigories())
    }, []);
    
    useEffect(() => {
        const comparedCountry = contries?.data.filter(el => el.country === selectedContry ? el.id : null)

        // const days = data ? Object.keys(data?.data[2][3]) : null;
        console.log('второй ')
        if (comparedCountry) {
            
            // dispatch(getStatistics(a[0], days[0], days[days.length - 1]))
          dispatch(getStatistics(comparedCountry[0], '2020-09-22', '2020-10-14'))
        }
        setpercentage(80);

        if (dataNow) {
            const firstCategory = Object.values(dataNow.data['2']['2']);
            const secondCategory = Object.values(dataNow.data['2']['3']);
            const thirdCategory = Object.values(dataNow.data['25']['2']);
            const fourthCategory = Object.values(dataNow.data['25']['3']);
            const fifthCategory = Object.values(dataNow.data['134']['2']);
            const sixCategory = Object.values(dataNow.data['134']['3']);

            const datas = Object.keys(dataNow.data['2']['2']);

            setSchedules([{
                label: 'Game - Top Paid',
                data: [...firstCategory],
                color: [
                    'black'
                ],
                visible: checkboxes.checkbox,
            }, {
                label: 'Arcade - Top Grossing',
                data: [...secondCategory],
                color: [
                    'green'
                ],
                visible: checkboxes.checkbox2,
            }, {
                label: 'Game - Top Paid',
                data: [...thirdCategory],
                color: [
                    'blue'
                ],
                visible: checkboxes.checkbox3,
            }, {
                label: 'Game - Top Grossing',
                data: [...fourthCategory],
                color: [
                    'red'
                ],
                visible: checkboxes.checkbox4,
            }, {
                label: 'Arcade - Top Paid',
                data: [...fifthCategory],
                color: [
                    'yellow'
                ],
                visible: checkboxes.checkbox5,
            }, {
                label: 'Overall - Top Grossing',
                data: [...sixCategory],
                color: [
                    'grey'
                ],
                visible: checkboxes.checkbox6,
            }].filter(el => el.visible === true))

            setChart({
                labels: datas,
                datasets: schedules,
                options: {
                    responsive: false,
                }
            })
        }


    }, [selectedContry, checkboxes]);




    // [...state, ]

    return (
        <div className={style.all}>
            <ScheduleNav />
            <Line className={style.main} data={chart} options={chart.options}>
            </Line>

            <div className={style.checkboxAll}>
                <div>
                    <div className={style.checkboxOne}>
                        <input type="checkbox" name="checkbox" onChange={setCheckboxes} checked={checkboxes.checkbox} />
                        <div>Game - Top Paid</div>
                    </div>
                    <div className={style.checkboxOne}>
                        <input type="checkbox" name="checkbox2" onChange={setCheckboxes} checked={checkboxes.checkbox2} />
                        <div>Arcade - Top Grossing</div>
                    </div>
                </div>
                <div>
                    <div className={style.checkboxOne}>
                        <input type="checkbox" name="checkbox3" onChange={setCheckboxes} checked={checkboxes.checkbox3} />
                        <div>Game - Top Grossing</div>
                    </div>
                    <div className={style.checkboxOne}>
                        <input type="checkbox" name="checkbox4" onChange={setCheckboxes} checked={checkboxes.checkbox4} />
                        <div>Overall - Top Paid</div>
                    </div>
                </div>
                <div>
                    <div className={style.checkboxOne}>
                        <input type="checkbox" name="checkbox5" onChange={setCheckboxes} checked={checkboxes.checkbox5} />
                        <div>Arcade - Top Paid</div>
                    </div>
                    <div className={style.checkboxOne}>
                        <input type="checkbox" name="checkbox6" onChange={setCheckboxes} checked={checkboxes.checkbox6} />
                        <div>Overall - Top Grossing</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

