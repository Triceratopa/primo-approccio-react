import logo from './logo.svg';
import './App.css';
import ButtonComponent from './components/ButtonComponent';
import ImageComponent from './components/ImageComponent';
import Counter from './components/Count';

function App() {
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
        <Counter/>
      </header>
      <main>
        <div>
          <ButtonComponent text='Click!'/>
          <ButtonComponent text='!'/>
          <ButtonComponent text='Proprio qui'/>
        </div>
        <ImageComponent src={logo}
        alt=''/>
        
      </main>
    </div>
  );
}

export default App;
