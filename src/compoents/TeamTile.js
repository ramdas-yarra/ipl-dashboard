import {React} from 'react';
import { Link } from 'react-router-dom';
import './TeamTile.scss';

export const TeamTile = ( {teamName}) => {

    return(
        <div className="TeamTile"> 
            <Link to ={`/team/${teamName}`}> {teamName} </Link>
        </div>
    );
}