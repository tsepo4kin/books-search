import './App.css';
import AppHeader from './components/AppHeader';
import BooksList from './components/BooksList';

function App() {

  function searchBooks() {
    //request
    console.log(1)
  }

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <AppHeader onCreate={searchBooks} />

      <BooksList />
    </div>
  );
}

export default App;
