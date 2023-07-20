import React from 'react';
import Square from './Square';
import './styles.css';

const tableVertical = ["1", "2", "3", "4", "5", "6", "7", "8"];
const tableHorizontal = ["A", "B", "C", "D", "E", "F", "G", "H"];


export default function Chessboard()
{

    let tableBoard = [];

    for (let j = tableVertical.length - 1; j >= 0; j--)
    {
        for (let i = 0; i < tableHorizontal.length; i++)
        {
            const number = j + i + 2;

            let textName = `${tableHorizontal[i]}${tableVertical[j]}`

            if (number % 2 === 0)
            {
                tableBoard.push(<Square text={textName} isOdd={false} />);
            } else
            {
                tableBoard.push(<Square text={textName} isOdd={true} />);
            }
        }
    }

    return (
        <div className='container'>
            {tableBoard}
        </div>
    );


}