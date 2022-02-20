import React from 'react';
import Certs from '../assets/certs.png';
import Developer from '../assets/developer.png';
import Udemy from '../assets/udemy.png'
import'../body.css';

//Contains Contact Information 
class Licenses extends React.Component {
    render() {
        return(
            <div className='initialDiv'>
                <br />
                    <h1 className='titleHeader'><img src={Certs} alt='cert' width='50' height='50' /> &nbsp;
                   Licenses and Certification</h1>
                    
                    <hr></hr>
                    
                    <table>

                        <tr>
                            <td><img src={Udemy} alt='udemy' width='48' height='48' /></td>  &nbsp;
                            <td className='titleDescription'>DevOps, CI/CD (Continuous Integration/Delivery for Beginners)
                            <br />
                            <span className='dateDescription'>February 2022</span>
                            </td>
                            
                            
                        </tr>
                        
                        <br/>
                        <tr>
                            <td><img src={Udemy} alt='udemy' width='48' height='48' /></td>  &nbsp;
                            <td className='titleDescription'>Project Management Fundamentals
                            <br />
                            <span className='dateDescription'>February 2022</span>
                            </td>
                            
                            
                        </tr>                  

                        <br></br>

                       
                    </table>         
            </div>
            
        )
    }
}
export default Licenses;