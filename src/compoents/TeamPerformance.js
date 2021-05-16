import {React} from 'react'

export const TeamPerformance = ({team}) => {    
    return (
        <div className = "TeamPerformance">
            <p> Matches played : {team.matchesPlayed} </p>
            <p> Matches won : {team.matchesWon} </p>
            <p> Team winning percentage : {team.matchesWon}/{team.matchesPlayed}</p>
        </div>
    );
}