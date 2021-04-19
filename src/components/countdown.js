import React, {Component} from 'react';

class Countdown extends Component {
    state = { 
        timeInMilli: (60 * 60 * 24 * 5) + (60 * 60 * 7) + (60 * 50) + 59,
     }

     updateTimer =  () => {
            this.setState({
                timeInMilli: this.state.timeInMilli - 1,
             })
         }
    
     componentDidMount(){
         setInterval(this.updateTimer, 1000);

     }

     componentWillUnmount(){
         clearInterval(this.updateTimer);
     }

    render() { 
        const time = this.state.timeInMilli;
        var days  = Math.floor(time / (60 * 60 * 24));
        var hours = Math.floor((time % (60 * 60 * 24)) / (60 * 60));
        var minutes = Math.floor((time % (60 * 60)) / (60));
        var seconds = Math.floor((time % (60)));
        return  ( <div className="countdown">
                <div><span>{String(days).length === 1 ? "0" + days : days}</span><span>Days</span></div>
                <div><span>{String(hours).length === 1 ? "0" + hours : hours}</span><span>Hours</span></div>
                <div><span>{String(minutes).length === 1 ? "0" + minutes : minutes}</span><span>Minutes</span></div>
                <div><span>{String(seconds).length === 1 ? "0" + seconds : seconds}</span><span>Seconds</span></div>
        </div> );
    }
}
 
export default Countdown;