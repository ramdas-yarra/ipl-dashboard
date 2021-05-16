import React, { useEffect, useState } from "react";
import { MatchSummary } from "../compoents/MatchSummary";
import { MatchThumbnail } from "../compoents/MatchThumbnail";
import { TeamPerformance } from "../compoents/TeamPerformance";


export const TeamDashboard =  () => {
    const [teamDashboardDetails, setTeamDashboardDetails] = useState({team:{}, previouseMatches: [ {} ]});

    useEffect(
        () => {
            const getTeamDashboard = async() => {
                const dashboardApiResponse = await fetch('http://localhost:8090/v1/dashboard/team/CSK');
                const dashboardData = await dashboardApiResponse.json();
                setTeamDashboardDetails(dashboardData);
                
            };
            getTeamDashboard();
        }, []
    );

  return (
    <div className="TeamDashboard">
      <h1> {teamDashboardDetails.team.name}</h1>
      <TeamPerformance team = {teamDashboardDetails.team}/>
      <MatchSummary match = {teamDashboardDetails.previouseMatches[0]} />
      {teamDashboardDetails.previouseMatches.slice(1).map(currentMatch => <MatchThumbnail key ={currentMatch.id} match ={currentMatch}/> ) }
    </div>
  );
}