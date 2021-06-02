import {React} from 'react'
import { PieChart } from 'react-minimal-pie-chart';

export const TeamPerformance = ({team}) => {  

    const matchesWon = team.matchesWon;
    const winingPercentage = (team.matchesWon/team.matchesPlayed)*100;
    const performanceData = [
        { value: winingPercentage, color: '#008000'}
        
    ]; 
    return (
        <div className = "TeamPerformance">
            <PieChart
                data={performanceData}
                totalValue={100}
                lineWidth={20}
                label={({ dataEntry }) => dataEntry.value}
                labelStyle={{
                    fontSize: '25px',
                    fontFamily: 'sans-serif',
                    fill: '#E38627',
                }}
                labelPosition={0}
            />
        </div>
    );
}