import React from 'react'
import SideDrawer from 'components/Navigation/SideNav/SideDrawer';
import Toolbar from 'components/Navigation/Toolbar';
import Footer from 'components/Footer';


class Layout extends React.Component {
    state = {
        showSideDrawer: false
    }
    sideDrawerClosedHandler = () => {
        this.setState( { showSideDrawer: false });
    }

    sideDrawerToggleHandler = () => {
        this.setState( prevState  => {
            return { showSideDrawer: !prevState.showSideDrawer };
        });
    }

    render () {
        const {showSideDrawer} = this.state
        return (
            <>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer open={showSideDrawer} closed={this.sideDrawerClosedHandler} />        
                <main>
                    {this.props.children}
                </main>
                <Footer />
            </>
        )
    }
}

export default Layout