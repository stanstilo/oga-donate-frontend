import React from 'react'
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import community from 'assets/images/homepage/community.jpg';
import  Button  from '@material-ui/core/Button';
import  {AiOutlineFolderOpen} from "react-icons/ai"

const SupportCards = () => {
  return (
  <>
    <div className='card'>
      <img className="card-img-top" style={{width:'100%', height:'150px'}} src={community} alt="Cause"/>
      <div className="card-body">
        <div>
        <AiOutlineFolderOpen/>
        <span className="card-text text-muted">
           Charity
         </span>
         <h4 className="card-title">Donation</h4>  
        </div>
        </div>    
      </div>
    </>
  )
}

export default SupportCards

