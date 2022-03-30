import './_header.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMoon} from "@fortawesome/free-solid-svg-icons";
import {faSun} from "@fortawesome/free-solid-svg-icons";

function Header (props) {

    console.log(props);

    return (
        <header>
            <div className="container py-4">
                <div className="row">
                    <div className="col-6">
                        <h3>Where in the world ?</h3>
                    </div>
                    <div className="col-6">
                        <div onClick={props.onClick} className="mode-switcher">
                            {props.lightmode ?
                                <span className="h4 icon left"> <FontAwesomeIcon icon={faSun} />Light Mode</span>
                                :
                                <span className="h4 icon left"><FontAwesomeIcon icon={faMoon} />Dark Mode</span>}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;

