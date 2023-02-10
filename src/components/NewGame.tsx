import React, {Component} from 'react';
import {bind} from './util';
import './NewGame.css';

interface NGFunc{
    start: (num: number) => void;
    max: number;
}

interface NewGameProps{
    maxNum: number;
    outBound: boolean;
}


export default class NewGame extends Component<NGFunc, NewGameProps>{

    state = {maxNum: this.props.max, outBound: false};

    inputSize = (event:any) => { 
        if(this.state.maxNum < 10 || this.state.maxNum > 1000000){
            event.preventDefault();
            this.setState({outBound: true});
        }
        else{
            event.preventDefault();
            this.props.start(this.state.maxNum);
        }
    }

    printBound = () => {
        if(this.state.outBound){
            return <table>
                <tr>
                    <td className="OutBound"> Maximum must be between 10 and 1,000,000</td>
                </tr>
            </table>
        }
    }

    override render(){
        return(
            
            <form onSubmit={this.inputSize} className="form">
                <table>
                <tbody className='body'>
                    <tr>
                        <td className='max'>Maximum: </td>
                        <td>
                            <input className="MaxNum" type="text" {...bind(this, 'maxNum')} autoFocus/>
                        </td>
                        <td><input type="submit" className="sub" value="New Game" autoFocus/></td>
                    </tr>
                    </tbody>
                </table>
                {this.printBound()}
            </form>
           
        )
    }

}