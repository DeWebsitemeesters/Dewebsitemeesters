import React from 'react';
import { Container, Typography, Button, Box, Grid, useTheme } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { keyframes } from '@mui/system';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Hero = () => {
  const theme = useTheme();

  return (
    <Box
      className="hero-section"
      sx={{
        background: '#000',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Background Video */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.5))',
          }
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>
      </Box>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4} alignItems="center" justifyContent="center" textAlign="center">
          <Grid item xs={12} md={10} lg={8}>
            <Box sx={{ animation: `${fadeIn} 1s ease-out` }}>
              <Typography 
                variant="h1" 
                component="h1" 
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                  lineHeight: 1.1,
                  mb: 3,
                  letterSpacing: '-0.02em'
                }}
              >
                Maak uw droomwebsite werkelijkheid
              </Typography>
              <Typography 
                variant="h2" 
                sx={{
                  fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' },
                  fontWeight: 400,
                  mb: 4,
                  opacity: 0.9,
                  maxWidth: '800px',
                  margin: '0 auto'
                }}
              >
                Wij creëren prachtige, op maat gemaakte websites die uw merk tot leven brengen en uw online aanwezigheid versterken.
              </Typography>
              <Box 
                sx={{ 
                  display: 'flex', 
                  gap: 2, 
                  justifyContent: 'center',
                  flexWrap: 'wrap'
                }}
              >
                <Button
                  component={RouterLink}
                  to="/contact"
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: 'white',
                    color: 'black',
                    fontSize: '1.125rem',
                    py: 1.5,
                    px: 4,
                    borderRadius: '100px',
                    textTransform: 'none',
                    fontWeight: 500,
                    '&:hover': {
                      bgcolor: 'rgba(255,255,255,0.9)',
                    }
                  }}
                >
                  Start uw project
                </Button>
                <Button
                  component={RouterLink}
                  to="/portfolio"
                  variant="outlined"
                  size="large"
                  sx={{
                    color: 'white',
                    borderColor: 'white',
                    fontSize: '1.125rem',
                    py: 1.5,
                    px: 4,
                    borderRadius: '100px',
                    textTransform: 'none',
                    fontWeight: 500,
                    '&:hover': {
                      borderColor: 'white',
                      bgcolor: 'rgba(255,255,255,0.1)',
                    }
                  }}
                >
                  Bekijk ons werk
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
