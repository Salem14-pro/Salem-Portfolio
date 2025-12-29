import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Entry-Level Developer</h4>
                <h5>Magans Ltd</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              I worked here as a young developer new to the tech world.
              Assisted in the development of javascript features that are now used by 50+ users.
              Participated in 2 training programs to enhance my skills.
              Recognized as "Employee of the Month" for dedication and performance.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Mid-Level Developer</h4>
                <h5>Tech Club</h5>
              </div>
              <h3>2023-2024</h3>
            </div>
            <p>
              Tech Club - an institution for training students.
              Managed 3 projects simultaneously, all delivered on time and under budget.
              Developed solutions that improved customer satisfaction by 30%.
              Collaborated with cross-functional teams to achieve several goals.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Designer & Founder</h4>
                <h5>abSENSE & Braniac</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              I am now a member of 'abSENSE' an elite team of young designers and One of the founders of Braniac an excellent E-Learning Service that uses AI to create quizes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
