import React from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const services = [
  {
    title: 'Website Ontwikkeling',
    description: 'Moderne en responsieve websites op maat gemaakt voor uw bedrijf.',
    link: '/diensten#website-ontwikkeling',
  },
  {
    title: 'WordPress Websites',
    description: 'Professionele WordPress websites met custom themas en functionaliteiten.',
    link: '/diensten#wordpress',
  },
  {
    title: 'E-commerce Solutions',
    description: 'Professionele webshops met alle benodigde functionaliteiten.',
    link: '/diensten#e-commerce',
  },
  {
    title: 'Web Applicaties',
    description: 'Custom web applicaties voor uw specifieke bedrijfsprocessen.',
    link: '/diensten#web-applicaties',
  },
  {
    title: 'SEO Optimalisatie',
    description: 'Verbeter uw online zichtbaarheid en bereik meer klanten.',
    link: '/diensten#seo',
  },
];

const ServicesSection = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" component="h2" align="center" gutterBottom>
        Onze Diensten
      </Typography>
      <Grid container spacing={4} sx={{ mt: 2 }}>
        {services.map((service) => (
          <Grid item xs={12} sm={6} md={3} key={service.title}>
            <Card className="service-card">
              <CardContent>
                <Typography variant="h5" component="h3" gutterBottom>
                  {service.title}
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  {service.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  component={RouterLink}
                  to={service.link}
                >
                  Lees Meer
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ServicesSection;
