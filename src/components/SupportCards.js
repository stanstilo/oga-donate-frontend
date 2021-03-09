import React from 'react'
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import women from 'assets/images/homepage/women.jpeg';
import  Button  from '@material-ui/core/Button';
import  {AiOutlineFolderOpen} from "react-icons/ai"

const SupportCards = () => {
  return (
<>
    <div className='card'>
      <img className="card-img-top" src={women} alt="imageCard"/>
      <div className="card-body">
        <div>
        <AiOutlineFolderOpen/>
        <span className="card-text text-muted">
           Charity
         </span>
        <h4 className="card-title">Empowerment</h4>   
       
        <div className="row contributed-progress-view ">
          <p>N1,000</p>
          <span className='percent'>232%</span>
        </div>
        <div className="donate-btn-container">
        <Button variant="contained" className="donate-btn">
           Buy
        </Button>
        </div>
        <hr/>
        <div className="admin-targ row">
          <p>by Admin</p>
          <span className='no__deadline'>No deadline</span>
        </div>
        </div>
        </div> 
       
      </div>
    </>
  )
}

export default SupportCards

