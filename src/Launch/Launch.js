import './launch.css';
import Signin from './Signin';
import Signup from './Signup';
import New from './MKTRAN.png'
import Talking from './talking1.png'
import MK from './footer.png'
import Stam from './Stam';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function Launch() {

    return (
        <div className='wrapper'>
            <div className="logo-space"><img className='logo' src={New}></img></div>
            <Router>
                <div>
                    <div>
                        <Routes>
                            <Route path="/" element={<Signin />}></Route>
                            <Route path="/signup" element={<Signup />}></Route>
                            <Route path="/ido" element={<Stam />}></Route>
                        </Routes>
                    </div>
                </div>
            </Router>

            <div className='menu'>
                <img className='side' src={Talking}></img>
                <img className='footer' src={MK}></img>
            </div>
        </div>

    );
}

export default Launch;

