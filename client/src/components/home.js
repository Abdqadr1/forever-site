
import { Link } from 'react-router-dom';
import err from '../images/err1.jpg';
import arrow from '../images/Arrows_down_animated.gif';
import '../styles/home.css';
const Home = () => {
    return (
         <div className="home-container">
            <header></header>
            <div className="arrow-div"><img src={arrow} alt="arrow down"/></div>
             <div className="box">
                <h1 className="header">VITOLIZE MEN</h1>
                <div className="flex-box">
                    <img src={err} alt="satisfy madam"/>
                    <p className="welcome-text">
                        Welcome To Men Health Solution Platform. New <span>Natural Remedy</span> To Improve Your Strength In The Inner Room, Feel Younger Again.
                        Just Try This <span>Natural Booster</span>.
                    </p>
                </div>
                <button className="visit-btn"><Link to='/solution'>VISIT WEBSITE</Link></button> 
            </div>
            <footer>
            <p className="disclaimer">Disclaimer</p>
            <p className="disclaimer-text">This site is not a part of the Facebook or Google websites or Facebook Inc. or Google LLC. Additionally, this site is NOT endorsed by Facebook or Google in any way. FACEBOOK is a trademark of Facebook, Inc. GOOGLE is a trademark of Google LLC.</p>
            </footer>   
        </div> );
}
 
export default Home;