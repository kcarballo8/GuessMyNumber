import './WinResults.css';
interface WinProps {
  counter : number;
  reStart: () => void;
}

export default function Win ({counter, reStart}: WinProps){
    return(
      <form onSubmit={reStart}>
        <table>
          <tr className='Youwon'>
            You won in {counter} guesses!
          </tr>
         <input type="submit" className='playAgain' value="Play Again" />
        </table>
      </form>
    )
}