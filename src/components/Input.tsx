import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { colors } from '../constants/colors';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setUsername } from './redux/userSlice';


interface MyComponentProps {
    myFunctionProp: () => void; // Define the prop with a function type
  }
  

const Inputs: React.FC<MyComponentProps> = ({myFunctionProp}) => {
    const dispatch = useDispatch();
  const [username, setGitUsername] = useState('');

  const handleButtonClick = (e: React.MouseEvent<HTMLElement>) => {
    console.log('Entered GitHub Username:', username);
    // Add additional logic or actions as needed
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGitUsername(event.target.value);
    dispatch(setUsername(username));
  };
  //console.log(username)

  return (
    <>
      <InputGroup size="lg" className="mx-5 w-75 ">
        <Form.Control
          placeholder="GitHub username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={username}
          onChange={(e)=>{
            setGitUsername(e.target.value)
            dispatch(setUsername(e.target.value));

        }}
          style={{ marginRight: '10px' }}
        />
        <Button onClick={myFunctionProp} className='text-light' variant='inline' style={{backgroundColor:colors.colorsecondary}} id="button-addon2">
          Submit
        </Button>

      </InputGroup>
    </>
  );
}

export default Inputs;
