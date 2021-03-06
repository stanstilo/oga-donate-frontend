
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
        </div>
        </div> 
        <LinearProgressWithLabel value={70}/>
        <Button variant="contained" className="donate-btn">
           Donate
        </Button>
      </div>
    </>
  )
}

export default Cards

