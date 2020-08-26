import React, {useState, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState'

const TransactionForm = () => {
    const [text, setText] = useState("")
    const [amount, setAmount] = useState("")
    const { addTransaction } = useContext(GlobalContext)
    
    const handleSubmit = e => {
        e.preventDefault()
        let newTransaction = {
            id : Math.floor(Math.random() * 100000),
            text,
            amount : +amount
        }

        addTransaction(newTransaction)
    }

    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                <label htmlFor="text">Text</label>
                <input 
                type="text" 
                value={text} 
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter text..." />
                </div>
                <div className="form-control">
                <label htmlFor="amount"
                    >Amount <br />
                    (negative - expense, positive - income)</label
                >
                <input 
                    value={amount} 
                    onChange={(e) => setAmount(e.target.value)}
                    type="number" 
                    placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    );
}

export default TransactionForm;
