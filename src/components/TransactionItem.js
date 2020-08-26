import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState'

const TransactionItem = ({transaction}) => {
    const { deleteTransaction } = useContext(GlobalContext)

    let sign = transaction.amount < 0 ? "-" : "+"
    return (
        <li className={transaction.amount < 0 ? "minus" : "plus"}>
            {transaction.text} 
            <span>{sign}${Math.abs(transaction.amount.toFixed(2))}</span>
            <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
        </li>
    );
}

export default TransactionItem;
