import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { MatchSummary } from "../compoents/MatchSummary";
import { MatchThumbnail } from "../compoents/MatchThumbnail";
import { TeamPerformance } from "../compoents/TeamPerformance";

import './TeamDashboard.scss';

export const TeamDashboard =  () => {
    const [teamDashboardDetails, setTeamDashboardDetails] = useState({team:{}, previouseMatches: [ {} ]});
    const { name } = useParams();
    
    useEffect(
        () => {
            const getTeamDashboard = async() => {
                const dashboardApiResponse = await fetch(`http://localhost:8090/v1/dashboard/team/${name}`);
                const dashboardData = await dashboardApiResponse.json();
                setTeamDashboardDetails(dashboardData);  
            };
            getTeamDashboard();
        }, [name]
    );
    if(!teamDashboardDetails || !teamDashboardDetails.team.name) {
      return <h1>Team details not found</h1>
    }
  return (
    <div className="TeamDashboard">
      <div className="Team-name-section">
        <h1 className="Team-name"> {teamDashboardDetails.team.name}</h1>
        <h2 className ="Team-Id"> Nick Name - {teamDashboardDetails.team.id}</h2>
      </div>
      <div className="Team-performance-section">
        <TeamPerformance team = {teamDashboardDetails.team}/>
      </div>
      <div className="Match-datails-section">
        <h3> Previous match summary </h3>
        <MatchSummary match = {teamDashboardDetails.previouseMatches[0]} requestedTeamName = {teamDashboardDetails.team.name} />
      </div>
      {teamDashboardDetails.previouseMatches.slice(1).map(currentMatch => <MatchThumbnail key ={currentMatch.id} match ={currentMatch} requestedTeamName={teamDashboardDetails.team.name} /> ) }
      <div className="More-matches-link">
         <a href="#">  More </a>
      </div>
    </div>
  );
}