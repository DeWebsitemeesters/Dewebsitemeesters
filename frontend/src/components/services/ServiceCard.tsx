import React from 'react';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
  Collapse,
  IconButton,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Service } from '../../types/service';

interface ExpandMoreProps {
  expand: boolean;
}

const ExpandMore = styled((props: { expand: boolean; onClick: () => void; children: React.ReactNode }) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }: { theme: any; expand: boolean }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ 
      height: '100%', 
      display: 'flex', 
      flexDirection: 'column',
      transition: 'transform 0.2s ease-in-out',
      '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: 4,
      },
    }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          mb: 2,
          color: 'primary.main' 
        }}>
          {service.icon}
          <Typography variant="h5" component="h2" sx={{ ml: 1 }}>
            {service.title}
          </Typography>
        </Box>
        <Typography variant="body1" color="text.secondary" paragraph>
          {service.shortDescription}
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Typography variant="h6" color="primary" gutterBottom>
            Vanaf €{service.startingPrice},-
          </Typography>
        </Box>
      </CardContent>
      
      <CardActions disableSpacing>
        <Button 
          size="small" 
          color="primary"
          href={`/diensten#${service.id}`}
        >
          Meer informatie
        </Button>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Inclusief:</Typography>
          <ul>
            {service.features.map((feature, index) => (
              <li key={index}>
                <Typography variant="body2" color="text.secondary">
                  {feature}
                </Typography>
              </li>
            ))}
          </ul>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default ServiceCard;
