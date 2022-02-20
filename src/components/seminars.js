import React from 'react';
import Seminar from '../assets/seminars.png';
import Leadership from '../assets/leadership.png';
import Git from '../assets/git.png';
import Interview from '../assets/interview.png';

import'../body.css';

//Contains Contact Information 
class Seminars extends React.Component {
    render() {
        return(
            <div className='initialDiv'>

                <br />
                
                    <h1 className='titleHeader'><img src={Seminar} alt='seminar' width='50' height='50' /> &nbsp;
                   Seminars Attended</h1>

                    <hr className='hrClassName'></hr>

                    <table>

                        <tr>
                            <td><img src={Leadership} alt='leader' width='50' height='50' /></td>  &nbsp;
                            <td  className='titleDescription'>Two-Day Leadership Training Seminar 
                            <br />
                            <span className='dateDescription'>January 2021</span>
                            </td>
                            
                            
                        </tr>
                        <br />

                        <tr>
                            <td><img src={Git} alt='git' width='50' height='50' /></td>  &nbsp;
                            <td  className='titleDescription'>Tech-Knowledge-G: Let's Git Together 
                            <br />
                            <span className='dateDescription'>January 2022</span>
                            </td>
                            
                            
                        </tr>
                        <br />
                        <tr>
                            <td><img src={Interview} alt='tools' width='50' height='50' /></td>  &nbsp;
                            <td  className='titleDescription'>How To Ace your Web Developer interview - strategies for success
                            <br />
                            <span className='dateDescription'>Febuary 2022 </span>
                               
                            </td>
                            
                        </tr>

                   

                        <br></br>

                       
                    </table>         
            </div>
            
        )
    }
}
export default Seminars;