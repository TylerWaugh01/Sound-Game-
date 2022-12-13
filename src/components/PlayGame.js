import { Birds } from "../data" //bird object
import { Howl } from 'howler'
import { useState } from 'react';
import PlayerWin from './PlayerWin'
import PlayerLose from './PlayerLose'

// import TextField from '@mui/material/TextField';
// import Box from '@mui/material/Box'
// import { Autocomplete } from "@mui/material";
import styled from "styled-components";
import bird from '../assets/images/Bird.jpg' //for background

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: flex-start;
    background-image: url(${bird});
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
    overflow: hidden;`


const Logo = styled.span`
font-size: 75px;
padding: 20px;
color: white;
font-weight: bolder;
`;

const Image = styled.img`
  width: 50%;
  height: 50%;
  object-fit: cover;
`;



const Button = styled.button`
  margin-bottom: 10px;
  border: solid white;
  background-color: orange;
  &:hover,
  &:focus {
    background-color: palevioletred;
  }
  font-size: 30px;
  color: white;
  cursor: pointer;
  font-weight: bolder;
`;

const SubmitButton = styled.button`
  margin-top: 10px;
  border: solid;
  background-color: blue;
  font-size: 30px;
  color: white;
  font-weight: bolder;
  cursor: pointer;
`;

function PlayGame() {
 
  /*
    State management for:
    1. obtaining random bird
    2. setting random bird call
    3. Handling - Playing/stoping call 
  */
  const [randomBird, setRandomBird] = useState(Birds[Math.floor(Math.random() * Birds.length)])
  const [birdCall, setBirdCall] = useState(new Howl({
    src: [randomBird.sound],
    html5: true,
    volume: 0.1,
  }))
  const [isCallPlaying, setIsCallPlaying] = useState(false);

   /* 
    State management for:
    1. text input values (controlled text input) for displaying current text in input and comparing input value(guess) to answer
    2. Setting correct Answer
    3. Guess win state
    4. player wrong guess
  */
    const [inputValue, setInputValue] = useState("");
    const [answer, setAnswer] = useState(randomBird.label)
    const [gameWin, setGameWin] = useState(false)
    const [isWrongGuess, setIsWrongGuess] = useState(false)
  
  
  //logic for getting a randomBird, set state of randomBird, then assign bird call to the state of birdCall. 
  const handleRandomBirdCall = () => { //NOT USED YET AS IT IS BUGGY BUT CAN IMPLEMENT LATER, RIGHT NOW ONLY NEW GAME IS STARTED ON REFRESH
    setRandomBird(Birds[Math.floor(Math.random() * Birds.length)]);
    setBirdCall(new Howl({
      src: [randomBird.sound],
      html5: true,
      volume: 0.1,
    }));
    setAnswer(randomBird.label)
    setGameWin(false)
    setIsWrongGuess(false)
  }
  
  //will start bird call and save to state
  const playBirdCall = () => {
    birdCall.play()
    setIsCallPlaying(true) 
  }

  //will stop bird call and save to state
  const stopBirdCall = () => {
    birdCall.stop()
    setIsCallPlaying(false)
  }

  //handle Submitting Guess logic and game win state, displaying win message or guess again message
  const handleGuessSubmit = (event) => {
    event.preventDefault()
    console.log(inputValue)
    if (inputValue.toLowerCase() === answer.toLowerCase()) {
      setGameWin(true)
      setIsWrongGuess(false)
      stopBirdCall()      
    } else {
      setIsWrongGuess(true)
    }
  }

return (

  <Container>          
    <Logo>Birdle</Logo>
    
    { isCallPlaying
      ? <Button onClick={stopBirdCall}>Stop Call</Button> 
      : <Button onClick={playBirdCall}>Play Call</Button>
    }
    

    <input 
      type="text"
      placeholder="Bird"
      list="birds" 
      autoComplete="on"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    />

    {/* List of options for dropdown data list, could somehow be connected to Birds Array */}
<datalist id="birds" > 
            <option value='Dove' />
            <option value='Robin' />
</datalist>

    <SubmitButton onClick={handleGuessSubmit}>Submit Guess</SubmitButton>

    {gameWin && <PlayerWin birdImage={randomBird.img} name={randomBird.label} bio={randomBird.bio}/>}
    {isWrongGuess && <PlayerLose />}

{/* 
    <Autocomplete
      value={value}
      onChange={(event, newValue) => {
      setValue(newValue);
      }}

      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
      setInputValue(newInputValue);
      }}
      id="bird"
      options={Birds}
      sx={{ width: 300, marginTop: 5 }}x
      renderInput={(params) => <TextField {...params} label=""  />}
    /> */}

    {/* <SubmitButton onClick={click}>Submit Guess</SubmitButton> */}
  </Container>
  );
}

export default PlayGame;











