import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import FacebookLogin from 'react-facebook-login';

function FbLogin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userID, setUserID] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [picture, setPicture] = useState('');

  const navigate = useNavigate();


  const responseFacebook = (response) => {
    console.log(response);
    setIsLoggedIn(true);
    setUserID(response.userID);
    setName(response.name);
    setEmail(response.email);
    setPicture(response.picture.data.url);
  };

  const componentClicked = () => {
    console.log('clicked');
  };

  const deleteIntegration = () => {
    // Implement logic to delete integration
    console.log('Integration deleted');
  };

  const replyToMessages = () => {
    // Redirect to Chats.js when "Reply to Messages" is clicked
    navigate('/Chats');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#004D95', height: '100vh' }}>
      <div style={{ height: '30vh', width: '50vh', backgroundColor: 'white', borderRadius: '4%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h3>Facebook Page Integration</h3>
        {isLoggedIn ? (
          <>
            <h3 style={{ margin: '5px' }}>Integrated Page: {name}</h3>
            <div>
              <Button
                style={{ backgroundColor: 'red', margin: '5px', width: '97%' }}
                variant="contained"
                onClick={deleteIntegration}
              >
                Delete Integration
              </Button>
            </div>
            <div>
              <Button
                style={{ backgroundColor: 'blue', margin: '5px', width: '97%' }}
                variant="contained"
                onClick={replyToMessages}
              >
                Reply to Messages
              </Button>
            </div>
          </>
        ) : (
          <FacebookLogin
            appId="324509716707290"
            autoLoad={true}
            fields="name,email,picture"
            onClick={componentClicked}
            callback={responseFacebook}
          />
        )}
      </div>
    </div>
  );
}

export default FbLogin;
