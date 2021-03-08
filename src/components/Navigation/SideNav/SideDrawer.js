import React  from 'react'
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {COLLAPSED_DRAWER, FIXED_DRAWER} from 'store/actions/ActionTypes';
import { toggleCollapsedNav, updateWindowWidth } from 'store/actions/Settings';


const sideDrawer = () => {
   const {navCollapsed, drawerType, width} = this.props;
        return (
          <div className={props.open ? "SideDrawer Open" : "SideDrawer Close" }>
          <nav>
              <div className="times-bt-container">
                  <button className="times-bt" onClick={props.closed}>&times;</button>
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
