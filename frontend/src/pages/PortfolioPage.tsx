import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Box,
} from '@mui/material';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'Moderne webshop voor een lokale modewinkel',
    image: '/images/portfolio/ecommerce.jpg',
    technologies: ['React', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Restaurant Website',
    description: 'Responsieve website met online reserveringssysteem',
    image: '/images/portfolio/restaurant.jpg',
    technologies: ['React', 'Express', 'PostgreSQL'],
  },
  {
    title: 'Vastgoed Platform',
    description: 'Custom vastgoed management systeem',
    image: '/images/portfolio/real-estate.jpg',
    technologies: ['React', 'Django', 'PostgreSQL'],
  },
  {
    title: 'Sport App',
    description: 'Mobiele app voor sportschool management',
    image: '/images/portfolio/fitness.jpg',
    technologies: ['React Native', 'Firebase'],
  },
];

const PortfolioPage = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" component="h1" align="center" gutterBottom>
        Portfolio
      </Typography>
      <Typography variant="h5" color="textSecondary" align="center" paragraph>
        Ontdek onze recente projecten
      </Typography>

      <Grid container spacing={4} sx={{ mt: 4 }}>
        {projects.map((project) => (
          <Grid item xs={12} sm={6} key={project.title}>
            <Card className="portfolio-card">
              <CardMedia
                component="div"
                sx={{
                  height: 200,
                  backgroundColor: 'grey.300',
                }}
              />
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant="body1" color="textSecondary" paragraph>
                  {project.description}
                </Typography>
                <Box mb={2}>
                  {project.technologies.map((tech) => (
                    <Typography
                      key={tech}
                      variant="body2"
                      component="span"
                      sx={{
                        mr: 1,
                        px: 1,
                        py: 0.5,
                        bgcolor: 'primary.main',
                        color: 'white',
                        borderRadius: 1,
                        display: 'inline-block',
                        mb: 1,
                      }}
                    >
                      {tech}
                    </Typography>
                  ))}
                </Box>
                <Button variant="outlined" color="primary">
                  Bekijk Project
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PortfolioPage;
