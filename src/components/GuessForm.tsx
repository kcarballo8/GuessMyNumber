import React from 'react';
import {bind} from './util';
import './GuessForm.css';
import {GuessType} from '../components/util';

interface GuessFormProps{
    sendGuess: (rcvGuess: string) => void;
    maxNum: number;
    guessType: GuessType;
    
}

interface Guess{
    input: string;
    outBound: boolean;
}

export default class GuessForm extends React.Component<GuessFormProps, Guess>{

    state = {input: this.props.guessType.guessIn, outBound: false};

    inputSize = (event:any) => {
        
        if(parseFloat(this.state.input) < 1 || parseFloat(this.state.input) > this.props.maxNum || isNaN(parseFloat(this.state.input))){
            // afuera de bounds
            event.preventDefault();
            console.log("this is input" , this.state.input);
            this.setState({outBound: true});
        }
        /*if else(parseFloat(this.state.input))*/
        else{
            event.preventDefault();
            this.setState({outBound: false});
            this.props.sendGuess(this.state.input);
        }
        this.setState({input: ""});
    }

    printBound = () => {
        if(this.state.outBound){
            return <table>
                <tr>
                    <td id="OutBound">Enter valid a number.</td>
                </tr>
            </table>
        }
    }
    override render(){
        return(
            <form onSubmit={this.inputSize} className="form">
                <table>
                    <tr><td className='GuessIn'>Guess a number between 1 and {this.props.maxNum}</td></tr> 
                </table>
                <table>
                <tr>
                <td><input className="guess" type="text" {...bind(this, 'input')} autoFocus/></td>  
                <td><input className="submit" type="submit" value="Submit" autoFocus/></td>
                </tr>
                </table>
                {this.printBound()}
                
            </form>
        )
    }

}