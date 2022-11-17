import  React from 'react' 

const Navbar=()=>{
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <div class="navbar-header">
                <a class="navbar-brand" href="#">
                    Start Boostrap
                </a>
            </div>

            <ul className="nav navbar-nav">
                <li className="nav-link">
                    <p href="#">Home</p>
                </li>
                <li className="nav-link">
                    <p href="#">About</p>
                </li>
                <li className="nav-link">
                    <p href="#">Service</p>
                </li>
                <li className="nav-link">
                    <p href="#">Contact</p>
                </li>
            </ul>
        </div>
    </nav>
)
}
export default Navbar