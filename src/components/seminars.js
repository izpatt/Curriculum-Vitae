import React from 'react';
import Skill from '../assets/skills.png';
import Developer from '../assets/developer.png';
import Tools from '../assets/tools.png';
import Inter from '../assets/inter.png';

import'../body.css';

//Contains Contact Information 
class Seminars extends React.Component {
    render() {
        return(
            <div className='education'>

                    <h1><img src={Skill} alt='skills' width='50' height='50' /> &nbsp;
                   Seminars Attended</h1>
                    
                    <hr></hr>
                    
                    <table>

                        <tr>
                            <td><img src={Developer} alt='developer' width='48' height='56' /></td>  &nbsp;
                            <td>Two-Day Leadership Training Seminar 
                            <br />
                            <span>January 2021</span>
                            </td>
                            
                            
                        </tr>

                        <tr>
                            <td><img src={Developer} alt='developer' width='48' height='56' /></td>  &nbsp;
                            <td>Tech-Knowledge-G: Let's Git Together 
                            <br />
                            <span>January 2022</span>
                            </td>
                            
                            
                        </tr>

                        <tr>
                            <td><img src={Tools} alt='tools' width='48' height='56' /></td>  &nbsp;
                            <td>How To Ace your Web Developer interview - strategies for success
                            <br />
                            <span>Febuary 2022 </span>
                               
                            </td>
                            
                        </tr>

                   

                        <br></br>

                       
                    </table>         
            </div>
            
        )
    }
}
export default Seminars;