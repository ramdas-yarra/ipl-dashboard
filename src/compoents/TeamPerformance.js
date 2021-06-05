import {React} from 'react'
import { PieChart } from 'react-minimal-pie-chart';

import './TeamPerformance.scss';

export const TeamPerformance = ({team}) => {  
    const winingPercentage = Math.round((team.matchesWon/team.matchesPlayed)*100);
    const percentageBarColor = winingPercentage <= 35? '#C13C37' : winingPercentage <= 50 ? '#ffb961' : '#4CAF50';  
    const performanceData = [
        { value: winingPercentage, color: percentageBarColor}
    ]; 
    return (
        <div className = "TeamPerformance">
            <span className="winning-meter-title"> Team performance meter </span>
            <div className = "peformance-meter-section">
                <PieChart
                    data={performanceData}
                    totalValue={100}
                    lineWidth={13}
                    label={({ dataEntry }) => dataEntry.value+'% winning'}
                    labelStyle={{
                        fontSize: '8px',
                        fontFamily: 'sans-serif',
                        fill: '#E38627',
                    }}
                    startAngle = {-180}
                    lengthAngle = {360}
                    labelPosition={0}
                    animate
                />
            </div>
        </div>
    );
}