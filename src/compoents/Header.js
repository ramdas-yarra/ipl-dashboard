import {React} from 'react';
import { Link} from 'react-router-dom';

export const Header = () => {
    return (
        <div className="Header"> 
            <Link to="/"> <h1>IPL Dashboard </h1> </Link>
        </div>
    );
}