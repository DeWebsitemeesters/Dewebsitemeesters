import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Box,
} from '@mui/material';

const articles = [
  {
    title: 'De impact van AI op webontwikkeling',
    description: 'Ontdek hoe kunstmatige intelligentie de toekomst van webontwikkeling vormgeeft.',
    date: '26 November 2023',
    category: 'Technologie',
    image: '/images/blog/ai-web-dev.jpg',
  },
  {
    title: 'SEO best practices voor 2024',
    description: 'De nieuwste SEO-strategieën om uw website hoger in Google te laten ranken.',
    date: '25 November 2023',
    category: 'SEO',
    image: '/images/blog/seo-practices.jpg',
  },
  {
    title: 'Responsive design trends',
    description: 'De laatste trends in responsive webdesign en mobile-first development.',
    date: '24 November 2023',
    category: 'Design',
    image: '/images/blog/responsive-design.jpg',
  },
  {
    title: 'E-commerce optimalisatie tips',
    description: 'Praktische tips om uw online verkoop te verhogen.',
    date: '23 November 2023',
    category: 'E-commerce',
    image: '/images/blog/ecommerce-tips.jpg',
  },
];

const BlogPage = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" component="h1" align="center" gutterBottom>
        Blog
      </Typography>
      <Typography variant="h5" color="textSecondary" align="center" paragraph>
        De laatste inzichten en trends in webontwikkeling
      </Typography>

      <Grid container spacing={4} sx={{ mt: 4 }}>
        {articles.map((article) => (
          <Grid item xs={12} sm={6} key={article.title}>
            <Card className="blog-card">
              <CardMedia
                component="div"
                sx={{
                  height: 200,
                  backgroundColor: 'grey.300',
                }}
              />
              <CardContent>
                <Box mb={2}>
                  <Chip
                    label={article.category}
                    color="primary"
                    size="small"
                    sx={{ mr: 1 }}
                  />
                  <Typography variant="body2" color="textSecondary" component="span">
                    {article.date}
                  </Typography>
                </Box>
                <Typography variant="h5" component="h2" gutterBottom>
                  {article.title}
                </Typography>
                <Typography variant="body1" color="textSecondary" paragraph>
                  {article.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default BlogPage;
