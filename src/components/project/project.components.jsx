import './project.styles.scss'
import Carousel from '../carousel/carousel.components'
import YoutubeEmbed from '../embed/YouTubeEmbed.components'


export default function Project({headline, subheading, description, roles,  embedId, images}){

    

    

    return(
        <div className='project-container'>
            <h1 className='project-header'>{headline}</h1>
            <p className='project-subheading'>{subheading} </p>
            <p className='project-description'>{description}</p>
            <ul className='project-roles'>
            <strong>Roles and Contributions</strong>
                {roles.map((role) => {
                   return <li>{role}</li>
                })}
            </ul>
            <Carousel className= "carousel" images = {images} embedId = {embedId} /> 
            <YoutubeEmbed className = "youtube"embedId={embedId} />
        </div>

    )
}