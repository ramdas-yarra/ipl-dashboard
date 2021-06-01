import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { MatchSummary } from "../compoents/MatchSummary";
import { MatchThumbnail } from "../compoents/MatchThumbnail";
import { TeamPerformance } from "../compoents/TeamPerformance";


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
      <h1> {teamDashboardDetails.team.name}</h1>
      <TeamPerformance team = {teamDashboardDetails.team}/>
      <MatchSummary match = {teamDashboardDetails.previouseMatches[0]} requestedTeamName = {teamDashboardDetails.team.name} />
      {teamDashboardDetails.previouseMatches.slice(1).map(currentMatch => <MatchThumbnail key ={currentMatch.id} match ={currentMatch} requestedTeamName={teamDashboardDetails.team.name} /> ) }
    </div>
  );
}