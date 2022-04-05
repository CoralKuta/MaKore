import './launch.css';
import Signin from './Signin';
import Signup from './Signup';
import la from './la.png'
import MA from './MaKore-img.png'

function Launch() {
    return (
        <div className='main-box'>
            <div class="logo">
                <img class="splash" src={la} alt=''></img>
                <img class="MAKORE" src={MA} alt=''></img>
            </div>

            <div class="container"></div>

            <div>
                <Signup/>
            </div>
        </div>
    );
}

export default Launch;

