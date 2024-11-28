import React from 'react';
import { Service } from '../types/service';
import WebIcon from '@mui/icons-material/Web';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BuildIcon from '@mui/icons-material/Build';
import SpeedIcon from '@mui/icons-material/Speed';
import SecurityIcon from '@mui/icons-material/Security';
import BrushIcon from '@mui/icons-material/Brush';

export const services: Service[] = [
  {
    id: 'website-development',
    title: 'Website Ontwikkeling',
    shortDescription: 'Professionele, op maat gemaakte websites die perfect aansluiten bij uw bedrijf en doelgroep.',
    longDescription: 'Wij ontwikkelen websites die niet alleen mooi zijn, maar ook functioneel en gebruiksvriendelijk. Met focus op conversie, gebruikerservaring en zoekmachinevriendelijkheid zorgen we voor een website die resultaat oplevert.',
    icon: <WebIcon fontSize="large" />,
    startingPrice: 999,
    features: [
      'Responsive design voor alle apparaten',
      'SEO-vriendelijke structuur',
      'Contact- en offerte formulieren',
      'Google Analytics integratie',
      'SSL-certificaat',
      'Basis SEO-optimalisatie'
    ],
    deliverables: [
      'Volledig responsive website',
      'Content Management Systeem',
      'Handleiding voor contentbeheer',
      'Browser compatibiliteit tests',
      '3 revisierondes'
    ],
    timeline: '4-6 weken',
    faq: [
      {
        question: 'Kan ik zelf de content beheren?',
        answer: 'Ja, we leveren een gebruiksvriendelijk CMS waarin u eenvoudig teksten en afbeeldingen kunt aanpassen.'
      },
      {
        question: 'Is de website geschikt voor mobiel gebruik?',
        answer: 'Absoluut! Alle websites worden ontwikkeld volgens het mobile-first principe en zijn perfect bruikbaar op alle apparaten.'
      }
    ]
  },
  {
    id: 'webshop-development',
    title: 'Webshop Ontwikkeling',
    shortDescription: 'Professionele e-commerce oplossingen om uw producten online te verkopen.',
    longDescription: 'Van kleine boutique webshops tot grote e-commerce platforms, wij bouwen de perfecte online winkel voor uw producten. Met focus op gebruiksgemak, conversie en veiligheid.',
    icon: <ShoppingCartIcon fontSize="large" />,
    startingPrice: 1499,
    features: [
      'Gebruiksvriendelijk productbeheer',
      'Veilige betalingsintegratie',
      'Voorraadbeheer',
      'Orderverwerking systeem',
      'Klantaccounts',
      'Uitgebreide rapportages'
    ],
    deliverables: [
      'Volledig functionele webshop',
      'Payment provider integratie',
      'Productbeheer systeem',
      'Order management',
      'Training personeel'
    ],
    timeline: '6-8 weken',
    faq: [
      {
        question: 'Welke betaalmethoden kunnen worden geïntegreerd?',
        answer: 'We integreren alle gangbare betaalmethoden zoals iDEAL, creditcard, PayPal, en AfterPay.'
      },
      {
        question: 'Kan ik de voorraad automatisch bijhouden?',
        answer: 'Ja, het systeem houdt automatisch de voorraad bij en kan waarschuwingen sturen bij lage voorraad.'
      }
    ]
  },
  {
    id: 'website-maintenance',
    title: 'Website Onderhoud',
    shortDescription: 'Zorgeloos online met ons complete onderhoudspakket voor uw website.',
    longDescription: 'Wij zorgen ervoor dat uw website up-to-date, veilig en snel blijft. Met regelmatige updates, backups en monitoring bent u verzekerd van een zorgeloze online aanwezigheid.',
    icon: <BuildIcon fontSize="large" />,
    startingPrice: 79,
    features: [
      'Regelmatige software updates',
      'Dagelijkse backups',
      'Security monitoring',
      'Performance optimalisatie',
      'Technische ondersteuning',
      'Maandelijkse rapportage'
    ],
    deliverables: [
      'Maandelijkse onderhoudswerkzaamheden',
      'Security patches',
      'Performance rapport',
      'Support via email en telefoon'
    ],
    timeline: 'Doorlopend (maandelijks)',
    faq: [
      {
        question: 'Hoe snel wordt er gereageerd op problemen?',
        answer: 'Bij kritieke issues reageren we binnen 4 uur, voor reguliere support binnen 24 uur.'
      },
      {
        question: 'Kan ik ook alleen technische updates afnemen?',
        answer: 'Ja, we bieden verschillende onderhoudspakketten aan die aansluiten bij uw behoeften.'
      }
    ]
  },
  {
    id: 'performance-optimization',
    title: 'Performance Optimalisatie',
    shortDescription: 'Verbeter de laadsnelheid en prestaties van uw website.',
    longDescription: 'Een snelle website is cruciaal voor een goede gebruikerservaring en SEO. Wij analyseren en optimaliseren uw website voor maximale prestaties.',
    icon: <SpeedIcon fontSize="large" />,
    startingPrice: 499,
    features: [
      'Website snelheidsanalyse',
      'Code optimalisatie',
      'Caching implementatie',
      'Image optimalisatie',
      'CDN setup',
      'Core Web Vitals optimalisatie'
    ],
    deliverables: [
      'Performance audit rapport',
      'Optimalisatie werkzaamheden',
      'Voor/na metingen',
      'Aanbevelingen rapport'
    ],
    timeline: '1-2 weken',
    faq: [
      {
        question: 'Hoeveel sneller wordt mijn website?',
        answer: 'Dit verschilt per situatie, maar we streven naar minimaal 40% verbetering in laadtijd.'
      },
      {
        question: 'Heeft dit invloed op de SEO?',
        answer: 'Ja, snelheid is een belangrijke ranking factor voor Google.'
      }
    ]
  },
  {
    id: 'security-audit',
    title: 'Security Audit & Implementatie',
    shortDescription: 'Bescherm uw website en data met onze security oplossingen.',
    longDescription: 'Wij voeren uitgebreide security audits uit en implementeren de benodigde beveiligingsmaatregelen om uw website en data te beschermen.',
    icon: <SecurityIcon fontSize="large" />,
    startingPrice: 799,
    features: [
      'Vulnerability scanning',
      'Firewall implementatie',
      'SSL certificaat',
      'Malware scanning',
      'Backup systeem',
      'Security monitoring'
    ],
    deliverables: [
      'Security audit rapport',
      'Implementatie beveiligingsmaatregelen',
      'Documentatie',
      'Incident response plan'
    ],
    timeline: '2-3 weken',
    faq: [
      {
        question: 'Is een security audit eenmalig nodig?',
        answer: 'We adviseren jaarlijkse audits om up-to-date te blijven met nieuwe bedreigingen.'
      },
      {
        question: 'Wat gebeurt er bij een security incident?',
        answer: 'We hebben een 24/7 incident response team beschikbaar voor security emergencies.'
      }
    ]
  },
  {
    id: 'design-services',
    title: 'Design Services',
    shortDescription: 'Professioneel webdesign dat converteert en inspireert.',
    longDescription: 'Ons team van ervaren designers creëert unieke, moderne en gebruiksvriendelijke designs die perfect aansluiten bij uw merk en doelgroep.',
    icon: <BrushIcon fontSize="large" />,
    startingPrice: 749,
    features: [
      'Custom webdesign',
      'UI/UX design',
      'Responsive design',
      'Brand identity design',
      'Prototype development',
      'Design systeem'
    ],
    deliverables: [
      'Design mockups',
      'Interactief prototype',
      'Style guide',
      'Design assets',
      'Source files'
    ],
    timeline: '2-4 weken',
    faq: [
      {
        question: 'Krijg ik de bronbestanden van het design?',
        answer: 'Ja, u ontvangt alle bronbestanden en assets van het design.'
      },
      {
        question: 'Hoeveel revisierondes zijn er?',
        answer: 'We bieden standaard 3 revisierondes aan in het design proces.'
      }
    ]
  }
];
