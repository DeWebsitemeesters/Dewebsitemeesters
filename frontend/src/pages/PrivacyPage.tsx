import React from 'react';
import { Container, Typography, Box, List, ListItem, ListItemText } from '@mui/material';

const PrivacyPage: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h1" component="h1" gutterBottom sx={{ fontSize: '2.5rem', mb: 4 }}>
        Privacyverklaring
      </Typography>

      <Typography paragraph>
        De Websitemeesters B.V., gevestigd aan Webstraat 123, 1234 AB Amsterdam, is verantwoordelijk voor de verwerking van persoonsgegevens zoals weergegeven in deze privacyverklaring.
      </Typography>

      <Typography variant="h2" gutterBottom sx={{ fontSize: '1.8rem', mt: 4, mb: 2 }}>
        Contactgegevens
      </Typography>
      <Typography paragraph>
        Website: https://www.dewebsitemeesters.nl<br />
        Adres: Webstraat 123, 1234 AB Amsterdam<br />
        Telefoon: +31 (0)20 123 4567<br />
        E-mail: info@dewebsitemeesters.nl
      </Typography>

      <Typography variant="h2" gutterBottom sx={{ fontSize: '1.8rem', mt: 4, mb: 2 }}>
        Persoonsgegevens die wij verwerken
      </Typography>
      <Typography paragraph>
        De Websitemeesters verwerkt uw persoonsgegevens doordat u gebruik maakt van onze diensten en/of omdat u deze zelf aan ons verstrekt. Hieronder vindt u een overzicht van de persoonsgegevens die wij verwerken:
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="- Voor- en achternaam" />
        </ListItem>
        <ListItem>
          <ListItemText primary="- Adresgegevens" />
        </ListItem>
        <ListItem>
          <ListItemText primary="- Telefoonnummer" />
        </ListItem>
        <ListItem>
          <ListItemText primary="- E-mailadres" />
        </ListItem>
        <ListItem>
          <ListItemText primary="- IP-adres" />
        </ListItem>
        <ListItem>
          <ListItemText primary="- Overige persoonsgegevens die u actief verstrekt" />
        </ListItem>
        <ListItem>
          <ListItemText primary="- Gegevens over uw activiteiten op onze website" />
        </ListItem>
        <ListItem>
          <ListItemText primary="- Internetbrowser en apparaat type" />
        </ListItem>
      </List>

      <Typography variant="h2" gutterBottom sx={{ fontSize: '1.8rem', mt: 4, mb: 2 }}>
        Bijzondere en/of gevoelige persoonsgegevens die wij verwerken
      </Typography>
      <Typography paragraph>
        Onze website en/of dienst heeft niet de intentie gegevens te verzamelen over websitebezoekers die jonger zijn dan 16 jaar, tenzij ze toestemming hebben van ouders of voogd. We kunnen echter niet controleren of een bezoeker ouder dan 16 is. Wij raden ouders dan ook aan betrokken te zijn bij de online activiteiten van hun kinderen, om zo te voorkomen dat er gegevens over kinderen verzameld worden zonder ouderlijke toestemming.
      </Typography>

      <Typography variant="h2" gutterBottom sx={{ fontSize: '1.8rem', mt: 4, mb: 2 }}>
        Met welk doel wij persoonsgegevens verwerken
      </Typography>
      <Typography paragraph>
        De Websitemeesters verwerkt uw persoonsgegevens voor de volgende doelen:
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="- Het afhandelen van uw betaling" />
        </ListItem>
        <ListItem>
          <ListItemText primary="- U te kunnen bellen of e-mailen indien dit nodig is om onze dienstverlening uit te kunnen voeren" />
        </ListItem>
        <ListItem>
          <ListItemText primary="- U te informeren over wijzigingen van onze diensten en producten" />
        </ListItem>
        <ListItem>
          <ListItemText primary="- Om goederen en diensten bij u af te leveren" />
        </ListItem>
        <ListItem>
          <ListItemText primary="- Het analyseren van uw gedrag op de website om daarmee de website te verbeteren" />
        </ListItem>
      </List>

      <Typography variant="h2" gutterBottom sx={{ fontSize: '1.8rem', mt: 4, mb: 2 }}>
        Geautomatiseerde besluitvorming
      </Typography>
      <Typography paragraph>
        De Websitemeesters neemt niet op basis van geautomatiseerde verwerkingen besluiten over zaken die (aanzienlijke) gevolgen kunnen hebben voor personen. Het gaat hier om besluiten die worden genomen door computerprogramma's of -systemen, zonder dat daar een mens tussen zit.
      </Typography>

      <Typography variant="h2" gutterBottom sx={{ fontSize: '1.8rem', mt: 4, mb: 2 }}>
        Hoe lang we persoonsgegevens bewaren
      </Typography>
      <Typography paragraph>
        De Websitemeesters bewaart uw persoonsgegevens niet langer dan strikt nodig is om de doelen te realiseren waarvoor uw gegevens worden verzameld. Wij hanteren de volgende bewaartermijnen voor de volgende (categorieën) van persoonsgegevens:
      </Typography>
      <List>
        <ListItem>
          <ListItemText 
            primary="Personalia, adres, contact en ordergegevens" 
            secondary="Bewaartermijn: 7 jaar > Reden: Wettelijke verplichting belastingdienst" 
          />
        </ListItem>
        <ListItem>
          <ListItemText 
            primary="Website gebruiksgegevens" 
            secondary="Bewaartermijn: 26 maanden > Reden: Website optimalisatie en analysedoeleinden" 
          />
        </ListItem>
      </List>

      <Typography variant="h2" gutterBottom sx={{ fontSize: '1.8rem', mt: 4, mb: 2 }}>
        Delen van persoonsgegevens met derden
      </Typography>
      <Typography paragraph>
        De Websitemeesters verkoopt uw gegevens niet aan derden en verstrekt deze uitsluitend indien dit nodig is voor de uitvoering van onze overeenkomst met u of om te voldoen aan een wettelijke verplichting. Met bedrijven die uw gegevens verwerken in onze opdracht, sluiten wij een verwerkersovereenkomst om te zorgen voor eenzelfde niveau van beveiliging en vertrouwelijkheid van uw gegevens. De Websitemeesters blijft verantwoordelijk voor deze verwerkingen.
      </Typography>

      <Typography variant="h2" gutterBottom sx={{ fontSize: '1.8rem', mt: 4, mb: 2 }}>
        Cookies, of vergelijkbare technieken, die wij gebruiken
      </Typography>
      <Typography paragraph>
        De Websitemeesters gebruikt functionele, analytische en tracking cookies. Een cookie is een klein tekstbestand dat bij het eerste bezoek aan deze website wordt opgeslagen in de browser van uw computer, tablet of smartphone. De Websitemeesters gebruikt cookies met een puur technische functionaliteit. Deze zorgen ervoor dat de website naar behoren werkt en dat bijvoorbeeld uw voorkeursinstellingen onthouden worden.
      </Typography>
      <Typography paragraph>
        U kunt zich afmelden voor cookies door uw internetbrowser zo in te stellen dat deze geen cookies meer opslaat. Daarnaast kunt u ook alle informatie die eerder is opgeslagen via de instellingen van uw browser verwijderen.
      </Typography>

      <Typography variant="h2" gutterBottom sx={{ fontSize: '1.8rem', mt: 4, mb: 2 }}>
        Gegevens inzien, aanpassen of verwijderen
      </Typography>
      <Typography paragraph>
        U heeft het recht om uw persoonsgegevens in te zien, te corrigeren of te verwijderen. Daarnaast heeft u het recht om uw eventuele toestemming voor de gegevensverwerking in te trekken of bezwaar te maken tegen de verwerking van uw persoonsgegevens door De Websitemeesters en heeft u het recht op gegevensoverdraagbaarheid.
      </Typography>
      <Typography paragraph>
        U kunt een verzoek tot inzage, correctie, verwijdering, gegevensoverdraging van uw persoonsgegevens of verzoek tot intrekking van uw toestemming of bezwaar op de verwerking van uw persoonsgegevens sturen naar info@dewebsitemeesters.nl.
      </Typography>
      <Typography paragraph>
        Om er zeker van te zijn dat het verzoek tot inzage door u is gedaan, vragen wij u een kopie van uw identiteitsbewijs met het verzoek mee te sturen. Maak in deze kopie uw pasfoto, MRZ (machine readable zone, de strook met nummers onderaan het paspoort), paspoortnummer en Burgerservicenummer (BSN) zwart. Dit ter bescherming van uw privacy. We reageren zo snel mogelijk, maar binnen vier weken, op uw verzoek.
      </Typography>

      <Typography variant="h2" gutterBottom sx={{ fontSize: '1.8rem', mt: 4, mb: 2 }}>
        Hoe wij persoonsgegevens beveiligen
      </Typography>
      <Typography paragraph>
        De Websitemeesters neemt de bescherming van uw gegevens serieus en neemt passende maatregelen om misbruik, verlies, onbevoegde toegang, ongewenste openbaarmaking en ongeoorloofde wijziging tegen te gaan. Als u de indruk heeft dat uw gegevens niet goed beveiligd zijn of er aanwijzingen zijn van misbruik, neem dan contact op via info@dewebsitemeesters.nl.
      </Typography>

      <Box sx={{ mt: 4, pt: 2, borderTop: '1px solid #e0e0e0' }}>
        <Typography variant="body2" color="text.secondary">
          Laatste update: {new Date().toLocaleDateString()}
        </Typography>
      </Box>
    </Container>
  );
};

export default PrivacyPage;
