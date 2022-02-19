import React from 'react';
import Exper from './assets/suitcase.png';
import Telus from './assets/telus.jpg';
import CourseHero from './assets/courseHero.png';
import IEEE from './assets/ieee.jpg';
import CNAG from './assets/cnag.png';
import AlgoFilipino from './assets/algoFilipino.png';

import'./body.css';

//Contains Contact Information 
class Experience extends React.Component {
    render() {
        return(
            <div className='education'>

                    <h1><img src={Exper} alt='experience' width='50' height='50' /> &nbsp;
                   Experience</h1>
                    
                    <hr></hr>
                    
                    <table>
                        <tr>
                            <td><img src={Telus} alt='telus' width='48' height='56' /></td>  &nbsp;
                            <td>Applications Developer and Support Intern 
                            <br />
                            <span>Feb 2022 - May 2022</span>
                                <ul>
                                    <li>TELUS International Philippines · Internship</li>
                                    <li>Practicing Full Stack Technologies such as Java, MYSQL, DevOps, Scrum and Agile Methodology</li>

                                </ul>
                            </td>
                            
                        </tr>

                        <br></br>

                        <tr>
                            <td><img src={CourseHero} alt='CourseHero' width='48' height='56' /></td>  &nbsp;
                            <td>Applications Developer and Support Intern 
                                <br/>
                                <span>Jun 2021 - Jan 2022</span>
                                <ul>
                                    <li>Course Hero · Freelance</li>
                                    <li>Answers student's questions in Computer Science subject, does research and technical writing</li>
                                </ul>
                            </td>
                            
                        </tr>

                        <br/>

                        <tr>
                            <td><img src={IEEE} alt='IEEE' width='55' height='56' /></td>  &nbsp;
                                <td>Executive Associate for Public Relations Officer
                                <br/>
                                <span>Aug 2020 - May 2021</span>
                                <ul>
                                    <li>UST Institute of Electrical and Electronics Engineers - Student Branch (UST IEEE-SB)</li>
                                    <li>Joined and won 3rd place in Stanford IT Learning’s Software Solutions Hackathon</li>
                                    <li>Caption maker and Video Editor for Social Media Publication Materials </li>
                                </ul>
                              
                            </td>
                            
                        </tr>

                        <tr>
                            <td><img src={CNAG} alt='CNAG' width='48' height='56' /></td>  &nbsp;
                                <td>President 
                                <br/>
                                <span>Aug 2020 - May 2021</span>
                                <ul>
                                    <li>UST Cisco Networking Academy Gateway - College of Information and Computing Sciences (CNAG-ICS)</li>
                                    <li>Handles and manages team leaders and members</li>
                                    <li>Hosted and conducted 4th Virtual General Assembly</li>
                                    <li>Conducted Virtual Community Development and CNAGaling Competition</li>
                                </ul>
                            </td>
                            
                        </tr>


                        <tr>
                            <td><img src={AlgoFilipino} alt='AlgoFilipino' width='48' height='56' /></td>  &nbsp;
                                <td>Digital Marketing Associate
                                <br/>
                                <span>Feb 2021 - Mar 2021</span>
                                <ul>
                                    <li>Manages Social media post engagements</li>
                                    <li>Monitors and schedules meetings, tasks and deadlines</li>
                                </ul>
                
                            </td>
                            
                        </tr>

                        <tr>
                            <td><img src={CNAG} alt='CNAG' width='48' height='56' /></td>  &nbsp;
                                <td>Associate Vice President for Creatives under the Student Council 
                                <br/>
                                <span>Aug 2019 - May 2020</span>
                                <ul>
                                    <li>UST Cisco Networking Academy Gateway - College of Information and Computing Sciences (CNAG-ICS)</li>
                                    <li>Creates and designs publication materials such as event posters, lanyards and stickers</li>
                                    <li>Does video editing and other presentations</li>
                                </ul>
                            </td> 
                        </tr>

                    </table>         
            </div>
            
        )
    }
}
export default Experience;