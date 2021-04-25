import '../styles/thanks.css';
import IMAGE from './image';
import forever from '../images/header.jpg';
import beepollen from '../images/bee pollen.png';
import multi_maca from "../images/multi maca.jpg";
import aloegel from '../images/aloe_vera_gel.png';
import author from '../data/author';
import sam from '../images/sam_akpala.jpg';
import john from '../images/john_uche.jpg';

const ThankYou = () => {
    const {one, two, three} = author.products;
    return ( 
        <div className="thanks">
            <div className="head">
            <p><IMAGE size="1" image={forever} alt="Forever Living"/><span>FOREVER LIVING NG</span></p>
            </div>
            <div className="body">
                <h1 className="center">ORDER HAS BEEN PLACED SUCCESSFULLY</h1>
                <p className="text">THANK YOU, YOUR ORDER HAS BEEN RECEIVED, KINDLY DO NOT PLACE MULTIPLE ORDERS ON ANY OF OUR OTHER SOCIAL SITES AS THIS WILL TERMINATE YOUR INITIAL REQUEST. 
                <span>FUTHERMORE KINDLY PICKUP YOUR CALL TO CONFIRM FURTHER INTEREST BY OUR AGENTS, WE DELIVER WHERE EVER YOU TRAVEL TO.</span>
                </p>
            </div>
            <div className="products">
                <div className="product">
                    <IMAGE size="1" image={beepollen} alt={one} />
                    <h2>Benefit</h2>
                    <p className="text">Research by scientists suggest that <b>{one}</b> provides energy and may enhance stamina.</p>
                </div>
                <div className="product">
                    <IMAGE size="1" image={multi_maca} alt={two} />
                    <h2>Benefit</h2>
                    <p className="text">A Proven, Tested & Assured Solution To Weak Erection, Quick Ejaculation. & Small Blokos That Has Helped Several Thousands Of Men Pouring Within 1-Minute Of Action.</p>
                </div>
                <div className="product">
                    <IMAGE size="1" image={aloegel} alt={three} />
                    <h2>Benefit</h2>
                    <p className="text">Forever <b>{three}</b> brings together two powerful ingredients from opposite sides of the world for a perfect harmony of nutrition and endurance</p>
                </div>
            </div>
            <div className="customers">
                <div className="customer">
                    <p className="text"><IMAGE size="1" image={sam} width={100} height={100} />"I NEVER BELIEVED THIS PRODUCT WORKS UNTIL I TRIED IT ..."<span>- SAMUEL AKPALA</span></p>
                </div>
                <div className="customer">
                    <p className="text"><IMAGE size="1" image={john} width={100} height={100} />"USUALLY I CAN'T COME OUT TO SPEAK ON THIS BUT WANNA THANK FOREVER LIVING PRODUCTS, NO MORE WEAK ERECTION ..."<span>- JOHN UCHE</span></p>
                </div>
            </div>
            <footer>
                <p className="center">Copyright © {new Date().getFullYear()}. Forever Living Products. All Rights Reserved.</p>
            </footer>
        </div>
     );
}
 
export default ThankYou;