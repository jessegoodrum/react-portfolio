import './home.styles.scss'
import image from "../../assets/coding.png";
import jesse from "../../assets/JesseGoodrum.JPG"


export default function Home(){

    return(

        <div className='home-container'>
            <img src={image} alt = "coding" className='picture'/>

            <div className='about-me-container'>

                <img src={jesse} alt="pic of jesse" className='image'/>
                
                <div className='text-container'>
                    <h1>Hi! My name is Jesse Goodrum.</h1>
                    <h1>I'm a Full Stack Developer based in Seattle, WA</h1>
                    <p> I recently got into web development in early 2022 and have since found my passion.
                    I have always been a creative, and interested in technology. In 2022 I gradutated an accelerated 
                    full stack web development program through Merit America, and have since had my nose to the grindstone learning
                    all that I can about web development.</p>
                </div>

            </div>
        </div>
    )
}