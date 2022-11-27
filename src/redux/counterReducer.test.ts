import {v1} from "uuid"
import { counterReducer, counterType, IncrementCountAC} from "./counterReducer";


// test("IncrementCount with counterReducer should be work correct",()=>{
//     const counterId1=v1()
//     const initialState: Array<counterType> = [
//         {id: counterId1, maxCount: 5, minCount: 0, error: null, count: 0, showCount: false, showSet: true}
//     ]
//     const counter = counterReducer(initialState,IncrementCountAC(initialState[0].count,counterId1))
//     expect(counter[0].count).toBe(1)
// })