import React from "react";
import { FaBookReader, FaRegBookmark } from "react-icons/fa";
import TimelineItem from "./TimelineItem";
import SkillItem from "./SkillItem";

function Resume() {
  return (
    <section>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Intellectual Giants School."
            date="2015 — 2018"
            description="Senior Secondary."
          />
          <TimelineItem
            title="Abia Tech Hub"
            date="2022 — 2023"
            description="Did my IT at Abia Tech Hub."
          />
          <TimelineItem
            title="Ignatius Ajuru University."
            date="2019 — 2024"
            description="University"
          />
        </ol>
      </div>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaRegBookmark />
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="HTML, CSS and JavaScript"
            date="2022 — Present"
          />
          <TimelineItem title="React" date="2023 — present" />
        </ol>
      </div>

      <div className="skill">
        <h3 className="h3 skills-title">My skills</h3>
        <ul className="skills-list content-card">
          <SkillItem title="HTML" value={80} />
          <SkillItem title="CSS" value={90} />
          <SkillItem title="Javascript" value={90} />
          <SkillItem title="React" value={70} />
        </ul>
      </div>
    </section>
  );
}

export default Resume;
