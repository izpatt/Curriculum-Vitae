import React from 'react';
import Educ from './assets/educ.png';
import IICS from './assets/cics.png';
import SHS from './assets/shs.png';
import JHS from './assets/jhs.png';

import'./body.css';

//Contains Contact Information 
class Education extends React.Component {
    render() {
        return(
            <div className='education'>

                    <h1><img src={Educ} alt='education' width='50' height='50' /> &nbsp;
                   Educational Background</h1>
                    
                    <hr></hr>
                    
                    <table>
                        <tr>
                            <td><img src={IICS} alt='iics' width='48' height='56' /></td>  &nbsp;
                            <td>UST College of Information and Computing Sciences 
                                <br/>
                                <span>Specializing in Website and Mobile Application Development</span>
                                <br/>
                                <span>2018-2022</span>
                            </td>
                            
                        </tr>

                        <br></br>

                        <tr>
                            <td><img src={SHS} alt='shs' width='50' height='51' /></td>  &nbsp;
                            <td>UST Senior High School   
                                <br/>
                                <span>Science, Technology, Engineering and Mathematics Strand (STEM)</span>
                                <br/>
                                <span>2016-2018</span>
                            </td>
                            
                        </tr>

                        <br></br>

                        <tr>
                            <td><img src={JHS} alt='jhs' width='51' height='52' /></td>  &nbsp;
                            <td>UST Junior High School     
                                <br/>
                                <span>Basic Secondary Education</span>
                                <br/>
                                <span>2012-2016</span>
                            </td>
                            
                        </tr>

                    </table>         
            </div>
            
        )
    }
}
export default Education;