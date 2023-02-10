import React, {Component} from 'react';
import './ResultsTable.css';
import {GuessType} from '../components/util';

interface ResultsProps{
    guess: GuessType;
    guessAr: GuessType[];
    rand: number;
    attempts: number;
    over: () => void;
}

export default class ResultsTable extends Component<ResultsProps>{
    

    LowOrHigh = (guess: string) => {
        if(parseFloat(guess) > (this.props.rand)){
            return ('High');
        }
        else if(parseFloat(guess) < (this.props.rand)){
            return('Low');
        }
        else if(parseFloat(guess) === (this.props.rand)){
            return('Equal');
        }
    }

    override render(): React.ReactNode {
        console.log('guessAr', this.props.guessAr)
        return(
            <>
                <table className='results'>
                    {this.props.guessAr.reverse().map( (guess)=> 
                        this.LowOrHigh(guess.guessIn) === 'Low'? <tr><td className='low'> {guess.cntr}. {guess.guessIn} Too low</td></tr>:
                        this.LowOrHigh(guess.guessIn) === 'High'? <tr><td className='high'> {guess.cntr}. {guess.guessIn} Too high</td></tr>:
                        this.LowOrHigh(guess.guessIn) === 'Equal'? <tr><td className='correct'> {guess.cntr}. {guess.guessIn} Correct</td></tr>: <p>Unexpected error</p>
                    )}
                </table>
            </>
         
        )
    }

}
