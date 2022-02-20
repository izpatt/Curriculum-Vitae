import React from 'react';
import Skill from '../assets/skills.png';
import Developer from '../assets/developer.png';
import Tools from '../assets/tools.png';
import Inter from '../assets/inter.png';

import'../body.css';

//Contains Contact Information 
class Skills extends React.Component {
    render() {
        return(
            <div className='education'>

                    <h1><img src={Skill} alt='skills' width='50' height='50' /> &nbsp;
                   Skills</h1>
                    
                    <hr></hr>
                    
                    <table>
                        <tr>
                            <td><img src={Developer} alt='developer' width='48' height='56' /></td>  &nbsp;
                            <td>Programming and Other Languages 
                            <br />
                            <span>Website and Mobile Application Development</span>
                                <ul>
                                    <li>HTML, CSS, JavaScript</li>
                                    <li>Java, Python, PHP, Visual Basic</li>
                                    <li>React Native, React</li>

                                </ul>
                                
                            </td>
                            
                        </tr>

                        <tr>
                            <td><img src={Tools} alt='tools' width='48' height='56' /></td>  &nbsp;
                            <td>Tools and Technologies 
                            <br />
                            <span>Software Applications, Databases and Operating Systems </span>
                                <ul>
                                    <li>Git, Dialogflow, Microsoft Office</li>
                                    <li>My SQL, Firebase- Firestore</li>
                                    <li>Windows, Basic Knowledge in Windows Server 2012 and Ubuntu</li>
                                    <li>Adobe Photoshop, Figma, Filmora Video Editing Software</li>

                                </ul>
                                
                            </td>
                            
                        </tr>

                        <tr>
                            <td><img src={Inter} alt='interpersonal' width='48' height='56' /></td>  &nbsp;
                            <td>Interpersonal and other soft skills 
                            <br />
                            <span>Communication, Leadership and Creativity</span>
                                <ul>
                                    <li>Public Speaking and Teaching Ability</li>
                                    <li>Project Management</li>

                                </ul>
                                
                            </td>
                            
                        </tr>

                        <br></br>

                       
                    </table>         
            </div>
            
        )
    }
}
export default Skills;