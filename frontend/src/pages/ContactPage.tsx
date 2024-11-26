import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Box,
  Paper,
  Alert,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const ContactPage = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Simulate form submission
    setFormStatus('success');
    // Reset form after 3 seconds
    setTimeout(() => setFormStatus('idle'), 3000);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" component="h1" align="center" gutterBottom>
        Contact
      </Typography>
      <Typography variant="h5" color="textSecondary" align="center" paragraph>
        Neem contact met ons op voor een vrijblijvend gesprek
      </Typography>

      <Grid container spacing={6} sx={{ mt: 4 }}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 4 }}>
            <Typography variant="h4" gutterBottom>
              Stuur ons een bericht
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Voornaam"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Achternaam"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Email"
                    type="email"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Onderwerp"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Bericht"
                    multiline
                    rows={4}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                  >
                    Verstuur Bericht
                  </Button>
                </Grid>
              </Grid>
            </form>
            {formStatus === 'success' && (
              <Alert severity="success" sx={{ mt: 2 }}>
                Bedankt voor uw bericht! We nemen zo spoedig mogelijk contact met u op.
              </Alert>
            )}
            {formStatus === 'error' && (
              <Alert severity="error" sx={{ mt: 2 }}>
                Er is iets misgegaan. Probeer het later opnieuw.
              </Alert>
            )}
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 4, height: '100%' }}>
            <Typography variant="h4" gutterBottom>
              Contactgegevens
            </Typography>
            <Box sx={{ mt: 4 }}>
              <Box display="flex" alignItems="center" mb={3}>
                <LocationOnIcon sx={{ mr: 2, color: 'primary.main' }} />
                <Typography>
                  Hoofdstraat 123
                  <br />
                  1234 AB Amsterdam
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" mb={3}>
                <PhoneIcon sx={{ mr: 2, color: 'primary.main' }} />
                <Typography>+31 (0)20 123 4567</Typography>
              </Box>
              <Box display="flex" alignItems="center" mb={3}>
                <EmailIcon sx={{ mr: 2, color: 'primary.main' }} />
                <Typography>info@dewebsitemeesters.nl</Typography>
              </Box>
            </Box>

            <Typography variant="h5" sx={{ mt: 6, mb: 2 }}>
              Openingstijden
            </Typography>
            <Typography>
              Maandag - Vrijdag: 9:00 - 17:00
              <br />
              Weekend: Gesloten
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactPage;
