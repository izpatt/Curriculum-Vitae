import React from "react";
import Exper from "../assets/suitcase.png";
import Telus from "../assets/telus.jpg";
import CourseHero from "../assets/courseHero.png";
import IEEE from "../assets/ieee.jpg";
import CNAG from "../assets/cnag.png";
import AlgoFilipino from "../assets/algoFilipino.png";

import "../body.css";

//Contains Experiences from Organizations - OJT
class Experience extends React.Component {
  render() {
    return (
      <div className="initialDiv">
        <br />
        <br />
        <h1 className="titleHeader">
          <img src={Exper} alt="experience" width="50" height="50" /> &nbsp;
          Experience
        </h1>

        <hr className="hrClassName"></hr>

        <table>
          <tr>
            <td>
              <img src={Telus} alt="telus" width="45" height="62" />
            </td>{" "}
            &nbsp;
            <td className="titleDescription">
              Applications Developer and Support Intern
              <br />
              <span className="subtitleDescription">
                TELUS International Philippines · Internship
              </span>{" "}
              <br />
              <span className="dateDescription">February 2022 - May 2022</span>
              <ul className="bulletedDescription">
                <li>
                  Practicing Full Stack Technologies such as Java, MYSQL,
                  DevOps, Scrum and Agile Methodology
                </li>
              </ul>
            </td>
          </tr>

          <tr>
            <td>
              <img src={CourseHero} alt="CourseHero" width="45" height="45" />
            </td>{" "}
            &nbsp;
            <td className="titleDescription">
              Non-Voice Virtual Tutor
              <br />
              <span className="subtitleDescription">
                Course Hero · Freelance
              </span>{" "}
              <br />
              <span className="dateDescription">June 2021 - January 2022</span>
              <ul className="bulletedDescription">
                <li>
                  Answers student's questions in Computer Science subject, does
                  research and technical writing
                </li>
              </ul>
            </td>
          </tr>

          <tr>
            <td>
              <img src={IEEE} alt="IEEE" width="49" height="50" />
            </td>{" "}
            &nbsp;
            <td className="titleDescription">
              Executive Associate for Public Relations Officer
              <br />
              <span className="subtitleDescription">
                UST Institute of Electrical and Electronics Engineers - Student
                Branch (UST IEEE-SB)
              </span>{" "}
              <br />
              <span className="dateDescription">August 2021 - May 2021</span>
              <ul className="bulletedDescription">
                <li>
                  Joined and won 3rd place in Stanford IT Learning’s Software
                  Solutions Hackathon
                </li>
                <li>
                  Caption maker and Video Editor for Social Media Publication
                  Materials{" "}
                </li>
              </ul>
            </td>
          </tr>

          <tr>
            <td>
              <img src={CNAG} alt="CNAG" width="50" height="50" />
            </td>{" "}
            &nbsp;
            <td className="titleDescription">
              President
              <br />
              <span className="subtitleDescription">
                UST Cisco Networking Academy Gateway - College of Information
                and Computing Sciences (CNAG-ICS)
              </span>{" "}
              <br />
              <span className="dateDescription">August 2020 - May 2021</span>
              <ul className="bulletedDescription">
                <li>Handles and manages team leaders and members</li>
                <li>Hosted and conducted 4th Virtual General Assembly</li>
                <li>
                  Conducted Virtual Community Development and CNAGaling
                  Competition
                </li>
              </ul>
            </td>
          </tr>

          <tr>
            <td>
              <img
                src={AlgoFilipino}
                alt="AlgoFilipino"
                width="50"
                height="55"
              />
            </td>{" "}
            &nbsp;
            <td className="titleDescription">
              Digital Marketing Associate
              <br />
              <span className="subtitleDescription">Algo Filipino</span> <br />
              <span className="dateDescription">
                February 2021 - March 2021
              </span>{" "}
              <br />
              <ul className="bulletedDescription">
                <li>Manages Social media post engagements</li>
                <li>Monitors and schedules meetings, tasks and deadlines</li>
              </ul>
            </td>
          </tr>

          <tr>
            <td>
              <img src={CNAG} alt="CNAG" width="50" height="50" />
            </td>{" "}
            &nbsp;
            <td className="titleDescription">
              Associate Vice President for Creatives under the Student Council
              <br />
              <span className="subtitleDescription">
                UST Cisco Networking Academy Gateway - College of Information
                and Computing Sciences (CNAG-ICS)
              </span>{" "}
              <br />
              <span className="dateDescription">August 2019 - May 2020</span>
              <ul className="bulletedDescription">
                <li>
                  Creates and designs publication materials such as event
                  posters, lanyards and stickers
                </li>
                <li>Does video editing and other presentations</li>
              </ul>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}
export default Experience;
