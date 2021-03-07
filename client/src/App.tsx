import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import store from './redux/redux-store';
import {Provider} from 'react-redux';
import {HeaderContainer} from './components/header/HeaderContainer';
import {FooterContainer} from './components/footer/FooterContainer';
import {ContentContainer} from './components/content/ContentContainer';

const App = () => {

    return (
        <Router>
            <Provider store={store}>
                <HeaderContainer/>
                <ContentContainer/>
                <FooterContainer/>
            </Provider>
        </Router>
    )
}

export default App;
