import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

class Test extends React.Component {
  foo = () => {
    console.log('this is:', this);
  }
  render() {
    let langs = ["Ruby", "ES6", "Scala"]
    return (<div>    {langs.map(it => <p style={{ color: "red" }} >{it}  </p>)}

      {<button onClick={this.foo}>Clique Aqui</button>}
    </div>
    )
  }
}

/* o que eu faço com os dois embaixo App e Test para deixar certo */ 
ReactDOM.render(
  <React.StrictMode>
    <App />
    <Test />

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
