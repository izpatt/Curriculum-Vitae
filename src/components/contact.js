import React from 'react';
import Phone from '../assets/phone.png';
import Email from '../assets/email.png';
import LinkedIn from '../assets/linkedIn.png';
import Address from '../assets/address.png';
import'../body.css';

//Contains Contact Information 
class Contact extends React.Component {
    render() {
        return(
            <div className='contact'>
                    
                    <table>
                        <tr>
                            <td><img src={Phone} alt='phone' width='15' height='15' /></td>
                            <td>+639294401786</td>
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 

                            <td><img src={Email} alt='email' width='15' height='15' /></td>
                            <td>patriciannevalenzuela@gmail.com</td>
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 

                            <td><img src={LinkedIn} alt='linkedIn' width='15' height='15' /></td>
                            <td>https://www.linkedin.com/in/patvalenzuela/</td>
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;

                            <td><img src={Address} alt='address' width='15' height='15' /></td>
                            <td>1348A Lardizabal St. Sampaloc, Manila</td>

                            
                        </tr>
                    </table>         
            </div>
            
        )
    }
}
export default Contact;