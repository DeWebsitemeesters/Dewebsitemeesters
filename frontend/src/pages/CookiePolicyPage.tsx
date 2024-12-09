import React from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';

const CookiePolicyPage: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Box py={4}>
        <Paper elevation={0} sx={{ p: 4 }}>
          <Typography variant="h1" gutterBottom>
            Cookiebeleid
          </Typography>
          
          <Box mb={4}>
            <Typography variant="h2" gutterBottom>
              Wat zijn cookies?
            </Typography>
            <Typography paragraph>
              Cookies zijn kleine tekstbestanden die tijdens uw bezoek aan onze website op uw apparaat worden geplaatst.
              Deze bestanden bevatten informatie die gebruikt wordt om uw browserervaring te verbeteren en ons te helpen
              onze dienstverlening te optimaliseren.
            </Typography>
          </Box>

          <Box mb={4}>
            <Typography variant="h2" gutterBottom>
              Welke cookies gebruiken wij?
            </Typography>
            
            <Typography variant="h3" gutterBottom>
              Noodzakelijke cookies
            </Typography>
            <Typography paragraph>
              Deze cookies zijn essentieel voor het functioneren van de website. Ze maken basisfuncties mogelijk zoals
              paginanavigatie en toegang tot beveiligde delen van de website. De website kan niet goed functioneren
              zonder deze cookies.
            </Typography>

            <Typography variant="h3" gutterBottom>
              Analytische cookies
            </Typography>
            <Typography paragraph>
              We gebruiken analytische cookies om te begrijpen hoe bezoekers onze website gebruiken. Deze informatie
              helpt ons om de website te verbeteren en de gebruikerservaring te optimaliseren. Deze cookies verzamelen
              geanonimiseerde informatie over bezoekersgedrag.
            </Typography>

            <Typography variant="h3" gutterBottom>
              Marketing cookies
            </Typography>
            <Typography paragraph>
              Deze cookies worden gebruikt om bezoekers op andere websites te volgen. Het doel is om advertenties te
              tonen die relevant en aantrekkelijk zijn voor de individuele gebruiker. Deze cookies onthouden uw
              websitebezoek en delen deze informatie met andere organisaties, zoals adverteerders.
            </Typography>
          </Box>

          <Box mb={4}>
            <Typography variant="h2" gutterBottom>
              Uw cookie-instellingen beheren
            </Typography>
            <Typography paragraph>
              U kunt uw cookie-voorkeuren op elk moment aanpassen via de cookie-instellingen op onze website.
              Daarnaast kunt u ook cookies beheren via uw browserinstellingen. Houd er rekening mee dat het uitschakelen
              van bepaalde cookies invloed kan hebben op uw ervaring op onze website.
            </Typography>
          </Box>

          <Box mb={4}>
            <Typography variant="h2" gutterBottom>
              Updates van dit beleid
            </Typography>
            <Typography paragraph>
              We kunnen dit cookiebeleid van tijd tot tijd bijwerken om veranderingen in onze diensten of wetgeving
              weer te geven. We raden u aan om deze pagina regelmatig te bezoeken om op de hoogte te blijven van
              eventuele wijzigingen.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h2" gutterBottom>
              Contact
            </Typography>
            <Typography paragraph>
              Heeft u vragen over ons cookiebeleid? Neem dan contact met ons op via het contactformulier op onze website.
              We helpen u graag verder met eventuele vragen of zorgen.
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default CookiePolicyPage;
