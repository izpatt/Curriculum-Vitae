import React from 'react';
import Educ from '../assets/educ.png';
import IICS from '../assets/cics.png';
import SHS from '../assets/shs.png';
import JHS from '../assets/jhs.png';

import'../body.css';

//Contains Educational Background 
class Education extends React.Component {
    render() {
        return(
            
            <div className='initialDiv'>
                    <br/>
                    <h1 className='titleHeader'><img src={Educ} alt='education' width='50' height='50' /> &nbsp;
                   Educational Background</h1>
                    
                    <hr className='hrClassName'></hr>
                    
                    <table>
                        <tr>
                            <td><img src={IICS} alt='iics' width='45' height='55' /></td>  &nbsp;
                            <td className='titleDescription'>UST College of Information and Computing Sciences 
                                <br/>
                                <span className='subtitleDescription'>Magna Cum Laude • Specializing in Website and Mobile Application Development</span>
                                <br/>
                                <span className='dateDescription'>2018-2022</span>
                            </td>
                            
                        </tr>

                        <br></br>

                        <tr>
                            <td><img src={SHS} alt='shs' width='50' height='50' /></td>  &nbsp;
                            <td className='titleDescription'>UST Senior High School   
                                <br/>
                                <span className='subtitleDescription'>Science, Technology, Engineering and Mathematics Strand (STEM)</span>
                                <br/>
                                <span className='dateDescription'>2016-2018</span>
                            </td>
                            
                        </tr>

                        <br></br>

                        <tr>
                            <td><img src={JHS} alt='jhs' width='51' height='52' /></td>  &nbsp;
                            <td className='titleDescription'>UST Junior High School     
                                <br/>
                                <span className='subtitleDescription'>Basic Secondary Education</span>
                                <br/>
                                <span className='dateDescription'>2012-2016</span>
                            </td>
                            
                        </tr>

                    </table>         
            </div>
            
        )
    }
}
export default Education;