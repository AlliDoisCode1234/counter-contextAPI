import './App.css';
import ComponentA from './components/ComponentA';
import MyCounter from './components/MyCounter';
import CounterContextProvider from './contexts/CounterContext';


function App() {
  return (
    <CounterContextProvider>
      <div className="app">
        <h1>Context API</h1>
        <MyCounter />
        <ComponentA />
      </div>
    </CounterContextProvider>
  );
}

export default App;
