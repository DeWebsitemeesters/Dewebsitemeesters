import React from 'react';
import { Container, Typography, Button, Box, Grid, useTheme } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { keyframes } from '@mui/system';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

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
        background: 'linear-gradient(135deg, #2C5282 0%, #1A365D 100%)', // Warm navy blue gradient
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        minHeight: { xs: 'calc(100vh - 64px)', sm: 'calc(100vh - 80px)' },
        display: 'flex',
        alignItems: 'center',
        pt: { xs: 4, md: 0 },
      }}
    >
      {/* Decorative Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.1,
          background: 'url(/pattern.svg)',
          backgroundSize: 'cover',
          zIndex: 0,
        }}
      />
      
      {/* Gradient Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(45deg, rgba(26, 54, 93, 0.7) 0%, rgba(44, 82, 130, 0.3) 100%)',
          zIndex: 1,
        }}
      />

      <Container 
        maxWidth="lg" 
        sx={{ 
          position: 'relative',
          zIndex: 2,
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Grid 
          container 
          spacing={{ xs: 4, md: 8 }} 
          alignItems="center"
        >
          <Grid item xs={12} md={7} lg={6}>
            <Box sx={{ animation: `${fadeIn} 1s ease-out` }}>
              <Typography
                component="h1"
                sx={{
                  fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem', lg: '4.5rem' },
                  fontWeight: 700,
                  lineHeight: 1.1,
                  mb: 3,
                  color: '#FFFFFF',
                }}
              >
                Wij maken uw online visie werkelijkheid
              </Typography>

              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '1.25rem', sm: '1.5rem' },
                  fontWeight: 400,
                  mb: 4,
                  color: 'rgba(255,255,255,0.9)',
                  maxWidth: '600px',
                }}
              >
                Professionele websites die uw merk versterken en resultaten leveren. 
                Van concept tot realisatie staan wij voor u klaar.
              </Typography>

              <Box sx={{ display: 'flex', gap: 3, flexWrap: { xs: 'wrap', sm: 'nowrap' } }}>
                <Button
                  component={RouterLink}
                  to="/contact"
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    bgcolor: '#FFFFFF',
                    color: '#2C5282',
                    fontSize: '1.125rem',
                    py: 2,
                    px: 4,
                    borderRadius: '6px',
                    fontWeight: 500,
                    boxShadow: '0 4px 14px 0 rgba(255,255,255,0.1)',
                    '&:hover': {
                      bgcolor: '#F7FAFC',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 6px 20px 0 rgba(255,255,255,0.15)',
                    },
                    transition: 'all 0.3s ease',
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
                    color: '#FFFFFF',
                    borderColor: 'rgba(255,255,255,0.3)',
                    fontSize: '1.125rem',
                    py: 2,
                    px: 4,
                    borderRadius: '6px',
                    fontWeight: 500,
                    borderWidth: '2px',
                    '&:hover': {
                      borderColor: '#FFFFFF',
                      borderWidth: '2px',
                      bgcolor: 'rgba(255,255,255,0.05)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Bekijk ons werk
                </Button>
              </Box>

              {/* USPs */}
              <Box sx={{ mt: 6, display: 'flex', gap: 4, flexWrap: 'wrap' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      bgcolor: 'rgba(255,255,255,0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.25rem',
                    }}
                  >
                    ✨
                  </Box>
                  <Typography sx={{ color: 'rgba(255,255,255,0.9)' }}>
                    Modern Design
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      bgcolor: 'rgba(255,255,255,0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.25rem',
                    }}
                  >
                    🚀
                  </Box>
                  <Typography sx={{ color: 'rgba(255,255,255,0.9)' }}>
                    Snelle Performance
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Right side decorative element */}
          <Grid item xs={12} md={5} lg={6} sx={{ display: { xs: 'none', md: 'block' } }}>
            <Box
              sx={{
                position: 'relative',
                height: '500px',
                width: '100%',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: '10%',
                  right: '10%',
                  width: '80%',
                  height: '80%',
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                  borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                  animation: 'float 6s ease-in-out infinite',
                },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  top: '20%',
                  right: '20%',
                  width: '60%',
                  height: '60%',
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)',
                  borderRadius: '70% 30% 30% 70% / 70% 70% 30% 30%',
                  animation: 'float 8s ease-in-out infinite reverse',
                },
                '@keyframes float': {
                  '0%, 100%': {
                    transform: 'translateY(0)',
                  },
                  '50%': {
                    transform: 'translateY(-20px)',
                  },
                },
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
