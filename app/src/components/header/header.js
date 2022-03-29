import './_header.scss';

function Header (props) {

    return (
        <header>
            <div className="container py-4">
                <div className="row">
                    <div className="col-6">
                        <h3>Where in the world ?</h3>
                    </div>
                    <div className="col-6">
                        <div className="mode-switcher">DarkMode</div>
                    </div>
                </div>
            </div>

        </header>
    )
}

export default Header;

