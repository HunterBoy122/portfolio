import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> education
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Influencer Marketing Campaign Manager</h4>
                <h5>Denaro Media</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Identify and onboard influencers across platforms by researching and building strong relationships. Maintain an organized influencer database and stay current with social media trends.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Computer Application (BCA)</h4>
                <h5>Brainware University</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Graduated with a CGPA of 7.5. Developed a strong foundation in computer applications, digital tools, and programming languages.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Secondary & Higher Secondary Education</h4>
                <h5>PURV Intl. & St. Xavier’s High School</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Completed CBSE (10+2) board exams with 60% overall at PURV International School. Completed ICSE 10th board exams with 76.4% overall at St. Xavier’s High School.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
