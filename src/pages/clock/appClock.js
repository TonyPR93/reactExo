import React from 'react'; //import de react pour l'extends
import {connect} from 'react-redux'; //pour la connexion avec redux
import { addTimeToSessionTime,addTimeToBreakTime,subtractTimeToBreakTime,subtractTimeToSessionTime, clearTime, stopTime, startTime, tick } from '../../actions/actionClock';

class Clock extends React.Component{


    componentDidMount() {
        this.interval = setInterval(() => {
          if (this.props.started) {
            this.props.tick();
          }
        }, 1000);
      }
    
      componentWillUnmount() {
        clearInterval(this.interval);
      }
// Ajoutez les nouvelles actions
// les declarer dans actions.js
// adaptez les deux fonction pour le connect de l'app.js
// refaire le reducerClock
    render(){
        return(
            <div>
                <h3>25+5 O'Clock</h3>
                <div>
                    <button onClick={() => this.props.addTimeToSessionTime()}>+</button>
                    {this.props.sessionTime}
                    <button onClick={() => this.props.subtractTimeToSessionTime()}>-</button>
                </div>
                <div>
                    <button onClick={() => this.props.addTimeToBreakTime()}>+</button>
                    {this.props.breakTime} 
                    <button onClick={() => this.props.subtractTimeToBreakTime()}>-</button>
                </div>
                <div>
                    {this.props.timeLeft}
                </div>
                <div>
                    <button onClick={() => this.props.stopTime()}>Stop</button>
                    <button onClick={() => this.props.startTime()}>Start</button>
                </div>
                <div>
                <button onClick={() => this.props.clearTime()}>Clear</button>
                </div>
            </div>
        )

    }
}


const mapStateToProps = (state) => {
    return{
        timeLeft: state.clock.timeLeft,
        sessionTime: state.clock.sessionTime,
        breakTime: state.clock.breakTime,
        started: state.clock.started,
        intervalId: state.clock.intervalId
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        addTimeToSessionTime: () => dispatch(addTimeToSessionTime()),
        addTimeToBreakTime: () => dispatch(addTimeToBreakTime()),
        subtractTimeToSessionTime: () => dispatch(subtractTimeToSessionTime()),
        subtractTimeToBreakTime: () => dispatch(subtractTimeToBreakTime()),
        clearTime: () => dispatch(clearTime()),
        startTime: () => dispatch(startTime()),
        stopTime: () => dispatch(stopTime()),
        tick: () => dispatch(tick())
    }
}

// Connecter le composant App au store Redux
export default connect(mapStateToProps, mapDispatchToProps)(Clock);