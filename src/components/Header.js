// @flow
import React, {Component} from 'react';
// import logo from '../logo.svg';

type Props = {};
class Header extends Component<Props> {
    render() {
        return (
            <div className="Header">
                <img src="images/logo.jpg" alt="coffe" />
            </div>
        );
    }
}

export default Header;