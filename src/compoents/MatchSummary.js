import React from 'react'

export const MatchSummary = ({match}) => {
    if(!match) return null;
    return(
        <div className = "MatchSummary">
            <div className ="MatchTeam"> {match.team1} Vs {match.team2} </div>
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