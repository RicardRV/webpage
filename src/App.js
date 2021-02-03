import './scss/App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/*!TODO fer un servidor apache per a poder veure el joc */}
        <iframe src="http://192.168.1.100" width="640" height="640" title="gitgatgut"/>
      </header>
    </div>
  );
}

export default App;
