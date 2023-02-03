import ".//project-cards.styles.scss"
import goodrummage from "../../assets/goodrummage.png"

const ProjectCards = () => {
    return (
      <>
      <h1 className="project-page-heading">Projects</h1>
      <div className="project-cards-container">
        <div className="project-card">
          <h1 className="project-title">Goodrummage</h1>
          <h3 className="project-subheading">eCommerce website</h3>
          
          <br/>
          <img src= {goodrummage} alt="Project 1" className="project-image" />
          <button className="project-button">
            <a href="https://lustrous-druid-c3b2d7.netlify.app/" className="project-link">View Project</a>
          </button>
          <p className="project-description">
          An e-commerce clothing website that allows users to sign-in/up using their google account or email, as well as browse products and add them to the checkout cart.
          </p>
          <ul className="project-points">
            <li className="list-item">Built the entire front-end using React.js, SCSS, and styled components</li>
            <li className="list-item">Maintained responsive front end for flexible mobile and desktop viewing</li>
            <li className="list-item">Created and used firebase storage for a cloud based database</li>
            <li className="list-item">Deployed using CI/CD through Netlify and GitHub</li>
          </ul>
        </div>
        
        </div>
        </>
);
}

export default ProjectCards;

// <div className="project-card">
//           <h2 className="project-title">Project 2</h2>
//           <h3 className="project-subheading">A web development project</h3>
//           <a href="#" className="project-link">View Project</a>
//           <img src="#" alt="Project 2" className="project-image" />
//           <p className="project-description">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor,
//             magna id congue tincidunt, ipsum augue malesuada velit, vel
//             convallis velit magna at velit.
//           </p>
//           <a href="#" className="project-video-link">View Video</a>
//         </div>
//         <div className="project-card">
//           <h2 className="project-title">Project 3</h2>
//           <h3 className="project-subheading">A web development project</h3>
//           <a href="#" className="project-link">View Project</a>
//           <img src="#" alt="Project 3" className="project-image" />
//           <p className="project-description">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor,
//             magna id congue tincidunt, ipsum augue malesuada velit, vel
//             convallis velit magna at velit.
//           </p>
//           <a href="#" className="project-video-link">View Video</a>
//         </div>