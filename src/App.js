import './App.css';
import store from './components/Store';
import { Provider } from 'react-redux';
import ToggleTheme from './components/ToggleTheme';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ToggleTheme />
      </Provider>
    </div>
  );
}

export default App;