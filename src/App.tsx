import React,{Component} from 'react';
import './App.css';
import NewGame from './components/NewGame';
import GuessForm from './components/GuessForm';
import {GamePhase} from './components/util';
import {GuessType} from './components/util';
import ResultsTable from './components/ResultsTable';
import WinResults from './components/WinResults';
interface AppState{
  phase: GamePhase;
  maxNum: number;
  guess: GuessType;
  randomNum: number;
  guessAr: GuessType[];
  attempts: number;
}


class App extends Component<{}, AppState>{
  
  state = {phase: 'NewGame' as GamePhase, maxNum: 100, guess: {cntr: 0, guessIn: ""} as GuessType, randomNum: 0, guessAr: [] as GuessType[], attempts: 0};

  genRand = (num: number)=> {
    return (Math.floor(Math.random()* num+1));
  }

  play = (num: number) => {
    this.setState({maxNum: num});
    this.setState({randomNum: this.genRand(num)});
    this.setState({phase: 'PlayTime'});
  }

  setSingleGuess = (rcvGuess: string) =>{
    let guess = { cntr: this.state.guessAr.length + 1, guessIn: rcvGuess };
    this.setState({ guessAr: [...this.state.guessAr, guess ]})
  }

  getGuess = async (rcvGuess: string) => {
    this.setSingleGuess(rcvGuess);
  
    if(this.state.randomNum === parseFloat(rcvGuess)){
      this.setState({phase: 'Over'});
    }
  }

  over = () => {
    this.setState({phase: 'Over'});
  }
  
  startAgain = () => {
    this.setState({phase: 'NewGame', guess: {cntr: 0, guessIn: ""}, randomNum: 0, guessAr: [], attempts: 0});
  }

  override render(){

    if(this.state.phase === 'PlayTime'){
      return(<React.Fragment>
        <GuessForm sendGuess={this.getGuess} maxNum = {this.state.maxNum} guessType= {this.state.guess}/>
        <ResultsTable guess={this.state.guess} guessAr= {this.state.guessAr} attempts={this.state.attempts} 
         rand= {this.state.randomNum} over= {this.over}/>
      </React.Fragment>)
    }
    else if (this.state.phase === 'Over'){
      
      return(<React.Fragment>
        <WinResults counter={this.state.guessAr.length} reStart={this.startAgain}/>
        <ResultsTable guess={this.state.guess} guessAr= {this.state.guessAr} attempts={this.state.attempts} 
         rand= {this.state.randomNum} over= {this.over}/>
      </React.Fragment>
      )
    }
    else{
      return (<NewGame start={this.play} max={this.state.maxNum}/>)
    }
  };
}

export default App;

