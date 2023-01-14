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
                    <h1>Hello! <br /> My name is Jesse Goodrum</h1>
                    <h1>I'm a Full Stack Developer based in Seattle, WA</h1>
                    <p> I recently discovered a passion for web development and have been actively pursuing it since early 2022. My skills include Java, JavaScript, SQL, React, Redux, Bootstrap, HTML5, CSS, Spring Boot, PostgreSQL, and JUnit. I have a creative mindset and an interest in technology and recently graduated from an accelerated full stack web development program through Merit America. I am continuously learning and improving my skills in my field..</p>
                </div>

            </div>
        </div>
    )
}