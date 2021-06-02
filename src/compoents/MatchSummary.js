import React from 'react';
import { Link } from 'react-router-dom';
import './MatchSummary.scss';

export const MatchSummary = ({match, requestedTeamName}) => {

    const otherTeamName = match.team1 !== requestedTeamName ? match.team1 : match.team2;
    const linkForOTherTeam = "/team/"+otherTeamName;
    if(!match.team1) return null;
    return(
        <div className = "MatchSummary">
            <div className="Match-Details-section">
                <span className="Agianst"> Vs </span> 
                <h2 className="Opponent-Team"><Link to={linkForOTherTeam}> {otherTeamName} </Link></h2> 
                <h3 className="Match-Date"> Held on {match.date}  </h3>
                <h3 className ="Match-Venue"> {match.venue}, {match.city} </h3>
                <h3 className ="Match-Result"> {match.matchWinner} won the match by {match.resultMargin} {match.resultType}</h3>
            </div>
            <div className="Additional-Details-section">
                <h3> First Innings </h3> <p>{match.team1}</p>
                <h3> Second Innings </h3> <p>{match.team2}</p>
                <p> Toss won by {match.tossWinner} and decided to {match.tossDecision} </p>
                <h3> Player of the Match</h3> <p> {match.playerOfMatch} </p>
                <h3> On field umpires </h3> <p> {match.umpire1}, {match.umpire2} </p>
            </div>
        </div>
    );
}