import React  from 'react'
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {COLLAPSED_DRAWER, FIXED_DRAWER} from 'store/actions/ActionTypes';
import { toggleCollapsedNav, updateWindowWidth } from 'store/actions/Settings';


const sideDrawer = ({open, closed}) => {
        return (
          <div className={open ? "SideDrawer Open" : "SideDrawer Close" }>
          <nav>
              <div className="times-bt-container">
                  <button className="times-bt" onClick={closed}>&times;</button>
              </div>    
              {/* <SideNavigationItem onClick={props.closed}/> */}
          </nav>
      </div>
    )
}


const mapStateToProps = ({settings}) => {
  const {navCollapsed, drawerType} = settings;
  return {
    navCollapsed, drawerType
  }
}
export default withRouter(sideDrawer);
