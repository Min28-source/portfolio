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
                <h4>CX Associate</h4>
                <h5>Teleperformance International</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Handled 100+ customer queries daily, maintaining high satisfaction levels.
              Performed accurate data entry and verification in Rossom portal, achieving 98% accuracy.
              Maintained confidential customer data while generating reports for team leads.
              Coordinated across teams to reduce data processing time by 15%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Associate</h4>
                <h5>Thrive Hive, Mohali</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Developed 10+ Excel logistics reports weekly, improving reporting efficiency by 25%.
              Built interactive Power BI dashboards to track KPIs and operational metrics.
              Organized and analyzed 50,000+ data points, ensuring 99% accuracy across reports.
              Streamlined reporting workflows, reducing manual data errors by 20%.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;
