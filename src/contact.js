import React from 'react';
import Avatar from './assets/me.png';
import Phone from './assets/phone.png';
import Email from './assets/email.png';
import Address from './assets/address.png';

import'./body.css';

//Contains Contact Information 
class Contact extends React.Component {
    render() {
        return(
            <div className='contact'>
                    <table>
                        <tr>
                            <td><img src={Phone} alt='me' width='20' height='20' /></td>
                            <td>+639294401786 | 8562-75-61</td>
                            &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; 

                            <td><img src={Email} alt='me' width='20' height='20' /></td>
                            <td>patriciannevalenzuela@gmail.com</td>
                            &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; 

                            <td><img src={Address} alt='me' width='20' height='20' /></td>
                            <td>1348 A Lardizabal Street Sampaloc, Manila</td>
                        </tr>
                    </table>         
            </div>
            
        )
    }
}
export default Contact;