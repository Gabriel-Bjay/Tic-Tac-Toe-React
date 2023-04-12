import { useState } from 'react';

export default function Square( {value,onSquareClick}){
    // function handleclick(){
    //     setValue("X");
    // }
    return (
    <>
        <button className= "square" onClick={onSquareClick}>{value}</button>
     </>
    );
}



