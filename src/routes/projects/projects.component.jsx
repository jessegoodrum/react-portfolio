import './projects.styles.scss'
import Project from '../../components/project/project.components'
import jesse from "../../assets/JesseGoodrum.JPG"
import logo from '../../assets/devJesse.png'




export default function Projects(){
    return(
        <div className='projects-container'>

        <Project headline = "Mock Data" description = 'description is here' images = {[jesse, logo]}/>

        </div>
    )
}