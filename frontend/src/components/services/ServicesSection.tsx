import React from 'react';
import { Container, Grid, Typography, Box, Button, useTheme } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import WebIcon from '@mui/icons-material/Web';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BrushIcon from '@mui/icons-material/Brush';
import SpeedIcon from '@mui/icons-material/Speed';

const services = [
  {
    icon: <WebIcon sx={{ fontSize: 48 }} />,
    title: 'Website Development',
    description: 'Professionele websites op maat gemaakt voor uw bedrijf. Modern, responsief en gebruiksvriendelijk.',
  },
  {
    icon: <ShoppingCartIcon sx={{ fontSize: 48 }} />,
    title: 'E-commerce Solutions',
    description: 'Complete webshop oplossingen met alle functionaliteiten die u nodig heeft om online te verkopen.',
  },
  {
    icon: <BrushIcon sx={{ fontSize: 48 }} />,
    title: 'Web Design',
    description: 'Prachtige, moderne designs die uw merk versterken en bezoekers converteren naar klanten.',
  },
  {
    icon: <SpeedIcon sx={{ fontSize: 48 }} />,
    title: 'Optimalisatie',
    description: 'Snelle, geoptimaliseerde websites die hoog scoren in Google en meer bezoekers trekken.',
  },
];

const ServicesSection = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'background.paper',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)',
        },
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 10 } }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              mb: 2,
              background: 'linear-gradient(45deg, #fff 30%, rgba(255,255,255,0.7) 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Onze Diensten
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{
              maxWidth: '800px',
              mx: 'auto',
              mb: 4,
              fontSize: { xs: '1.1rem', md: '1.25rem' },
              lineHeight: 1.6,
            }}
          >
            Van concept tot realisatie, wij bieden complete oplossingen voor uw online aanwezigheid
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Box
                sx={{
                  height: '100%',
                  p: 4,
                  borderRadius: 2,
                  bgcolor: 'rgba(255,255,255,0.03)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  '&:hover': {
                    bgcolor: 'rgba(255,255,255,0.05)',
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <Box
                  sx={{
                    display: 'inline-flex',
                    p: 2,
                    borderRadius: 2,
                    bgcolor: 'rgba(255,255,255,0.05)',
                    color: 'primary.main',
                    mb: 3,
                  }}
                >
                  {service.icon}
                </Box>
                <Typography
                  variant="h3"
                  component="h3"
                  sx={{
                    mb: 2,
                    fontSize: { xs: '1.5rem', md: '1.75rem' },
                    fontWeight: 600,
                  }}
                >
                  {service.title}
                </Typography>
                <Typography
                  color="text.secondary"
                  sx={{
                    mb: 3,
                    fontSize: '1.1rem',
                    lineHeight: 1.6,
                  }}
                >
                  {service.description}
                </Typography>
                <Button
                  component={RouterLink}
                  to="/diensten"
                  variant="text"
                  sx={{
                    color: 'primary.main',
                    p: 0,
                    '&:hover': {
                      bgcolor: 'transparent',
                      opacity: 0.8,
                    },
                  }}
                >
                  Lees meer →
                </Button>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center', mt: { xs: 6, md: 10 } }}>
          <Button
            component={RouterLink}
            to="/contact"
            variant="contained"
            size="large"
            sx={{
              px: 6,
              py: 2,
            }}
          >
            Start uw project
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ServicesSection;
