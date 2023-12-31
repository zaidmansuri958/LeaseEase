import React from "react";
import team_data from "../Assets/team.js";
import { TeamCard } from "../TeamCard/TeamCard.jsx";
import './Team.css'

export const Team = () => {
  return (
    <div className="team">
    <h1>Our Team</h1>
    <div className="team-card-item">
        {team_data.map((item, i) => {
          return (
            <TeamCard
              key={i}
              id={item.id}
              image={item.image}
              name={item.name}
              position={item.position}
              desc={item.desc}
              email={item.email}
            />
          );
        })}
      </div>
    </div>
  );
};
