import './SideNav.css'


const SideNav = () => {
    return (
        <div className='SideNav-Wrapper'>
            <img src='' alt='' />
            <div className='SideNav-Links-Wrapper'>
                <h4 className='sidenav-links' id='home'>Home</h4>
                <h4 className='sidenav-links' id='about'>About</h4>
                <h4 className='sidenav-links' id='contact'>Contact</h4>
                <h4 className='sidenav-links' id='services'>Services</h4>
            </div>
        </div>
    );
}

export {SideNav};