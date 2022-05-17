import { useState } from 'react';
import { useMode } from './hooks';
import MainPage from './pages/MainPage';

function App() {

  const apiResponse = useMode()

  return (
    <div className={apiResponse.isDarkMode ? "dark" : "light"}>
      <button onClick={apiResponse.toggleDarkMode}>Dark/Light</button>
      <MainPage />
    </div>
  );
}

export default App;
