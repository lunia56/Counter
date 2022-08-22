import React, {ChangeEvent, ChangeEventHandler} from 'react';
import style from './Counter.module.css';
import Button from './Button';

type SettingsType = {
    error: string | null
    maxCount: number
    minCount: number
    setCounter: () => void
    changeMinCount: (value: number) => void
    changeMaxCount: (value: number) => void

}
export const Settings = (props: SettingsType) => {

    const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeMaxCount(+e.currentTarget.value)
    }

    const minValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeMinCount(+e.currentTarget.value)

    }


    return (
        <div className={style.container}>
            <div className={style.settings}>
                <div className={style.settings_item}>
                    <span>max value:</span>
                    <input type="number"
                           className={props.maxCount <= props.minCount ? style.inputError : style.input}
                           value={props.maxCount}
                           onChange={(e) => maxValueHandler(e)}/>
                </div>
                <div className={style.settings_item}>
                    <span>start value:</span>
                    <input type="number"
                           value={props.minCount}
                           className={props.minCount > props.maxCount || props.minCount < 0 ? style.inputError : style.input}
                           onChange={(e) => minValueHandler(e)}/></div>
            </div>
            <div className={style.buttons}>
                <Button name={'set'}
                        callBack={props.setCounter}
                        disabled={!!props.error}
                />


            </div>
        </div>
    );
};

