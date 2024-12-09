import React from 'react';
import { Container, Typography, Grid, Box, Button, useTheme } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import WebIcon from '@mui/icons-material/Web';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BuildIcon from '@mui/icons-material/Build';
import SpeedIcon from '@mui/icons-material/Speed';
import SecurityIcon from '@mui/icons-material/Security';
import BrushIcon from '@mui/icons-material/Brush';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const services = [
  {
    icon: <WebIcon sx={{ fontSize: 40 }} />,
    title: 'Website Development',
    description: 'Professionele websites op maat met focus op gebruiksvriendelijkheid en conversie.',
    link: '/diensten/website-development'
  },
  {
    icon: <ShoppingCartIcon sx={{ fontSize: 40 }} />,
    title: 'Webshop Development',
    description: 'Complete e-commerce oplossingen met veilige betalingen en voorraadbeheer.',
    link: '/diensten/webshop-development'
  },
  {
    icon: <BuildIcon sx={{ fontSize: 40 }} />,
    title: 'Website Maintenance',
    description: 'Zorgeloos onderhoud met regelmatige updates, backups en monitoring.',
    link: '/diensten/maintenance'
  },
  {
    icon: <SpeedIcon sx={{ fontSize: 40 }} />,
    title: 'Performance Optimization',
    description: 'Optimalisatie voor snelheid en betere Google rankings.',
    link: '/diensten/performance'
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 40 }} />,
    title: 'Security Audit',
    description: 'Uitgebreide security check en implementatie van beveiligingsmaatregelen.',
    link: '/diensten/security'
  },
  {
    icon: <BrushIcon sx={{ fontSize: 40 }} />,
    title: 'Design Services',
    description: 'Moderne designs die uw merk versterken en conversie verhogen.',
    link: '/diensten/design'
  }
];

const ServicesSection = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(135deg, #F7FAFC 0%, #EDF2F7 100%)',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            component="h2"
            sx={{
              fontSize: { xs: '2rem', md: '3rem' },
              fontWeight: 700,
              mb: 2,
              color: '#2C5282',
            }}
          >
            Onze Diensten
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: '#4A5568',
              maxWidth: '600px',
              mx: 'auto',
              mb: 3,
            }}
          >
            Professionele oplossingen voor uw online succes
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                sx={{
                  height: '100%',
                  p: 4,
                  borderRadius: 2,
                  background: '#FFFFFF',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
                  },
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 3,
                    background: 'linear-gradient(135deg, #EBF4FF 0%, #E6FFFA 100%)',
                    color: '#2C5282',
                  }}
                >
                  {service.icon}
                </Box>

                <Typography
                  variant="h5"
                  component="h3"
                  sx={{
                    fontWeight: 600,
                    mb: 2,
                    color: '#2D3748',
                  }}
                >
                  {service.title}
                </Typography>

                <Typography
                  sx={{
                    color: '#4A5568',
                    mb: 3,
                    flex: 1,
                  }}
                >
                  {service.description}
                </Typography>

                <Button
                  component={RouterLink}
                  to={service.link}
                  variant="outlined"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    color: '#2C5282',
                    borderColor: 'rgba(44, 82, 130, 0.3)',
                    '&:hover': {
                      borderColor: '#2C5282',
                      bgcolor: 'rgba(44, 82, 130, 0.05)',
                    },
                    mt: 'auto',
                  }}
                >
                  Meer informatie
                </Button>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ServicesSection;
