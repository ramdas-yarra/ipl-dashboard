import React from 'react'

export const MatchThumbnail = ({match}) => {
    if(!match) return null;
    return(
        <div className = "MatchThumbnail" >
            <p> {match.team1} vs {match.team2} </p>
        </div>
    );
}