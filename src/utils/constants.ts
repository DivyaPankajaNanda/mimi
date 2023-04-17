export const API_V1 : String = "http://localhost:9000/mimiapi/v1"
export const ROUTES = [
    `/`,
    `/signin`,
    `/signup`
]

export const formatToLocaleDateString : Function = (array : number[]) : string => {
    return new Date(array[0],array[1]-1,array[2]).toLocaleDateString()
}

export const formatLocalDateStringToDate : Function = (date : string) : Date => {
    return new Date(date)
}

export const formatToISOString : Function = (array : number[]) : string => {
    // return new Date(array[0],array[1]-1,array[2]).toISOString().substring(0,10)
    return new Date(array[2],array[1]-1,array[0]+1).toISOString().substring(0,10)
}

export const formatLocalDateStringToISOString : Function = (date : string) : string => {
    return new Date(date).toISOString().substring(0,10)
}

export const calculateDayDifference : Function = (startDate : number[], endDate : number[]) : number => {
    const [startDay, startMonth, startYear] = startDate.reverse()
    const [endDay, endMonth, endYear] = endDate.reverse()

    const start_date = new Date(startYear, startMonth - 1, startDay)
    const end_date = new Date(endYear, endMonth - 1, endDay)
    
    let timeDiff = start_date.getTime() - end_date.getTime()
    let dayDiff = Math.floor(timeDiff / (1000 * 3600 * 24))

    return Math.abs(dayDiff)
}

export const PAGE_ENTRIES : number[] = [25,50,100]

export const GOAL_PROGRESS_COLORS : string[] = [`#74ebff`,`#F9A529`,`#FF989F`]

export const USER_CURRENCY : string = `$`