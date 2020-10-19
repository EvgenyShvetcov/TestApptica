import { GET_CATEGORIES, GET_COUNTRIES, GET_SCHEDULE_DATA, SELECT_COUNTRY, THIS_DATA } from './actionType';




export const getCountries = () => {
    return async (dispatch) => {
        const resp = await fetch('https://api.apptica.com/v1/geo?B4NKGg=fVN5Q9KVOlOHDx9mOsKPAQsFBlEhBOwguLkNEDTZvKzJzT3l')
        const countries = await resp.json()
        return dispatch({
            type: GET_COUNTRIES,
            payload: countries
        })
    }
}

export const getCatigories = () => {
    return async (dispatch) => {
        const resp = await fetch('https://api.apptica.com/v1/applicationCategory?platform=1&B4NKGg=fVN5Q9KVOlOHDx9mOsKPAQsFBlEhBOwguLkNEDTZvKzJzT3l')
        const categories = await resp.json()
        return dispatch({
            type: GET_CATEGORIES,
            payload: categories
        })
    }
}


export const getScheduleData = () => {
    return async (dispatch) => {
        const resp = await fetch('https://api.apptica.com/package/top_history/9379/1?date_from=2020-09-15&date_to=2020-10-07&platforms=1&B4NKGg=fVN5Q9KVOlOHDx9mOsKPAQsFBlEhBOwguLkNEDTZvKzJzT3l')
        const scheduleData = await resp.json()
        return dispatch({
            type: GET_SCHEDULE_DATA,
            payload: scheduleData
        })
    }
}


export const selectCountry = (country) => ({
    type: SELECT_COUNTRY,
    payload: country
})


export const getStatistics = (id, startDate, finishDate) => {
    return async (dispatch) => {
        console.log(id.id);
        const resp = await fetch(`https://api.apptica.com/package/top_history/9379/${id.id}?date_from=${startDate}&date_to=${finishDate}&platforms=1&B4NKGg=fVN5Q9KVOlOHDx9mOsKPAQsFBlEhBOwguLkNEDTZvKzJzT3l`)
        const currentData = await resp.json()
        return dispatch({
            type: THIS_DATA,
            payload: currentData
        })
    }
}