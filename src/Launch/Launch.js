import './launch.css';
import Signin from './Signin';
import Signup from './Signup';
import New from './MKTRAN.png'
import Talking from './talking1.png'

function Launch() {
    
    return (
        <div className='wrapper'>
            <div className="logo-space"><img  className='logo' src={New}></img></div>
            <Signup />
            <div className='menu'><img className='side' src={Talking}></img></div>
        </div>

    );
}

export default Launch;

