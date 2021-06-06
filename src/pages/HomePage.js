import { React, useEffect, useState } from 'react';
import { TeamTile } from '../compoents/TeamTile';
import './HomePage.scss';

export const HomePage = () => {

    const [homeData, setHomePageData ] = useState([]);

    useEffect(  
        () => {
            const getHomePageData = async() => {
                const homePageDataApiResponse = await fetch('http://localhost:8090/v1/dashboard/teams');
                const homePageDataApiResponseStatus = await homePageDataApiResponse.status;
                if(homePageDataApiResponseStatus !== 200) {
                    setHomePageData([]);
                } else {
                    const homePageDataApiResponseData = await homePageDataApiResponse.json();
                    setHomePageData(homePageDataApiResponseData);
                }
            }
            getHomePageData();
        }, []
    );
    if(!homeData) 
        return <div className="HomePage"> Loading teams for dashboard </div>
    return (
        <div className="HomePage">
            {
                homeData.length !==0 ?  homeData.map((team) => <TeamTile key={team}  teamName={team} />) : 
                <div className="No-data-section"> Team details are not available for dashboard </div> 
            }
        </div>
    );
}