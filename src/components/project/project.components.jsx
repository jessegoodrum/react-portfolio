import './project.styles.scss'
import Carousel from '../carousel/carousel.components'


export default function Project({headline, description, images}){

    

    

    return(
        <div className='project-container'>
            <Carousel images = {images} /> 
            <h1 className='project-header'>{headline}</h1>
            <p className='project-paragraph'>{description} </p>
        </div>

    )
}