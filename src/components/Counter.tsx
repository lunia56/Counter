import React, {useState} from 'react';
import style from './Counter.module.css'
import Button from './Button';
import {counterType, IncrementCountAC, ResetCountAC} from "../redux/counterReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../store";


type CounterPropsType = {
    // id:string
    // count: number
    // maxCount: number
    // minCount: number
    // error: string | null
    // showCount: boolean
    // incHandler: (counterId:string) => void
    // resetHandler: (counterId:string) => void
}
const Counter = (props: CounterPropsType) => {
    const dispatch = useDispatch();
    const counter = useSelector<AppRootStateType, counterType>(state => state.counter)



    const incCount = () => {
        counter.count < counter.maxCount && dispatch(IncrementCountAC(counter.count))
    }

    const resetCount = () => {
        counter.count > counter.minCount && dispatch(ResetCountAC(counter.minCount))
    }
    return (

        <div className={style.container}>
            <div className={counter.count < counter.maxCount ? style.count : style.countRed}>
                {counter.showCount ? !counter.error ? counter.count :
                        <span className={style.spanStyleError}>{counter.error}</span> :
                    <span className={style.spanStyle}>enter values and press 'set'</span>}
            </div>


            <div className={style.buttons}>
                <Button name={'inc'}
                        callBack={incCount}
                        disabled={counter.count >= counter.maxCount || !counter.showCount}
                />
                {/*<Button name={'dec'}*/}
                {/*        callBack={decCount}*/}
                {/*        disabled={count >= (MAXCOUNT + 1) || count === MINCOUNT}/>*/}
                <Button name={'reset'}
                        callBack={resetCount}
                        disabled={counter.count === counter.minCount || !counter.showCount}
                />
            </div>
        </div>

    );
};

export default Counter;