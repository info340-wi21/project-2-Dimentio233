export function NavBar(props) {

    return (
        <body>
            <nav>
                <div className="logo">
                    <img className="normal" src="./img/logo.png" alt="an husky logo"/>
                    <a className="logoanchor" href="index.html">
                    <img className="small" src="./img/favicon.png" alt="a smaller logo" />
                    </a>
                    <h1>Goal Husky!</h1>
                </div>
                <ul className="nav-links">
                    <li className="home">
                        <a href="index.html">Home</a>
                    </li>
                    <li className="ranking">
                        <a href="/#">Ranking</a>
                    </li>
                    <li className="settings">
                        <a href="/#">Settings</a>
                    </li>
                     <li>
                        <a href="/#">
                            <button className="btn">Publish</button>
                        </a>
                    </li>
                </ul>
                <div className="burger">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </nav>

        <section className="bar-section">
            <div className="bar-container">
                            {/* <!-- filter bar --> */}
                <div id="myBtnContainer" className="filter-container">
                    <button className="btn active" onclick="filterSelection('all')"> Show all</button>
                    <button id="Health" className="btn" onclick="filterSelection('Health')"> Health</button>
                    <button id="Career" className="btn" onclick="filterSelection('Career')"> Career</button>
                    <button id="Hobby" className="btn" onclick="filterSelection('Hobby')"> Hobby</button>
                    <button id="School" className="btn" onclick="filterSelection('School')"> School</button>
                </div>
                            {/* <!-- Search  --> */}
                <div className="d-flex justify-content-end searchbar">
                    <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Type here.." aria-label="Search"/>
                    <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
                    </form>
                 </div>
            </div>
    </section>

</body>
)}