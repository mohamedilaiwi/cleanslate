import "./Dashboard.css"

const SideDashboard = () => {
    return (
        <div className='Dashboard-Wrapper'>

            <div className='Dashboard-Nav'>
                <a href='/'>Home</a>
                <a href='About'>About</a>
                <a href='Contact'>Contact</a>
                <a href='Services'>Services</a>
            </div>
            <div className="Dashboard-Line"></div>
            <div className='Dashboard-Selected'><a href="/services/Reddit">Reddit</a></div>
            <div className="Dashboard-Line"></div>
            <div className='Dashboard-Settings'>
                <a href='Settings'>Settings</a>
                <a href='Sign-Up'>Sign Up</a>
                <a href='Login'>Login</a>
            </div>
            <div className="Dashboard-Line"></div>
        </div>
    )
}

export {SideDashboard};