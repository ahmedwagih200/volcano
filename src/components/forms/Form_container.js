import './forms.css';
import { Outlet } from 'react-router-dom';
  

function Form_container() {
  return (
     <div style={{paddingTop: '90px'}} className='forms'>
         
         <Outlet />
     </div>
    
  );
}

export default Form_container;
