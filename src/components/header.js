import React from 'react';
import Avatar from '../assets/meCircle.png';
import'../body.css';

//Contains Avatar and Personal Information  
class Header extends React.Component {
    render() {
        return(
            <div className='mainHeader'>
                
                <div id='personalInformation'>
                    <span className='name'>Patricia Anne Valenzuela <span className='gender'>(She/Her)</span></span> <br />
                    <span className='currentWork'>Junior Full Stack Developer</span> <br />
                    <span className='religion'>Roman Catholic • August 18, 2000</span>
                </div>

                <div className='avatar'>
                    <img src={Avatar} alt='me' width='163' height='160' />
                </div>
              
            </div>
            
        )
    }
}
export default Header;