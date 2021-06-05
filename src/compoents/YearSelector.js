import { React } from 'react'
import { Link } from 'react-router-dom';
import './YearSelector.scss'

export const YearSelector = ({teamName}) => {

    let years = [];
    const startYear = process.env.REACT_APP_DASHBOARD_START_YEAR;
    const endYear = process.env.REACT_APP_DASHBOARD_END_YEAR;
    let i = endYear;
    while(i >= startYear ) {
        years.push(i);
        --i;
    }
    return(
        <ol className="YearSelector">
            {years.map(
                year => <li key={year}><Link to={`/team/${teamName}/matches/${year}`} > {year}</Link>   </li>  )}
        </ol>
    );
}