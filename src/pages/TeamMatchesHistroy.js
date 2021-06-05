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
            const getMatchesByTeamAndYeat = async() => {
                const matchesApiResponse = await fetch(`http://localhost:8090/v1/team/${name}/matches?year=${year}`);
                const matchesResponseParsed = await matchesApiResponse.json();
                setMatchesHistory(matchesResponseParsed);
            }
            getMatchesByTeamAndYeat();
        }, [name, year]
    );
    if(!matchesHistoryData || matchesHistoryData.length === 0 ) 
        return (<h1> Loading matches History </h1>);
    return (
        <div className="TeamMatchesHistory">
            <h2 className="Matches-title">{teamName} matches {year} </h2>
            <div className = "team-history-section">
                <div className ="year-selection-section">
                    <YearSelector teamName={teamName} />
                </div>
                <div className ="matches-history-section">
                    {matchesHistoryData.map((currentMatch) => <MatchSummary match = {currentMatch} requestedTeamName = {teamName} /> )}
                </div>
            </div>
        </div>
    );
}