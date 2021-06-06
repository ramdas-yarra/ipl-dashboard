import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { MatchSummary } from "../compoents/MatchSummary";
import { MatchThumbnail } from "../compoents/MatchThumbnail";
import { TeamPerformance } from "../compoents/TeamPerformance";

import './TeamDashboard.scss';

export const TeamDashboard =  () => {
    const [teamDashboardDetails, setTeamDashboardDetails] = useState({team:{}, previouseMatches: [ {} ]});
    const { name } = useParams();
    const matchesHistoryUri = `/team/${name}/matches/2020`;
  
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
      return <h1>Loading team dashboard</h1>
    }
  return (
    <div className="TeamDashboard">
      <div className="Team-name-section">
        <h1 className="Team-name"> {teamDashboardDetails.team.name}</h1>
        <h2 className ="Team-Id"> Nick Name - {teamDashboardDetails.team.id}</h2>
        <div className="team-stats-section">
            <div> Matches won</div> <div> {teamDashboardDetails.team.matchesWon}</div>
            <div> Matches Lost</div> <div> {teamDashboardDetails.team.matchesPlayed - teamDashboardDetails.team.matchesWon}</div>
            <div> Matches Played</div> <div> {teamDashboardDetails.team.matchesPlayed}</div>
        </div>
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
        <h3><Link to={matchesHistoryUri}> View more matches &gt; </Link> </h3>
      </div>
    </div>
  );
}