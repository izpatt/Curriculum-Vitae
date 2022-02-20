import React from 'react';
import Certs from '../assets/certs.png';
import Developer from '../assets/developer.png';
import Udemy from '../assets/udemy.png'
import'../body.css';

//Contains Contact Information 
class Licenses extends React.Component {
    render() {
        return(
            <div className='education'>

                    <h1><img src={Certs} alt='cert' width='50' height='50' /> &nbsp;
                   Licenses and Certification</h1>
                    
                    <hr></hr>
                    
                    <table>

                        <tr>
                            <td><img src={Udemy} alt='udemy' width='48' height='56' /></td>  &nbsp;
                            <td>DevOps, CI/CD (Continuous Integration/Delivery for Beginners)
                            <br />
                            <span>February 2022</span>
                            </td>
                            
                            
                        </tr>

                        <tr>
                            <td><img src={Udemy} alt='udemy' width='48' height='56' /></td>  &nbsp;
                            <td>Project Management Fundamentals
                            <br />
                            <span>February 2022</span>
                            </td>
                            
                            
                        </tr>                  

                        <br></br>

                       
                    </table>         
            </div>
            
        )
    }
}
export default Licenses;