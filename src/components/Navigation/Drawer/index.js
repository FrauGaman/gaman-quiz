import React from 'react';
import Backdrop from "../../UI/BackDrop";
import classes from './index.module.css';

const links = [
    1, 2, 3,
]

class Drawer extends React.Component {
    renderLinks() {
        return links.map((item, index) => {
            return (
                <li key={index}>
                    <a >Link {item}</a>
                </li>
            )
        })
    }

    render() {
        const { isOpen, onCloseMenu } = this.props;
        const cls = [classes.Drawer];
        if (!isOpen) {
            cls.push(classes.close)
        }
        return (
            <React.Fragment >
                <nav className={cls.join(' ')}>
                    <ul>
                        { this.renderLinks() }
                    </ul>
                </nav>
                { isOpen && <Backdrop onClick={onCloseMenu} /> }
            </React.Fragment>

        )
    }
}

export default Drawer;
