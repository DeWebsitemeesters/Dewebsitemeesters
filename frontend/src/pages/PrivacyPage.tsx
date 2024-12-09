import React from 'react';
import { Container, Typography, Box, Paper, Divider, useTheme } from '@mui/material';

const PrivacyPage = () => {
  const theme = useTheme();

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Paper elevation={0} sx={{ p: 4, borderRadius: 2, bgcolor: 'background.paper' }}>
        <Typography variant="h3" component="h1" gutterBottom fontWeight="bold" color="primary">
          Privacybeleid
        </Typography>
        
        <Typography variant="body1" paragraph>
          Laatst bijgewerkt: {new Date().toLocaleDateString()}
        </Typography>

        <Divider sx={{ my: 4 }} />

        <Box mb={6}>
          <Typography variant="h5" gutterBottom fontWeight="bold" color="primary">
            1. Cookies en tracking
          </Typography>
          <Typography variant="body1" paragraph>
            Wij gebruiken verschillende soorten cookies op onze website:
          </Typography>
          
          <Box ml={2} mb={4}>
            <Typography variant="subtitle1" gutterBottom fontWeight="bold">
              Noodzakelijke cookies
            </Typography>
            <Typography variant="body1" paragraph color="text.secondary">
              Deze cookies zijn essentieel voor het functioneren van de website. Ze onthouden bijvoorbeeld je cookie voorkeuren en sessie-informatie.
            </Typography>

            <Typography variant="subtitle1" gutterBottom fontWeight="bold">
              Analytische cookies
            </Typography>
            <Typography variant="body1" paragraph color="text.secondary">
              Met deze cookies kunnen we het gebruik van onze website analyseren en de gebruikerservaring verbeteren. We gebruiken hiervoor Google Analytics.
            </Typography>

            <Typography variant="subtitle1" gutterBottom fontWeight="bold">
              Marketing cookies
            </Typography>
            <Typography variant="body1" paragraph color="text.secondary">
              Deze cookies worden gebruikt om advertenties relevanter te maken voor jou. Ze onthouden je voorkeuren en websitebezoeken om gerichte advertenties te kunnen tonen.
            </Typography>
          </Box>
        </Box>

        <Box mb={6}>
          <Typography variant="h5" gutterBottom fontWeight="bold" color="primary">
            2. Gegevensverzameling
          </Typography>
          <Typography variant="body1" paragraph>
            We verzamelen de volgende informatie:
          </Typography>
          <Box component="ul" sx={{ color: 'text.secondary' }}>
            <Typography component="li" variant="body1" paragraph>
              Contactgegevens die je zelf verstrekt
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              Gebruiksgegevens van onze website
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              Technische informatie zoals browsertype en besturingssysteem
            </Typography>
          </Box>
        </Box>

        <Box mb={6}>
          <Typography variant="h5" gutterBottom fontWeight="bold" color="primary">
            3. Gebruik van gegevens
          </Typography>
          <Typography variant="body1" paragraph>
            We gebruiken je gegevens voor:
          </Typography>
          <Box component="ul" sx={{ color: 'text.secondary' }}>
            <Typography component="li" variant="body1" paragraph>
              Het verbeteren van onze dienstverlening
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              Het personaliseren van je ervaring
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              Het analyseren van websitegebruik
            </Typography>
          </Box>
        </Box>

        <Box mb={6}>
          <Typography variant="h5" gutterBottom fontWeight="bold" color="primary">
            4. Jouw rechten
          </Typography>
          <Typography variant="body1" paragraph>
            Je hebt het recht om:
          </Typography>
          <Box component="ul" sx={{ color: 'text.secondary' }}>
            <Typography component="li" variant="body1" paragraph>
              Je gegevens in te zien en te corrigeren
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              Je gegevens te laten verwijderen
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              Bezwaar te maken tegen gegevensverwerking
            </Typography>
            <Typography component="li" variant="body1" paragraph>
              Je cookie-instellingen aan te passen
            </Typography>
          </Box>
        </Box>

        <Box>
          <Typography variant="h5" gutterBottom fontWeight="bold" color="primary">
            5. Contact
          </Typography>
          <Typography variant="body1" paragraph>
            Heb je vragen over ons privacybeleid? Neem dan contact met ons op via:
          </Typography>
          <Typography variant="body1" paragraph color="text.secondary">
            Email: privacy@dewebsitemeesters.nl<br />
            Telefoon: 020-1234567
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default PrivacyPage;
