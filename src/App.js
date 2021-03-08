import React from 'react';
import MainApp from 'components/mainApp'
import { Provider } from 'react-redux';
import store from './store/store';
import './styles/style.js'

const App = () => (
    <Provider store={store}>
    <div className='app-main-container'>
        <MainApp />
    </div>
    </Provider>
);

export default App;