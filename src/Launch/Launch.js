import './launch.css';
import Signin from './Signin';
import Signup from './Signup';
import Chat from '../Chat';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//launch component that routes to the components
function Launch() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Signin />}></Route>
                <Route path="/signup" element={<Signup />}></Route>
                <Route path="/chats" element={<Chat />}></Route>
            </Routes>
        </Router>
    );
}

export default Launch;

