import React, { useState } from 'react';
import TransactionTable from './components/TransactionTable';
import TransactionForm from './components/TransactionForm';
import SearchBar from './components/SearchBar';
import './App.css';

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  const handleAddTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
    setFilteredTransactions([...filteredTransactions, newTransaction]); // Update filteredTransactions too
  };

  const handleSearch = (searchTerm) => {
    const filtered = transactions.filter(transaction =>
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTransactions(filtered);
  };

  return (
    <div className="App">
      <h1>The Royal Bank of Flatiron</h1>
      <div className="transaction-form">
        <TransactionForm onSubmit={handleAddTransaction} transactions={transactions} />
      </div>
      <div className="search-bar">
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="transaction-table">
        <TransactionTable transactions={filteredTransactions} />
      </div>
    </div>
  );
};

export default App;


