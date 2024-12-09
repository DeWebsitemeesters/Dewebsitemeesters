import React from 'react';

const CookiePolicy = () => {
  return (
    <div className="cookie-policy container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Cookiebeleid</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Wat zijn cookies?</h2>
        <p className="mb-4">
          Cookies zijn kleine tekstbestanden die tijdens uw bezoek aan onze website op uw apparaat worden geplaatst.
          Deze bestanden bevatten informatie die gebruikt wordt om uw browserervaring te verbeteren en ons te helpen
          onze dienstverlening te optimaliseren.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Welke cookies gebruiken wij?</h2>
        
        <h3 className="text-xl font-semibold mb-3">Noodzakelijke cookies</h3>
        <p className="mb-4">
          Deze cookies zijn essentieel voor het functioneren van de website. Ze maken basisfuncties mogelijk zoals
          paginanavigatie en toegang tot beveiligde delen van de website.
        </p>

        <h3 className="text-xl font-semibold mb-3">Analytische cookies</h3>
        <p className="mb-4">
          We gebruiken analytische cookies om te begrijpen hoe bezoekers onze website gebruiken. Deze informatie
          helpt ons om de website te verbeteren en de gebruikerservaring te optimaliseren.
        </p>

        <h3 className="text-xl font-semibold mb-3">Marketing cookies</h3>
        <p className="mb-4">
          Deze cookies worden gebruikt om bezoekers op andere websites te volgen. Het doel is om advertenties te
          tonen die relevant en aantrekkelijk zijn voor de individuele gebruiker.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Uw cookie-instellingen beheren</h2>
        <p className="mb-4">
          U kunt uw cookie-voorkeuren op elk moment aanpassen door op de "Cookie-instellingen" knop te klikken
          onderaan onze website. Ook kunt u cookies beheren via uw browserinstellingen.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="mb-4">
          Heeft u vragen over ons cookiebeleid? Neem dan contact met ons op via het contactformulier op onze website.
        </p>
      </section>
    </div>
  );
};

export default CookiePolicy;
