import React, { useState } from 'react';
import Header from './components/Header/Header';
import Loader from './components/Loader/Loader';

function App() {
  const [showLoader, setShowLoader] = useState(false);

  return (
    <div className={`app-container ${showLoader ? 'loader-active' : ''}`}>
      {!showLoader ? <Header setShowLoader={setShowLoader} /> : <Loader setShowLoader={setShowLoader} />}
    </div>
  );
}

export default App;