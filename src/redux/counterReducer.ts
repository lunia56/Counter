import {v1} from "uuid"


export type counterType = {
    maxCount: number,
    minCount: number,
    error: string | null,
    count: number,
    showCount: boolean,
    showSet: boolean
}

export type SetMinCountAT = ReturnType<typeof SetMinCountAC>
export type SetMaxCountAT = ReturnType<typeof SetMaxCountAC>
export type SetErrorAT = ReturnType<typeof SetErrorAC>
export type ResetCountAT = ReturnType<typeof ResetCountAC>
export type IncrementCountAT = ReturnType<typeof IncrementCountAC>
export type ShowCountAT = ReturnType<typeof ShowCountOrSetAC>
export type ActionType = SetMinCountAT | SetMaxCountAT | SetErrorAT | ResetCountAT | IncrementCountAT | ShowCountAT


const initialState: counterType = {
    maxCount: 5,
    minCount: 0,
    error: null,
    count: 0,
    showCount: false,
    showSet: true
}

// console.log(initialState)
export const counterReducer = (state: counterType = initialState, action: ActionType): counterType => {
    switch (action.type) {
        case "SET_MIN_COUNT":
            return {...state, minCount: action.minCount}
        case "SET_MAX_COUNT":
            return {...state, maxCount: action.maxCount}
        // return state.map(el => el.id === action.counterId ? {...el, maxCount: action.maxCount} : el)
        case "SET_ERROR":
            return {...state,error:action.error}
        case "RESET_COUNT":
            return {...state,count:state.minCount}
        case "INC_COUNT":
            return {...state,count:state.count+1}
        case "SHOW_COUNT_OR_SET":
            return {...state,showCount:action.showCount,showSet:!action.showCount}

        default:
            return state
    }
}

export const SetMinCountAC = (minCount: number) => {
    return {type: "SET_MIN_COUNT", minCount} as const
}
export const SetMaxCountAC = (maxCount: number) => {
    return {type: "SET_MAX_COUNT", maxCount} as const
}
export const SetErrorAC = (error: string | null) => {
    return {type: "SET_ERROR", error} as const
}
export const ResetCountAC = (count: number) => {
    return {type: "RESET_COUNT", count} as const
}
export const IncrementCountAC = (count: number) => {
    return {type: "INC_COUNT", count} as const
}
export const ShowCountOrSetAC = (showCount: boolean) => {
    return {type: "SHOW_COUNT_OR_SET", showCount} as const
}