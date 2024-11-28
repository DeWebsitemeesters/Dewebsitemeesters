import React from 'react';
import { Grid, Container, Typography, Box } from '@mui/material';
import ServiceCard from './ServiceCard';
import { services } from '../../data/services';

const ServicesGrid: React.FC = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography
          component="h2"
          variant="h3"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Onze Diensten
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="text.secondary"
          paragraph
          sx={{ mb: 6 }}
        >
          Ontdek ons complete aanbod aan web development en design services
        </Typography>
        <Grid container spacing={4}>
          {services.map((service) => (
            <Grid item key={service.id} xs={12} sm={6} md={4}>
              <ServiceCard service={service} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ServicesGrid;
