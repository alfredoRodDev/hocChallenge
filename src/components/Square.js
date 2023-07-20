import React from 'react';
import './styles.css';


export default function Chessboard({ text, isOdd })
{

    return (
        <div className={isOdd ? 'whitesquare' : 'blacksquare'}>
            {text}
        </div>
    )
}