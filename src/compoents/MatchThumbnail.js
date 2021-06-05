import React from 'react'
import { Link } from 'react-router-dom';
import './MatchThumbnail.scss';

export const MatchThumbnail = ({match, requestedTeamName}) => {
    const otherTeamName = match.team1 !== requestedTeamName ? match.team1 : match.team2;
    const linkForOTherTeam = "/team/"+otherTeamName;
    const doesItWinningMatch = requestedTeamName === match.matchWinner ? true: false;
    if(!match.team1) return null;
    return(
        <div className = {doesItWinningMatch? "MatchThumbnail Won-tile" : "MatchThumbnail Lost-tile"}  key={match.id} >
            <span className="Agianst"> Vs </span> 
            <h2 className="Opponent-Team"><Link to={linkForOTherTeam}> {otherTeamName} </Link></h2> 
            <p>{match.matchWinner} won the match by {match.resultMargin} {match.resultType}  </p>
        </div>
    );
}