import { Birds } from "../data" //bird object
import { Howl } from 'howler'
import { useState } from 'react';
import PlayerWin from './PlayerWin'
import PlayerLose from './PlayerLose'

// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
// import Box from '@mui/material/Box'
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
  border: solid white;
  background-color: orange;
  &:hover,
  &:focus {
    background-color: palevioletred;
  }
  font-size: 50px;
  color: white;
  cursor: pointer;
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

  // const [sucessGuess, setGuess] = useState("none")
  // const [initialState, setState] = useState("flex")
  // const [val, setVal] = useState("")
  // const [value, setValue] = useState("Bird");


 
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




  // const click = () => {
  //   console.log(randomBird.label);

    // console.log(inputValue);
    // console.log(value);
    // if (inputValue === randomBird.label) {
    //     setGuess("flex")
    //     setState("none")
    // } else {
    //     alert("Try Again")
    // }
  // }


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
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    />

    <button onClick={handleGuessSubmit}>Submit Guess</button>

    {gameWin && <PlayerWin birdImage={randomBird.img} name={randomBird.label}/>}
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
      renderInput={(params) => <TextField {...params} label="Guess"  />}
    /> */}

    {/* <SubmitButton onClick={click}>Submit Guess</SubmitButton> */}


{/* 
    <Box sx={{ 
      display: sucessGuess,
      height: "50vh", 
    }} >
    <Image src={randomBird.img} 
      sx={{ 
      margin: "150px", }} />
    </Box>
    <Box sx={{ 
      display: initialState,
      height: "50vh",
      margin: 0,
      padding: 0,
    }} > */}
    {/* <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Question_mark_%28black%29.svg/800px-Question_mark_%28black%29.svg.png" /> */}
    {/* </Box> */}
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


// TODO 
// Need a type for the input? Perhaps a form input. Nested paper, boxes... form, form label 
// duration of bird call (look at howler docs)
// Toggle image based on guess 
// How to display bird on proper guess 



/* <Box sx={{ 
    display: sucessGuess,
    height: "40vh",
    }} >
    <img src={randomBird.img} />
</Box> */





