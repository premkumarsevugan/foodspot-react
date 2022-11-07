import pic from "./img/logo.png"
const Navbar = () => {
    return (
            <div className="Navbar">
                <div className="logo">
                    <img src={pic} alt="logo" />
                    <h1>OrAnGe</h1>
                </div>
                <nav>
                    <ul>
                        <li>Veg</li>
                        <li>Non-Veg</li>
                        <li>Admin-Login</li>
                    </ul>
                </nav>
            </div>
            
    );
}

export default Navbar;