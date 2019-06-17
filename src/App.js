import React from 'react';
import { Provider } from 'react-redux'
import logo from './logo.svg';
import './App.css';
import store from './store'
import AlbumsListContainer from './components/AlbumsListContainer'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <AlbumsListContainer />
        </div>
      </Provider>
    );
  }
  
}

export default App;
