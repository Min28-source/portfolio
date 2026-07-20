import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 1025px)", () => {
      function setTranslateX() {
        const boxes = document.querySelectorAll(".work-box");
        if (!boxes.length) return 0;
        let totalWidth = 0;
        boxes.forEach((box) => {
          totalWidth += (box as HTMLElement).offsetWidth;
        });
        const result = totalWidth - window.innerWidth;
        return result > 0 ? result + 200 : 0;
      }

      let timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".work-section",
          start: "top top",
          end: () => `+=${setTranslateX()}`, // Use actual scroll width
          scrub: true,
          pin: true,
          id: "work",
          invalidateOnRefresh: true,
        },
      });

      timeline.to(".work-flex", {
        x: () => -setTranslateX(),
        ease: "none",
      });

      // Clean up (optional, good practice)
      return () => {
        timeline.kill();
        ScrollTrigger.getById("work")?.kill();
      };
    });
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>01</h3>
                <div>
                  <h4>Sales Data Analysis</h4>
                  <p>Excel Reporting</p>
                </div>
              </div>
              <h4>Description & Tools</h4>
              <p>Identified revenue trends and top-performing products, enabling strategic sales decisions using Excel.</p>
            </div>
            <WorkImage image="/images/sales-dashboard.png" alt="Sales Data Analysis" />
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>02</h3>
                <div>
                  <h4>Inventory Management Dashboard</h4>
                  <p>Excel Dashboard</p>
                </div>
              </div>
              <h4>Description & Tools</h4>
              <p>Built dynamic system to track stock levels, reducing overstock and stock-outs by 20% using Excel.</p>
            </div>
            <WorkImage image="/images/time-tracking-dashboard.png" alt="Inventory Management" />
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>03</h3>
                <div>
                  <h4>KPI Dashboard</h4>
                  <p>Power BI Dashboard</p>
                </div>
              </div>
              <h4>Description & Tools</h4>
              <p>Created interactive dashboards for executive reporting, improving decision-making efficiency using Power BI.</p>
            </div>
            <WorkImage image="/images/agent-performance-dashboard.jpg" alt="KPI Dashboard" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
