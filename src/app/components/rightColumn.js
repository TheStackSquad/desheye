'use client'
import CustomProgressIndicator from '../motionUtils/customProgressIndicator';
import '../../css/RightColumn.css';

const RightColumn = ({ skills }) => {
  return (
    <div className="right-column">
          <div className="content-card">
              <div className="header-section">
                <button className="freelance-button">
                  <span>Available for freelance work</span>
                  <svg
                    className="download-icon"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </button>
                <div className="title-container">
                  <div className="subtitle">Full Stack Developer</div>
                  <h1 className="main-title">Desheye Akalla</h1>
                </div>
              </div>

              <h2 className="section-title">A Little Bit About Me</h2>
              <p className="description">
              Passionate Full Stack Web Developer with expertise in creating
              dynamic, user-friendly web applications. Skilled in front-end
              technologies like React and backend frameworks like Node.js,
              I build scalable, efficient solutions.
              Dedicated to delivering seamless user
              experiences and clean, maintainable code
              </p>
            
            <div className="skills-grid">
              {skills.map((skill) => (
                     <CustomProgressIndicator
                     key={skill.label}
                     percentage={skill.percentage}
                     label={skill.label}
                     description={skill.description}
                   />
           
              ))}
            </div>

          </div>
          </div>
  );
};

export default RightColumn;