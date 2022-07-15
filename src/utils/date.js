import moment from 'moment'
import { MONTHS } from './constants'

export const getMonth = (date) => {
    const month = MONTHS.find(m => Number(m.id) === Number(moment(date).format('MM')))
    return month.name
}