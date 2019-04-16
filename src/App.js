import React from 'react';
import './App.css';
import MostRecentEntry from './components/MostRecentEntry';
import NewEntryForm from './components/NewEntryForm';

const App = () => {
  return (
    <div>
      <MostRecentEntry />
      <NewEntryForm />
    </div>
  );
};

export default App;
