import './launch.css';
import Signin from './Signin';
import Signup from './Signup';

import Chat from '../Chat';
import MessageHead from '../MessageHead/MessageHead';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function Launch() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Signin />}></Route>
                <Route path="/signup" element={<Signup />}></Route>
                <Route path="/chat/*" element={<Chat />}></Route>
            </Routes>
        </Router>
    );
}

export default Launch;

