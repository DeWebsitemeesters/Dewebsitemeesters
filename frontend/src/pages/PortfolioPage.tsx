import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box,
  Chip,
  Dialog,
  DialogContent,
  IconButton,
  useTheme,
  useMediaQuery,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

// Import images
import ecommerceImg from '../assets/portfolio/ecommerce.jpg';
import restaurantImg from '../assets/portfolio/restaurant.jpg';
import realestateImg from '../assets/portfolio/realestate.jpg';
import fitnessImg from '../assets/portfolio/fitness.jpg';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  challenge?: string;
  solution?: string;
  results?: string;
  testimonial?: {
    name: string;
    role: string;
    company: string;
    text: string;
  };
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'Moderne webshop voor een lokale modewinkel',
    image: ecommerceImg,
    technologies: ['React', 'Node.js', 'MongoDB'],
    category: 'Webshop',
    challenge: 'De klant had behoefte aan een moderne webshop die zowel op desktop als mobiel perfect werkt.',
    solution: 'We hebben een volledig responsive webshop gebouwd met React en Material-UI.',
    results: '50% toename in online verkoop binnen 3 maanden.',
    testimonial: {
      name: 'Lisa de Vries',
      role: 'Eigenaar',
      company: 'Mode & Meer',
      text: 'De nieuwe webshop heeft onze online verkoop enorm boost gegeven!'
    }
  },
  {
    id: 2,
    title: 'Restaurant Website',
    description: 'Stijlvolle website voor een lokaal restaurant',
    image: restaurantImg,
    technologies: ['React', 'TypeScript', 'Strapi'],
    category: 'Website',
    challenge: 'Het restaurant wilde een website waar klanten eenvoudig kunnen reserveren.',
    solution: 'Een moderne website met online reserveringssysteem en menukaart.',
    results: '30% meer online reserveringen.',
    testimonial: {
      name: 'Marco Jansen',
      role: 'Chef-kok',
      company: 'Bistro Delizioso',
      text: 'Onze gasten zijn erg te spreken over het nieuwe reserveringssysteem!'
    }
  },
  {
    id: 3,
    title: 'Vastgoed Platform',
    description: 'Custom vastgoed management systeem',
    image: realestateImg,
    technologies: ['React', 'Django', 'PostgreSQL'],
    category: 'Platform',
    challenge: 'De klant had behoefte aan een custom vastgoed management systeem.',
    solution: 'We hebben een volledig custom vastgoed management systeem gebouwd met React en Django.',
    results: '25% toename in efficiëntie.',
  },
  {
    id: 4,
    title: 'Sport App',
    description: 'Mobiele app voor sportschool management',
    image: fitnessImg,
    technologies: ['React Native', 'Firebase', 'Node.js'],
    category: 'App',
    challenge: 'De sportschool wilde een mobiele app voor het beheer van hun lessen en trainers.',
    solution: 'Een moderne mobiele app met lessenbeheer en trainerbeheer.',
    results: '40% meer lessen geboekt.',
  },
];

const PortfolioPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState('all');
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleClose = () => {
    setSelectedProject(null);
  };

  const handleFilterChange = (event: any) => {
    setFilter(event.target.value);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" component="h1" gutterBottom align="center" sx={{ mb: 6 }}>
        Onze Projecten
      </Typography>

      {/* Filter */}
      <Box sx={{ mb: 4 }}>
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel>Categorie</InputLabel>
          <Select value={filter} onChange={handleFilterChange} label="Categorie">
            <MenuItem value="all">Alle Projecten</MenuItem>
            <MenuItem value="Website">Websites</MenuItem>
            <MenuItem value="Webshop">Webshops</MenuItem>
            <MenuItem value="Platform">Platforms</MenuItem>
            <MenuItem value="App">Apps</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Projects Grid */}
      <Grid container spacing={4}>
        {filteredProjects.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
            <Card 
              sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'scale(1.02)',
                  cursor: 'pointer'
                }
              }}
              onClick={() => handleProjectClick(project)}
            >
              <CardMedia
                component="img"
                height="200"
                image={project.image}
                alt={project.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {project.description}
                </Typography>
                <Box sx={{ mt: 2 }}>
                  {project.technologies.map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      size="small"
                      sx={{ mr: 1, mb: 1 }}
                    />
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Project Detail Dialog */}
      <Dialog
        open={!!selectedProject}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        fullScreen={isMobile}
      >
        {selectedProject && (
          <>
            <IconButton
              sx={{ position: 'absolute', right: 8, top: 8, zIndex: 1 }}
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
            <DialogContent>
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <CardMedia
                    component="img"
                    image={selectedProject.image}
                    alt={selectedProject.title}
                    sx={{ borderRadius: 1 }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="h4" component="h2" gutterBottom>
                    {selectedProject.title}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {selectedProject.description}
                  </Typography>
                  
                  {selectedProject.challenge && (
                    <>
                      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                        Uitdaging
                      </Typography>
                      <Typography variant="body1" paragraph>
                        {selectedProject.challenge}
                      </Typography>
                    </>
                  )}
                  
                  {selectedProject.solution && (
                    <>
                      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                        Oplossing
                      </Typography>
                      <Typography variant="body1" paragraph>
                        {selectedProject.solution}
                      </Typography>
                    </>
                  )}
                  
                  {selectedProject.results && (
                    <>
                      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                        Resultaten
                      </Typography>
                      <Typography variant="body1" paragraph>
                        {selectedProject.results}
                      </Typography>
                    </>
                  )}

                  {selectedProject.testimonial && (
                    <Box sx={{ mt: 4, p: 3, bgcolor: 'grey.100', borderRadius: 1 }}>
                      <Typography variant="body1" paragraph sx={{ fontStyle: 'italic' }}>
                        "{selectedProject.testimonial.text}"
                      </Typography>
                      <Typography variant="subtitle2" color="text.secondary">
                        {selectedProject.testimonial.name}
                      </Typography>
                      <Typography variant="subtitle2" color="text.secondary">
                        {selectedProject.testimonial.role}, {selectedProject.testimonial.company}
                      </Typography>
                    </Box>
                  )}
                </Grid>
              </Grid>
            </DialogContent>
          </>
        )}
      </Dialog>
    </Container>
  );
};

export default PortfolioPage;
