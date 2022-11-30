import { Birds } from "../data"
import { Howl } from 'howler'
// import Select from "./Select";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useState } from 'react';

function PlayGame() {

    const [id, name, sound, img] = Birds

    let randomBird = Birds[Math.floor(Math.random() * Birds.length)];
    const [value, setValue] = useState(name[0]);
    const [inputValue, setInputValue] = useState('');


    const call = new Howl({
        src: randomBird.sound,
        html5: true,
        volume: 0.1,
    });

    return (
        <div>
        {/* <button onClick={() => call.play()}>
            Guess The Bird
        </button> */}
        <Autocomplete
    value={value}
    onChange={(event, newValue) => {
      setValue(newValue);
    }}
    inputValue={inputValue}
    onInputChange={(event, newInputValue) => {
      setInputValue(newInputValue);
    }}
    id="Guess"
    options={name}
    sx={{ width: 300 }}
    renderInput={(params) => <TextField {...params} label="Guess" />}
  />
    </div>
    )
      }


    // return (
    //     <div>
    //         <button onClick={() => call.play()}>
    //             Guess The Bird
    //         </button>
    //         <Autocomplete
    //     value={value}
    //     onChange={(event, newValue) => {
    //       setValue(newValue);
    //     }}
    //     inputValue={inputValue}
    //     onInputChange={(event, newInputValue) => {
    //       setInputValue(newInputValue);
    //     }}
    //     id="Guess"
    //     options={Birds}
    //     sx={{ width: 300 }}
    //     renderInput={(params) => <TextField {...params} label="Guess" />}
    //   />
    //     </div>
    // );


export default PlayGame;



// import * as React from 'react';


// const options = ['Option 1', 'Option 2'];

// export default function ControllableStates() {
//   const [value, setValue] = React.useState(options[0]);
//   const [inputValue, setInputValue] = React.useState('');

//   return (
//     <div>
//       <div>{`value: ${value !== null ? `'${value}'` : 'null'}`}</div>
//       <div>{`inputValue: '${inputValue}'`}</div>
//       <br />
//       <Autocomplete
//         value={value}
//         onChange={(event, newValue) => {
//           setValue(newValue);
//         }}
//         inputValue={inputValue}
//         onInputChange={(event, newInputValue) => {
//           setInputValue(newInputValue);
//         }}
//         id="controllable-states-demo"
//         options={options}
//         sx={{ width: 300 }}
//         renderInput={(params) => <TextField {...params} label="Controllable" />}
//       />
//     </div>
//   );
// }




