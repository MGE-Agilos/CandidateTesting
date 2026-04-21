import type { BusinessCaseContent } from '../../types'

export const bmuFr: BusinessCaseContent = {
  company: {
    name: 'BMU – Brabantse Melk Unie',
    tagline: 'Des produits laitiers de qualité issus des prairies',
    founded: 1871,
    employees: 24000,
    revenue: '€ 11,5 milliards (2018)',
    headquarters: 'Rotterdam, Pays-Bas',
    description: `En 1871, des agriculteurs néerlandais unirent leurs forces pour créer une laiterie locale. En 1928, une nouvelle usine fut construite, l'une des plus modernes d'Europe.

Après la Seconde Guerre mondiale, des fusions successives donnèrent naissance à "De Zuid-Nederlandse Melk Unie". En 1989, une fusion avec les "Verenigde Melkboeren" porta le chiffre d'affaires à €1,2 milliard. Depuis, de nombreuses acquisitions suivirent : Vlaamse Melkboer NV (Alost/Aalter, 1991), De Limburgse Melkboeren (Bree, 1997), Inovatech Argentina (Rosario, 2005).

En 2011, le nom Brabantse Melk Unie (BMU) fut adopté pour la Belgique et les Pays-Bas. Dans les autres pays, l'enseigne Dutch Quality Milkproducts (DQM) est utilisée.

BMU compte près de 24.000 employés et traite plus de 11 milliards de kg de lait par an. Plus de 75 % du chiffre d'affaires est réalisé hors Belgique et Pays-Bas.`,
    mission: `Fournir des produits laitiers de qualité aux consommateurs du monde entier, dans le respect des agriculteurs, des animaux, de l'environnement et des collaborateurs.`,
    values: [
      { title: 'Durabilité', description: 'Uniquement du lait de vaches en prairie, emballages durables (>85 % de matières renouvelables), prix équitables pour les agriculteurs.' },
      { title: 'Qualité', description: 'La qualité est essentielle pour les denrées alimentaires. Le prélèvement correct d\'échantillons et leur livraison au labo sont cruciaux.' },
      { title: 'Sécurité', description: 'La sécurité au travail est toujours prioritaire. La direction y est très attachée suite à de graves accidents passés.' },
      { title: 'Diversité', description: 'BMU valorise la diversité de pensée et la composition diverse des équipes. Les RH favorisent activement un environnement de travail inclusif.' },
      { title: 'L\'humain comme capital', description: 'Les collaborateurs bénéficient d\'une variété suffisante de tâches et sont encouragés à prendre en charge des tâches d\'autres départements.' },
    ],
    segments: [
      { name: 'BMU Consumer Dairy', share: '~45 %', description: 'Large gamme de produits laitiers pour les consommateurs (lait, yaourts, desserts...). Bureau à Anvers. Sites : Aalter, Bree, Francfort, Lansing, Chiang Mai, Rosario, Leeuwarden Ouest.' },
      { name: 'BMU Dairy Essentials', share: '~35 %', description: 'Fromage, beurre et lait en poudre. Bureau à Anvers. Mêmes sites que Consumer Dairy.' },
      { name: 'BMU Specialised Nutrition', share: '~10 %', description: 'Produits laitiers à haute valeur nutritionnelle pour des groupes spécifiques. Bureau à Rotterdam. Sites : Berlin, Leeuwarden Est.' },
      { name: 'BMU Ingredients', share: '~10 %', description: 'Ingrédients issus du lait pour l\'industrie alimentaire, animale et pharmaceutique. Bureau à Berlin.' },
    ],
    keyFigures: [
      { label: 'Fondée en', value: '1871' },
      { label: 'Employés', value: '24.000' },
      { label: 'Lait traité', value: '11 mrd kg' },
      { label: 'CA (2018)', value: '€11,5 mrd' },
      { label: 'Sites', value: '9 pays' },
      { label: 'CA hors BE/NL', value: '> 75 %' },
    ],
    processes: [
      {
        title: 'Processus UHT',
        steps: [
          'Réception et stockage du lait cru (contrôle qualité à l\'arrivée)',
          'Préchauffage et homogénéisation',
          'Stérilisation UHT : 2-5 secondes à 135-150°C (tous les micro-organismes sont éliminés)',
          'Conditionnement aseptique en emballages carton',
          'Contrôle qualité et prélèvement d\'échantillons (livraison au labo dans les délais)',
          'Palettisation et stockage en chambre froide',
          'Livraison aux clients',
        ],
        responsible: 'Chef d\'équipe + membres de l\'équipe A/B/C',
        delay: 'Processus en continu – 3 équipes (6h-14h / 14h-22h / 22h-6h)',
      },
      {
        title: 'Prélèvement d\'échantillons et contrôle qualité',
        steps: [
          'Prélèvements effectués selon des protocoles stricts (moment, quantité, méthode)',
          'Étiquetage et emballage corrects des échantillons',
          'Livraison dans les délais au laboratoire (Chef de labo : Jana Segers)',
          'Analyse par le labo et reporting',
          'En cas d\'anomalie : signalement immédiat au chef d\'équipe',
        ],
        responsible: 'Membres de l\'équipe (sous supervision chef d\'équipe) + Chef de labo',
        delay: 'Les échantillons doivent être livrés dans les délais — aucun retard toléré',
      },
      {
        title: 'Maintenance des machines en cas de panne',
        steps: [
          'En cas de panne : arrêter la ligne de production et sécuriser la situation',
          'Avertir IMMÉDIATEMENT le responsable maintenance (Pascale Vandewege)',
          'Contacter la firme De Backers — NE PAS essayer de réparer soi-même',
          'De Backers envoie une équipe de deux personnes sur place',
          'Le chef d\'équipe suit l\'évolution et communique',
          'Après réparation : vérifier le redémarrage et documenter',
        ],
        responsible: 'Chef d\'équipe + Pascale Vandewege + Firme De Backers',
        delay: 'De Backers dispose en permanence de deux équipes de deux personnes',
      },
      {
        title: 'Changement d\'équipe et passation',
        steps: [
          'L\'équipe entrante est présente 10 minutes avant la prise de poste',
          'Briefing écrit et oral par le chef d\'équipe sortant',
          'Passation : état de la production, problèmes en cours, points d\'action',
          'Laisser la zone de production propre (ramasser les déchets, nettoyer les machines)',
          'Transmettre les informations particulières à l\'équipe suivante',
        ],
        responsible: 'Chefs d\'équipe (Karen Stevens, Julan Chen, + nouveau TL)',
        delay: 'La passation dure 10-15 minutes par changement de poste',
      },
    ],
    contacts: [
      { name: 'Dominique De Vrieze', title: 'Directeur de Production BMU Belgium', email: 'd.devrieze@bmu.be', phone: '+32 9 300 10 01', department: 'Direction Belgique' },
      { name: 'Sasha Davids', title: 'Plant Manager Aalter', email: 's.davids@bmu.be', phone: '+32 9 300 20 01', department: 'Direction Aalter' },
      { name: 'Chris De Graeve', title: 'Plant Manager Bree', email: 'c.degraeve@bmu.be', phone: '+32 11 400 20 01', department: 'Direction Bree' },
      { name: 'Linda Van Maldegem', title: 'HR Business Partner Aalter', email: 'l.vanmaldegem@bmu.be', phone: '+32 9 300 30 01', department: 'RH' },
      { name: 'Jana Segers', title: 'Chef de Laboratoire Aalter', email: 'j.segers@bmu.be', phone: '+32 9 300 40 01', department: 'Laboratoire' },
      { name: 'Pascale Vandewege', title: 'Responsable Maintenance Aalter & Bree', email: 'p.vandewege@bmu.be', phone: '+32 9 300 50 01', department: 'Maintenance' },
      { name: 'Karen Stevens', title: 'Chef d\'équipe UHT – Équipe B', email: 'k.stevens@bmu.be', phone: '+32 9 300 60 01', department: 'UHT' },
      { name: 'Julan Chen', title: 'Chef d\'équipe UHT – Équipe C', email: 'j.chen@bmu.be', phone: '+32 9 300 60 02', department: 'UHT' },
      { name: 'Peter Nagels', title: 'Ex-chef d\'équipe UHT – Équipe A', email: 'p.nagels@bmu.be', phone: '+32 9 300 60 00', department: 'UHT' },
      { name: 'Sofie Delens', title: 'Chef d\'équipe Fromage – Équipe A', email: 's.delens@bmu.be', phone: '+32 9 300 61 01', department: 'Fromage' },
      { name: 'Gary Philips', title: 'Directeur Ventes & Marketing – Consumer Dairy', email: 'g.philips@bmu-consumerdairy.com', phone: '+32 3 700 10 01', department: 'Consumer Dairy' },
    ],
    orgChart: {
      ceo: { name: 'Sasha Davids', title: 'Plant Manager Aalter' },
      departments: [
        {
          name: 'Département UHT',
          head: '[Nouveau chef d\'équipe – Vous]',
          headTitle: 'Chef d\'équipe Équipe A',
          members: [
            { name: 'Karen Stevens', title: 'Chef d\'équipe Équipe B' },
            { name: 'Julan Chen', title: 'Chef d\'équipe Équipe C' },
            { name: 'Équipe A : 10 membres', title: '(voir fiche équipe)' },
          ],
        },
        {
          name: 'Département Fromage',
          head: 'Sofie Delens',
          headTitle: 'Chef d\'équipe Équipe A',
          members: [
            { name: 'Nancy Degryse', title: 'Chef d\'équipe Équipe B' },
            { name: 'Danny Stevens', title: 'Chef d\'équipe Équipe C' },
          ],
        },
        {
          name: 'Département Lait en poudre',
          head: 'Louise Taghon',
          headTitle: 'Chef d\'équipe Équipe A',
          members: [
            { name: 'Noel De Lange', title: 'Chef d\'équipe Équipe B' },
            { name: 'Karel Voet', title: 'Chef d\'équipe Équipe C' },
          ],
        },
        {
          name: 'Département Beurre',
          head: 'Angie Roberts',
          headTitle: 'Chef d\'équipe Équipe A',
          members: [
            { name: 'Stijn Degraeve', title: 'Chef d\'équipe Équipe B' },
            { name: 'Nina Dekorte', title: 'Chef d\'équipe Équipe C' },
          ],
        },
        {
          name: 'RH & Support',
          head: 'Linda Van Maldegem',
          headTitle: 'HR Business Partner',
          members: [
            { name: 'Jana Segers', title: 'Chef de Laboratoire' },
            { name: 'Pascale Vandewege', title: 'Responsable Maintenance' },
          ],
        },
      ],
    },
    suppliers: [
      { name: 'Membres éleveurs laitiers', country: 'Belgique / Pays-Bas', products: 'Lait cru de prairie', contact: 'Via structure coopérative', leadTime: 'Approvisionnement quotidien' },
      { name: 'Firme De Backers', country: 'Belgique (Ruiselede)', products: 'Maintenance machines UHT Aalter', contact: 'Pascale De Backers', leadTime: 'On-call — équipe toujours disponible' },
      { name: 'Firme Davids', country: 'Belgique (Bree)', products: 'Maintenance machines Bree', contact: 'Stevie Donckers', leadTime: 'On-call — équipe toujours disponible' },
      { name: 'Fournisseurs d\'emballages', country: 'Europe', products: 'Emballages carton, bouchons, films (>85 % renouvelable)', contact: 'Service achats Rotterdam', leadTime: 'Variable' },
    ],
    topClients: [
      { name: 'TopAction', sector: 'Grande distribution', since: 2010, kam: 'Gary Philips', annualVolume: 'Grand volume', notes: 'Client exigeant, plaintes fréquentes, livraisons urgentes possibles. Un effort supplémentaire permet de le fidéliser.' },
      { name: 'Carrefour Belgium', sector: 'Grande distribution', since: 2005, kam: 'Gary Philips', annualVolume: 'Grand volume', notes: 'Client stratégique pour la division Consumer Dairy.' },
      { name: 'Delhaize Group', sector: 'Grande distribution', since: 2003, kam: 'Gary Philips', annualVolume: 'Grand volume', notes: 'Exigences qualité strictes — audits réguliers.' },
      { name: 'Albert Heijn', sector: 'Grande distribution / Pays-Bas', since: 2008, kam: 'Gary Philips', annualVolume: 'Grand volume', notes: 'Important marché néerlandais.' },
    ],
  },
  emails: [
    {
      id: 'b01',
      from: 'Sasha Davids',
      fromEmail: 's.davids@bmu.be',
      subject: 'Passage au système à deux équipes',
      body: `Date : 17 septembre 20XX
À : Tous les chefs d'équipe (Team leaders)
De : Sasha Davids

Chers collègues,

Dominique a décidé qu'Aalter passera à un système à deux équipes à partir du 1er novembre. Bree peut attendre jusqu'au 1er décembre.
Cela signifie que vous devez vous concerter au sein de vos départements sur la façon de redistribuer les équipes et comment vous, en tant que chefs d'équipe, allez gérer les équipes dans les mois à venir. Veuillez encourager autant que possible vos membres d'équipe à prendre des congés pendant les mois d'hiver.
À partir du 1er mai, nous espérons pouvoir repasser à un système à trois équipes. Nous prévoyons éventuellement un jour par semaine de chômage économique en décembre/janvier.

Merci de me soumettre votre proposition d'ici la fin de cette semaine. Je fixerai ensuite une réunion par département pour en discuter.

Voici également un aperçu des projets prévus pendant les mois d'hiver :
• Remplacement de deux machines vétustes au département Fromage
• Adaptation du hall de production au département Lait en poudre
• Pas de projets au département Beurre Aalter, mais bien à Bree
• Éventuel renouvellement complet de la ligne de production au département UHT. La décision entre Aalter et Bree est encore ouverte. Si ce projet va à Bree, un de nos chefs d'équipe devra temporairement soutenir Bree en tant que membre du projet.
• Le département UHT de Rosario doit être mis à niveau cet hiver. BMU Rotterdam nous a demandé de détacher un chef d'équipe expérimenté en Belgique pendant quelques mois (décembre, janvier) à Rosario.

Merci aussi de proposer des personnes pour les équipes projet — pas toujours les mêmes "favoris". Faites appel à des personnes nouvelles qui peuvent apporter de nouvelles perspectives. Via Zoom ou Teams, vous pouvez collaborer largement.

Cordialement,
Sasha Davids`,
      deliverAtMinute: 0,
      priority: 'high',
      category: 'internal',
    },
    {
      id: 'b02',
      from: 'Sasha Davids',
      fromEmail: 's.davids@bmu.be',
      subject: 'Projet UHT Aalter ou Bree',
      body: `Date : 29 septembre 20XX
À : <votre nom> ; Karen Stevens ; Julan Chen
De : Sasha Davids

Bonjour à tous,

J'ai reçu ces informations du coordinateur de projet de BMU Rotterdam :

"Avec un investissement de cinq millions d'euros, trois anciennes lignes de remplissage carton d'un litre seront remplacées par une ligne de remplissage carton à grande vitesse, une ligne de remplissage aseptique pour emballages carton de 1.000 ml avec Helicap, un bouchon à vis permettant d'ouvrir immédiatement le pack."

"L'objectif de cette nouvelle ligne est de réduire les pertes et d'augmenter l'efficacité. En plus de la ligne elle-même, un tank aseptique de 45.000 litres, des machines d'emballage et une installation de palettisation contribueront à cet objectif. La nouvelle ligne pourra traiter pas moins de 15.000 unités par heure."

Réfléchissez déjà à la façon dont nous allons vendre cela aux syndicats. Je crains que cela signifie que nous pourrons travailler avec moins de personnes par équipe, et les syndicats le comprendront aussi. Si cela fuite, nous pouvons nous attendre à des actions syndicales. Espérons que ce projet soit d'abord attribué à Bree.

Cordialement,
Sasha`,
      deliverAtMinute: 0,
      priority: 'high',
      category: 'internal',
    },
    {
      id: 'b03',
      from: 'Linda Van Maldegem',
      fromEmail: 'l.vanmaldegem@bmu.be',
      subject: 'Votre équipe – Aperçu des membres',
      body: `Date : 30 septembre 20XX
À : <votre nom>
De : Linda Van Maldegem

Bonjour,

Voici un aperçu des membres de votre équipe :

Nom               | Âge | En service | Remarques
------------------|-----|------------|------------------------------------------
Piet Kregels      | 58  | 1991       | Agriculteur à temps partiel, très expérimenté, pilier de l'équipe
Louise De Windt   | 46  | 1995       | Divorcée, 3 enfants, demande souvent des avances sur salaire
Laleh Lankarani   | 38  | 2015       | Excellente travailleuse, originaire d'Égypte, vit en Belgique depuis 10 ans
Linda Termont     | 22  | 2017       | Première à demander à rester chez elle en hiver
Sandy Peeters     | 26  | 2014       | Ambitieux(se), veut progresser, prend ses responsabilités
Nand De Brabandere| 51  | 1991       | Agriculteur à temps partiel
Philippe Durée    | 30  | 2015       | Ambitieux, diplôme supérieur en philosophie, a commencé comme étudiant jobiste
Noel Vindevogel   | 44  | 1999       | Peu ambitieux, fait de moins en moins d'efforts
Fred Maertens     | 23  | 2019       | Ex-étudiant jobiste, ne répond pas aux attentes
Daniel De Winter  | 41  | 2014       | Ambitieux, veut changer de département, mauvaise entente avec l'équipe, grande gueule, très critique, difficulté à contrôler ses émotions, déjà 2 avertissements

Cordialement,
Linda`,
      deliverAtMinute: 0,
      priority: 'high',
      category: 'internal',
    },
    {
      id: 'b04',
      from: 'Daniel De Winter',
      fromEmail: 'daniel.dewinter@bmu.be',
      subject: 'Mutation vers l\'équipe Fromage',
      body: `Date : 1er octobre 20XX
À : <votre nom>
De : Daniel De Winter

Bonjour,

Bienvenue, mais j'espère que nous ne travaillerons ensemble que peu de temps. Je m'explique. Je souhaite me porter candidat au poste vacant dans l'équipe Fromage.

Je travaille depuis longtemps à l'UHT et il est temps pour moi de changer de département. Je veux évoluer vers un poste de chef d'équipe, mais maintenant que vous avez été nommé successeur de Peter, je vois mes chances de promotion compromises une fois de plus.

Dans deux ans, un chef d'équipe du Fromage (Danny Stevens) partira à la retraite, et si je suis déjà opérationnel depuis deux ans, je pourrai saisir cette opportunité.

J'espère obtenir votre soutien pour effectuer cette transition.

Cordialement,
Daniel`,
      deliverAtMinute: 0,
      priority: 'normal',
      category: 'internal',
    },
    {
      id: 'b05',
      from: 'Sofie Delens',
      fromEmail: 's.delens@bmu.be',
      subject: 'Poste vacant dans mon équipe',
      body: `Date : 30 septembre 20XX
À : Sasha Davids
CC : <votre nom> ; Linda Van Maldegem
De : Sofie Delens

Bonjour Sasha,

Les RH m'ont transmis la liste des candidats souhaitant occuper le poste vacant dans mon équipe. J'y vois le nom de Daniel De Winter. Pour être claire, je ne veux pas cet homme dans mon équipe. C'est une pomme pourrie et une source de problèmes.

Ma préférence va à Janny Devogelaere, qui travaille chez nous comme étudiante jobiste depuis trois ans, s'intègre parfaitement à l'équipe et est une travailleuse acharnée.

Cordialement,
Sofie`,
      deliverAtMinute: 0,
      priority: 'normal',
      category: 'internal',
    },
    {
      id: 'b06',
      from: 'Philippe Durée',
      fromEmail: 'philippe.duree@bmu.be',
      subject: 'Confidentiel – Situation dans l\'équipe',
      body: `Date : 20 septembre 20XX
À : Peter Nagels
CC : (transmis à <votre nom>)
De : Philippe Durée

Bonjour,

Je me sens dans l'obligation de vous signaler un certain nombre de problèmes qui se posent dans l'équipe.

• Daniel De Winter a clairement du mal à maîtriser ses émotions (colère, frustration). Quand vous n'êtes pas là, il commande et réprimande tout le monde comme s'il était déjà chef d'équipe. Je sais que vous envisagez de travailler plus près de chez vous. Très bien pour vous, mais ne nous imposez pas Daniel comme nouveau chef d'équipe.

• Daniel et Sandy se profilent clairement pour vous succéder. Ces deux-là ont du mal à se supporter et sont en concurrence. Chaque tentative de réunir l'équipe tourne au chaos.

• Il a filtré que nous allons recevoir une nouvelle ligne entièrement modernisée et automatisée cet hiver, ce qui crée de l'inquiétude parmi les membres de l'équipe. Certains craignent pour leur emploi.

• Nand n'a plus la tête au travail. Son exploitation agricole est en difficulté financière et cela pèse sur lui. Il est souvent absent pour de courtes périodes et cela pèse sur l'équipe.

• Laleh est une excellente travailleuse, mais ne se sent pas totalement acceptée dans le groupe. Elle pourrait prendre plus de responsabilités, mais n'ose pas. Certains membres de l'équipe ne la prennent pas au sérieux et font des blagues sur ses origines.

• Je suis également agacé par la mentalité provinciale qui règne dans cette usine. La façon dont on parle parfois de manière condescendante des collègues de Bree me heurte. En tant que Limbourgeois, j'ai moi aussi subi plusieurs "piques" ici.

Je veux également vous informer que je vais moi-même poser ma candidature au poste de chef d'équipe (oui, les Limbourgeois sont aussi ambitieux) quand votre départ sera officiel. J'ai déjà le soutien de Piet.

Cordialement,
Philippe`,
      deliverAtMinute: 0,
      priority: 'high',
      category: 'internal',
    },
    {
      id: 'b07',
      from: 'Jana Segers',
      fromEmail: 'j.segers@bmu.be',
      subject: 'Prélèvement d\'échantillons',
      body: `Date : 29 septembre 20XX
À : <votre nom>
De : Jana Segers

Bonjour <votre nom>,

Bienvenue à bord. Ravi(e) de vous avoir parmi nous. Votre prédécesseur laissait déjà les choses à l'abandon depuis un certain temps et ignorait généralement mes signaux indiquant que l'équipe A ne respectait pas scrupuleusement les règles de prélèvement d'échantillons.

Je tiens à insister une fois de plus sur le fait que les échantillons doivent être prélevés conformément aux règles convenues et livrés au laboratoire dans les délais. Cela fonctionne parfaitement dans les deux autres équipes. J'ai pris la liberté d'observer votre équipe lors du prélèvement d'échantillons et j'ai constaté des choses hallucinantes.

Pouvez-vous mettre de l'ordre ? Veuillez également signaler à votre collaborateur Daniel De Winter qu'il doit traiter mes collaborateurs avec plus de respect lors de la livraison des échantillons. Meryem et Berat, d'origine turque, se sont plaints à plusieurs reprises.

Il n'est également pas acceptable qu'il s'arrête régulièrement pour une longue conversation avec un de mes collaborateurs qu'il connaît. Cela arrive surtout lors de l'équipe de nuit.

Merci d'avance.

Cordialement,
Jana Segers
Chef de Laboratoire Aalter`,
      deliverAtMinute: 0,
      priority: 'urgent',
      category: 'internal',
    },
    {
      id: 'b08',
      from: 'Sasha Davids',
      fromEmail: 's.davids@bmu.be',
      subject: 'Portes ouvertes – Possible action d\'activistes',
      body: `Date : 1er octobre 20XX
À : Tous les chefs d'équipe
De : Sasha Davids

Chers collègues,

Il semble que nous puissions nous attendre à une action d'un groupe d'activistes "alimentation saine" (Planeat BE) lors des portes ouvertes.
Un article négatif a apparemment été publié dans la presse sur les activités de BMU Ingredients à Berlin — comme si des expériences dangereuses menaçant la santé et l'environnement s'y déroulaient.
J'ai appelé Berlin et ils rient de ça. Il s'agit apparemment d'un article ridicule dans un tabloïd allemand, largement relayé sur des sites conspirationnistes.

Réfléchissez à la façon dont nous pouvons nous y préparer. Pouvons-nous gérer cela nous-mêmes si des problèmes surviennent, ou demandons-nous un renfort policier ?

Cordialement,
Sasha`,
      deliverAtMinute: 0,
      priority: 'high',
      category: 'internal',
    },
    {
      id: 'b09',
      from: 'Linda Van Maldegem',
      fromEmail: 'l.vanmaldegem@bmu.be',
      subject: 'Points d\'attention Équipe A UHT',
      body: `Date : 1er octobre 20XX
À : <votre nom>
De : Linda Van Maldegem

Bonjour,

Je sais que vous venez juste de commencer, mais je souhaite vous signaler quelques points concernant l'équipe A.

• Plaintes de Jana Segers concernant le prélèvement d'échantillons.

• L'absentéisme pour de courtes périodes (1 à 2 jours) est 10 % plus élevé que dans les autres équipes.

• Cet été, des étudiants jobistes sont venus me demander à plusieurs reprises de changer d'équipe (plaintes de harcèlement, mauvaise ambiance, tâches ingrates confiées aux jobistes).

• Daniel passe ici toutes les cinq minutes pour demander des postes vacants de chef d'équipe et veut, maintenant qu'il a appris votre arrivée, partir immédiatement vers l'équipe Fromage.

• Veuillez avoir une discussion avec Louise — nous ne pouvons pas continuer à lui accorder des avances sur salaire.

• Fred Maertens semblait prometteur, mais ne répond actuellement pas aux attentes. Il a eu un entretien d'avertissement le mois dernier avec Peter et moi. Veuillez m'informer cette semaine s'il y a une amélioration. Sinon, je propose de le licencier.

• Laleh est passée me voir. Elle souhaite s'installer à Aalter, mais a du mal à trouver un logement à louer. Elle nous demande d'intervenir. Est-ce notre rôle ?

Cordialement,
Linda`,
      deliverAtMinute: 0,
      priority: 'high',
      category: 'internal',
    },
    {
      id: 'b10',
      from: 'Pascale Vandewege',
      fromEmail: 'p.vandewege@bmu.be',
      subject: 'Machines UHT – Incidents graves',
      body: `Date : 1er octobre 20XX
À : <votre nom>
CC : Sasha Davids
De : Pascale Vandewege

Bonjour,

J'ai reçu une note de Pascale De Backers avec des plaintes sur la façon dont l'équipe A gère les pannes de machines.
La firme De Backers dispose en permanence de deux équipes de deux personnes prêtes à intervenir immédiatement en cas de problème. Pascale constate qu'il faut de plus en plus de temps avant que l'équipe de maintenance ne soit appelée lors d'une panne. Résultat : la ligne reste à l'arrêt plus longtemps que nécessaire.

Ses techniciens lui ont signalé que Daniel et Sandy tentent souvent de résoudre le problème seuls. Ce n'est pas acceptable.

Ses techniciens ont également signalé qu'avant-hier, ils ont observé Daniel et Sandy se bousculer lors d'une vive discussion sur la façon de gérer une machine défectueuse. Piet Kregels les aurait séparés.

Beaucoup de travail donc pour le nouveau chef d'équipe. Pour être clair : expliquez bien à votre équipe de ne pas toucher aux machines et d'appeler immédiatement De Backers pour que la ligne redémarre le plus vite possible.

De Backers a récemment recruté deux excellents techniciens polonais. Ce sont techniquement deux personnes expérimentées avec une grande connaissance des machines utilisées dans notre département UHT.
Après la première semaine, ils sont tous les deux venus se plaindre à moi de la difficulté de collaboration avec votre équipe. Ils ne parlent pas parfaitement le néerlandais, mais apprennent vite, et les remarques de certains membres de votre équipe à ce sujet sont vraiment déplacées.
La remarque que les "étrangers" prennent le travail des gens du coin est absurde. Ce genre de techniciens n'est plus disponible sur le marché du travail en Flandre.

Cordialement,
Pascale Vandewege
Responsable Maintenance`,
      deliverAtMinute: 0,
      priority: 'urgent',
      category: 'internal',
    },
    {
      id: 'b11',
      from: 'Karen Stevens & Julan Chen',
      fromEmail: 'k.stevens@bmu.be',
      subject: 'Propreté du hall de production',
      body: `Date : 30 septembre 20XX
À : <votre nom>
De : Karen Stevens ; Julan Chen

Bonjour,

Bienvenue dans notre département. Nous nous réjouissons de travailler avec vous.
Quelques remarques cependant sur votre équipe. Nous comptons sur vous pour remettre les choses en ordre.

Votre équipe ne laisse pas la zone de production en ordre. L'accord est que tous les déchets soient ramassés et que l'espace de production soit laissé propre. C'est agréable pour l'équipe suivante de commencer dans de bonnes conditions.

Nous souhaiterions également un briefing pour l'équipe qui vient après la vôtre. Assurez-vous que cela se déroule de manière ordonnée et correcte même en votre absence. Le comportement de "coq" entre Philippe, Sandy et Daniel cause souvent des malentendus lors de la passation.

Quand votre équipe prend la relève, elle doit être présente 10 minutes à l'avance pour que nos collaborateurs puissent terminer leur poste à temps. Souvent, certaines personnes comme Louise, Nand, Fred et Noel arrivent tout juste à l'heure ou en retard. Des membres de nos équipes commencent à se plaindre.

Si vous avez envie d'aller en Argentine pour soutenir l'usine là-bas, nous vous y encourageons. Nous n'avons absolument aucune envie d'y aller. Ce projet peut aussi être pour vous si jamais cela se concrétise, car il ira probablement d'abord à Bree.

Cordialement,
Karen et Julan`,
      deliverAtMinute: 0,
      priority: 'normal',
      category: 'internal',
    },
    {
      id: 'b12',
      from: 'Sasha Davids',
      fromEmail: 's.davids@bmu.be',
      subject: 'Confidentiel – Chef d\'équipe adjoint',
      body: `Date : 15 septembre 20XX
À : Chefs d'équipe UHT
De : Sasha Davids

Bonjour à tous,

Nous constatons que les chefs d'équipe sont souvent absents du terrain en raison de congés, réunions ou participation à des projets. Nous envisageons donc de créer la fonction de chef d'équipe adjoint. J'attends vos idées à ce sujet.
Le département UHT servirait de projet pilote. Voyez-vous des candidats potentiels ? Quelles compétences sont importantes pour bien remplir ce rôle ? Rotterdam insiste également pour que des collaborateurs d'origine immigrée aient des opportunités à ce niveau.
Linda a récemment découvert que Laleh a obtenu un diplôme universitaire au Caire et voit en elle un grand potentiel.

@Peter : je pense ici à Piet Kregels, une belle récompense pour ses années de service fidèle, c'est un pilier de l'équipe.

Cordialement,
Sasha`,
      deliverAtMinute: 0,
      priority: 'high',
      category: 'internal',
    },
    {
      id: 'b13',
      from: 'Peter Nagels',
      fromEmail: 'p.nagels@bmu.be',
      subject: 'Effectif minimum – Semaine du 8 octobre',
      body: `Date : 20 septembre 20XX
À : Sasha Davids
De : Peter Nagels

Bonjour Sasha,

La semaine du 8 octobre, mon équipe assure l'équipe du matin. L'effectif minimum est de huit collaborateurs, mais j'ai quatre demandes de congé cette semaine-là et chacun a une bonne raison. Nous allons donc devoir trouver des remplaçants (étudiants jobistes, collègues d'autres équipes).

• Daniel De Winter : congé du lundi au mercredi pour travaux de rénovation à domicile
• Louise De Windt : congé familial du lundi au jeudi pour opération de sa fille cadette
• Philippe Durée : congé mercredi, jeudi et vendredi. City-trip à Amsterdam, prévu depuis début d'année, anniversaire de mariage
• Piet Kregels : congé toute la semaine, rentrée des récoltes de son exploitation agricole

Je souhaite beaucoup de succès à mon successeur.

Info : Les portes ouvertes doivent encore être organisées au sein de l'équipe, ce sera une affaire délicate.

P.S. : Le samedi 6 octobre, j'organise un verre d'adieu au Café The Bridge sur la grand-place. Mon successeur est également invité, ainsi que vous bien sûr.

Cordialement,
Peter`,
      deliverAtMinute: 0,
      priority: 'high',
      category: 'internal',
    },
    {
      id: 'b14',
      from: 'Daniel De Winter',
      fromEmail: 'daniel.dewinter@bmu.be',
      subject: 'Firme de maintenance De Backers',
      body: `Date : 1er octobre 20XX
À : <votre nom>
De : Daniel De Winter

Bonjour,

Je voulais vous signaler que cette firme De Backers est vraiment des bricoleurs.
Je travaille avec ces machines depuis des années et les connais parfaitement. Pourquoi nous devons toujours appeler ces bricoleurs pour résoudre un problème est un mystère pour moi. Externaliser la maintenance est vraiment une mauvaise idée. Il vaudrait mieux avoir nos propres techniciens. Ce sont généralement de jeunes gars qui prennent leur temps pour analyser un problème (chercher sur internet donc) et appellent leur patron pour des solutions. Nous écouter n'est apparemment pas une option.

Maintenant ils ont même recruté deux Polonais âgés, qui ne parlent entre eux qu'un polonais incompréhensible. Ce n'est vraiment pas acceptable ! On ne peut pas me demander de parler anglais pendant mon travail, encore moins d'apprendre le polonais. Et qui sait ce qu'ils disent sur nous en polonais !

Cordialement,
Daniel`,
      deliverAtMinute: 0,
      priority: 'normal',
      category: 'internal',
    },
    {
      id: 'b15',
      from: 'Sasha Davids',
      fromEmail: 's.davids@bmu.be',
      subject: 'Portes ouvertes – Dimanche 7 octobre',
      body: `Date : 10 septembre 20XX
À : Tous les chefs d'équipe
De : Sasha Davids

Bonjour,

Dimanche 7 octobre, c'est le moment. Nous organisons pour la cinquième fois des portes ouvertes pour les clients, les riverains et les personnes intéressées. La météo promet une superbe journée.

De 13h à 18h, une équipe sera au travail dans chaque département afin que les visiteurs puissent observer la production en direct. Selon les accords convenus, c'est cette année aux équipes A d'assurer la production et l'accueil des clients.

Cette année, une délégation de notre site en Argentine sera présente et s'intéresse principalement au département UHT.

À l'avenir, nous accueillerons de plus en plus de collaborateurs de sites étrangers. Certains resteront éventuellement quelques mois chez nous pour mieux connaître le fonctionnement du site. Ils intégreront vos équipes en production. Je compte sur vous pour les accueillir avec respect et enthousiasme.

Cordialement,
Sasha`,
      deliverAtMinute: 0,
      priority: 'normal',
      category: 'internal',
    },
    {
      id: 'b16',
      from: 'Sasha Davids',
      fromEmail: 's.davids@bmu.be',
      subject: 'Plaintes clients – Réunion mardi 2 octobre 15h',
      body: `Date : 30 septembre 20XX
À : <votre nom> ; Karen Stevens ; Julan Chen
De : Sasha Davids

Chers collègues,

Mardi 2 octobre, j'attends vous trois dans mon bureau à 15h pour en discuter.

Cordialement,
Sasha`,
      deliverAtMinute: 0,
      priority: 'urgent',
      category: 'internal',
    },
    {
      id: 'b17',
      from: 'Gary Philips',
      fromEmail: 'g.philips@bmu-consumerdairy.com',
      subject: 'Plaintes clients – Rapport qualité',
      body: `Date : 28 septembre 20XX
À : Sasha Davids
De : Gary Philips – Directeur Ventes & Marketing, division Consumer Dairy

Bonjour Sasha,

Sur la base de plusieurs plaintes de clients concernant la qualité, nous avons mené une enquête dans toutes les usines impliquées dans la production de lait.
Nous devons malheureusement vous informer que votre site est en queue de peloton et que vos voisins de Bree obtiennent d'excellents résultats.

Nous attendons de votre part un plan d'action concret d'ici fin octobre. Je viendrai personnellement fin octobre pour entendre vos propositions.

Cordialement,
Gary`,
      deliverAtMinute: 0,
      priority: 'urgent',
      category: 'client',
    },
    {
      id: 'b18',
      from: 'Piet Kregels',
      fromEmail: 'piet.kregels@bmu.be',
      subject: 'Portes ouvertes dimanche 7 octobre',
      body: `Date : 28 septembre 20XX
À : <votre nom>
CC : représentation syndicale
De : Piet Kregels

Bonjour,

L'équipe m'a demandé d'aborder ceci avec vous.
Nous trouvons inacceptable que l'équipe A doive assurer les portes ouvertes le dimanche 7 octobre. Nous avons la veille l'adieu de notre ancien chef d'équipe Peter, et le lundi 8 octobre nous assurons l'équipe du matin. Nous demandons à vos collègues Karen et Julan d'échanger.

Merci d'avance,

Cordialement,
Piet`,
      deliverAtMinute: 0,
      priority: 'high',
      category: 'internal',
    },
    {
      id: 'b19',
      from: 'Sasha Davids',
      fromEmail: 's.davids@bmu.be',
      subject: 'Commande urgente TopAction – Travail samedi 6 octobre',
      body: `Date : 30 septembre 20XX
À : <votre nom> ; Karen Stevens ; Julan Chen
De : Sasha Davids

Chers collègues,

La chaîne de supermarchés TopAction vient de commander une livraison urgente.
Cela implique que nous devons également travailler le samedi de la semaine du 8 octobre. Il suffit cependant que l'équipe du matin et celle de l'après-midi produisent. L'équipe de l'après-midi pourra probablement s'arrêter dès 20h. L'équipe de nuit n'est pas concernée.

Merci pour votre compréhension. TopAction est un client exigeant qui se plaint souvent, et en faisant cet effort supplémentaire, nous pouvons gagner des points avec lui.

Remerciez déjà les collègues pour leurs efforts. Nous prévoyons des pizzas pour les deux équipes (à 12h et à 18h).

Cordialement,
Sasha`,
      deliverAtMinute: 0,
      priority: 'high',
      category: 'client',
    },
    {
      id: 'b20',
      from: 'Linda Van Maldegem',
      fromEmail: 'l.vanmaldegem@bmu.be',
      subject: 'Relations personnelles sur le lieu de travail',
      body: `Date : 1er octobre 20XX
À : <votre nom> ; Sofie Delens
De : Linda Van Maldegem

Chers collègues,

Je souhaite aborder avec vous un problème délicat.
Louise De Windt m'a informée qu'elle va bientôt cohabiter avec Karel Voet (chef d'équipe Équipe A Lait en poudre).
Elle a demandé à occuper le poste vacant au département Fromage dans l'équipe de Sofie, afin qu'elle et Karel soient toujours dans le même poste.

Elle est actuellement dans l'équipe A au département UHT, mais il semble qu'elle ait également eu une relation avec Nand De Brabandere. Nand réagit très négativement à la rupture et Louise préfère donc travailler dans une autre équipe.

J'attends votre avis à ce sujet.

Cordialement,
Linda`,
      deliverAtMinute: 0,
      priority: 'normal',
      category: 'internal',
    },
  ],
}
