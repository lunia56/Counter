import React, {ChangeEvent} from 'react';
import style from './Counter.module.css'
import Button from './Button';
import {Settings} from './Settings';
import {
    counterReducer,
    counterType,
    IncrementCountAC, ResetCountAC,
    SetErrorAC,
    SetMaxCountAC,
    SetMinCountAC,
    ShowCountOrSetAC
} from "../redux/counterReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../store";


type SuperCounterPropsType = {
    counter: counterType
    // count: number
    // maxCount: number
    // minCount: number
    // error: string | null
    // showSet: boolean
    // setShowSet: (value: boolean, counterId: string) => void
    // incHandler: (counterId: string) => void
    // resetHandler: (counterId: string) => void
    // setCounter: (counterId: string) => void
    // changeMinCount: (value: number, counterId: string) => void
    // changeMaxCount: (value: number, counterId: string) => void
}
const SuperCounter = ({counter} :SuperCounterPropsType) => {
    const dispatch = useDispatch();
    const setShowSet=(showSet:boolean)=>{
        dispatch(ShowCountOrSetAC(showSet,counter.id))
    }

    const incCount = () => {
        counter.count < counter.maxCount && dispatch(IncrementCountAC(counter.count,counter.id))
    }

    const resetCount = () => {
        counter.count > counter.minCount && dispatch(ResetCountAC(counter.minCount,counter.id))
    }
    return (

        <>
            {/*если showSet по умолчанию(false) !showSet - значит показать Count, иначе -показать Set */}
            {!counter.showSet
                ? <div className={style.container}>
                    <div className={counter.count < counter.maxCount ? style.count : style.countRed}>
                        {!counter.error ? counter.count :
                            <span className={style.spanStyleError}>{counter.error}</span>}
                    </div>
                    <div className={style.buttons}>
                        <Button name={'inc'}
                                callBack={incCount}
                                disabled={counter.count >= counter.maxCount}/>

                        <Button name={'reset'}
                                callBack={resetCount}
                                disabled={counter.count === counter.minCount}/>
                        <Button name={'set'}
                                callBack={() => setShowSet(counter.showSet)}/>
                    </div>
                </div>
                :
                <Settings
                    counter={counter}
                    // id={props.id}
                    //       error={props.error}
                    //       maxCount={props.maxCount}
                    //       minCount={props.minCount}
                    //       changeMinCount={props.changeMinCount}
                    //       changeMaxCount={props.changeMaxCount}
                    //       setCounter={props.setCounter}
                />
            }

        </>

    );
};

export default SuperCounter;