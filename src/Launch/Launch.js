import './launch.css';
import Signin from './Signin';
import Signup from './Signup';
import Chat from '../Chat';
import Stam from './Stam';
import MessageHead from '../MessageHead/MessageHead';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function Launch() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Signin />}></Route>
                <Route path="/signup" element={<Signup />}></Route>
                <Route path="/chats" element={<Chat />}></Route>
                <Route path="/chats/:name" element={<Chat/>}></Route>
            </Routes>
        </Router>
    );
}

export default Launch;

