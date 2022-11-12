import React from 'react';

type ButtonType = {
    name:string

}

export const Button = (props:ButtonType)=> {
    const onClickHandler =()=> {

    }
    return (
        <div>
            <button onClick={onClickHandler}>
                {props.name}
            </button>
        </div>
    )
}