import React from 'react';
import Trophy from '../assets/trophy.png';
import Synergy from '../assets/synergy.jpg';
import UST from '../assets/ust.png';
import CICS from '../assets/cics.png';
import JHS from '../assets/jhs.png';
import'../body.css';

//Contains Contact Information 
class HonorsAwards extends React.Component {
    render() {
        return(
            <div className='initialDiv'>
                    <br/><br/>
                    <h1 className='titleHeader'><img src={Trophy} alt='trophy' width='50' height='50' /> &nbsp;
                   Honors and Awards</h1>
                    
                    <hr className='hrClassName'></hr>
                    
                    <table>
                        <tr>
                            <td ><img src={Synergy} alt='synergy' width='50' height='50' /></td>  &nbsp;
                            <td className='titleDescription'>3rd Place at Stanford IT Learning's Software Solution 
                            <br />
                            <span className='dateDescription'>March 2021</span>
                                <ul className='bulletedDescription'>
                                    <li>Proposed a mobile application called Freud which aims to address mental health 
concerns through an interactive chatbot</li>
                                </ul>
                                
                            </td>
                            
                            
                        </tr>

                        <tr>
                            <td><img src={UST} alt='ust' width='50' height='50' /></td>  &nbsp;
                            <td className='titleDescription'>People's Choice Award (Design Layout Category)
                            <br />
                            <span className='dateDescription'>January 2019 </span>
                                <ul className='bulletedDescription'>
                                    <li>Issued by UST - Office for Admissions (OFAD)</li>
                                </ul>
                                
                            </td>
                            
                        </tr>

                        <tr>
                            <td><img src={CICS} alt='cics' width='48' height='56' /></td>  &nbsp;
                            <td className='titleDescription'>Consistent Dean's Lister 
                            <br />
                            <span className='dateDescription'>1st year to 4th year College</span>
                                <ul className='bulletedDescription'>
                                    <li>University of Santo Tomas - College of Information and Computing Sciences (UST CICS)</li>
                                </ul>
                                
                            </td>  
                        </tr>

                        <tr>
                            <td><img src={JHS} alt='jhs' width='50' height='50' /></td>  &nbsp;
                            <td className='titleDescription'>Principal's List 
                            <br />
                            <span className='dateDescription'>2nd year Junior High School</span>
                                <ul className='bulletedDescription'>
                                    <li>University of Santo Tomas - Junior High School</li>
                                </ul>
                                
                            </td>  
                        </tr>

                        <br></br>

                       
                    </table>         
            </div>
            
        )
    }
}
export default HonorsAwards;