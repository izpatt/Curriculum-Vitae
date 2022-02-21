import React from "react";
import Skill from "../assets/skills.png";
import Developer from "../assets/developer.png";
import Tools from "../assets/tools.png";
import Inter from "../assets/inter.png";

import "../body.css";

//Contains Contact Information
class Skills extends React.Component {
  render() {
    return (
      <div className="initialDiv">
        <br />

        <h1 className="titleHeader">
          <img src={Skill} alt="skills" width="50" height="50" /> &nbsp; Skill
          Set
        </h1>

        <hr className="hrClassName"></hr>

        <table>
          <tr>
            <td>
              <img src={Developer} alt="developer" width="45" height="45" />
            </td>{" "}
            &nbsp;
            <td className="titleDescription">
              Programming and Other Languages
              <br />
              <span className="subtitleDescription">
                Website and Mobile Application Development
              </span>
              <ul className="bulletedDescription">
                <li>HTML, CSS, JavaScript</li>
                <li>Java, Python, PHP, Visual Basic</li>
                <li>React Native, React</li>
              </ul>
            </td>
          </tr>

          <tr>
            <td>
              <img src={Tools} alt="tools" width="45" height="45" />
            </td>{" "}
            &nbsp;
            <td className="titleDescription">
              Tools and Technologies
              <br />
              <span className="subtitleDescription">
                Software Applications, Databases and Operating Systems{" "}
              </span>
              <ul className="bulletedDescription">
                <li>Git, Dialogflow, Microsoft Office</li>
                <li>My SQL, Firebase- Firestore</li>
                <li>
                  Windows, Basic Knowledge in Windows Server 2012 and Ubuntu
                </li>
                <li>Adobe Photoshop, Figma, Filmora Video Editing Software</li>
              </ul>
            </td>
          </tr>

          <tr>
            <td>
              <img src={Inter} alt="interpersonal" width="45" height="45" />
            </td>{" "}
            &nbsp;
            <td className="titleDescription">
              Interpersonal and other soft skills
              <br />
              <span className="subtitleDescription">
                Communication, Leadership and Creativity
              </span>
              <ul className="bulletedDescription">
                <li>Public Speaking and Teaching Ability</li>
                <li>Project Management</li>
              </ul>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}
export default Skills;
