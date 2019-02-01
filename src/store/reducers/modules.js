import moment from 'moment'

export function createDate(days, weeks, dayOfWeek) {
    const id = moment().add(weeks, 'weeks').startOf('isoWeek').add(days - 1, 'days').valueOf()
    const date = moment(id).format('dddd D MMMM YYYY')
    const dateArray = date.split(' ')

    return {
        id,
        date,
        dayOfWeek,
        day: dateArray[0],
        dateValue: dateArray[1],
        month: dateArray[2]
    }
}

export const dates = (function createFortnight() {
    let i = new Date().getDay()
    console.log('i', i)
    const limit = i + 28
    let dates = []

    for (i; i < limit; i++) {
        if ((i % 7 !== 6) && (i % 7 !== 0)) dates.push(createDate(i - 28, 0, i % 7))
    }
    return dates
})()

