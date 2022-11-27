import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from './components/Counter';
import style from './components/Counter.module.css';
import {Settings} from './components/Settings';
import SuperCounter from './components/SuperCounter';


function App() {
    /*Максимальное значение счетчика. Начальное значение берется из localStorage*/
    let [maxCount, setMaxCount] = useState<number>(5)

    /*Минимальное значение счетчика. начальное значение берется из localStorage*/
    let [minCount, setMinCount] = useState<number>(0)

    /*Состояние ошибки. По умолчанию null, содержин описание ошибки*/
    const [error, setError] = useState<string | null>(null)

    /*Состояние счетчика. Начальное значение берется из localStorage*/
    // let [count, setCount] = useState<number>(initialMinCount)
    let [count, setCount] = useState<number>(0)

    /*Состояние отрисовки счетчика в компоненте  Counter и SuperCounter*/
    const [showCount, setShowCount] = useState<boolean>(false)

    /*Состояние отрисовки настроек в компоненте SuperCounter*/
    const [showSet, setShowSet] = useState<boolean>(false)


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


    const incCount = () => {
        count < maxCount && setCount(count + 1)
    }
    const resetCount = () => {
        count > minCount && setCount(minCount)
    }

    /*Фун-я которая передается обработчику события на кнопку set
    * при срабатывании устанавливаем: новое начальное значение, скрываем окно с надписью "enter values and press 'set'", и в компоненте SuperCounter скрываем окно настроек  */
    const setCounter = () => {
        !error && setCount(minCount);
        setShowCount(true)
        setShowSet(false)
    }

    /*След 2 Функции изменения макс и мин значения с условием валидности. Висит на обработчике инпута и получает текущий currentTarget.value*/
    const changeMaxCount = (value: number) => {
        if (value <= minCount) {
            setError('Invalid values!')
        } else {

            setError(null)
        }
        setMaxCount(value)
        setShowCount(false)

    }
    const changeMinCount = (value: number) => {
        if (value >= maxCount || value < 0) {
            setError('Invalid values!')
        } else {

            setError(null)
        }
        setMinCount(value)
        setShowCount(false)
    }


    return (
        <div className="App">
            {/*<div className={style.containerCount}>*/}
            {/*    <Settings setCounter={setCounter}*/}
            {/*              error={error}*/}
            {/*              maxCount={maxCount}*/}
            {/*              minCount={minCount}*/}
            {/*              changeMinCount={changeMinCount}*/}
            {/*              changeMaxCount={changeMaxCount}/>*/}

            {/*    <Counter count={count}*/}
            {/*             incHandler={incCount}*/}
            {/*             resetHandler={resetCount}*/}
            {/*             maxCount={maxCount}*/}
            {/*             minCount={minCount}*/}
            {/*             error={error}*/}
            {/*             showCount={showCount}/>*/}
            {/*</div>*/}
            {/*<SuperCounter count={count}*/}
            {/*              maxCount={maxCount}*/}
            {/*              minCount={minCount}*/}
            {/*              error={error}*/}
            {/*              showSet={showSet}*/}
            {/*              setShowSet={setShowSet}*/}
            {/*              incHandler={incCount}*/}
            {/*              resetHandler={resetCount}*/}
            {/*              setCounter={setCounter}*/}
            {/*              changeMinCount={changeMinCount}*/}
            {/*              changeMaxCount={changeMaxCount}*/}
            {/*/>*/}

        </div>

    );
}

export default App;
