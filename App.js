import logo from './logo.svg';
import './App.css';
import Header from "./Header";
import Sidebar from './Sidebar';
import MainPage from "./MainPage";


function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />
        <MainPage />

      </div>


    </div>
  );
}

export default App;
