import { useState, useEffect, Fragment } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import { Birds } from '../data';
import PlayGame from './PlayGame';

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

export default function Select() {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const loading = open && options.length === 0;


  useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      await sleep(1e3); 

      if (active) {
        setOptions([...Birds]);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    
    <Autocomplete
      id="asynchronous"
      sx={{ width: 300 }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      isOptionEqualToValue={(option, value) => option.name === value.name}
      getOptionLabel={(option) => option.name}
      options={options}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Your Guess"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <Fragment>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </Fragment>
            ),
          }}
        />
      )}
    />      
  );
}





// do {
//   guessString = prompt('I am thinking of a number in the range 1-100.\n\nWhat is it?');
//   guessNumber = +guessString; // converts the guess to a number
//   numTries +=1;
//   correct = checkGuess(guessNumber, target); 
// } while(!correct);

// alert('You got it! Tne number was ' + target + '.\n\nIt took you ' + numTries + ' tries to guess correctly.');

// }

// function checkGuess(guessNumber, target) {
// let correct = false;

// if (isNaN(guessNumber)) {
//   alert('You have not entered a number.\n\nPlease enter a number in the 1-100 range.');
// } else if ((guessNumber < 1) || (guessNumber > 100)) {
//   alert('Please enter an integer in the 1-100 range.');
// } else if (guessNumber > target) {
//   alert('Your number is too large!');
// } else if (guessNumber < target) {
//   alert('Your number is too small!');
// } else {
//   correct = true;
// }
// return correct;   
// }