import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import { BrowserRouter as Router } from 'react-router-dom';
import {store} from "./store";
import "./assets/scss/index.scss";

ReactDOM.render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
  document.getElementById('root')
);

