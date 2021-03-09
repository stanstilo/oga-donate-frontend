
import React from 'react'
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import business from 'assets/images/homepage/business.jpg';
import  Button  from '@material-ui/core/Button';
import  {AiOutlineFolderOpen} from "react-icons/ai"

const LinearProgressWithLabel = (props) =>{
  return (
    <div display="flex" alignItems="center">
      <div width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </div>
      <div minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(props.value)}%`}</Typography>
      </div>
    </div>
  );
}

const Cards = () => {
  return (
  <>
    <div className='card'>
      <img className="card-img-top" src={business} alt="imageCard"/>
      <div className="card-body">
        <div>
        <AiOutlineFolderOpen/>
        <span className="card-text text-muted">
           Charity
         </span>
        <h4 className="card-title">Donation</h4>   
        <LinearProgressWithLabel value={70}/>
        <div className="row contributed-progress-view ">
          <p>$1,000</p>
          <span className='percent'>232%</span>
        </div>
        <div className="donate-btn-container">
        <Button variant="contained" className="donate-btn">
           Donate
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

export default Cards

