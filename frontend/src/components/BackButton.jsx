import React from 'react'
import { Box ,IconButton} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

const BackButton = () => {
    const navigate = useNavigate();
    const handleGoBack = () => {
      navigate(-1);
    };
  
    return (
      <Box position="absolute" top="10%" left="10px">
        <IconButton color="inherit" onClick={handleGoBack}>
          <ArrowBackIcon />
        </IconButton>
      </Box>
    );
  };
  
  export default BackButton;