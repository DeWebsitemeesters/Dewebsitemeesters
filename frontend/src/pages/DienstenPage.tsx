import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Box } from '@mui/material';

const services = [
  {
    title: 'Website Ontwikkeling',
    description: `Wij ontwikkelen moderne, responsieve websites die perfect aansluiten bij uw bedrijf. 
    Onze websites zijn niet alleen mooi, maar ook gebruiksvriendelijk en snel.`,
    features: [
      'Responsive design voor alle apparaten',
      'Moderne technologieën',
      'SEO-vriendelijk',
      'Gebruiksvriendelijk CMS',
    ],
  },
  {
    title: 'E-commerce Solutions',
    description: `Boost uw online verkoop met onze professionele webshop oplossingen. 
    We zorgen voor een veilige en gebruiksvriendelijke winkelervaring.`,
    features: [
      'Veilige betalingsverwerking',
      'Voorraadbeheer',
      'Klantaccounts',
      'Order tracking',
    ],
  },
  {
    title: 'Web Applicaties',
    description: `Custom web applicaties die uw bedrijfsprocessen optimaliseren. 
    Van kleine tools tot complexe systemen.`,
    features: [
      'Maatwerk oplossingen',
      'Integratie met bestaande systemen',
      'Schaalbaarheid',
      'Real-time updates',
    ],
  },
  {
    title: 'SEO Optimalisatie',
    description: `Verbeter uw online zichtbaarheid en bereik meer potentiële klanten. 
    We gebruiken bewezen SEO-technieken.`,
    features: [
      'Keyword research',
      'On-page optimalisatie',
      'Content strategie',
      'Performance optimalisatie',
    ],
  },
];

const DienstenPage = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" component="h1" align="center" gutterBottom>
        Onze Diensten
      </Typography>
      <Typography variant="h5" color="textSecondary" align="center" paragraph>
        Professionele web oplossingen voor uw bedrijf
      </Typography>

      <Grid container spacing={4} sx={{ mt: 4 }}>
        {services.map((service) => (
          <Grid item xs={12} key={service.title}>
            <Card>
              <CardContent>
                <Typography variant="h4" component="h2" gutterBottom id={service.title.toLowerCase().replace(/ /g, '-')}>
                  {service.title}
                </Typography>
                <Typography variant="body1" paragraph>
                  {service.description}
                </Typography>
                <Box mt={2}>
                  <Typography variant="h6" gutterBottom>
                    Kenmerken:
                  </Typography>
                  <Grid container spacing={2}>
                    {service.features.map((feature) => (
                      <Grid item xs={12} sm={6} key={feature}>
                        <Typography variant="body1">• {feature}</Typography>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default DienstenPage;
