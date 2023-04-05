import React from "react";
import "./Text.css";

function Text(props) {
  const { saveTutors40Hour, ourAiAdvisorSyste, className } = props;

  return (
    <div className={`text-13-1 ${className || ""}`}>
      <p className="save-tutors-40-hour cabinetgrotesk-bold-magic-potion-48px">{saveTutors40Hour}</p>
      <p className="our-ai-advisor-syste inter-normal-magic-potion-18px">{ourAiAdvisorSyste}</p>
    </div>
  );
}

export default Text;
