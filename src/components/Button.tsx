import React from 'react';
import style from './Counter.module.css';

type ButtonType = {
    name: string
    callBack: (...props:any) => void
    disabled?: boolean
}

function Button(props: ButtonType) {
    const onClickHandler = () => {
        props.callBack()
    }
    return (
        <button   disabled={props.disabled}
                  className={!props.disabled ? style.button : style.disableButton} onClick={onClickHandler}>{props.name}</button>
    );
}

export default Button;
