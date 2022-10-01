import React from 'react';
import {Link} from 'react-router-dom';
import './nav.css';

function Navbar(){
      return (
        
         <div className="header">
             <ul>
                 <li>
                     <Link className="navLink" to="/">Home</Link>
                 </li>
                 <li>
                     <Link className="navLink" to="/student">Student</Link>
                 </li>
                 <li>
                     <Link className="navLink" to="/contact">Contact</Link>
                 </li>
             </ul>
         </div>
        
      );
    
    
   
}
export default Navbar;