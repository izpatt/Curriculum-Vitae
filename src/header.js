import React from 'react';
import Avatar from './assets/me.png';
import'./body.css';


//Contains Avatar and Personal Information  
class Header extends React.Component {
    render() {
        return(
            <div className='mainHeader'>
                    <table>
                        <tr>
                            <td>
                                <h3>Patricia Anne Valenzuela <span>(She/Her)</span></h3>
                                <p>Junior Full Stack Developer</p>
                                <span>Roman Catholic • August 18, 2000</span>
                            </td>
                            
                            <td>
                                <img src={Avatar} alt='me' width='150' height='150' />
                            </td>
                        </tr>
                       
                    </table>         
            </div>
            
        )
    }
}
export default Header;