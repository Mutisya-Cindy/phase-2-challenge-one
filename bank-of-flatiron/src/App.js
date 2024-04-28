import React, { useState } from 'react';
import TransactionTable from './components/TransactionTable';
import TransactionForm from './components/TransactionForm';
import './App.css';

const App = () => {
  const [transactions, setTransactions] = useState([]);

  const handleAddTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  return (
    <div className="App">
      <h1>The Royal Bank of Flatiron</h1>
      <div className="transaction-form">
        <TransactionForm onSubmit={handleAddTransaction} />
      </div>
      
      <div className="transaction-table">
        <TransactionTable transactions={transactions} />
      </div>
    </div>
  );
};

export default App;
