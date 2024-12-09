import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Typography,
  Container,
  useTheme,
  Slide,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    // Check if user has already made cookie choices
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookieConsent', 'all');
    setIsVisible(false);
  };

  const handleAcceptNecessary = () => {
    localStorage.setItem('cookieConsent', 'necessary');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <Slide direction="up" in={isVisible} mountOnEnter unmountOnExit>
      <Box
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          bgcolor: 'rgba(0, 0, 0, 0.9)',
          color: 'white',
          py: 3,
          zIndex: theme.zIndex.drawer + 1,
          boxShadow: '0 -4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', gap: 2 }}>
            <Box sx={{ flex: 1 }}>
              <Typography variant="body1" sx={{ mb: { xs: 2, md: 0 } }}>
                Wij gebruiken cookies om uw ervaring op onze website te verbeteren. 
                Door op "Alles accepteren" te klikken, gaat u akkoord met het gebruik van ALLE cookies. 
                U kunt ook kiezen voor "Alleen noodzakelijk" of{' '}
                <RouterLink to="/cookie-policy" style={{ color: theme.palette.primary.main, textDecoration: 'underline' }}>
                  ons cookiebeleid bekijken
                </RouterLink>
                .
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 2, flexShrink: 0 }}>
              <Button
                variant="outlined"
                color="primary"
                onClick={handleAcceptNecessary}
                sx={{ 
                  color: 'white',
                  borderColor: 'white',
                  '&:hover': {
                    borderColor: theme.palette.primary.main,
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                  }
                }}
              >
                Alleen noodzakelijk
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleAcceptAll}
                sx={{
                  fontWeight: 'bold',
                }}
              >
                Alles accepteren
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Slide>
  );
};

export default CookieConsent;
