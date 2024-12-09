import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Container,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useScrollTrigger,
  Slide,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link as RouterLink, useLocation } from 'react-router-dom';

interface Props {
  window?: () => Window;
}

const Header: React.FC<Props> = (props) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();
  
  const trigger = useScrollTrigger({
    target: props.window ? props.window() : undefined,
  });

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'Diensten', path: '/diensten' },
    { text: 'Portfolio', path: '/portfolio' },
    { text: 'Blog', path: '/blog' },
    { text: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const drawer = (
    <Box
      sx={{
        height: '100%',
        bgcolor: 'background.paper',
        py: 2,
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', px: 2, mb: 2 }}>
        <IconButton onClick={handleDrawerToggle} sx={{ color: 'primary.main' }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {menuItems.map((item) => (
          <ListItem 
            key={item.text}
            component={RouterLink}
            to={item.path}
            onClick={handleDrawerToggle}
            sx={{
              py: 2,
              color: isActive(item.path) ? 'primary.main' : 'text.primary',
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.05)',
              },
            }}
          >
            <ListItemText 
              primary={item.text}
              primaryTypographyProps={{
                sx: {
                  fontSize: '1.25rem',
                  fontWeight: isActive(item.path) ? 600 : 400,
                }
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar position="fixed">
          <Container maxWidth="lg">
            <Toolbar disableGutters sx={{ height: 80 }}>
              <Box
                component={RouterLink}
                to="/"
                sx={{
                  color: 'primary.main',
                  textDecoration: 'none',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  flexGrow: { xs: 1, md: 0 },
                  mr: { md: 8 },
                }}
              >
                DeWebsiteMeesters
              </Box>

              {/* Desktop Menu */}
              {!isMobile && (
                <Box sx={{ display: 'flex', flexGrow: 1, gap: 4 }}>
                  {menuItems.map((item) => (
                    <Button
                      key={item.text}
                      component={RouterLink}
                      to={item.path}
                      sx={{
                        color: isActive(item.path) ? 'primary.main' : 'text.secondary',
                        fontSize: '1rem',
                        fontWeight: isActive(item.path) ? 600 : 400,
                        '&:hover': {
                          color: 'primary.main',
                          backgroundColor: 'transparent',
                        },
                      }}
                    >
                      {item.text}
                    </Button>
                  ))}
                </Box>
              )}

              {/* Contact Button */}
              {!isMobile && (
                <Button
                  component={RouterLink}
                  to="/contact"
                  variant="contained"
                  sx={{
                    ml: 2,
                  }}
                >
                  Start uw project
                </Button>
              )}

              {/* Mobile Menu Button */}
              {isMobile && (
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ ml: 2 }}
                >
                  <MenuIcon />
                </IconButton>
              )}
            </Toolbar>
          </Container>
        </AppBar>
      </Slide>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            width: '100%',
            bgcolor: 'background.paper',
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;
