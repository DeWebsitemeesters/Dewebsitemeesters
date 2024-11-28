import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton, Stack } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const StyledFooter = styled(Box)(({ theme }) => ({
  backgroundColor: '#f8f9fa',
  padding: theme.spacing(6, 0),
  marginTop: 'auto',
  borderTop: '1px solid #e7e7e7',
}));

const FooterLink = styled(Link)({
  color: '#666',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
});

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <StyledFooter component="footer">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Contact Information */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2" color="text.secondary">
              De Websitemeesters B.V.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Webstraat 123
            </Typography>
            <Typography variant="body2" color="text.secondary">
              1234 AB Amsterdam
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Tel: +31 (0)20 123 4567
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: info@dewebsitemeesters.nl
            </Typography>
          </Grid>

          {/* Legal Information */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Bedrijfsinformatie
            </Typography>
            <Typography variant="body2" color="text.secondary">
              KvK: 12345678
            </Typography>
            <Typography variant="body2" color="text.secondary">
              BTW: NL123456789B01
            </Typography>
            <Typography variant="body2" color="text.secondary">
              IBAN: NL01 BANK 0123 4567 89
            </Typography>
          </Grid>

          {/* Legal Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Juridisch
            </Typography>
            <Stack spacing={1}>
              <FooterLink href="/privacy">Privacy Statement</FooterLink>
              <FooterLink href="/disclaimer">Disclaimer</FooterLink>
              <FooterLink href="/voorwaarden">Algemene Voorwaarden</FooterLink>
            </Stack>
          </Grid>

          {/* Social Media */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Volg ons
            </Typography>
            <Box>
              <IconButton href="https://facebook.com" target="_blank" aria-label="Facebook">
                <Facebook />
              </IconButton>
              <IconButton href="https://twitter.com" target="_blank" aria-label="Twitter">
                <Twitter />
              </IconButton>
              <IconButton href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
                <LinkedIn />
              </IconButton>
              <IconButton href="https://instagram.com" target="_blank" aria-label="Instagram">
                <Instagram />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright and Credits */}
        <Box sx={{ mt: 5, pt: 3, borderTop: '1px solid #e7e7e7' }}>
          <Grid container spacing={2} justifyContent="space-between" alignItems="center">
            <Grid item xs={12} sm={6}>
              <Typography variant="body2" color="text.secondary">
                © {currentYear} De Websitemeesters B.V. Alle rechten voorbehouden.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} sx={{ textAlign: { xs: 'left', sm: 'right' } }}>
              <Typography variant="body2" color="text.secondary">
                Website gemaakt door{' '}
                <FooterLink href="https://dewebsitemeesters.nl" target="_blank">
                  De Websitemeesters
                </FooterLink>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
