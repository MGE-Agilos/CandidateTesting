import type { BusinessCaseContent } from '../../types'

export const bmuNl: BusinessCaseContent = {
  company: {
    name: 'BMU – Brabantse Melk Unie',
    tagline: 'Kwaliteitsvolle zuivel uit de weide',
    founded: 1871,
    employees: 24000,
    revenue: '€ 11,5 miljard (2018)',
    headquarters: 'Rotterdam, Nederland',
    description: `In 1871 bundelden een aantal boeren in Nederland hun krachten om een plaatselijke zuivelfabriek te stichten. In 1928 werd één van de meest moderne fabrieken binnen Europa gebouwd.

Na de Tweede Wereldoorlog fuseerde men met associaties in het Zuiden van Nederland onder de naam "De Zuid-Nederlandse Melk Unie". In 1989 fuseerde men met de "Verenigde Melkboeren" (omzet: €1,2 miljard, 14.300 leden). Sindsdien werden meerdere bedrijven overgenomen, waaronder Vlaamse Melkboer NV (Aalter, 1991), De Limburgse Melkboeren (Bree, 1997) en Inovatech Argentina (Rosario, 2005).

In 2011 werd de naam Brabantse Melk Unie (BMU) ingevoerd voor België en Nederland. In andere landen gaat men door als Dutch Quality Milkproducts (DQM).

BMU telt momenteel bijna 24.000 werknemers en verwerkt jaarlijks ruim 11 miljard kilogram melk. Meer dan 75% van de omzet wordt buiten Nederland en België gerealiseerd.`,
    mission: `Kwaliteitsvolle zuivelproducten leveren aan consumenten wereldwijd, met respect voor de boeren, het dier, het milieu en de medewerker.`,
    values: [
      { title: 'Duurzaamheid', description: 'Enkel weidemelk, duurzame verpakkingen (>85% hernieuwbare materialen), faire prijzen voor de boeren.' },
      { title: 'Kwaliteit', description: 'Kwaliteit is essentieel bij levensmiddelen. Correcte staalafname en tijdige levering aan het labo zijn cruciaal.' },
      { title: 'Veiligheid', description: 'Veiligheid op de werkvloer primeert altijd. Na zware ongevallen in het verleden ligt dit de directie heel nauw aan het hart.' },
      { title: 'Diversiteit', description: 'BMU hecht veel belang aan diversiteit in denken en teamsamenstelling. HR bevordert actief een inclusieve werkomgeving.' },
      { title: 'Mens als kapitaal', description: 'Medewerkers krijgen voldoende variatie in taken en worden aangemoedigd om ook taken van andere afdelingen op te nemen.' },
    ],
    segments: [
      { name: 'BMU Consumer Dairy', share: '~45 %', description: 'Scala aan zuivelproducten voor consumenten (melk, yoghurt, desserts...). Kantoor in Antwerpen. Vestigingen: Aalter, Bree, Frankfurt, Lansing, Chiang Mai, Rosario, Leeuwaarden West.' },
      { name: 'BMU Dairy Essentials', share: '~35 %', description: 'Kaas, boter en melkpoeder. Kantoor in Antwerpen. Dezelfde vestigingen als Consumer Dairy.' },
      { name: 'BMU Specialised Nutrition', share: '~10 %', description: 'Zuivel met hoge voedingswaarde voor specifieke groepen consumenten. Kantoor in Rotterdam. Vestigingen: Berlijn, Leeuwaarden Oost.' },
      { name: 'BMU Ingredients', share: '~10 %', description: 'Ingrediënten uit zuivel voor de voedingsmiddelen-, diervoeder- en farmaceutische industrie. Kantoor in Berlijn.' },
    ],
    keyFigures: [
      { label: 'Opgericht', value: '1871' },
      { label: 'Medewerkers', value: '24.000' },
      { label: 'Melkverwerking', value: '11 mrd kg' },
      { label: 'Omzet (2018)', value: '€11,5 mrd' },
      { label: 'Vestigingen', value: '9 landen' },
      { label: 'Omzet buiten BE/NL', value: '> 75 %' },
    ],
    processes: [
      {
        title: 'UHT-sterilisatieproces',
        steps: [
          'Ontvangst en opslag van rauwe melk (kwaliteitscontrole bij aankomst)',
          'Voorverwarming en homogenisering',
          'UHT-sterilisatie: 2-5 seconden op 135-150°C (alle micro-organismen worden gedood)',
          'Aseptische afvulling in kartonnen verpakkingen',
          'Kwaliteitscontrole en staalafname (tijdig naar labo)',
          'Palletisering en opslag in koelruimte',
          'Levering aan klanten',
        ],
        responsible: 'Ploegleider + Medewerkers Team A/B/C',
        delay: 'Continu productieproces – 3 ploegen (6u-14u / 14u-22u / 22u-6u)',
      },
      {
        title: 'Staalafname en kwaliteitscontrole',
        steps: [
          'Stalen worden afgenomen volgens strikte protocollen (tijdstip, hoeveelheid, methode)',
          'Correcte labeling en verpakking van de stalen',
          'Tijdige levering aan het laboratorium (Hoofd Labo: Jana Segers)',
          'Analyse door het labo en rapportering',
          'Bij afwijkingen: onmiddellijke melding aan ploegleider en kwaliteitsdienst',
        ],
        responsible: 'Teamleden (onder supervisie ploegleider) + Hoofd Labo',
        delay: 'Stalen moeten tijdig aangeleverd worden — vertraging niet toegestaan',
      },
      {
        title: 'Machineonderhoud bij storingen',
        steps: [
          'Bij storing: productielijn stilleggen en situatie beveiligen',
          'ONMIDDELLIJK onderhoudsverantwoordelijke verwittigen (Pascale Vandewege)',
          'Onderhoudsfirma De Backers contacteren — NIET zelf proberen te herstellen',
          'De Backers stuurt team van twee personen ter plaatse',
          'Ploegleider volgt op en communiceert naar team en leidinggevende',
          'Na herstel: herstart controleren en documenteren',
        ],
        responsible: 'Ploegleider + Pascale Vandewege + Firma De Backers',
        delay: 'Firma De Backers staat steeds klaar met twee teams van twee personen',
      },
      {
        title: 'Ploegwisseling en overdracht',
        steps: [
          'Binnenkomend team is 10 minuten voor shift aanwezig',
          'Schriftelijke en mondelinge briefing door vertrekkende ploegleider',
          'Overdracht: stand productie, lopende problemen, actiepunten',
          'Productiezone netjes achterlaten (opruimen vuilnis, reinigen machines)',
          'Bijzonderheden doorgeven aan opvolgend team',
        ],
        responsible: 'Ploegleiders (Karen Stevens, Julan Chen, + nieuwe TL)',
        delay: 'Overdracht duurt 10-15 minuten per ploegwisseling',
      },
    ],
    contacts: [
      { name: 'Dominique De Vrieze', title: 'Production Director BMU Belgium', email: 'd.devrieze@bmu.be', phone: '+32 9 300 10 01', department: 'Directie Belgium' },
      { name: 'Sasha Davids', title: 'Plant Manager Aalter', email: 's.davids@bmu.be', phone: '+32 9 300 20 01', department: 'Directie Aalter' },
      { name: 'Chris De Graeve', title: 'Plant Manager Bree', email: 'c.degraeve@bmu.be', phone: '+32 11 400 20 01', department: 'Directie Bree' },
      { name: 'Linda Van Maldegem', title: 'HR Business Partner Aalter', email: 'l.vanmaldegem@bmu.be', phone: '+32 9 300 30 01', department: 'HR' },
      { name: 'Jana Segers', title: 'Hoofd Labo Aalter', email: 'j.segers@bmu.be', phone: '+32 9 300 40 01', department: 'Laboratorium' },
      { name: 'Pascale Vandewege', title: 'Onderhoudsmanager Aalter & Bree', email: 'p.vandewege@bmu.be', phone: '+32 9 300 50 01', department: 'Onderhoud' },
      { name: 'Karen Stevens', title: 'Ploegleider UHT – Ploeg B', email: 'k.stevens@bmu.be', phone: '+32 9 300 60 01', department: 'UHT' },
      { name: 'Julan Chen', title: 'Ploegleider UHT – Ploeg C', email: 'j.chen@bmu.be', phone: '+32 9 300 60 02', department: 'UHT' },
      { name: 'Peter Nagels', title: 'Voormalig Ploegleider UHT – Ploeg A', email: 'p.nagels@bmu.be', phone: '+32 9 300 60 00', department: 'UHT' },
      { name: 'Sofie Delens', title: 'Ploegleider Kaas – Ploeg A', email: 's.delens@bmu.be', phone: '+32 9 300 61 01', department: 'Kaas' },
      { name: 'Karel Voet', title: 'Ploegleider Melkpoeder – Ploeg A', email: 'k.voet@bmu.be', phone: '+32 9 300 62 01', department: 'Melkpoeder' },
      { name: 'Gary Philips', title: 'Sales & Marketing Director – Consumer Dairy', email: 'g.philips@bmu-consumerdairy.com', phone: '+32 3 700 10 01', department: 'Consumer Dairy' },
    ],
    orgChart: {
      ceo: { name: 'Sasha Davids', title: 'Plant Manager Aalter' },
      departments: [
        {
          name: 'Afdeling UHT',
          head: '[Nieuwe TL – U]',
          headTitle: 'Ploegleider Ploeg A',
          members: [
            { name: 'Karen Stevens', title: 'Ploegleider Ploeg B' },
            { name: 'Julan Chen', title: 'Ploegleider Ploeg C' },
            { name: 'Ploeg A: 10 medewerkers', title: '(zie teamoverzicht)' },
          ],
        },
        {
          name: 'Afdeling Kaas',
          head: 'Sofie Delens',
          headTitle: 'Ploegleider Ploeg A',
          members: [
            { name: 'Nancy Degryse', title: 'Ploegleider Ploeg B' },
            { name: 'Danny Stevens', title: 'Ploegleider Ploeg C' },
          ],
        },
        {
          name: 'Afdeling Melkpoeder',
          head: 'Louise Taghon',
          headTitle: 'Ploegleider Ploeg A',
          members: [
            { name: 'Noel De Lange', title: 'Ploegleider Ploeg B' },
            { name: 'Karel Voet', title: 'Ploegleider Ploeg C' },
          ],
        },
        {
          name: 'Afdeling Boter',
          head: 'Angie Roberts',
          headTitle: 'Ploegleider Ploeg A',
          members: [
            { name: 'Stijn Degraeve', title: 'Ploegleider Ploeg B' },
            { name: 'Nina Dekorte', title: 'Ploegleider Ploeg C' },
          ],
        },
        {
          name: 'HR & Ondersteuning',
          head: 'Linda Van Maldegem',
          headTitle: 'HR Business Partner',
          members: [
            { name: 'Jana Segers', title: 'Hoofd Labo' },
            { name: 'Pascale Vandewege', title: 'Onderhoudsmanager' },
          ],
        },
      ],
    },
    suppliers: [
      { name: 'Leden-melkveehouders', country: 'België / Nederland', products: 'Rauwe weidemelk', contact: 'Via coöperatieve structuur', leadTime: 'Dagelijkse aanvoer' },
      { name: 'Firma De Backers', country: 'België (Ruiselede)', products: 'Machineonderhoud UHT Aalter', contact: 'Pascale De Backers', leadTime: 'On-call — team steeds beschikbaar' },
      { name: 'Firma Davids', country: 'België (Bree)', products: 'Machineonderhoud Bree', contact: 'Stevie Donckers', leadTime: 'On-call — team steeds beschikbaar' },
      { name: 'Verpakkingsleveranciers', country: 'Europa', products: 'Kartonverpakkingen, doppen, folies (>85% hernieuwbaar)', contact: 'Aankoopdienst Rotterdam', leadTime: 'Variabel' },
    ],
    topClients: [
      { name: 'TopAction', sector: 'Retail / Supermarkt', since: 2010, kam: 'Gary Philips', annualVolume: 'Groot volume', notes: 'Veeleisende klant, frequent klachten, spoedleveringen mogelijk. Extra inspanning levert "wit voetje" op.' },
      { name: 'Carrefour Belgium', sector: 'Retail / Supermarkt', since: 2005, kam: 'Gary Philips', annualVolume: 'Groot volume', notes: 'Strategische klant voor Consumer Dairy divisie.' },
      { name: 'Delhaize Group', sector: 'Retail / Supermarkt', since: 2003, kam: 'Gary Philips', annualVolume: 'Groot volume', notes: 'Kwaliteitseisen streng — audits op regelmatige basis.' },
      { name: 'Albert Heijn', sector: 'Retail / Nederland', since: 2008, kam: 'Gary Philips', annualVolume: 'Groot volume', notes: 'Belangrijke Nederlandse afzetmarkt.' },
    ],
  },
  emails: [
    {
      id: 'b01',
      from: 'Sasha Davids',
      fromEmail: 's.davids@bmu.be',
      subject: 'Overschakelen naar twee ploegen',
      body: `Datum: 17 september 20XX
Aan: Alle ploegleiders (Team leaders)
Van: Sasha Davids

Beste collega's,

Dominique heeft beslist dat Aalter vanaf 1 november overschakelt op een tweeploegensysteem. Bree mag hiermee nog wachten tot 1 december.
Dit betekent dat jullie binnen jullie afdelingen de koppen bij elkaar dienen te steken over hoe jullie de ploegen gaan herverdelen en hoe jullie, als ploegleiders, de komende maanden de leiding van de teams gaan aanpakken. Gelieve jullie teamleden zoveel mogelijk aan te moedigen om tijdens de wintermaanden verlof op te nemen.
Vanaf 1 mei verwachten we terug te kunnen overschakelen op een drieploegensysteem. We verwachten dat we in december/januari mogelijks één dag per week economische werkloosheid zullen moeten voorzien.

Graag jullie voorstel tegen eind deze week op mijn bureau. Ik zet dan per afdeling een vergadering op met jullie om dit verder te bespreken.

Hieronder ook een overzicht van de projecten die op de planning staan tijdens de wintermaanden:
• Vervanging van twee verouderde machines bij de afdeling Kaas
• Aanpassing productiehal bij de afdeling Melkpoeder
• Geen projecten bij afdeling Boter Aalter, wel bij afdeling Boter Bree
• Mogelijks totale vernieuwing van de productielijn bij de afdeling UHT. We liggen hiervoor in balans met Bree. Indien dit project naar Bree zou gaan, wordt gevraagd dat één van onze ploegleiders tijdelijk in Bree ondersteuning gaat geven als lid van het projectteam.
• De UHT-afdeling in Rosario dient deze winter op punt gesteld te worden. BMU Rotterdam heeft gevraagd aan mij en Chris om een ervaren ploegleider vanuit België voor een paar maanden (december, januari) naar Rosario te detacheren.

Graag ook al een voorstel omtrent wie jullie in het projectteam willen opnemen. A.u.b. eens niet opnieuw dezelfde mensen (de 'favorietjes' van Aalter). Graag wat nieuwe mensen in de projectteams die andere invalshoeken en ideeën kunnen aanreiken. Kijk gerust breed, via Zoom of Microsoft Teams kan je heel breed gaan werken.

Met vriendelijke groeten,
Sasha Davids`,
      deliverAtMinute: 0,
      priority: 'high',
      category: 'internal',
    },
    {
      id: 'b02',
      from: 'Sasha Davids',
      fromEmail: 's.davids@bmu.be',
      subject: 'Project UHT Aalter of Bree',
      body: `Datum: 29 september 20XX
Aan: <uw naam>; Karen Stevens; Julan Chen
Van: Sasha Davids

Dag collega's,

Ik heb deze informatie alvast doorgekregen van de projectcoördinator uit BMU Rotterdam.

"Met een investering van vijf miljoen euro worden drie oude één liter karton vullijnen vervangen door een high speed karton vullijn, een aseptische afvullijn voor kartonverpakkingen 1.000 ml met Helicap, een draaidop waarmee men onmiddellijk het pak open kan maken."

"De doelstelling voor deze nieuwe lijn is om verliezen te verminderen en de efficiëntie te verhogen. Naast de lijn zelf, moeten ook een aseptische tank van 45.000 liter, verpakkingsmachines en een installatie om te palletiseren dit doel helpen bereiken. De nieuwe lijn zal voortaan maar liefst 15.000 eenheden per uur kunnen verwerken."

Denken jullie er al eens over na hoe we dit verkocht krijgen aan de vakbonden? Ik vrees dat dit betekent dat we met minder mensen per team zullen kunnen werken en dat zullen de vakbonden ook wel snappen. Als dit uitlekt, kunnen we ons aan vakbondsacties verwachten. Hopelijk hebben we geluk en geven ze dit project eerst aan Bree.

Vgr,
Sasha`,
      deliverAtMinute: 0,
      priority: 'high',
      category: 'internal',
    },
    {
      id: 'b03',
      from: 'Linda Van Maldegem',
      fromEmail: 'l.vanmaldegem@bmu.be',
      subject: 'Jouw team – Overzicht teamleden',
      body: `Datum: 30 september 20XX
Aan: <uw naam>
Van: Linda Van Maldegem

Beste,

Hieronder een overzicht van jouw teamleden:

Naam              | Leeftijd | In dienst | Extra
------------------|----------|-----------|------------------------------------------
Piet Kregels      | 58       | 1991      | Deeltijds landbouwer, veel ervaring, rots in de branding
Louise De Windt   | 46       | 1995      | Gescheiden, 3 kinderen, vraagt vaak om voorschotten op haar loon
Laleh Lankarani   | 38       | 2015      | Prima werkkracht, afkomstig uit Egypte, woont en werkt al 10 jaar in België
Linda Termont     | 22       | 2017      | Eerste aanvrager om thuis te blijven tijdens de winter
Sandy Peeters     | 26       | 2014      | Ambitieus, wil doorgroeien, neemt verantwoordelijkheid
Nand De Brabandere| 51       | 1991      | Deeltijds landbouwer
Philippe Durée    | 30       | 2015      | Ambitieus, hoger diploma filosofie, als jobstudent begonnen
Noel Vindevogel   | 44       | 1999      | Weinig ambitieus, loopt er meer en meer de kantjes vanaf
Fred Maertens     | 23       | 2019      | Was jobstudent, lost verwachtingen niet in
Daniel De Winter  | 41       | 2014      | Ambitieus, wil naar andere afdeling, ligt niet goed in de groep, grote mond, heel kritisch, moeite met emotionele zelfcontrole, reeds 2 waarschuwingen gekregen

Groetjes,
Linda`,
      deliverAtMinute: 0,
      priority: 'high',
      category: 'internal',
    },
    {
      id: 'b04',
      from: 'Daniel De Winter',
      fromEmail: 'daniel.dewinter@bmu.be',
      subject: 'Overplaatsing naar team Kaas',
      body: `Datum: 1 oktober 20XX
Aan: <uw naam>
Van: Daniel De Winter

Beste,

Alvast welkom, maar hopelijk zullen we maar korte tijd samenwerken. Ik verklaar mij nader. Ik zou me graag kandidaat stellen voor de vacature bij het team Kaas.

Ik ben reeds lange tijd op de UHT werkzaam en vind het tijd om de overstap te maken naar een andere divisie. Ik wil doorgroeien naar ploegleider, maar nu men u benoemd heeft als opvolger van Peter zie ik nogmaals mijn kansen voor promotie gedwarsboomd.

Binnen twee jaar gaat er een ploegleider bij Kaas (Danny Stevens) op pensioen en als ik dan reeds twee jaar ingewerkt ben, kan ik daar mijn kans grijpen.

Graag had ik uw steun gekregen om deze overstap te maken.

Groeten,
Daniel`,
      deliverAtMinute: 0,
      priority: 'normal',
      category: 'internal',
    },
    {
      id: 'b05',
      from: 'Sofie Delens',
      fromEmail: 's.delens@bmu.be',
      subject: 'Vacature in mijn team',
      body: `Datum: 30 september 20XX
Aan: Sasha Davids
CC: <uw naam>; Linda Van Maldegem
Van: Sofie Delens

Dag Sasha,

HR heeft me de kandidatenlijst doorgegeven van de mensen die graag de vacature binnen mijn team willen opnemen. Ik zie daar ook de naam van Daniel De Winter opstaan. Voor alle duidelijkheid, ik wil die man niet in mijn team. Die man is een rotte appel en een bron van problemen.

Mijn voorkeur gaat trouwens uit naar Janny Devogelaere die reeds drie jaar bij ons als jobstudent aan de slag is, die prima in het team past en een harde werker is.

Vgr,
Sofie`,
      deliverAtMinute: 0,
      priority: 'normal',
      category: 'internal',
    },
    {
      id: 'b06',
      from: 'Philippe Durée',
      fromEmail: 'philippe.duree@bmu.be',
      subject: 'Vertrouwelijk – Situatie in het team',
      body: `Datum: 20 september 20XX
Aan: Peter Nagels
CC: (doorgestuurd aan <uw naam>)
Van: Philippe Durée

Beste,

Ik vind het mijn verantwoordelijkheid om je op een aantal zaken te wijzen die fout lopen in het team.

• Daniel De Winter heeft duidelijk een probleem om zijn emoties (boosheid, frustratie) te beheersen. Wanneer jij er niet bent, loopt hij iedereen hier te commanderen en te berispen alsof hij al ploegleider is. Ik weet dat je erover denkt om dichter bij huis te werken. Ok voor jou, maar doe het ons aub niet aan om Daniel onze nieuwe ploegleider te maken.

• Daniel en Sandy zijn zich duidelijk aan het profileren om jouw opvolger te worden. Die twee kunnen momenteel nog moeilijk door één deur en zijn elkaar aan het beconcurreren. Iedere poging om met het team samen te zitten, wordt daardoor een chaos waar jij het precies ook moeilijk mee hebt.

• Het is uitgelekt dat we deze winter een volledig gemoderniseerde en geautomatiseerde nieuwe lijn krijgen, dit zorgt voor onrust onder de teamleden. Een aantal vrezen voor hun job.

• Nand is er echt niet meer met zijn hoofd bij. Zijn eigen landbouwbedrijf heeft het financieel moeilijk en dat weegt op hem. Hij is vaak voor korte periodes ziek en dit weegt op het team.

• Laleh is een uitstekend werkkracht, maar voelt zich niet helemaal aanvaard in de groep. Ze kan meer verantwoordelijkheid opnemen, maar durft dit precies niet. Sommige teamleden nemen haar niet serieus en maken mopjes over haar afkomst.

• Ik blijf mij ook ergeren aan de nogal typische Oost-Vlaamse dorpsmentaliteit die in deze fabriek aanwezig is. Hoe men hier soms denigrerend spreekt over de collega's van Bree stoot mij wel tegen de borst. Als Limburger heb ik hier ook al meerdere keren "plaagstoten" te verwerken gekregen.

Tot slot wil ik nog even meegeven dat ik mij ook kandidaat ga stellen voor ploegleider (ja, ook Limburgers zijn ambitieus) als jouw vertrek officieel wordt. Ik heb in ieder geval al de steun van Piet.

Met vriendelijke groeten,
Philippe`,
      deliverAtMinute: 0,
      priority: 'high',
      category: 'internal',
    },
    {
      id: 'b07',
      from: 'Jana Segers',
      fromEmail: 'j.segers@bmu.be',
      subject: 'Nemen van stalen',
      body: `Datum: 29 september 20XX
Aan: <uw naam>
Van: Jana Segers

Dag <uw naam>,

Welkom aan boord. Blij dat je er bent. Je voorganger liet het al een tijdje "hangen" en negeerde meestal mijn signalen dat ploeg A het niet zo nauw neemt met de regels inzake het afnemen van stalen.

Ik wil er nogmaals op aandringen dat de stalen volgens de afgesproken regels afgenomen dienen te worden en tijdig bij het labo dienen te worden afgeleverd. Dit loopt perfect bij de andere twee teams. Ik heb de vrijheid genomen om jouw team bij het nemen van stalen te observeren en heb daarbij hallucinante zaken gezien.

Wil je orde op zaken stellen? Gelieve jouw medewerker Daniel De Winter er ook op te wijzen dat hij mijn medewerkers met meer respect dient te behandelen bij het afleveren van de stalen. Meryem en Berat die van Turkse origine zijn, hebben daar al meermaals hun beklag over gemaakt.

Het is ook niet de bedoeling dat hij bij één van mijn medewerkers, die hij nog kent van vroeger, telkens een lange babbel blijft maken. Vooral als hij de nachtploeg heeft, komt dit vaak voor.

Alvast bedankt.

Vgr,
Jana Segers
Hoofd Labo Aalter`,
      deliverAtMinute: 0,
      priority: 'urgent',
      category: 'internal',
    },
    {
      id: 'b08',
      from: 'Sasha Davids',
      fromEmail: 's.davids@bmu.be',
      subject: 'Opendeurdag – Mogelijke actie activisten',
      body: `Datum: 1 oktober 20XX
Aan: Alle ploegleiders (Team leaders)
Van: Sasha Davids

Beste collega's,

Blijkbaar kunnen we op de opendeurdag een actie verwachten van een groep 'gezonde-voedingsactivisten' (Planeat BE).
Er is blijkbaar een negatief artikel in de pers verschenen over de activiteiten van BMU Ingredients in Berlijn. Alsof ze daar met gevaarlijke experimenten bezig zijn die de gezondheid en het milieu kunnen schaden.
Ik heb met Berlijn gebeld en zij lachen dit weg. Blijkbaar heeft een Duitse roddelkrant hier een belachelijk artikel over geschreven, dat op complotsites nogal in de verf gezet wordt.

Denken jullie mee na hoe we ons hierop kunnen voorbereiden? Kunnen we dit zelf oplossen als er problemen ontstaan of vragen we versterking van de politie?

Mvg,
Sasha`,
      deliverAtMinute: 0,
      priority: 'high',
      category: 'internal',
    },
    {
      id: 'b09',
      from: 'Linda Van Maldegem',
      fromEmail: 'l.vanmaldegem@bmu.be',
      subject: 'Aandachtspunten Ploeg A UHT',
      body: `Datum: 1 oktober 20XX
Aan: <uw naam>
Van: Linda Van Maldegem

Beste,

Ik weet dat u pas aan boord bent, maar ik wil u toch op een aantal zaken met betrekking tot ploeg A wijzen.

• Klachten van Jana Segers over het afnemen van stalen.

• Ziekteverzuim voor korte periodes (1 à 2 dagen) ligt 10 procent hoger dan bij de andere ploegen.

• Deze zomer zijn jobstudenten mij meermaals komen vragen om te veranderen van team (klachten over pestgedrag, slechte sfeer, het doorgeven van de rotklussen aan jobstudenten).

• Daniel loopt hier om de vijf minuten binnen om te vragen naar vacatures voor ploegleider en wil, nu hij gehoord heeft dat u aan boord komt, met onmiddellijke ingang vertrekken naar team Kaas.

• Praat aub eens met Louise, wij kunnen haar geen voorschotten op haar loon blijven geven.

• Fred Maertens leek een beloftevolle jobstudent, maar lost momenteel de verwachtingen niet in. Hij heeft vorige maand een 5 voor 12 gesprek gehad met Peter en mij. Gelieve me deze week door te geven of er verbetering is. Zo niet, stel ik voor om hem te ontslaan.

• Laleh is bij mij langs gekomen. Ze wilt in Aalter komen wonen, maar heeft hier moeite om aan een huurhuis te komen. Ze vraagt of wij kunnen tussenkomen. Is dit onze rol?

Vriendelijke groeten,
Linda`,
      deliverAtMinute: 0,
      priority: 'high',
      category: 'internal',
    },
    {
      id: 'b10',
      from: 'Pascale Vandewege',
      fromEmail: 'p.vandewege@bmu.be',
      subject: 'UHT-machines – Ernstige incidenten',
      body: `Datum: 1 oktober 20XX
Aan: <uw naam>
CC: Sasha Davids
Van: Pascale Vandewege

Beste,

Ik heb van Pascale De Backers een nota ontvangen met klachten over de manier waarop ploeg A omgaat met storingen aan machines.
Firma De Backers heeft steeds twee teams van twee mensen klaarstaan om bij problemen onmiddellijk aan de slag te gaan. Pascale merkt dat het steeds langer duurt voordat het onderhoudsteam wordt opgeroepen bij problemen. Hierdoor ligt de band langer stil dan nodig.

Zijn techniekers hebben hem gemeld dat Daniel en Sandy vaak op hun eentje proberen het probleem op te lossen. Dit kan niet de bedoeling zijn.

Zijn techniekers hebben meegedeeld dat zij eergisteren opgemerkt hebben dat Daniel en Sandy elkaar aan het duwen waren tijdens een hoogoplopende discussie over de aanpak van een defecte machine. Piet Kregels heeft hen blijkbaar uit elkaar gehaald.

Veel werk op de plank dus voor de nieuwe ploegleider. Voor alle duidelijkheid maak je jouw team beter duidelijk dat ze van de machines moeten blijven en Firma De Backers onmiddellijk verwittigen zodat de band zo snel mogelijk weer opgestart kan worden.

Sinds kort heeft De Backers twee uitstekende Poolse medewerkers aangeworven. Technisch zijn dit twee ervaren mensen die veel kennis hebben over de machines die bij onze UHT-afdeling gebruikt worden.
Na de eerste week zijn ze beiden bij mij komen klagen over de moeilijke samenwerking met jouw team. Beiden spreken inderdaad niet perfect Nederlands, maar leren snel bij en de opmerkingen van een aantal mensen in jouw team hierover zijn echt niet gepast.
Ook de opmerking dat "vreemden" de jobs van lokale mensen inpikken is belachelijk. Dergelijke techniekers zijn hier in Vlaanderen niet meer op de arbeidsmarkt te vinden.

Met vriendelijke groeten,
Pascale Vandewege
Onderhoudsmanager`,
      deliverAtMinute: 0,
      priority: 'urgent',
      category: 'internal',
    },
    {
      id: 'b11',
      from: 'Karen Stevens & Julan Chen',
      fromEmail: 'k.stevens@bmu.be',
      subject: 'Netjes achterlaten fabriekshal',
      body: `Datum: 30 september 20XX
Aan: <uw naam>
Van: Karen Stevens; Julan Chen

Beste,

Welkom in onze afdeling. We kijken ernaar uit om met je samen te werken.
Toch een paar bedenkingen over jouw team. We rekenen erop dat je daar toch wat de zaken op orde zet.

Jouw team laat de productieruimte niet netjes achter. Het is de afspraak dat alle vuilnis opgeruimd is en dat de productieruimte netjes wordt achtergelaten. Is aangenaam voor het andere team om zo te beginnen.

Graag ook een briefing voor het team dat na jouw team komt. Gelieve ervoor te zorgen dat dit ook ordelijk en correct verloopt als jij er niet bent. Het haantjesgedrag tussen Philippe, Sandy en Daniel zorgt bij de overdracht vaak voor misverstanden.

Als jouw team overneemt, dienen zij 10 minuten op voorhand aanwezig te zijn zodat onze mensen tijdig hun shift kunnen afronden. Vaak zijn een aantal mensen zoals Louise, Nand, Fred en Noel maar nipt op tijd of te laat. Een aantal mensen van onze teams beginnen hierover te morren.

Als jij zin hebt om naar Argentinië te vliegen om daar de fabriek te ondersteunen, mag je dat van ons zeker doen. Wij hebben daar absoluut geen zin in. Ook dat project mag je gerust voor jouw rekening nemen als dat er ooit komt, want het zal wel eerst naar Bree gaan.

Met vriendelijke groeten,
Karen en Julan`,
      deliverAtMinute: 0,
      priority: 'normal',
      category: 'internal',
    },
    {
      id: 'b12',
      from: 'Sasha Davids',
      fromEmail: 's.davids@bmu.be',
      subject: 'Vertrouwelijk – Adjunct ploegleider',
      body: `Datum: 15 september 20XX
Aan: Ploegleiders UHT
Van: Sasha Davids

Dag collega's,

We merken dat de ploegleiders door verlof, vergaderingen of deelname aan projecten vaak niet op de werkvloer aanwezig zijn. We denken er dan ook aan om de functie van adjunct ploegleider in het leven te roepen. Graag alvast jullie ideeën hieromtrent.
De UHT-afdeling zou als pilootproject fungeren. Zien jullie mogelijke kandidaten? Welke competenties zijn belangrijk om deze rol goed te kunnen invullen? Er wordt vanuit Rotterdam ook aangedrongen om ook medewerkers met een migratieachtergrond hiervoor kansen te geven.
Linda heeft onlangs ontdekt dat Laleh een universitair diploma heeft behaald in Caïro en ziet veel potentieel in haar.

@Peter: ik denk hier aan Piet Kregels, een mooie beloning voor zijn jaren trouwe dienst, is een rots in de branding.

Groeten,
Sasha`,
      deliverAtMinute: 0,
      priority: 'high',
      category: 'internal',
    },
    {
      id: 'b13',
      from: 'Peter Nagels',
      fromEmail: 'p.nagels@bmu.be',
      subject: 'Minimumbezetting – Week van 8 oktober',
      body: `Datum: 20 september 20XX
Aan: Sasha Davids
Van: Peter Nagels

Dag Sasha,

In de week van 8 oktober heeft mijn team de ochtendshift. De minimumbezetting is acht medewerkers, maar in die week heb ik vier vakantieaanvragen en iedereen heeft wel een goede reden. We gaan dus voor vervangingen moeten zorgen (jobstudenten, collega's van andere teams).

• Daniel De Winter: verlof van maandag tot woensdag wegens verbouwingswerken thuis
• Louise De Windt: familiaal verlof van maandag tot donderdag wegens operatie jongste dochter
• Philippe Durée: verlof woensdag, donderdag en vrijdag. Citytrip naar Amsterdam, lag reeds vast sinds begin dit jaar, viering huwelijksverjaardag
• Piet Kregels: ganse week verlof, binnenhalen oogst in eigen landbouwbedrijf

Wens mijn opvolger alvast veel succes.

Ter info: De opendeurdag moet nog geregeld worden binnen het team, wordt een moeilijke dobber.

P.S.: Op zaterdag 6 oktober geef ik in Café The Bridge op het gemeenteplein een drink om afscheid te nemen van de collega's. Mijn opvolger is alvast ook uitgenodigd en jij uiteraard ook.

Met vriendelijke groeten,
Peter`,
      deliverAtMinute: 0,
      priority: 'high',
      category: 'internal',
    },
    {
      id: 'b14',
      from: 'Daniel De Winter',
      fromEmail: 'daniel.dewinter@bmu.be',
      subject: 'Onderhoudsfirma De Backers',
      body: `Datum: 1 oktober 20XX
Aan: <uw naam>
Van: Daniel De Winter

Hello,

Ik wil nog even meegeven dat die Firma De Backers echt knoeiers zijn.
Ik werk reeds jaren met deze machines en ken deze door en door. Waarom we telkens die knoeiers dienen op te roepen om een probleem op te lossen is mij een raadsel. Onderhoud uitbesteden vind ik echt geen goed idee. Beter om met eigen techniekers te werken, denk ik. Het zijn meestal jonge gasten die er hun tijd voor nemen om een probleem te analyseren (opzoeken op het internet dus) en zitten bellen met hun baas voor oplossingen. Naar ons luisteren is blijkbaar geen optie.

Nu hebben ze zelfs twee oudere Polen in dienst genomen, die onderling enkel onverstaanbaar Pools spreken. Dat kan toch niet! Het kan toch niet de bedoeling zijn dat ik tijdens mijn werk verplicht word Engels te spreken of, laat staan, Pools te leren. En wie weet wat ze over ons zeggen in het Pools!

Vriendelijke groet,
Daniel`,
      deliverAtMinute: 0,
      priority: 'normal',
      category: 'internal',
    },
    {
      id: 'b15',
      from: 'Sasha Davids',
      fromEmail: 's.davids@bmu.be',
      subject: 'Opendeurdag – Zondag 7 oktober',
      body: `Datum: 10 september 20XX
Aan: Alle ploegleiders (Team leaders)
Van: Sasha Davids

Beste,

Op zondag 7 oktober is het weer zover. We organiseren voor de vijfde keer een opendeurdag voor klanten, omwonenden en andere geïnteresseerden. Het belooft volgens de weerberichten een prachtige dag te worden.

Het is de bedoeling dat er van 13u tot 18u in iedere afdeling één team aan de slag is zodat de bezoekers de productie live kunnen aanschouwen. Volgens de gemaakte afspraken is het dit jaar aan alle A ploegen om de productie en het ontvangst van de klanten te verzorgen.

Dit jaar komt een afvaardiging vanuit onze vestiging in Argentinië langs en zij zijn uiteraard vooral geïnteresseerd in de UHT-afdeling.

In de toekomst zullen we meer en meer mensen uit buitenlandse vestigingen ontvangen. Mogelijks blijven een aantal medewerkers uit het buitenland voor een aantal maanden bij ons om de werking van de vestiging beter te leren kennen. Ze zullen dan met jullie teams meedraaien in de productie. Ik reken erop dat deze met respect en enthousiasme ontvangen zullen worden.

Vgr,
Sasha`,
      deliverAtMinute: 0,
      priority: 'normal',
      category: 'internal',
    },
    {
      id: 'b16',
      from: 'Sasha Davids',
      fromEmail: 's.davids@bmu.be',
      subject: 'Klachten van klanten – Vergadering dinsdag 2 oktober 15u',
      body: `Datum: 30 september 20XX
Aan: <uw naam>; Karen Stevens; Julan Chen
Van: Sasha Davids

Beste collega's,

Dinsdag 2 oktober verwacht ik jullie alle drie op mijn kantoor om 15u om hierover in gesprek te gaan.

Vgr,
Sasha`,
      deliverAtMinute: 0,
      priority: 'urgent',
      category: 'internal',
    },
    {
      id: 'b17',
      from: 'Gary Philips',
      fromEmail: 'g.philips@bmu-consumerdairy.com',
      subject: 'Klachten van klanten – Kwaliteitsrapport',
      body: `Datum: 28 september 20XX
Aan: Sasha Davids
Van: Gary Philips – Directeur Verkoop & Marketing, divisie Consumer Dairy

Dag Sasha,

Op basis van een aantal klachten van klanten inzake kwaliteit hebben we een onderzoek gedaan bij alle fabrieken die betrokken zijn bij het produceren van melk.
Tot onze spijt moeten wij meedelen dat uw vestiging helemaal achteraan het peloton bengelt en dat uw buren in Bree uitstekend scoren.

We verwachten van u tegen eind oktober een concreet actieplan om hier werk van te maken. Ik zal persoonlijk bij u langskomen eind oktober om naar jullie voorstellen te luisteren.

Groeten,
Gary`,
      deliverAtMinute: 0,
      priority: 'urgent',
      category: 'client',
    },
    {
      id: 'b18',
      from: 'Piet Kregels',
      fromEmail: 'piet.kregels@bmu.be',
      subject: 'Opendeurdag zondag 7 oktober',
      body: `Datum: 28 september 20XX
Aan: <uw naam>
CC: vakbondsfront
Van: Piet Kregels

Beste,

Het team heeft me gevraagd om dit even met jou te bespreken.
We vinden het niet kunnen dat ploeg A op zondag 7 oktober de opendeurdag dient te verzorgen. We hebben de avond voordien het afscheid van onze vroegere ploegleider Peter en op maandag 8 oktober hebben wij de vroege shift. Graag vragen aan jouw collega's Karen en Julan om te wisselen.

Dank bij voorbaat,

Vgr,
Piet`,
      deliverAtMinute: 0,
      priority: 'high',
      category: 'internal',
    },
    {
      id: 'b19',
      from: 'Sasha Davids',
      fromEmail: 's.davids@bmu.be',
      subject: 'Extra bestelling TopAction – Werken op zaterdag 6 oktober',
      body: `Datum: 30 september 20XX
Aan: <uw naam>; Karen Stevens; Julan Chen
Van: Sasha Davids

Beste collega's,

De supermarktketen TopAction heeft zojuist een spoedlevering besteld.
Dit impliceert dat we in de week van 8 oktober ook op zaterdag dienen te werken. Het is echter voldoende dat enkel de ochtend- en namiddagshift produceren. De namiddagshift zal waarschijnlijk reeds om 20u kunnen stoppen. De nachtshift hoeft niet te komen.

Alvast bedankt voor jullie begrip. TopAction is een veeleisende klant die vaak klachten heeft en waar we nu door het leveren van deze extra inspanning een wit voetje kunnen halen.

Bedank de collega's alvast voor hun inspanningen. We zullen voor beide ploegen pizza's voorzien (om 12u en om 18u).

Met vriendelijke groeten,
Sasha`,
      deliverAtMinute: 0,
      priority: 'high',
      category: 'client',
    },
    {
      id: 'b20',
      from: 'Linda Van Maldegem',
      fromEmail: 'l.vanmaldegem@bmu.be',
      subject: 'Relaties op de werkvloer',
      body: `Datum: 1 oktober 20XX
Aan: <uw naam>; Sofie Delens
Van: Linda Van Maldegem

Beste collega's,

Graag wil ik met jullie een delicaat probleem bespreken.
Louise De Windt is mij komen melden dat ze binnenkort gaat samenwonen met Karel Voet (ploegleider team A Melkpoeder).
Ze heeft gevraagd om de vacature voor de afdeling Kaas binnen het team van Sofie te kunnen innemen zodat zij en Karel telkens in dezelfde shift zitten.

Zij zit nu ook in team A bij de afdeling UHT, maar blijkbaar heeft ze ook een relatie gehad met Nand De Brabandere. Nand reageert heel negatief op de relatiebreuk met Louise en Louise wil dan ook liever in een ander team aan de slag.

Graag jullie insteek hieromtrent.

Met vriendelijke groeten,
Linda`,
      deliverAtMinute: 0,
      priority: 'normal',
      category: 'internal',
    },
  ],
}
