import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Hero = () => {
  return (
    <Box className="hero-section">
      <Container maxWidth="md">
        <Box textAlign="center" py={8}>
          <Typography variant="h2" component="h1" gutterBottom>
            Welkom bij De Website Meesters
          </Typography>
          <Typography variant="h5" color="textSecondary" paragraph>
            Wij bouwen moderne, snelle en gebruiksvriendelijke websites voor uw bedrijf
          </Typography>
          <Box mt={4}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              component={RouterLink}
              to="/diensten"
              sx={{ mr: 2 }}
            >
              Onze Diensten
            </Button>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              component={RouterLink}
              to="/contact"
            >
              Neem Contact Op
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
