import { dates } from './modules'
import moment from 'moment'

export const initialState = {
    page: 0,
    today: moment().startOf('day').valueOf(),
    dates,
    width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
    isAuthenticated: false,
    user: null,
    // isAuthenticated: true,
    // user: {
    //     email: "roman.stankiewicz@perkbox.com",
    //     uid: "DF4Ean8HRjckmD0vmbYaRNqBxPm1"
    // },
    // myUserData: {
    //     email: "",
    //     firstName: "",
    //     secondName: "",
    //     dates: []
    // }
}