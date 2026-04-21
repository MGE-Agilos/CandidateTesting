import type { BusinessCaseContent } from '../../types'

export const novachemFr: BusinessCaseContent = {
  company: {
    name: 'NovaChem Solutions',
    tagline: 'La chimie au service de l\'industrie',
    founded: 1987,
    employees: 340,
    revenue: '€ 82 millions (2023)',
    headquarters: 'Liège, Belgique',
    description: `NovaChem Solutions est un distributeur et formulateur de produits chimiques industriels, implanté en Belgique depuis 1987. La société opère dans trois segments principaux : la distribution de matières premières chimiques, la formulation de produits sur mesure, et le conseil technique aux industriels.

NovaChem est certifiée ISO 9001, ISO 14001 et REACH-compliant. Elle dessert plus de 400 clients actifs dans les secteurs de l'automobile, de l'agroalimentaire, du traitement de surface et de la plasturgie.`,
    mission: `Fournir à nos clients industriels des solutions chimiques fiables, innovantes et durables, en combinant l'expertise technique avec un service de proximité irréprochable.`,
    values: [
      { title: 'Fiabilité', description: 'Nous tenons nos engagements envers nos clients et partenaires.' },
      { title: 'Innovation', description: 'Nous investissons en R&D pour proposer des formulations à la pointe.' },
      { title: 'Durabilité', description: 'Nos procédés respectent les normes environnementales les plus strictes.' },
      { title: 'Proximité', description: 'Chaque client bénéficie d\'un interlocuteur dédié et réactif.' },
    ],
    segments: [
      { name: 'Distribution', share: '55 %', description: 'Revente de matières premières chimiques provenant de fournisseurs européens et asiatiques. Stock permanent de 1 200 références.' },
      { name: 'Formulation', share: '30 %', description: 'Développement et production de mélanges sur mesure selon cahier des charges client. Atelier de formulation à Liège (2 000 m²).' },
      { name: 'Conseil & Services', share: '15 %', description: 'Audits procédés, assistance technique on-site, formation des équipes client, gestion réglementaire REACH/SDS.' },
    ],
    keyFigures: [
      { label: 'Clients actifs', value: '400+' },
      { label: 'Références en stock', value: '1 200' },
      { label: 'Pays fournisseurs', value: '18' },
      { label: 'Collaborateurs', value: '340' },
      { label: 'Chiffre d\'affaires', value: '€ 82M' },
      { label: 'Années d\'existence', value: '37' },
    ],
    processes: [
      {
        title: 'Gestion des commandes clients',
        steps: [
          'Réception de la demande (email / portail / téléphone)',
          'Vérification disponibilité stock ou délai fournisseur',
          'Confirmation de commande avec bon de commande interne (BCI)',
          'Préparation en entrepôt ou déclenchement formulation',
          'Expédition + envoi bon de livraison (BL) et facture',
          'Suivi satisfaction client J+7',
        ],
        responsible: 'Service Commercial + Logistique',
        delay: '24–48h pour stock disponible / 5–10 jours pour commande fournisseur',
      },
      {
        title: 'Processus d\'homologation fournisseur',
        steps: [
          'Identification du besoin et sourcing fournisseurs potentiels',
          'Demande de documentation (certificats, SDS, COA)',
          'Commande d\'échantillons pour tests Q&A',
          'Validation technique par le laboratoire',
          'Négociation commerciale et signature contrat-cadre',
          'Référencement dans l\'ERP',
        ],
        responsible: 'Achats + Qualité',
        delay: '4 à 8 semaines selon complexité',
      },
      {
        title: 'Traitement des réclamations clients',
        steps: [
          'Réception et enregistrement de la réclamation (CRM)',
          'Accusé de réception sous 4h ouvrées',
          'Analyse des causes (non-conformité, livraison, facturation)',
          'Plan d\'action correctif sous 48h',
          'Avoir / remplacement selon nature du problème',
          'Clôture et rapport 8D si réclamation grave',
        ],
        responsible: 'Service Qualité + Commercial',
        delay: 'Accusé de réception : 4h / Résolution : 2–5 jours',
      },
      {
        title: 'Gestion des achats et réapprovisionnement',
        steps: [
          'Analyse automatique des seuils de stock (ERP)',
          'Génération proposition de commande',
          'Validation responsable achats (> € 10 000 : validation DAF)',
          'Envoi bon de commande fournisseur',
          'Réception marchandise + contrôle qualité réception',
          'Mise en stock et mise à jour ERP',
        ],
        responsible: 'Achats + Entrepôt',
        delay: 'Délais variables selon fournisseur (2 jours à 6 semaines)',
      },
    ],
    contacts: [
      { name: 'Sophie Martens', title: 'CEO', email: 's.martens@novachem.be', phone: '+32 4 220 10 01', department: 'Direction' },
      { name: 'Marc Dubois', title: 'Directeur Commercial', email: 'm.dubois@novachem.be', phone: '+32 4 220 10 10', department: 'Commercial' },
      { name: 'Isabelle Renard', title: 'Directrice Achats', email: 'i.renard@novachem.be', phone: '+32 4 220 10 20', department: 'Achats' },
      { name: 'Thomas Lecomte', title: 'Responsable Logistique', email: 't.lecomte@novachem.be', phone: '+32 4 220 10 30', department: 'Logistique' },
      { name: 'Claire Fontaine', title: 'Responsable Qualité', email: 'c.fontaine@novachem.be', phone: '+32 4 220 10 40', department: 'Qualité' },
      { name: 'Kevin Brasseur', title: 'Responsable R&D', email: 'k.brasseur@novachem.be', phone: '+32 4 220 10 50', department: 'R&D' },
      { name: 'Nathalie Pirard', title: 'Resp. Finance & Admin', email: 'n.pirard@novachem.be', phone: '+32 4 220 10 60', department: 'Finance' },
      { name: 'Julien Collin', title: 'KAM – Automobile', email: 'j.collin@novachem.be', phone: '+32 4 220 10 11', department: 'Commercial' },
      { name: 'Amina Okafor', title: 'KAM – Agroalimentaire', email: 'a.okafor@novachem.be', phone: '+32 4 220 10 12', department: 'Commercial' },
      { name: 'Pierre Gilles', title: 'TC – Plasturgie', email: 'p.gilles@novachem.be', phone: '+32 4 220 10 13', department: 'Commercial' },
    ],
    orgChart: {
      ceo: { name: 'Sophie Martens', title: 'CEO' },
      departments: [
        {
          name: 'Direction Commerciale',
          head: 'Marc Dubois',
          headTitle: 'Directeur Commercial',
          members: [
            { name: 'Julien Collin', title: 'KAM Automobile' },
            { name: 'Amina Okafor', title: 'KAM Agroalimentaire' },
            { name: 'Pierre Gilles', title: 'TC Plasturgie' },
          ],
        },
        {
          name: 'Direction Achats',
          head: 'Isabelle Renard',
          headTitle: 'Directrice Achats',
          members: [{ name: 'Équipe Achats (4 pers.)', title: '' }],
        },
        {
          name: 'Logistique & Entrepôt',
          head: 'Thomas Lecomte',
          headTitle: 'Resp. Logistique',
          members: [
            { name: 'Équipe Entrepôt (12 pers.)', title: '' },
            { name: 'Transport (3 pers.)', title: '' },
          ],
        },
        {
          name: 'Qualité & Réglementaire',
          head: 'Claire Fontaine',
          headTitle: 'Resp. Qualité',
          members: [{ name: 'Laboratoire (5 pers.)', title: '' }],
        },
        {
          name: 'R&D & Formulation',
          head: 'Kevin Brasseur',
          headTitle: 'Resp. R&D',
          members: [{ name: 'Formulateurs (6 pers.)', title: '' }],
        },
        {
          name: 'Finance & Admin',
          head: 'Nathalie Pirard',
          headTitle: 'Resp. Finance',
          members: [{ name: 'Comptabilité (3 pers.)', title: '' }],
        },
      ],
    },
    suppliers: [
      { name: 'ChemBase GmbH', country: 'Allemagne', products: 'Solvants industriels, alcools', contact: 'Hans Richter', leadTime: '5–7 jours ouvrés' },
      { name: 'AsiaChem Trading', country: 'Chine', products: 'Polymères, résines époxy', contact: 'Li Wei', leadTime: '4–6 semaines' },
      { name: 'PolySource BV', country: 'Pays-Bas', products: 'Additifs plastiques, stabilisants', contact: 'Jan van der Berg', leadTime: '3–5 jours ouvrés' },
      { name: 'Industrichem SA', country: 'France', products: 'Acides, bases, pH-correcteurs', contact: 'Marie Dupont', leadTime: '2–4 jours ouvrés' },
      { name: 'SurfactanTech S.p.A.', country: 'Italie', products: 'Tensioactifs, émulsifiants', contact: 'Lorenzo Ricci', leadTime: '7–10 jours ouvrés' },
    ],
    topClients: [
      { name: 'AutoParts Belgium NV', sector: 'Automobile', since: 2008, kam: 'Julien Collin', annualVolume: '€ 4,2M', notes: 'Client stratégique. Contrat-cadre annuel. Très sensible aux délais de livraison.' },
      { name: 'FoodPack SA', sector: 'Agroalimentaire', since: 2015, kam: 'Amina Okafor', annualVolume: '€ 1,8M', notes: 'Exige certification alimentaire sur chaque lot. Audits réguliers.' },
      { name: 'PlastiForm SPRL', sector: 'Plasturgie', since: 2012, kam: 'Pierre Gilles', annualVolume: '€ 1,1M', notes: 'Fort potentiel de croissance. Demandes fréquentes de nouvelles formulations.' },
      { name: 'MetalCoat Industries', sector: 'Traitement de surface', since: 2003, kam: 'Marc Dubois', annualVolume: '€ 3,1M', notes: 'Relation historique. Très exigeant sur la qualité et la conformité REACH.' },
    ],
  },
  emails: [
    {
      id: 'e1',
      from: 'Marc Dubois',
      fromEmail: 'm.dubois@novachem.be',
      subject: 'Briefing – Votre prise de poste ce matin',
      body: `Bonjour,

Bienvenue dans l'équipe ! Je suis Marc Dubois, Directeur Commercial.

Je suis malheureusement retenu en réunion toute la matinée et je ne pourrai pas vous accueillir comme prévu.

Je vous demande de gérer en autonomie les messages qui vous parviendront. Vous trouverez tout le contexte sur notre entreprise dans l'intranet.

En cas de question urgente, essayez de contacter directement les personnes concernées selon l'organigramme.

Bonne journée et encore bienvenue !

Marc Dubois
Directeur Commercial – NovaChem Solutions`,
      deliverAtMinute: 0,
      priority: 'normal',
      category: 'internal',
    },
    {
      id: 'e2',
      from: 'Didier Claes',
      fromEmail: 'd.claes@autoparts-belgium.be',
      subject: 'URGENT – Livraison BC-4412 toujours pas reçue !!',
      body: `Bonjour,

Je me permets de vous contacter en urgence car notre commande BC-4412 (solvant dégraissant NC-S220, 2 000 litres) aurait dû être livrée hier matin.

Notre ligne de production est à l'arrêt depuis ce matin 6h00 faute de matière première. Chaque heure d'arrêt nous coûte environ 12 000 €.

J'exige une réponse immédiate avec :
1. L'explication du retard
2. La date et heure exacte de livraison
3. Les mesures compensatoires envisagées

Si nous n'avons pas de réponse satisfaisante avant 11h, nous serons contraints de contacter notre direction et d'envisager une résiliation du contrat-cadre.

Didier Claes
Responsable Achats – AutoParts Belgium NV
Tél. : +32 11 345 67 89`,
      deliverAtMinute: 5,
      priority: 'urgent',
      category: 'client',
    },
    {
      id: 'e3',
      from: 'Hans Richter',
      fromEmail: 'h.richter@chembase.de',
      subject: 'Révision tarifaire – Solvants industriels – Effet 01/02',
      body: `Sehr geehrte Damen und Herren,
Cher(e) client(e),

Nous vous informons que suite à la hausse des coûts énergétiques et des matières de base, nous sommes dans l'obligation de revoir nos tarifs sur la gamme solvants industriels.

À partir du 1er février prochain, une majoration de 8,5 % sera appliquée sur l'ensemble de notre catalogue solvants (références NC-S100 à NC-S500).

Nous vous proposons la possibilité de passer une commande ferme aux anciens tarifs jusqu'au 20 janvier, dans la limite des stocks disponibles.

N'hésitez pas à nous contacter pour tout renseignement.

Mit freundlichen Grüßen / Cordialement,

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
      subject: 'Non-conformité lot L-2024-891 – Décision urgente requise',
      body: `Bonjour,

Suite aux analyses de réception du lot L-2024-891 (résine époxy EP-300, 500 kg, fournisseur AsiaChem Trading), notre laboratoire a constaté un écart sur la viscosité mesurée : 4 200 mPa·s au lieu des 3 800 mPa·s spécifiés (tolérance ±5 %).

Ce lot est bloqué en quarantaine. Trois options s'offrent à nous :

Option A – Retour au fournisseur : délai de remplacement estimé à 6 semaines. Impact sur 2 commandes clients en attente.
Option B – Dérogation client : soumettre le lot à PlastiForm SPRL pour accord explicite. Risque de refus.
Option C – Utilisation en formulation interne : notre équipe R&D estime qu'il peut être intégré dans un mélange secondaire, sans impact qualité.

J'ai besoin de votre décision avant 14h pour éviter de bloquer le planning de production.

Merci,
Claire Fontaine
Responsable Qualité – NovaChem Solutions`,
      deliverAtMinute: 30,
      priority: 'urgent',
      category: 'internal',
    },
    {
      id: 'e5',
      from: 'Fatima El Amrani',
      fromEmail: 'f.elamrani@foodpack.be',
      subject: 'Demande de référencement – Nouveau conservateur alimentaire',
      body: `Bonjour,

Dans le cadre de notre programme de reformulation 2024, nous recherchons un fournisseur capable de nous proposer un conservateur alimentaire de type sorbate de potassium en grade alimentaire (E202), conditionné en sacs de 25 kg.

Nos besoins annuels estimés sont de l'ordre de 8 à 10 tonnes. Nous avons besoin que le produit soit accompagné de :
- Fiche technique complète
- Fiche de données sécurité (SDS)
- Certificat d'analyse type (COA)
- Attestation de conformité aux règlements CE 1333/2008 et 231/2012

Pouvez-vous me confirmer si NovaChem est en mesure de répondre à ce besoin, et dans quel délai vous pourriez nous faire une proposition commerciale ?

Nous avons également besoin d'un échantillon de 2 kg pour validation interne.

Dans l'attente de votre retour,

Fatima El Amrani
Responsable R&D – FoodPack SA
f.elamrani@foodpack.be | +32 2 654 32 10`,
      deliverAtMinute: 45,
      priority: 'normal',
      category: 'client',
    },
    {
      id: 'e6',
      from: 'Thomas Lecomte',
      fromEmail: 't.lecomte@novachem.be',
      subject: 'Incident transport – Camion en panne A602 – 3 livraisons bloquées',
      body: `Bonjour,

Notre chauffeur Renaud vient de me signaler une panne moteur sur l'A602 direction Namur. Le véhicule est immobilisé avec 3 livraisons à bord :

1. MetalCoat Industries – Lot acide sulfurique dilué 20 L × 40 (commande urgente, promis pour 14h)
2. PlastiForm SPRL – Stabilisants UV, 200 kg (délai standard, prévu demain OK)
3. Garage Peugeot Seraing – Lubrifiant NC-L45, 50 L (client particulier, peut attendre)

Le dépanneur est en route mais estime l'immobilisation à 3–4 heures minimum. Les marchandises classifiées ADR (acide sulfurique) ne peuvent pas être transbordées sans véhicule habilité ADR, que nous n'avons pas disponible aujourd'hui.

Besoin de votre décision sur la priorité de gestion :
- Louer un véhicule ADR externe (coût ~€ 450, délai 2h) ?
- Appeler MetalCoat pour négocier un report à demain matin ?
- Autre solution ?

Thomas Lecomte
Responsable Logistique`,
      deliverAtMinute: 60,
      priority: 'urgent',
      category: 'internal',
    },
    {
      id: 'e7',
      from: 'Nathalie Pirard',
      fromEmail: 'n.pirard@novachem.be',
      subject: 'Facture impayée – AutoParts Belgium – 62 jours de retard',
      body: `Bonjour,

Je me permets de vous alerter sur la situation de paiement du client AutoParts Belgium NV.

La facture NC-2024-3847 d'un montant de € 28 450,00 (échéance 30 jours, soit due le 18 novembre) est toujours impayée à ce jour, soit 62 jours de retard.

Nous avons envoyé 2 rappels automatiques les 25 novembre et 5 décembre, sans réponse.

Or, une nouvelle commande de leur part est en cours de traitement (commande BC-4412, valeur € 11 200).

Ma recommandation : bloquer l'expédition de BC-4412 jusqu'au règlement ou engagement ferme de paiement.

Cependant, je sais que c'est un client stratégique suivi par Marc Dubois. Avez-vous la possibilité de trancher, ou faut-il escalader à Marc ou à Sophie Martens ?

Nathalie Pirard
Resp. Finance & Administration`,
      deliverAtMinute: 75,
      priority: 'high',
      category: 'internal',
    },
  ],
}
