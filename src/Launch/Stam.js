import './launch.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

function Stam() {

    const data = useLocation();

    return (
        <div className='wrapper'>
            {console.log(data.state.data)}
        </div>
    );
}

export default Stam;

