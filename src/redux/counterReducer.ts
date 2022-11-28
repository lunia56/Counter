import {v1} from "uuid"


export type counterType = {
    id: string
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
export type AddCounterAT = ReturnType<typeof AddCounterAC>
export type ActionType =
    SetMinCountAT
    | SetMaxCountAT
    | SetErrorAT
    | ResetCountAT
    | IncrementCountAT
    | ShowCountAT
    | AddCounterAT


const initialState: Array<counterType> = [{
    id: v1(),
    maxCount: 5,
    minCount: 0,
    error: null,
    count: 0,
    showCount: false,
    showSet: true
}, {
    id: v1(),
    maxCount: 5,
    minCount: 0,
    error: null,
    count: 0,
    showCount: false,
    showSet: true
}]

// console.log(initialState)
export const counterReducer = (state: Array<counterType> = initialState, action: ActionType): Array<counterType> => {
    switch (action.type) {
        case "SET_MIN_COUNT":
            return state.map(el => el.id === action.counterId ? {...el, minCount: action.minCount,count: action.minCount} : el)
        // return {...state, minCount: action.minCount}
        case "SET_MAX_COUNT":
            // return {...state, maxCount: action.maxCount}
            return state.map(el => el.id === action.counterId ? {...el, maxCount: action.maxCount} : el)
        case "SET_ERROR":
            return state.map(el => el.id === action.counterId ? {...el, error: action.error} : el)
        // return {...state, error: action.error}
        case "RESET_COUNT":
            return state.map(el => el.id === action.counterId ? {...el, count: el.minCount} : el)
        // return {...state, count: state.minCount}
        case "INC_COUNT":
            return state.map(el => el.id === action.counterId ? {...el, count: el.count + 1} : el)
        // return {...state, count: state.count + 1}
        case "SHOW_COUNT_OR_SET":
            return state.map(el => el.id === action.counterId ? {
                ...el,
                showCount: action.showCount,
                showSet: !action.showCount
            } : el)
        // return {...state, showCount: action.showCount, showSet: !action.showCount}
        case "ADD_COUNTER":

            return [
                {
                    id: v1(),
                    maxCount: 5,
                    minCount: 0,
                    error: null,
                    count: 0,
                    showCount: false,
                    showSet: true
                }, ...state]


        default:
            return state
    }
}

export const SetMinCountAC = (minCount: number, counterId: string) => {
    return {type: "SET_MIN_COUNT", minCount, counterId} as const
}
export const SetMaxCountAC = (maxCount: number, counterId: string) => {
    return {type: "SET_MAX_COUNT", maxCount, counterId} as const
}
export const SetErrorAC = (error: string | null, counterId: string) => {
    return {type: "SET_ERROR", error, counterId} as const
}
export const ResetCountAC = (count: number, counterId: string) => {
    return {type: "RESET_COUNT", count, counterId} as const
}
export const IncrementCountAC = (count: number, counterId: string) => {
    return {type: "INC_COUNT", count, counterId} as const
}
export const ShowCountOrSetAC = (showCount: boolean, counterId: string) => {
    return {type: "SHOW_COUNT_OR_SET", showCount, counterId} as const
}
export const AddCounterAC = () => {
    return {type: "ADD_COUNTER"} as const
}
