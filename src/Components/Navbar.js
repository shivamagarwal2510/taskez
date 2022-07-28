import "./Navbar.css";
import Overview from "../images/Overview.svg";
import Stats from "../images/Stats.svg";
import Projects from "../images/Projects.svg";
import Chat from "../images/Chat.svg";
import Calendar from "../images/Calendar.svg";

const Navbar = ()=>{
    return(
        <>
        <div className="navbar">
            <p className="title">.taskez</p>
            <ul>
            <li className="Overview">
                <img src ={Overview} />
                <span>Overview</span>
            </li>
            <li className="Stats">
                <img src ={Stats} />
                <span>Stats</span>
            </li>
            <li className="Projects">
                <img src ={Projects} />
                <span>Projects</span>
            </li>
            <li className="Chat">
                <img src ={Chat} />
                <span>Chat</span>
            </li>
            <li className="Calendar">
                <img src ={Calendar} />
                <span>Calendar</span>
            </li>
            </ul>
        </div>
        </>
    )
}
export default Navbar;