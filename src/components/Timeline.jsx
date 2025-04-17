import React from "react";
import './Timeline.css';

const Timeline = ({ entries }) => {
  return (
    <div className="timeline">
      {entries.map((entry, index) => (
        <div className="timeline-item" key={index}>
          <div className="timeline-point" />
          <div className="timeline-content">
            <h5>{entry.title}</h5>
            <ul>
              {entry.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
