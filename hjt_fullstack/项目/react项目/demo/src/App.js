import logo from './logo.svg';
import './App.css';

function App() {
  fetch('http://www.hjmin.com/comment/music?id=186016&limit=3')
    .then(data => data.json())
    .then(data => {
      // console.log();
      return data.hotComments;
    })
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
