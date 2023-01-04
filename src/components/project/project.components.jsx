import './project.styles.scss'
import Carousel from '../carousel/carousel.components'


export default function Project({headline, description, embedId, images}){

    

    

    return(
        <div className='project-container'>
            <h1 className='project-header'>{headline}</h1>
            <p className='project-paragraph'>{description} </p>
            <Carousel images = {images} embedId = {embedId} /> 
            
        </div>

    )
}