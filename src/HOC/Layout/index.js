import React from 'react';
import MenuToggle from "../../components/Navigation/MenuToggle";
import Drawer from "../../components/Navigation/Drawer";
import classes from './index.module.css';

class Layout extends React.Component {
    state = {
        menu: false,
    }
    toggleMenuHandler = () => {
        const { menu } = this.state;
        this.setState({
            menu: !menu,
        })
    }

    onCloseMenu = () => {
        this.setState({
            menu: false,
        })
    }

    render() {
        const { menu } = this.state;

        return (
            <div className={classes.Layout}>
                <Drawer
                    isOpen={menu}
                    onCloseMenu={this.onCloseMenu}
                />
                <MenuToggle
                    onToggle={this.toggleMenuHandler}
                    isOpen={menu}
                />

                <main>
                    {this.props.children}
                </main>

            </div>
        )
    }
}

export default Layout;
