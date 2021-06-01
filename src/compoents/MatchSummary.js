import React from 'react'
import { Link } from 'react-router-dom';

export const MatchSummary = ({match, requestedTeamName}) => {

    const otherTeamName = match.team1 !== requestedTeamName ? match.team1 : match.team2;
    const linkForOTherTeam = "/team/"+otherTeamName;
    if(!match.team1) return null;
    return(
        <div className = "MatchSummary">
            <div className ="MatchTeam"> Vs <Link to={linkForOTherTeam}> {otherTeamName} </Link></div>
            <div className ="TossDetails"> 
                Toss won by {match.tossWinner} and decided to {match.tossDecision}
            </div>
            <div className ="MatchResult"> 
                {match.matchWinner} won the match by {match.resultMargin} {match.resultType}
            </div>
            <div className ="PlayOfTheMatch"> 
                Player of the match : {match.playerOfMatch}
            </div>
            <div className = "MatchDate">
                Match held on {match.date}
            </div>
            <div className = "Venue">
                Venue :: {match.venue} at {match.city} 
            </div>
            <div className = "Umpires">
                On field umpires :: {match.umpire1} and {match.umpire2} 
            </div>
        </div>
    );
}