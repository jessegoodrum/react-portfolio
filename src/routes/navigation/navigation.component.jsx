import {Link, Outlet } from 'react-router-dom'
import { useState } from 'react'



import './navigation.styles.scss'


export default function Navigation(){


    const [burgerClass, setBurgerClass] = useState('burger-bar unclicked');
    const [menuClass, setMenuClass] = useState('menu hidden');
    const [isMenuClicked, setIsMenuClicked] = useState(false);

    const updateMenu = () => {
        if(!isMenuClicked){
            setBurgerClass('burger-bar clicked');
            setMenuClass('menu visable');
        }else{
            setBurgerClass('burger-bar unclicked');
            setMenuClass('menu hidden');
        }
        setIsMenuClicked(!isMenuClicked);

    }


    return(
        
            <div className='navigation' >
            
            <nav>
                <div className='burger-menu' onClick={updateMenu}>
                    <div className= {burgerClass}></div>
                    <div className= {burgerClass}></div>
                    <div className= {burgerClass}></div>
                </div>
                
                
                
               

                <div className='social-media-links-container'>
                <a href='http://www.linkedin.com/in/jessegoodrum/'><i className="fa-brands fa-linkedin"></i> </a>
                <a href='https://github.com/jessegoodrum/'><i className="fa-brands fa-github"></i></a>
                </div>
                
                
            </nav>
            
            <div className='burger-background'></div>
            
            <div className= {menuClass}>

            <ul>
                <li><Link className='logo-container' to='/'> &lt; HOME / &gt;</Link></li>
                <li>  <Link className='nav-link' to ='/projects'> &lt; PROJECTS / &gt;</Link>    </li>
                <li>  <Link className='nav-link' to ='/resume'>&lt; RESUME / &gt;</Link>    </li>
            </ul>
            </div>
            <Outlet />
            </div>
        
    )
}