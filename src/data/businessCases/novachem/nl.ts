import type { BusinessCaseContent } from '../../types'

export const novachemNl: BusinessCaseContent = {
  company: {
    name: 'NovaChem Solutions',
    tagline: 'Chemie ten dienste van de industrie',
    founded: 1987,
    employees: 340,
    revenue: '€ 82 miljoen (2023)',
    headquarters: 'Luik, België',
    description: `NovaChem Solutions is een distributeur en formuleerder van industriële chemische producten, actief in België sinds 1987. Het bedrijf is actief in drie hoofdsegmenten: de distributie van chemische grondstoffen, de formulering van producten op maat en technisch advies aan de industrie.

NovaChem is gecertificeerd ISO 9001, ISO 14001 en REACH-conform. Het bedrijf bedient meer dan 400 actieve klanten in de sectoren automotive, voeding, oppervlaktebehandeling en kunststofverwerking.`,
    mission: `Onze industriële klanten voorzien van betrouwbare, innovatieve en duurzame chemische oplossingen, door technische expertise te combineren met een onberispelijke klantenservice.`,
    values: [
      { title: 'Betrouwbaarheid', description: 'Wij houden onze beloften aan klanten en partners.' },
      { title: 'Innovatie', description: 'Wij investeren in R&D voor geavanceerde formuleringen.' },
      { title: 'Duurzaamheid', description: 'Onze processen voldoen aan de strengste milieunormen.' },
      { title: 'Nabijheid', description: 'Elke klant heeft een vaste, bereikbare contactpersoon.' },
    ],
    segments: [
      { name: 'Distributie', share: '55 %', description: 'Wederverkoop van chemische grondstoffen van Europese en Aziatische leveranciers. Permanent stock van 1.200 referenties.' },
      { name: 'Formulering', share: '30 %', description: 'Ontwikkeling en productie van mengsels op maat volgens klantspecificaties. Formuleringsatelier in Luik (2.000 m²).' },
      { name: 'Advies & Diensten', share: '15 %', description: 'Procesaudits, technische ondersteuning op locatie, opleiding van klantteams, REACH/SDS-beheer.' },
    ],
    keyFigures: [
      { label: 'Actieve klanten', value: '400+' },
      { label: 'Stochreferenties', value: '1.200' },
      { label: 'Leverancierslanden', value: '18' },
      { label: 'Medewerkers', value: '340' },
      { label: 'Omzet', value: '€ 82M' },
      { label: 'Jaren actief', value: '37' },
    ],
    processes: [
      {
        title: 'Beheer van klantbestellingen',
        steps: [
          'Ontvangst van de aanvraag (e-mail / portaal / telefoon)',
          'Controle van de beschikbaarheid of leverancierstermijn',
          'Bevestiging van bestelling met interne bestelbon (IBB)',
          'Voorbereiding in het magazijn of start van formulering',
          'Verzending + verzending leveringsbon (LB) en factuur',
          'Klanttevredenheidsopvolging D+7',
        ],
        responsible: 'Commerciële dienst + Logistiek',
        delay: '24–48u voor beschikbaar stock / 5–10 dagen voor leveranciersbestelling',
      },
      {
        title: 'Leveranciersgodkeuringsprocedure',
        steps: [
          'Identificatie van behoefte en sourcing van potentiële leveranciers',
          'Aanvraag documentatie (certificaten, SDS, COA)',
          'Bestelling van stalen voor kwaliteitstests',
          'Technische validatie door het laboratorium',
          'Commerciële onderhandeling en ondertekening raamcontract',
          'Registratie in het ERP-systeem',
        ],
        responsible: 'Aankoop + Kwaliteit',
        delay: '4 tot 8 weken afhankelijk van complexiteit',
      },
      {
        title: 'Behandeling van klachten',
        steps: [
          'Ontvangst en registratie van de klacht (CRM)',
          'Ontvangstbevestiging binnen 4 werkuren',
          'Oorzakenanalyse (non-conformiteit, levering, facturatie)',
          'Correctief actieplan binnen 48u',
          'Creditnota / vervanging afhankelijk van aard van het probleem',
          'Afsluiting en 8D-rapport bij ernstige klacht',
        ],
        responsible: 'Kwaliteitsdienst + Commercieel',
        delay: 'Ontvangstbevestiging: 4u / Oplossing: 2–5 dagen',
      },
      {
        title: 'Beheer van aankopen en herbevoorrading',
        steps: [
          'Automatische analyse van stockdrempels (ERP)',
          'Genereren van bestelvooorstel',
          'Goedkeuring aankoopdienst (> € 10.000: goedkeuring CFO)',
          'Verzending bestelbon aan leverancier',
          'Ontvangst goederen + kwaliteitscontrole bij ontvangst',
          'Opslag en update ERP',
        ],
        responsible: 'Aankoop + Magazijn',
        delay: 'Variabele termijnen per leverancier (2 dagen tot 6 weken)',
      },
    ],
    contacts: [
      { name: 'Sophie Martens', title: 'CEO', email: 's.martens@novachem.be', phone: '+32 4 220 10 01', department: 'Directie' },
      { name: 'Marc Dubois', title: 'Commercieel Directeur', email: 'm.dubois@novachem.be', phone: '+32 4 220 10 10', department: 'Commercieel' },
      { name: 'Isabelle Renard', title: 'Aankoopdirecteur', email: 'i.renard@novachem.be', phone: '+32 4 220 10 20', department: 'Aankoop' },
      { name: 'Thomas Lecomte', title: 'Logistiek Verantwoordelijke', email: 't.lecomte@novachem.be', phone: '+32 4 220 10 30', department: 'Logistiek' },
      { name: 'Claire Fontaine', title: 'Kwaliteitsverantwoordelijke', email: 'c.fontaine@novachem.be', phone: '+32 4 220 10 40', department: 'Kwaliteit' },
      { name: 'Kevin Brasseur', title: 'R&D Verantwoordelijke', email: 'k.brasseur@novachem.be', phone: '+32 4 220 10 50', department: 'R&D' },
      { name: 'Nathalie Pirard', title: 'Financieel Verantwoordelijke', email: 'n.pirard@novachem.be', phone: '+32 4 220 10 60', department: 'Financiën' },
      { name: 'Julien Collin', title: 'KAM – Automotive', email: 'j.collin@novachem.be', phone: '+32 4 220 10 11', department: 'Commercieel' },
      { name: 'Amina Okafor', title: 'KAM – Voedingsindustrie', email: 'a.okafor@novachem.be', phone: '+32 4 220 10 12', department: 'Commercieel' },
      { name: 'Pierre Gilles', title: 'TC – Kunststofverwerking', email: 'p.gilles@novachem.be', phone: '+32 4 220 10 13', department: 'Commercieel' },
    ],
    orgChart: {
      ceo: { name: 'Sophie Martens', title: 'CEO' },
      departments: [
        {
          name: 'Commerciële Directie',
          head: 'Marc Dubois',
          headTitle: 'Commercieel Directeur',
          members: [
            { name: 'Julien Collin', title: 'KAM Automotive' },
            { name: 'Amina Okafor', title: 'KAM Voedingsindustrie' },
            { name: 'Pierre Gilles', title: 'TC Kunststof' },
          ],
        },
        {
          name: 'Aankoopdirectie',
          head: 'Isabelle Renard',
          headTitle: 'Aankoopdirecteur',
          members: [{ name: 'Aankoopteam (4 pers.)', title: '' }],
        },
        {
          name: 'Logistiek & Magazijn',
          head: 'Thomas Lecomte',
          headTitle: 'Logistiek Verantwoordelijke',
          members: [
            { name: 'Magazijnteam (12 pers.)', title: '' },
            { name: 'Transport (3 pers.)', title: '' },
          ],
        },
        {
          name: 'Kwaliteit & Regelgeving',
          head: 'Claire Fontaine',
          headTitle: 'Kwaliteitsverantwoordelijke',
          members: [{ name: 'Laboratorium (5 pers.)', title: '' }],
        },
        {
          name: 'R&D & Formulering',
          head: 'Kevin Brasseur',
          headTitle: 'R&D Verantwoordelijke',
          members: [{ name: 'Formuleerders (6 pers.)', title: '' }],
        },
        {
          name: 'Financiën & Admin',
          head: 'Nathalie Pirard',
          headTitle: 'Financieel Verantwoordelijke',
          members: [{ name: 'Boekhouding (3 pers.)', title: '' }],
        },
      ],
    },
    suppliers: [
      { name: 'ChemBase GmbH', country: 'Duitsland', products: 'Industriële oplosmiddelen, alcoholen', contact: 'Hans Richter', leadTime: '5–7 werkdagen' },
      { name: 'AsiaChem Trading', country: 'China', products: 'Polymeren, epoxyhars', contact: 'Li Wei', leadTime: '4–6 weken' },
      { name: 'PolySource BV', country: 'Nederland', products: 'Kunststofadditieven, stabilisatoren', contact: 'Jan van der Berg', leadTime: '3–5 werkdagen' },
      { name: 'Industrichem SA', country: 'Frankrijk', products: 'Zuren, basen, pH-correctoren', contact: 'Marie Dupont', leadTime: '2–4 werkdagen' },
      { name: 'SurfactanTech S.p.A.', country: 'Italië', products: 'Tensioactiva, emulgatoren', contact: 'Lorenzo Ricci', leadTime: '7–10 werkdagen' },
    ],
    topClients: [
      { name: 'AutoParts Belgium NV', sector: 'Automotive', since: 2008, kam: 'Julien Collin', annualVolume: '€ 4,2M', notes: 'Strategische klant. Jaarlijks raamcontract. Zeer gevoelig voor leveringstermijnen.' },
      { name: 'FoodPack SA', sector: 'Voedingsindustrie', since: 2015, kam: 'Amina Okafor', annualVolume: '€ 1,8M', notes: 'Vereist voedingscertificering per lot. Regelmatige audits.' },
      { name: 'PlastiForm SPRL', sector: 'Kunststofverwerking', since: 2012, kam: 'Pierre Gilles', annualVolume: '€ 1,1M', notes: 'Groot groeipotentieel. Vraagt vaak naar nieuwe formuleringen.' },
      { name: 'MetalCoat Industries', sector: 'Oppervlaktebehandeling', since: 2003, kam: 'Marc Dubois', annualVolume: '€ 3,1M', notes: 'Historische relatie. Zeer veeleisend qua kwaliteit en REACH-conformiteit.' },
    ],
  },
  emails: [
    {
      id: 'e1',
      from: 'Marc Dubois',
      fromEmail: 'm.dubois@novachem.be',
      subject: 'Briefing – Uw indiensttreding vandaag',
      body: `Goedemorgen,

Welkom in het team! Ik ben Marc Dubois, Commercieel Directeur.

Ik ben helaas de hele ochtend in vergadering en kan u niet ontvangen zoals gepland.

Ik vraag u om de berichten die u ontvangt zelfstandig af te handelen. U vindt alle context over ons bedrijf op het intranet.

Bij dringende vragen kunt u de betrokken personen rechtstreeks contacteren via het organogram.

Veel succes en nogmaals welkom!

Marc Dubois
Commercieel Directeur – NovaChem Solutions`,
      deliverAtMinute: 0,
      priority: 'normal',
      category: 'internal',
    },
    {
      id: 'e2',
      from: 'Didier Claes',
      fromEmail: 'd.claes@autoparts-belgium.be',
      subject: 'DRINGEND – Levering BC-4412 nog steeds niet ontvangen!!',
      body: `Goedemorgen,

Ik neem dringend contact op omdat onze bestelling BC-4412 (ontvettend oplosmiddel NC-S220, 2.000 liter) gisteren ochtend had moeten worden geleverd.

Onze productielijn staat stil sinds 6u00 deze ochtend bij gebrek aan grondstoffen. Elk uur stilstand kost ons ongeveer € 12.000.

Ik eis een onmiddellijk antwoord met:
1. De verklaring voor de vertraging
2. De exacte leverdatum en -tijd
3. De voorziene compenserende maatregelen

Als we voor 11u00 geen bevredigend antwoord ontvangen, zijn we genoodzaakt onze directie te informeren en een opzegging van het raamcontract te overwegen.

Didier Claes
Aankoopdienst – AutoParts Belgium NV
Tel.: +32 11 345 67 89`,
      deliverAtMinute: 5,
      priority: 'urgent',
      category: 'client',
    },
    {
      id: 'e3',
      from: 'Hans Richter',
      fromEmail: 'h.richter@chembase.de',
      subject: 'Tariefherziening – Industriële oplosmiddelen – Ingaande 01/02',
      body: `Geachte klant,

Wij informeren u dat wij door de stijgende energiekosten en grondstofprijzen genoodzaakt zijn onze tarieven voor industriële oplosmiddelen te herzien.

Vanaf 1 februari aanstaande wordt een toeslag van 8,5 % toegepast op ons volledige assortiment oplosmiddelen (referenties NC-S100 tot NC-S500).

Wij bieden u de mogelijkheid om een vaste bestelling te plaatsen tegen de huidige tarieven tot 20 januari, zolang de voorraad strekt.

Aarzel niet om ons te contacteren voor meer informatie.

Mit freundlichen Grüßen / Met vriendelijke groeten,

Hans Richter
Sales Manager – ChemBase GmbH
hans.richter@chembase.de | +49 69 8842 100`,
      deliverAtMinute: 15,
      priority: 'high',
      category: 'supplier',
    },
    {
      id: 'e4',
      from: 'Claire Fontaine',
      fromEmail: 'c.fontaine@novachem.be',
      subject: 'Non-conformiteit lot L-2024-891 – Dringende beslissing vereist',
      body: `Goedemorgen,

Na de ontvangstanalyse van lot L-2024-891 (epoxyhars EP-300, 500 kg, leverancier AsiaChem Trading) heeft ons laboratorium een afwijking vastgesteld in de viscositeit: 4.200 mPa·s in plaats van de gespecificeerde 3.800 mPa·s (tolerantie ±5 %).

Dit lot is in quarantaine geplaatst. Er zijn drie opties:

Optie A – Terugzending naar leverancier: geschatte vervangingstermijn 6 weken. Impact op 2 wachtende klantbestellingen.
Optie B – Klantafwijking: het lot voorleggen aan PlastiForm SPRL voor expliciete akkoord. Risico op weigering.
Optie C – Gebruik in interne formulering: ons R&D-team schat dat het kan worden geïntegreerd in een secundair mengsel, zonder kwaliteitsimpact.

Ik heb uw beslissing nodig vóór 14u00 om het productieplanning niet te blokkeren.

Dank u,
Claire Fontaine
Kwaliteitsverantwoordelijke – NovaChem Solutions`,
      deliverAtMinute: 30,
      priority: 'urgent',
      category: 'internal',
    },
    {
      id: 'e5',
      from: 'Fatima El Amrani',
      fromEmail: 'f.elamrani@foodpack.be',
      subject: 'Aanvraag referentiestelling – Nieuw voedingsconserveermiddel',
      body: `Goedemiddag,

In het kader van ons reformuleringsprogramma 2024 zoeken wij een leverancier die ons kaliumsorbaat van voedingskwaliteit (E202) kan leveren, verpakt in zakken van 25 kg.

Onze geschatte jaarlijkse behoefte bedraagt 8 à 10 ton. Het product moet vergezeld zijn van:
- Volledig technisch datablad
- Veiligheidsblad (SDS)
- Standaard analysecertificaat (COA)
- Conformiteitsverklaring conform EU-verordeningen 1333/2008 en 231/2012

Kunt u bevestigen of NovaChem aan deze behoefte kan voldoen en binnen welke termijn u een commercieel voorstel kunt indienen?

We hebben ook een staal van 2 kg nodig voor interne validatie.

In afwachting van uw antwoord,

Fatima El Amrani
R&D Manager – FoodPack SA
f.elamrani@foodpack.be | +32 2 654 32 10`,
      deliverAtMinute: 45,
      priority: 'normal',
      category: 'client',
    },
    {
      id: 'e6',
      from: 'Thomas Lecomte',
      fromEmail: 't.lecomte@novachem.be',
      subject: 'Transportincident – Vrachtwagen panne A602 – 3 leveringen geblokkeerd',
      body: `Goedemiddag,

Onze chauffeur Renaud heeft zojuist een motorpanne gemeld op de A602 richting Namen. Het voertuig is geïmmobiliseerd met 3 leveringen aan boord:

1. MetalCoat Industries – Lot verdund zwavelzuur 20L × 40 (dringende bestelling, beloofd voor 14u00)
2. PlastiForm SPRL – UV-stabilisatoren, 200 kg (standaard termijn, morgen gepland, ok)
3. Garage Peugeot Seraing – Smeermiddel NC-L45, 50 L (particuliere klant, kan wachten)

De depannageploeg is onderweg maar schat de immobilisatie op minimaal 3–4 uur. De ADR-geclassificeerde goederen (zwavelzuur) kunnen niet worden overgeladen zonder ADR-gecertificeerd voertuig, dat vandaag niet beschikbaar is.

Beslissing nodig over de prioriteit:
- Extern ADR-voertuig huren (kosten ~€ 450, termijn 2u)?
- MetalCoat bellen om levering te verschuiven naar morgenochtend?
- Andere oplossing?

Thomas Lecomte
Logistiek Verantwoordelijke`,
      deliverAtMinute: 60,
      priority: 'urgent',
      category: 'internal',
    },
    {
      id: 'e7',
      from: 'Nathalie Pirard',
      fromEmail: 'n.pirard@novachem.be',
      subject: 'Onbetaalde factuur – AutoParts Belgium – 62 dagen achterstand',
      body: `Goedemiddag,

Ik wil u attent maken op de betalingssituatie van klant AutoParts Belgium NV.

Factuur NC-2024-3847 voor een bedrag van € 28.450,00 (betalingstermijn 30 dagen, verschuldigd op 18 november) is tot op heden onbetaald, wat overeenkomt met 62 dagen achterstand.

We hebben 2 automatische herinneringen gestuurd op 25 november en 5 december, zonder antwoord.

Intussen is er een nieuwe bestelling in behandeling (bestelling BC-4412, waarde € 11.200).

Mijn aanbeveling: de verzending van BC-4412 blokkeren totdat de factuur is betaald of er een formele betalingstoezegging is.

Ik weet echter dat dit een strategische klant is die wordt opgevolgd door Marc Dubois. Kunt u een beslissing nemen, of moeten we escaleren naar Marc of Sophie Martens?

Nathalie Pirard
Financieel Verantwoordelijke`,
      deliverAtMinute: 75,
      priority: 'high',
      category: 'internal',
    },
  ],
}
