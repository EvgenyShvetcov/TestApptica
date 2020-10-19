import { GET_COUNTRIES, GET_CATEGORIES, GET_SCHEDULE_DATA, SELECT_COUNTRY, THIS_DATA } from './actionType'

export default function reducer(state = { contries: [], categories: [], scheduleData: [], selectedCountry: '', currentData: {} }, action) {
    switch (action.type) {
        case GET_COUNTRIES:
            return { ...state, contries: [...state.contries, action.payload] }
        case GET_CATEGORIES:
            return { ...state, categories: [...state.categories, action.payload] }
        case GET_SCHEDULE_DATA:
            return { ...state, scheduleData: [...state.scheduleData, action.payload] }
        case SELECT_COUNTRY:
            return { ...state, selectedCountry: action.payload }
        case THIS_DATA:
            return { ...state, currentData: [action.payload] }
        default:
            return state;

    }
}