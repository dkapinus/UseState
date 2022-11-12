import React, {useState} from 'react';

type ButtonType = {
    name:string

}

export const Button = (props:ButtonType)=> {
   let  [a, setA]=useState(1)

    const SET = ()=> {
        setA(++a)
        console.log(a)
    }

    const SET_0 = ()=> {
        setA(0)
        console.log(a)
    }
    return (
        <div>
            {a}
            <button onClick={SET}>
                {props.name}
            </button>
            <button onClick={SET_0}>
                {0}
            </button>
        </div>
    )
}