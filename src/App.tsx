import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from './components/Counter';
import style from './components/Counter.module.css';
import {Settings} from './components/Settings';
import SuperCounter from './components/SuperCounter';


function App() {

    let [maxCount, setMaxCount] = useState( initialMaxCount)
    let [minCount, setMinCount] = useState(initialMinCount)
    const [error, setError] = useState<string | null>(null)
    let [count, setCount] = useState(initialMinCount)
    const [showCount, setShowCount] = useState(false)
    const [showSet, setShowSet] = useState(false)

   function initialMinCount(){
        let newStartValue = localStorage.getItem('StartValue')
        if (newStartValue ) {
            let initialMinCount=JSON.parse(newStartValue)
            // setCount(initialMinCount)
           return initialMinCount
        }
    }
    function initialMaxCount() {
        let newMaxValue = localStorage.getItem('MaxValue')
        if (newMaxValue ) {
            let initialMaxCount = JSON.parse(newMaxValue)
            return initialMaxCount
        }
    }

    useEffect(() => {
        if(showCount){
            localStorage.setItem('StartValue', JSON.stringify(minCount))
            localStorage.setItem('MaxValue', JSON.stringify(maxCount))
        }
    })




    const incCount = () => {
        count < maxCount && setCount(count + 1)
    }
    const resetCount = () => {
        count > minCount && setCount(minCount)
    }
    const setCounter = () => {
        !error && setCount(minCount);
        setShowCount(true)
        setShowSet(false)
    }
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
            <div className={style.containerCount}>
                <Settings setCounter={setCounter}
                          error={error}
                          maxCount={maxCount}
                          minCount={minCount}
                          changeMinCount={changeMinCount}
                          changeMaxCount={changeMaxCount}/>

                <Counter count={count}
                         incHandler={incCount}
                         resetHandler={resetCount}
                         maxCount={maxCount}
                         minCount={minCount}
                         error={error}
                         showCount={showCount}/>
            </div>
            <SuperCounter count={count}
                          maxCount={maxCount}
                          minCount={minCount}
                          error={error}
                          incHandler={incCount}
                          resetHandler={resetCount}
                          setCounter={setCounter}
                          changeMinCount={changeMinCount}
                          changeMaxCount={changeMaxCount}
                          showSet={showSet}
                          setShowSet={setShowSet}
            />


            {/*<div className={style.buttons}>*/}
            {/*    <Button name={'inc'}*/}
            {/*            callBack={incCount}*/}
            {/*            disabled={count >= maxCount}*/}
            {/*    />*/}
            {/*    /!*<Button name={'dec'}*!/*/}
            {/*    /!*        callBack={decCount}*!/*/}
            {/*    /!*        disabled={count >= (MAXCOUNT + 1) || count === MINCOUNT}/>*!/*/}
            {/*    <Button name={'reset'}*/}
            {/*            callBack={resetCount}*/}
            {/*            disabled={count === minCount}*/}
            {/*    />*/}
            {/*</div>*/}
        </div>

    );
}

export default App;
