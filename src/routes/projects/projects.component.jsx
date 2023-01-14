import './projects.styles.scss'
import Project from '../../components/project/project.components'
import landingPage from "../../assets/LandingPage.png"
import homePage from "../../assets/HomePage.png"
import brewersPage from "../../assets/BrewersPage.png"




export default function Projects(){
    return(
        <div className='projects-container'>

        <Project 
            className = "projectOne"
            headline = "Toast (Brewery Finder)" 
            subheading = 'Figma, SQL, Java, SpringBoot, React.js, HTML, CSS' 
            description = "This full stack application allows you to login/register as a “beer-lover” or a “brewer”. As a beer-lover you can view breweries, the beers they brew, and add your own rating to those beers. As a brewer, you can create and maintain a brewery by adding/updating information, and beers to your specific brewery page."
            roles = {["Created wireframes using Figma.",
                    "Built backend RESTful API’s using the builder pattern with Java",
                    "Created postman tests for all API endpoints",
                    "Worked as part of a scrum team using Agile. Took part in daily stand-up’s, worked on two sprints per week for three weeks developing a working minimum viable product",
                    "Helped develop the front end by configuring the fetch calls to the various REST API’s" ]}
            embedId = "1_tPgueXgLY'"
            images = {[landingPage, homePage, brewersPage]}
        />

        <Project 
            className = "projectTwo"
            headline = "Toast (Brewery Finder)" 
            subheading = 'Figma, SQL, Java, SpringBoot, React.js, HTML, CSS' 
            description = "This full stack application allows you to login/register as a “beer-lover” or a “brewer”. As a beer-lover you can view breweries, the beers they brew, and add your own rating to those beers. As a brewer, you can create and maintain a brewery by adding/updating information, and beers to your specific brewery page."
            roles = {["Created wireframes using Figma.",
                    "Built backend RESTful API’s using the builder pattern with Java",
                    "Created postman tests for all API endpoints",
                    "Worked as part of a scrum team using Agile. Took part in daily stand-up’s, worked on two sprints per week for three weeks developing a working minimum viable product",
                    "Helped develop the front end by configuring the fetch calls to the various REST API’s" ]}
            embedId = "1_tPgueXgLY'"
            images = {[landingPage, homePage, brewersPage]}
        />

        <Project 
            className = "projectThree"
            headline = "Toast (Brewery Finder)" 
            subheading = 'Figma, SQL, Java, SpringBoot, React.js, HTML, CSS' 
            description = "This full stack application allows you to login/register as a “beer-lover” or a “brewer”. As a beer-lover you can view breweries, the beers they brew, and add your own rating to those beers. As a brewer, you can create and maintain a brewery by adding/updating information, and beers to your specific brewery page."
            roles = {["Created wireframes using Figma.",
                    "Built backend RESTful API’s using the builder pattern with Java",
                    "Created postman tests for all API endpoints",
                    "Worked as part of a scrum team using Agile. Took part in daily stand-up’s, worked on two sprints per week for three weeks developing a working minimum viable product",
                    "Helped develop the front end by configuring the fetch calls to the various REST API’s" ]}
            embedId = "1_tPgueXgLY'"
            images = {[landingPage, homePage, brewersPage]}
        />


        </div>
    )
}             


 
