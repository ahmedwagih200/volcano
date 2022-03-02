import './forms.css';
import { Outlet } from 'react-router-dom';
  

function Empty() {
  return (
     <div style={{paddingTop: '90px'}} className='forms'>
         
         <Outlet />
     </div>
    
  );
}

export default Empty;
