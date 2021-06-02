import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { MatchThumbnail } from '../compoents/MatchThumbnail';


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
    if(!matchesHistoryData) 
        return (<h1> Loading matches History </h1>);
    return (
        <div>
            <h2>Team History</h2>
            {matchesHistoryData.map((currentMatch) => <MatchThumbnail match ={currentMatch} requestedTeamName={teamName} /> )}
        </div>
    );
}