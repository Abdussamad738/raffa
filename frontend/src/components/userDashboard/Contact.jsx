import React from 'react'
import { Box, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'

import  './index.css';
export default function Contact() {
  return (
    <Box
    flexDirection="column"
    display="flex"
    alignItems="center"
    justifyContent="center"
    marginTop="10%"
    textAlign="center"
    p={4}
  >
    <Box flexDirection="row" display="flex" alignItems="center" justifyContent="center" marginBottom="2%">
      <EmailIcon sx={{ fontSize: 30, mr: 1 }} />
      <Typography variant="body1" sx={{ fontSize: 18, fontWeight: 'bold' }}>
        Email: <a href="mailto:raffasports313@gmail.com">raffasports313@gmail.com</a>
      </Typography>
    </Box>
    <Box flexDirection="row" display="flex" alignItems="center" justifyContent="center" marginBottom="2%">
      <WhatsAppIcon sx={{ fontSize: 30, mr: 1 }} />
      <Typography variant="body1" sx={{ fontSize: 18, fontWeight: 'bold' }}>
        WhatsApp: <a href="https://wa.me/+971569445532">+971 56 944 5532</a>
      </Typography>
    </Box>
    <Box mt={2} sx={{ fontSize: 18, fontWeight: 'bold' }}>
    <Typography variant="h4" sx={{ color: '#ffa93a' ,marginBottom:'5%'}}>
        Store Address
      </Typography>
      <Box sx={{ color: 'text.primary', fontFamily: 'Arial, sans-serif', fontSize: '16px' }}>
          <Box>Raffa Sport Equipment Trading L.L.C</Box>
          <Box>Bur Dubai, Al Raffa Road,</Box>
          <Box> Gateway Hotel Building, Shop No:121</Box> 
          <Box>Dubai - United Arab Emirates</Box>
           
      </Box>
    </Box>
  </Box>
    
  )
};
