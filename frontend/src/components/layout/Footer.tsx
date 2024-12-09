import React from 'react';
import { Container, Grid, Typography, Box, Link, IconButton, useTheme } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Diensten',
      links: [
        { name: 'Website Development', path: '/diensten#website-development' },
        { name: 'E-commerce', path: '/diensten#e-commerce' },
        { name: 'Web Design', path: '/diensten#web-design' },
        { name: 'Optimalisatie', path: '/diensten#optimalisatie' },
      ],
    },
    {
      title: 'Bedrijf',
      links: [
        { name: 'Over ons', path: '/over-ons' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contact', path: '/contact' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', path: '/privacy' },
        { name: 'Cookie Policy', path: '/cookie-policy' },
        { name: 'Algemene Voorwaarden', path: '/voorwaarden' },
      ],
    },
  ];

  return (
    <Box
      component="footer"
      sx={{
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
      {/* Main Footer Content */}
      <Container maxWidth="lg">
        <Box sx={{ py: { xs: 6, md: 8 } }}>
          <Grid container spacing={4}>
            {/* Brand Section */}
            <Grid item xs={12} md={4}>
              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="h6"
                  component={RouterLink}
                  to="/"
                  sx={{
                    color: 'primary.main',
                    textDecoration: 'none',
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    display: 'inline-block',
                    mb: 2,
                  }}
                >
                  DeWebsiteMeesters
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 3, maxWidth: '300px' }}
                >
                  Wij creëren prachtige, op maat gemaakte websites die uw merk tot leven brengen en uw online aanwezigheid versterken.
                </Typography>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <IconButton
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: 'text.secondary',
                      '&:hover': { color: 'primary.main' },
                    }}
                  >
                    <FacebookIcon />
                  </IconButton>
                  <IconButton
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: 'text.secondary',
                      '&:hover': { color: 'primary.main' },
                    }}
                  >
                    <TwitterIcon />
                  </IconButton>
                  <IconButton
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: 'text.secondary',
                      '&:hover': { color: 'primary.main' },
                    }}
                  >
                    <InstagramIcon />
                  </IconButton>
                  <IconButton
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: 'text.secondary',
                      '&:hover': { color: 'primary.main' },
                    }}
                  >
                    <LinkedInIcon />
                  </IconButton>
                </Box>
              </Box>
            </Grid>

            {/* Footer Sections */}
            {footerSections.map((section) => (
              <Grid item xs={12} sm={6} md={2} key={section.title}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: 'primary.main',
                    fontWeight: 600,
                    mb: 2,
                  }}
                >
                  {section.title}
                </Typography>
                <Box
                  component="ul"
                  sx={{
                    listStyle: 'none',
                    p: 0,
                    m: 0,
                  }}
                >
                  {section.links.map((link) => (
                    <Box
                      component="li"
                      key={link.name}
                      sx={{ mb: 1 }}
                    >
                      <Link
                        component={RouterLink}
                        to={link.path}
                        sx={{
                          color: 'text.secondary',
                          textDecoration: 'none',
                          fontSize: '0.875rem',
                          transition: 'color 0.2s',
                          '&:hover': {
                            color: 'primary.main',
                          },
                        }}
                      >
                        {link.name}
                      </Link>
                    </Box>
                  ))}
                </Box>
              </Grid>
            ))}

            {/* Contact Section */}
            <Grid item xs={12} sm={6} md={2}>
              <Typography
                variant="subtitle1"
                sx={{
                  color: 'primary.main',
                  fontWeight: 600,
                  mb: 2,
                }}
              >
                Contact
              </Typography>
              <Box
                component="ul"
                sx={{
                  listStyle: 'none',
                  p: 0,
                  m: 0,
                }}
              >
                <Box component="li" sx={{ mb: 1 }}>
                  <Link
                    href="tel:+31612345678"
                    sx={{
                      color: 'text.secondary',
                      textDecoration: 'none',
                      fontSize: '0.875rem',
                      transition: 'color 0.2s',
                      '&:hover': {
                        color: 'primary.main',
                      },
                    }}
                  >
                    +31 6 12345678
                  </Link>
                </Box>
                <Box component="li" sx={{ mb: 1 }}>
                  <Link
                    href="mailto:info@dewebsitemeesters.nl"
                    sx={{
                      color: 'text.secondary',
                      textDecoration: 'none',
                      fontSize: '0.875rem',
                      transition: 'color 0.2s',
                      '&:hover': {
                        color: 'primary.main',
                      },
                    }}
                  >
                    info@dewebsitemeesters.nl
                  </Link>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>

      {/* Copyright Section */}
      <Box
        sx={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          py: 3,
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="body2"
            color="text.secondary"
            align="center"
          >
            {currentYear} DeWebsiteMeesters. Alle rechten voorbehouden.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
