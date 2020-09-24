import React, {Component} from "react";

import "../App"



class TimerWrapper extends React.Component{

  constructor(props) {
    super (props)
    this.startTimer = this.startTimer.bind(this)
    this.state = {
      timeLeft: null,
      timer: null,
     
    }
  }

  startTimer(timeLeft) {
    clearInterval(this.state.timer)
    
    let timer = setInterval(()=>{
      var timeLeft = this.state.timeLeft -1
      if(timeLeft === 0) {
       clearInterval(timer) 
      }
      this.setState({
        timeLeft: timeLeft
      }) 
    }, 1000)
    return this.setState({ timeLeft: timeLeft, timer: timer})
  }

    render () {
      return (
        <div>
          <div>
            <Button time="5" startTimer={this.startTimer}/>
            <Button time="30" startTimer={this.startTimer}/>
            <Button time="100" startTimer={this.startTimer}/>
          </div>
          <TimerDisplay timeLeft={this.state.timeLeft}/>
          <audio id="end" preload="auto" src="https://assets.coderrocketfuel.com/pomodoro-times-up.mp3" ></audio>
          <div className="timer-line"
               style={{ width: `${this.state.timeLeft}%`}}>   
          </div>
        </div>
        )
        
      }

    }
    
    class Button extends React.Component{
      handleStartTime () {
         return this.props.startTimer(this.props.time)
      }
      render () {
      return <button onClick={this.handleStartTime.bind(this)}>
        {this.props.time}  seconds</button>
      }   
     }


     
class TimerDisplay extends React.Component{
  render() {
    if (this.props.timeLeft === 0) {
      document.getElementById("end").play()
    }
    if (this.props.timeLeft === 0 || this.props.timeLeft === null ) {
      return <div></div>

    }
  return <h1>Time : {this.props.timeLeft} sec </h1>
  }
    
}
    
   
    export default TimerWrapper; 
    
  