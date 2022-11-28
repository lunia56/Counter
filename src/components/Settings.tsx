import React, {ChangeEvent, ChangeEventHandler} from 'react';
import style from './Counter.module.css';
import Button from './Button';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../store";
import {counterType, SetErrorAC, SetMaxCountAC, SetMinCountAC, ShowCountOrSetAC} from "../redux/counterReducer";

type SettingsType = {
    counter: counterType
    // id: string
    // error: string | null
    // maxCount: number
    // minCount: number
    // setCounter: (counterId: string) => void
    // changeMinCount: (value: number, counterId: string) => void
    // changeMaxCount: (value: number, counterId: string) => void

}
export const Settings = ({counter}: SettingsType) => {
        const dispatch = useDispatch();

        const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
            const value = +e.currentTarget.value
            if (value <= counter.minCount) {
                dispatch(SetErrorAC('Invalid values!',counter.id))
            } else {
                dispatch(SetErrorAC(null,counter.id))
            }
            dispatch(SetMaxCountAC(value,counter.id))
            dispatch(ShowCountOrSetAC(false,counter.id))
        }

        const minValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
            const value = +e.currentTarget.value
            if (value >= counter.maxCount || value < 0) {
                dispatch(SetErrorAC('Invalid values!',counter.id))
            } else {
                dispatch(SetErrorAC(null,counter.id))
            }
            dispatch(SetMinCountAC(value,counter.id))
            dispatch(ShowCountOrSetAC(false,counter.id))
        }
        const setCounter = () => {
            !counter.error && dispatch(SetMinCountAC(counter.minCount,counter.id));
            dispatch(ShowCountOrSetAC(true,counter.id))
            dispatch(ShowCountOrSetAC(true,counter.id))
            // setShowCount(true)
            // setShowSet(false)
        }

        return (
            <div className={style.container}>
                <div className={style.settings}>
                    <div className={style.settings_item}>
                        <span>max value:</span>
                        <input type="number"
                               className={counter.maxCount <= counter.minCount ? style.inputError : style.input}
                               value={counter.maxCount}
                               onChange={(e) => maxValueHandler(e)}/>
                    </div>
                    <div className={style.settings_item}>
                        <span>start value:</span>
                        <input type="number"
                               value={counter.minCount}
                               className={counter.minCount > counter.maxCount || counter.minCount < 0 ? style.inputError : style.input}
                               onChange={(e) => minValueHandler(e)}/></div>
                </div>
                <div className={style.buttons}>
                    <Button name={'set'}
                            callBack={setCounter}
                            disabled={!!counter.error}
                    />


                </div>
            </div>
        );
    }
;

