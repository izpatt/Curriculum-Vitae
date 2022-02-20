import React from 'react';
import Charac from '../assets/charac.png';
import Developer from '../assets/developer.png';
import Tools from '../assets/tools.png';
import Inter from '../assets/inter.png';
import'../body.css';

//Contains Contact Information 
class CharacterReferences extends React.Component {
    render() {
        return(
            <div className='education'>

                    <h1><img src={Charac} alt='charac' width='50' height='50' /> &nbsp;
                   Character References</h1>
                    
                    <hr></hr>
                    
                    <table>

                        <tr>
                            <td><img src={Developer} alt='developer' width='48' height='56' /></td>  &nbsp;
                            <td>Assoc. Prof. Noel Estrella, DIT
                            <br />
                            <span>Professor at College of Information and Computing Sciences</span>
                            </td>
                            
                            
                        </tr>

                        <tr>
                            <td><img src={Developer} alt='developer' width='48' height='56' /></td>  &nbsp;
                            <td>Asst. Prof. Jerralyn Padua, MSCS
                            <br />
                            <span>Organizational Adviser at Cisco Networking Academy Gateway</span>
                            <span>Dean at College of Information and Computing Sciences</span>
                            </td>
                            
                            
                        </tr>                  

                        <br></br>

                       
                    </table>         
            </div>
            
        )
    }
}
export default CharacterReferences;