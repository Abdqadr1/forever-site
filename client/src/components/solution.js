import '../styles/solution.css';
import IMAGE from './image'
import Countdown from './countdown';
import OrderForm from "./orderForm";
import author from '../data/author';
import header_sexual from '../images/Produt-header-Sexual-1.jpg';
import mens from '../images/Mensss-1.jpg';
import intimacy from "../images/TEST14-1.jpg";
import chart from '../images/ghenghenhub.com_..-1.jpg';
import facts from '../images/Fact-1.jpg';
import stop from '../images/TEST10-1.png';
import checkPrivate from '../images/21116290-0-image-a-4_1573989833831-1.jpg';
import normal from '../images/Flaccid-and-Erect-Penis-Sizes-1.jpg';
import penises from '../images/Penuma-Implant-Before-After-2017-2-300x201-2-1.jpg';
import beforeAndAfter from "../images/beforeaftererect-1.jpg";
import maleSperm from "../images/male_sperm.jpg";
import guaranteed from '../images/guaranteed.jpg';
import beepollen from '../images/bee pollen.png';
import multi_maca from "../images/multi maca.jpg"
import dildo from '../images/dildo.jpg';
import erectile from '../images/errectile_disorder.jpg';
import measure from "../images/TEST12-1.png";
import cert from '../images/cert-1.jpg';
import aloegel from '../images/aloe_vera_gel.png'
import discount from '../images/discount-e1555572446153-1.png';
import buy from '../images/202-2026311_green-buy-now-button-hd-png-download-1.png';
import cash from '../images/cash_on_delivery.jpg';
import pay from '../images/pay-on-delivery-1.png';
import FAQ from '../images/faq.jpg';
// import How from '../images/howitworks.png';
import Whatpple from '../images/what-people-are-saying.jpg';
import IMG1 from '../images/IMG-20200616-WA0026-1.jpg';
import IMG4 from '../images/IMG-20200707-WA0021-1.jpg';
import IMG2 from '../images/TEST9-1.jpg';
import IMG3 from '../images/TEST3-1.jpg';
import React, {useEffect} from 'react';


const Solution = (props) => {
    const tendays = () => {
        let date = new Date();
        date.setDate(date.getDate() + 10);
        return date.toLocaleString("en-US", {
            weekday: 'short',
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        })
    }

    const gotoThanks = () => {
        //unmount countdown before leaving the page
        props.history.push("/thanks");
    } 

    useEffect(() => {
        fetch("/orders/views", {
            method: 'PUT', 
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => res.json())
        .then(data => console.log(data.message))
        .catch(err => console.log(err))
    })

    const {one, two, three } = author.products;

    return ( 
    <div className="solution">
        <IMAGE size="1" image={header_sexual} alt="Header" class="single-image"/>
        <p className="finally-exposed"><span className="bigger-text red-text">"FINALLY EXPOSED: </span>The Ancient Secret That Gives YOU A Proven, Permanent & All-<span>Natural Cure For Erectile Dysfunction,
         Premature Ejaculation and Enlarged Bigger Penis"</span></p>
         <p className="hard-rock center">NOW YOU CAN GET ROCK-HARD ERECTIONS AND BIGGER MANHOOD ON COMMAND...</p>
         <p className="big-text yellow-text center italic" id="pumps">WITHOUT PUMPS, INJECTIONS OR SIDE EFFECTS...AND BE A "MAN OF STEEL" IN THE BEDROOM EVERY TIME​</p>

         <p className="small-text justify">The good news is that in the next few minutes you will have information about <span className="green-text">Natural and Permanent remedy!!! </span> 
         Say No To <span className="red-text">TRAMADOL</span>, <span className="red-text">AGBO</span> and <span className="red-text">other DRUGS for Sex with side effects!!!</span></p>

         <p className="small-text justify">I'm going to share with you an unusual and ancient secret method that now gives me bulging, pulsating<b> "SUPERMAN STYLE ERECTIONS" </b> that make my wife the most satisfied woman on earth</p>

         <IMAGE size="1" image={mens} alt="Good news" class="single-image"/>
         
         <p className="permanent center">A WAY TO PERMANENTLY GET BIGGER PENIS, REVERSE E/D AND PREMATURE EJACULATION THAT IS EASY, SAFE, ALL-NATURAL AND PERMANENT, 
         WITH NO HARMFUL SIDE EFFECTS WHATSOEVER.</p>

         <IMAGE size="1" image={intimacy} alt="intimacy" class="single-image"/>


         <p className="left urge"><span>This is why I urge you to block out all distractions and give me your undivided attention.</span><span>This really is THAT important...</span>
            <span>Not just for you, but for your wife. And for your marriage. In fact...</span>
            </p>

            <ul className="know-list yellow-text">
                <p className="darker-text">DID YOU KNOW???</p>
                <li>20 percent of breakup in Marriages and Relationships is Due to Poor Performance and Dissatisfaction in love making?</li>
                <li>On average a man ejaculates 2-3 minutes after entering his partner - it takes a women on average 12-14 minutes to orgasm.</li>
                <li>About 1 in 10 Men World-wide Have Weak Erection</li>
                <li>50 percent of Men With Diabetes Have Weak Erection</li>
                <li>About 20 Million Men World-wide Have Used Or Are Using Viagra To Treat Weak Erection</li>
            </ul>

            <p className="normal-text">They make life complex and complicated, resulting in low esteem of the man</p>

            <p className="green-text bigger-text center enough"><span>ENOUGH SAID!!! </span>NOW LETS TALK ABOUT PENIS SIZE HERE ARE SOME SCARY FACTS FOR YOU...</p>

            <IMAGE size="1" image={chart} alt="Chart" class="single-image"/>
            <IMAGE size="1" image={facts} alt="facts" class="single-image"/>

            <p className="about3 big-text"><span>FINALLY, ABOUT 1/3 OF MEN WITH THIS PROBLEM DO NOT SEEK HELP</span><span>THIS MEANS, THEY SUFFER IN SILENCE</span><span> NOW, 
            THAT IS A REALLY ALARMING STATISTICS. WEAK ERECTION, PREMATURE EJACULATION AND SMALL MANHOOD IS AN ISSUE THAT CANNOT BE SWEPT UNDER THE CARPET. 
            YOU NEED TO ACT AS FAST AS POSSIBLE.</span> </p>

            <IMAGE size="1" image={stop} alt="Stop everything" class="single-image"/>

            <p className="lucida  center bigger-text purple-text">​Fortunately, You Can Put An End To The Shame Caused By Your Embarrassing Small Iroko, 
            Weak Erection And Chronic Premature Ejaculation – And it’s Easier Than You Ever Thought Possible</p>

            <IMAGE size="2" images= {[{image:checkPrivate, alt: ""}, {image: normal, alt: "Am i normal"}]} />

            <ul className="man-list">
                <li>Are you Having Small Manhood Problem etc.?</li>
                <li>Are You Having Premature Ejaculation?</li>
                <li>Is Your Bedroom Life A Failure Due To Weak Erection?</li>
                <li>Are You Finding It Difficult To Make Your Wife happy in The Other Room?</li>
            </ul>
            <p className="question"><span>If Your ANSWER Is YES to Any of the Questions...</span><span><b>NOW, I'M READY TO SHARE THIS SECRET WITH YOU.</b></span></p>

            <h1 className="center v-space red-text">INTRODUCING...</h1>
            <p className="left bee"><em>{one.toUpperCase() + " & " + two.toUpperCase()}</em>, These are the <span>BEST NATURAL HERBAL SOLUTION FOR WEAK ERECTION, PREMATURE EJACULATION AND SMALL PENIS SYNDROME...</span></p>

            <p className="peru">It is a wonderful plant that is found in Peru. It has served as both food and Medicine for the Peruvians for Hundreds of Years.</p>

            <p className="permit">PERMIT ME TO BREAKDOWN THE COMPONENTS OF THIS WONDERFUL PRODUCTS SO THAT YOU CAN GET THE OPPORTUNITY TO SEE WHY IT IS DIFFERENT FROM ALL OTHER SUPPLEMENTS YOU MAY HAVE USED BEFORE AND SEE WHY YOU SHOULD GET YOURS TODAY.</p>

            <p className="benefits">{one.toUpperCase() + " & " +  two.toUpperCase() + " & " +  three.toUpperCase()} HAVE MANY BENEFITS</p>

            <ul className="benefits-list">
                <li>Corrects Erectile Dysfunction</li>
                <li>Prevents Premature Ejaculation</li>
                <li>Enhances Enlargement of The Penis</li>
            </ul>

            <IMAGE size="2" images={[{image: penises, alt:"make bigger"}, {image: beforeAndAfter, alt: "Before and after"}]} />

            <p className="normal-text">ALOE GEL & MULTI MACA  is so much better at enhancing libido.</p>
            <IMAGE size="1" image={maleSperm} alt="Treating low count sperm" width={300} height={200} class="center-image purple-border"/>

            <h1 className="center">TREATING MALE FERTILITY & LOW SPERM COUNT</h1>
            <p className="normal-text red-text">Becomes more effective when combined with another Super Herbal Supplement called BEE POLLEN</p>
            <IMAGE size="1" image={guaranteed} alt="guaranteed" class="single-image purple-border"/>
            <IMAGE size="1" image={beepollen} alt="bee pollen" class="center-image" width={400} height={400}/>
            <p className="bee-text normal-text"><b>{one.toUpperCase()}</b> combines the powers of honey with royal jelly to bring you a unique supplement =&gt; {two} or North American sage, was used by Southwest indians in the USA at the turn of the the 20th Century for its life-sustaining properties. 
            {one} contains oestrogen substances. It also acts to improve circulation and is a powerful antioxidant. 
            <span>Starting from the next 15 days…You’ll be enjoying sex more than you ever have… your woman will keep wanting more sex, and you get to have sex with her at your own will… no more lame excuses from her like “honey, am tired” …Yes! Even if it’s 2am in the midnight you want her, she will have sex with you.</span></p>

            <p className="blue-text amazing">Then You will feel amazing!..knowing you have the power to deeply satisfy your wife, girlfriend or casual lovers and give her multiple orgasms </p>

            <p className="normal-text v-space">Some Interesting Facts About {one.toUpperCase() +  " & " + two.toUpperCase()}</p>
            <IMAGE size="1" image={multi_maca} alt="Multi Maca" class="center-image purple-border" width={300} height={300}/>
            <p className="normal-text maca-text">
                <span><b>{two.toUpperCase()}</b> contains a large variety of vitamin, Including of 12 kind of vitamins :Vitamin A, C, B1, B2, B3, B5, B6, B12, E.

                Many of these vitamins cannot be stored by the body so we need consume of the any natural supplements that contains vitamin.</span>
            
                <span><b>{three.toUpperCase()}</b> is Immune Support and Function: High levels of ingredients that the body needs to keep healthy life.</span>
                <span>Among the substances identified is <b>{one.toUpperCase()}</b> a long chain sugar (polysaccharide) that is known to have an effect on the cytokine system – the chemical messengers of the immune system.
                </span>
                <span><b>{two.toUpperCase()}</b> is also an Energizer, MACA promote good metabolism, that is the production of energy which the body needs. Also because it contains Vitamin C, that may be important in the strengthening of the immune system.
                </span>
                <span>It is a natural Cleanser, Forever Living <b>{three.toUpperCase()}</b> may cleanse our body system from the toxic substances, due to the oils it contains. On the other hand, because of the presence of proteolytic enzymes, it helps cleaning dead tissues.
                </span>
                <span>It can regenerate cells, BEE POLLEN possesses a hormone that may accelerate the growth of new cells, also eliminating the old ones.</span>
            
            </p>

            <ul className="benefits-list">
                <li>Energy Enhancer – The range of nutrients found within MACA & BEE POLLEN makes it a great natural energizer. The carbohydrates, protein and B vitamins can help keep you going all day by enhancing stamina and fighting off fatigue. 
                Energy is required for long lasting sexual performance</li>
                <li>Immune System Booster – ALOE VERA is good for the intestinal flora and thereby supports the immune system.</li>
            </ul>

            <p className="normal-text">According to holistic health expert Dr. Joseph Mercola, <b>{ one.toUpperCase() + " & " + two.toUpperCase()}</b> has antibiotic-type properties that can help protect the body from contracting viruses. It’s also rich in antioxidants that protect the cells from the damaging oxidation of free radicals.</p>
            <ul className="benefits-list">
                <li>Prostate Aid – Men who suffer from benign prostate hyperplasia can find relief by using BEE POLLEN, it can help reduce inflammation to stop frequent urges to urinate.</li>
            </ul>

            <p className="combine green-text center">WHEN YOU COMBINE <b>{one.toUpperCase() + " + " + two.toUpperCase()}</b>  THE RESULT WOULD BE MASSIVE! JUST LIKE THIS</p>
            <IMAGE size="1" image={dildo} alt="dildo" class="center-image gray-border" width={400} height={400} />

            <p className="center intense">ENJOY BIGGER, HARDER, PLUS MORE INTENSE ERECTIONS !</p>
            <p className="center normal-text italic">With this two products, you enjoy bigger and harder erections! With these two products these are what you will experience.</p>

            <h1 className="center solve">WE ARE SURE YOUR PROBLEMS WOULD BE SOLVED.</h1>
            <IMAGE size="1" image={erectile} alt="erectile disorder" class="center-image" width={400} height={300}  />
            <p className="normal-text bold">Guaranteed !!! Then you won’t need any other drugs or synthetic chemical based Viagra to help you. Our herbs are purely natural herbs for Impotence and the best Impotence natural remedies</p>
            <p className="normal-text">From today you are sure of the following…</p>
            <ul className="benefits-list">
                <li className="strike-through">No more SEXUAL WEAKNESS even if you are old.</li>
                <li>Increases the interest in sexual activity naturally and very useful remedy for loss of libido.</li>
                <li className="strike-through">No more Premature Ejaculation.</li>
                <li className="strike-through">No more embarrassment on bed.</li>
                <li className="strike-through">No more guilt.</li>
                <li className="strike-through">No more emotional instability.</li>
                <li>You will increases stamina, enhance performance, increase energy, confidence and maintains your sex drive.</li>
            </ul>
            <h1 className="underline starter-head center">STARTER PACK</h1>
            <p className="center underline bigger-text">FOR WEAK AND PREMATURE EJACULATION TODAY'S PROMO PRICE FOR 2IN1</p>
            <h1 className="center strike-through">35,000</h1>
            <h1 className="center underline v-space">N25,000</h1>
            <IMAGE size="1" image={measure} alt="Bigger" class="center-image" width={400} height={300} />
            <p className="center underline bigger-text bolder lucida">INTERNATIONALLY CERTIFIED & NAFDAC APPROVED</p>
            <IMAGE size="1" image={cert} alt="Certified"  class="center-image" width={400} height={100}/>
            <IMAGE size="1" image={aloegel} alt={three} class="center-image" width={400} height={400} />
            <p className="normal-text"><b>{three.toUpperCase()}</b> are very safe to use, even on short term basis. You gain erection when you are ready to have sex, no matter how frequent it is. You are naturally and sexually active. Due to there efficacy, NAFDAC put their trust on it and it is approved by them.</p>

            <h1 className="underline starter-head center">SUPER PACK</h1>
            <p className="center underline bigger-text">FOR WEAK AND PREMATURE EJACULATION & ENLARGEMENT</p>
            <h1 className="center strike-through">45,000</h1>
            <h1 className="center underline">35,000</h1>
            <Countdown />
            <IMAGE size="1" image={discount} alt="discount" class="center-image" width={450} height={400}  />
            <p className="center v-space bigger-text blue-text afford">YOU CAN'T AFFORD TO MISS THIS OPPORTUNITY</p>
            <IMAGE size="1" image={buy} alt="Buy now" class="center-image" width={400} height={180} />
            <OrderForm gotoThanks={gotoThanks} date={tendays()}/>
            <IMAGE size="2" images={[{image: pay, alt:"pay on delivery"}, {image: cash, alt: "cash on delivery"}]} />
            <p className="center call"><span>YOU CAN ALSO</span> <span>CALL OR MESSAGE MR LEKAN =&gt;&gt;</span><span>{author.number}</span></p>
            <p className="normal-text">With the below details</p>
            <ul className="benefits-list">
                <li>YOUR FULL NAME</li>
                <li>ITEM NAME: (2IN1 OR 3IN1)</li>
                <li>YOUR ACTIVE PHONE NUMBER(S)</li>
                <li>FULL ADDRESS (HOME, OFFICE, ETC)</li>
                <li>DATE YOU WANT US TO DELIVER IT  <span className="red-text">Note: Delivery date should not be later than {tendays()}. Any delivery after {tendays()} will be ignored</span></li>
            </ul>
            <IMAGE size="1" image={FAQ} alt="Frequently asked questions" class="center-image" width={400} height={180} />
            <div className="faq-container">
                <div className="faq">
                    <p className="faq-title center">WHAT ARE THE INTERNATIONAL AND LOCAL CERTIFICATIONS?</p>
                    <p className="center normal-text">It is NAFDAC  approved in (Nigeria).</p>
                    {/* <IMAGE size="1" image={How} alt="How does it work" class="center-image" width={200} height={200}  /> */}
                </div>
                <div className="faq">
                    <p className="faq-title center">HOW LONG SHOULD I USE THE PRODUCTS?</p>
                    <p className="center normal-text">You should start seeing result within 14 days (2 weeks). But you have to take them for a month for maximum result. You can get the 2 months pack if you really want to cement the gains.</p>
                </div>
                <div className="faq">
                    <p className="faq-title center">HOW DO YOU SHIP THIS PRODUCT TO ME?</p>
                    <p className="center normal-text">We ship nationwide and you can get the products anywhere you are within 24 hours of ordering. You don't have to pay before you get the products. You only pay when you receive your products. We collect cash or transfer on delivery.</p>
                </div>
                <div className="faq">
                    <p className="faq-title center">IS THE PACKAGE DISCREET?</p>
                    <p className="center normal-text">100% discreet, nobody not even the delivery agent knows what is inside the package. Be confident no one knows what is in the package.</p>
                </div>
                <div className="faq">
                    <p className="faq-title center">WHAT IS THE DAILY DOSAGE OF THE PRODUCTS?</p>
                    <p className="center normal-text">We send the dosage and other instructions to your phone number or email immediately the products are delivered to you.</p>
                </div>
                <div className="faq">
                    <p className="faq-title center">DOES THE PRODUCTS HAVE ADVERSE EFFECTS?</p>
                    <p className="center normal-text">No it does not have adverse effects they are natural supplements</p>
                </div>
            </div>
            <IMAGE size="1" image={Whatpple} alt="What are people saying"  class="center-image" width={400} height={200}/>
            <IMAGE size="4" images={[{image: IMG1, class: "whatsapp"}, {image: IMG4, class: "whatsapp"}, {image: IMG2,  class: "fb"}, {image: IMG3, class: "fb"}]}/>
            <p className="center more-test">I COULD STILL SHOW YOU MORE PROOF AND IMAGES WITH LOT AND LOT OF TESTIMONIES BUT DUE TO OUR CLIENT CONFIDENTIALITY POLICY WE ADHERE TO STRICT GUIDANCE.</p>
            <p className="center fbo">{author.name + " " + author.number}</p>

            <p className="copyright center">FOREVER LIVING - Copyright © {new Date().getFullYear()}.</p>
            
    </div> );
}
 
export default Solution;;