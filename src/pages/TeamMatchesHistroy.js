import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { MatchSummary } from '../compoents/MatchSummary';
import { YearSelector } from '../compoents/YearSelector';
import './TeamMatchesHistory.scss';


export const TeamMatchesHistory = () => {
    const [matchesHistoryData, setMatchesHistory] = useState([{}]);
    const {name, year} = useParams();
    const teamName = name;
    useEffect (
        () => {
            const getMatchesByTeamAndYear = async() => {
                const matchesApiResponse = await fetch(`http://localhost:8090/v1/team/${name}/matches?year=${year}`);
                const matchesApiResponseStatus = await matchesApiResponse.status;
                if(matchesApiResponseStatus !== 200) {
                    setMatchesHistory([]); 
                } else {
                    setMatchesHistory(await matchesApiResponse.json()); 
                } 
            }
            getMatchesByTeamAndYear();
        }, [name, year]
    );
    if(!matchesHistoryData ) 
        return (<h1> Loading matches History </h1>);
    return (
        <div className="TeamMatchesHistory">
            <h2 className="Matches-title">{teamName} matches {year} </h2>
            <div className = "team-history-section">
                <div className ="year-selection-section">
                    <YearSelector teamName={teamName} />
                </div>
                <div className ="matches-history-section">
                    {
                        matchesHistoryData.length !== 0 ?
                            matchesHistoryData.map((currentMatch) => <MatchSummary match = {currentMatch} requestedTeamName = {teamName} /> )
                            : <div className="No-data-section"> No matches played by the {teamName} in year {year} </div> 
                        }
                </div>
            </div>
        </div>
    );
}