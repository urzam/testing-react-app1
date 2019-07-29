// @flow
import React, {Component} from 'react';
import logo from '../logo.svg';

type Props = {};
class Header extends Component<Props> {
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Hello worlds
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
        );
    }
}

export default Header;