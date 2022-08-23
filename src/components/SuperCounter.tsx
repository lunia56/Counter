import React from 'react';
import style from './Counter.module.css'
import Button from './Button';
import {Settings} from './Settings';


type SuperCounterPropsType = {
    count: number
    maxCount: number
    minCount: number
    error: string | null
    showSet: boolean
    setShowSet: (value: boolean) => void
    incHandler: () => void
    resetHandler: () => void
    setCounter: () => void
    changeMinCount: (value: number) => void
    changeMaxCount: (value: number) => void
}
const SuperCounter = (props: SuperCounterPropsType) => {


    return (

        <>
            {/*если showSet по умолчанию(false) !showSet - значит показать Count, иначе -показать Set */}
            {!props.showSet
                ? <div className={style.container}>
                    <div className={props.count < props.maxCount ? style.count : style.countRed}>
                        {!props.error ? props.count :
                            <span className={style.spanStyleError}>{props.error}</span>}
                    </div>
                    <div className={style.buttons}>
                        <Button name={'inc'}
                                callBack={props.incHandler}
                                disabled={props.count >= props.maxCount}/>

                        <Button name={'reset'}
                                callBack={props.resetHandler}
                                disabled={props.count === props.minCount}/>
                        <Button name={'set'}
                                callBack={() => props.setShowSet(!props.showSet)}/>
                    </div>
                </div>
                :
                <Settings error={props.error}
                          maxCount={props.maxCount}
                          minCount={props.minCount}
                          changeMinCount={props.changeMinCount}
                          changeMaxCount={props.changeMaxCount}
                          setCounter={props.setCounter}/>
            }

        </>

    );
};

export default SuperCounter;