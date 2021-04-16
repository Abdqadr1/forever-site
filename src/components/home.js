
import { Link } from 'react-router-dom';
import err from '../images/err1.jpg';
import arrow from '../images/Arrows_down_animated.gif';
const Home = () => {
    return ( <div className="home-container">
            <div className="arrow-div"><img src={arrow} alt="arrow down"/></div>
             <div className="box">
                <h1 className="header">VITOLIZE MEN</h1>
                <div className="flex-box">
                    <img src={err} alt="satisfy madam"/>
                    <p className="welcome-text">
                        Welcome To Men Health Solution Platform. New Natural Remedy To Improve Your Strenght In The Inner Room, Feel Younger Again.
                        Just Try This Natural Booster.
                    </p>
                </div>
                <button className="visit-btn"><Link to='/solution'>VISIT WEBSITE</Link></button> 
            </div>
        
    </div> );
}
 
export default Home;