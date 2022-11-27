import React, {useCallback, useEffect, useState} from 'react';
import './App.css';
import Counter from './components/Counter';
import style from './components/Counter.module.css';
import {Settings} from './components/Settings';
import SuperCounter from './components/SuperCounter';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./store";
import {
    counterType,
    IncrementCountAC,
    ResetCountAC, SetErrorAC, SetMaxCountAC,
    SetMinCountAC,
    ShowCountOrSetAC
} from "./redux/counterReducer";


function AppWithRedux() {

    const dispatch = useDispatch();
    const counter = useSelector<AppRootStateType, counterType>(state => state.counter)


    console.log("counter", counter)
    /*Максимальное значение счетчика. Начальное значение берется из localStorage*/
    // let [maxCount, setMaxCount] = useState<number>(5)

    /*Минимальное значение счетчика. начальное значение берется из localStorage*/
    // let [minCount, setMinCount] = useState<number>(0)

    /*Состояние ошибки. По умолчанию null, содержин описание ошибки*/
    // const [error, setError] = useState<string | null>(null)

    /*Состояние счетчика. Начальное значение берется из localStorage*/
    // let [count, setCount] = useState<number>(initialMinCount)
    // let [count, setCount] = useState<number>(0)

    /*Состояние отрисовки счетчика в компоненте  Counter и SuperCounter*/
    // const [showCount, setShowCount] = useState<boolean>(false)

    /*Состояние отрисовки настроек в компоненте SuperCounter*/
    // const [showSet, setShowSet] = useState<boolean>(false)


    /*получаем minCount из localStorage*/
    // function initialMinCount(): number {
    //     let newStartValue = localStorage.getItem('StartValue')
    //     if (newStartValue) {
    //
    //         return JSON.parse(newStartValue)
    //     }
    //     console.log(initialMinCount())
    //     // setCount(initialMinCount())
    //     return 0
    //
    // }

    /*получаем maxCount из localStorage*/
    // function initialMaxCount(): number {
    //     let newMaxValue = localStorage.getItem('MaxValue')
    //     if (newMaxValue) {
    //         return JSON.parse(newMaxValue)
    //     }
    //     return 5
    // }

    /*при каждом рендере отправляем в localStorage minCount и maxCount*/
    // useEffect(() => {
    //     if (showCount) {
    //         localStorage.setItem('StartValue', JSON.stringify(minCount))
    //         localStorage.setItem('MaxValue', JSON.stringify(maxCount))
    //     }
    // }, [showCount])
    /*нужно ли указывать зависимость от значений minCount и maxCount?*/


    // const incCount = (counterId: string) => {
    //
    //     counter.count < counter.maxCount && dispatch(IncrementCountAC(counter.count))
    // }
    //
    // const resetCount = (counterId: string) => {
    //     counter.count > counter.minCount && dispatch(ResetCountAC(counter.minCount))
    // }

    /*Фун-я которая передается обработчику события на кнопку set
    * при срабатывании устанавливаем: новое начальное значение, скрываем окно с надписью "enter values and press 'set'", и в компоненте SuperCounter скрываем окно настроек  */
    // const setCounter = () => {
    //     !counter.error && dispatch(SetMinCountAC(counter.minCount));
    //     dispatch(ShowCountOrSetAC(true))
    //     // setShowCount(true)
    //     // setShowSet(false)
    // }
    // const setShowSet=(showSet:boolean)=>{
    //     dispatch(ShowCountOrSetAC(showSet))
    // }

    /*След 2 Функции изменения макс и мин значения с условием валидности. Висит на обработчике инпута и получает текущий currentTarget.value*/
    // const changeMaxCount = (value: number) => {
    //     if (value <= counter.minCount) {
    //         dispatch(SetErrorAC('Invalid values!'))
    //     } else {
    //
    //         dispatch(SetErrorAC(null))
    //     }
    //     dispatch(SetMaxCountAC(value))
    //     dispatch(ShowCountOrSetAC(false))
    // }
    // const changeMinCount = (value: number) => {
        // if (value >= counter.maxCount || value < 0) {
        //     dispatch(SetErrorAC('Invalid values!'))
        //
        // } else {
        //
        //     dispatch(SetErrorAC(null))
        //
        // }
        // dispatch(SetMinCountAC(value))
        // dispatch(ShowCountOrSetAC(false))
    // }


    return (
        <div className="App">
            <div className={style.containerCount}>
                <Settings
                    // id={counter1.id}
                    //       setCounter={setCounter}
                    //       error={counter1.error}
                    //       maxCount={counter1.maxCount}
                    //       minCount={counter1.minCount}
                    //       changeMinCount={changeMinCount}
                    //       changeMaxCount={changeMaxCount}
                />

                <Counter
                    // id={counter1.id}
                    //      count={counter1.count}
                    //      incHandler={incCount}
                    //      resetHandler={resetCount}
                    //      maxCount={counter1.maxCount}
                    //      minCount={counter1.minCount}
                    //      error={counter1.error}
                    //      showCount={counter1.showCount}
                />
            </div>
            <SuperCounter
                // id={counter1.id}
                //           count={counter1.count}
                //           maxCount={counter1.maxCount}
                //           minCount={counter1.minCount}
                //           error={counter1.error}
                //           showSet={counter1.showSet}
                //           setShowSet={setShowSet}
                //           incHandler={incCount}
                //           resetHandler={resetCount}
                //           setCounter={setCounter}
                //           changeMinCount={changeMinCount}
                //           changeMaxCount={changeMaxCount}
            />

        </div>

    );
}

export default AppWithRedux;
