import React from 'react'
import { Link } from 'react-router-dom';

export const MatchThumbnail = ({match, requestedTeamName}) => {
    const otherTeamName = match.team1 !== requestedTeamName ? match.team1 : match.team2;
    const linkForOTherTeam = "/team/"+otherTeamName;
    if(!match.team1) return null;
    return(
        <div className = "MatchThumbnail" >
            <p> vs <Link to={linkForOTherTeam}>{otherTeamName}</Link>,  
            {match.matchWinner} won the match by {match.resultMargin} {match.resultType}  </p>
        </div>
    );
}