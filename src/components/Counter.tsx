import React, {useState} from 'react';
import style from './Counter.module.css'
import Button from './Button';


type CounterPropsType = {
    count: number
    maxCount: number
    minCount: number
    error: string | null
    showCount: boolean
    incHandler: () => void
    resetHandler: () => void
}
const Counter = (props: CounterPropsType) => {


    return (

        <div className={style.container}>
            <div className={props.count < props.maxCount ? style.count : style.countRed}>
                {props.showCount ? !props.error ? props.count :
                        <span className={style.spanStyleError}>{props.error}</span> :
                    <span className={style.spanStyle}>enter values and press 'set'</span>}
            </div>


            <div className={style.buttons}>
                <Button name={'inc'}
                        callBack={props.incHandler}
                        disabled={props.count >= props.maxCount || !props.showCount}
                />
                {/*<Button name={'dec'}*/}
                {/*        callBack={decCount}*/}
                {/*        disabled={count >= (MAXCOUNT + 1) || count === MINCOUNT}/>*/}
                <Button name={'reset'}
                        callBack={props.resetHandler}
                        disabled={props.count === props.minCount || !props.showCount}
                />
            </div>
        </div>

    );
};

export default Counter;