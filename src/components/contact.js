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
            <>
         
            <div className='contact container row'>
                    <div>
                        <img src={Phone} alt='phone' width='15' height='15' /> &nbsp;
                        <span>+639294401786</span>
                    </div>

                    <div>
                        <img src={Address} alt='address' width='15' height='15' />    &nbsp;
                        <span>1348A Lardizabal St. Sampaloc, Manila</span>
                    </div>

                    <div>
                        <img src={Email} alt='email' width='15' height='15' /> &nbsp;
                        <span>patriciannevalenzuela@gmail.com</span>
                    </div>

                    <div>
                    <img src={LinkedIn} alt='linkedIn' width='15' height='15' />  &nbsp;
                        <span>https://www.linkedin.com/in/patvalenzuela</span>
                    </div>
            </div>
         
            </>
            
        )
    }
}
export default Contact;