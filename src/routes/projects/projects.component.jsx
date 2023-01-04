import './projects.styles.scss'
import Project from '../../components/project/project.components'
import landingPage from "../../assets/LandingPage.png"
import homePage from "../../assets/HomePage.png"
import brewersPage from "../../assets/BrewersPage.png"




export default function Projects(){
    return(
        <div className='projects-container'>

        <Project headline = "Toast (Brewery Finder)" description = 'A full stack application built using SQL, Java, SpringBoot, React.js' embedId="1_tPgueXgLY" images = {[landingPage, homePage, brewersPage]}/>

        </div>
    )
}