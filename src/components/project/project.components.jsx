import './project.styles.scss'
import Carousel from '../carousel/carousel.components'
import YoutubeEmbed from '../embed/YouTubeEmbed.components'


export default function Project({headline, subheading, description, roles,  embedId, images}){

    

    

    return(
        <div className='project-container'>
            <div className='headings'>
                <h1 className='project-header'>{headline}</h1>
                <h3 className='project-subheading'>{subheading} </h3>
            </div>
            <div className='main'>
                <div className='left-side'>
                <p className='project-description'>{description}</p>
                <ul className='project-roles'>
                <strong>Roles and Contributions</strong>
                    {roles.map((role) => {
                    return <li>{role}</li>
                    })}
                </ul>
                </div>
            <div className='right-side'>
                <YoutubeEmbed className = "youtube"embedId={embedId} />
            </div>
            
            </div>
            <Carousel className= "carousel" images = {images} embedId = {embedId} /> 
        </div>

    )
}