export const company = {
  name: 'NovaChem Solutions',
  tagline: 'La chimie au service de l\'industrie',
  founded: 1987,
  employees: 340,
  revenue: '€ 82 millions (2023)',
  headquarters: 'Liège, Belgique',
  description: `NovaChem Solutions est un distributeur et formulateur de produits chimiques industriels,
implanté en Belgique depuis 1987. La société opère dans trois segments principaux :
la distribution de matières premières chimiques, la formulation de produits sur mesure,
et le conseil technique aux industriels.

NovaChem est certifiée ISO 9001, ISO 14001 et REACH-compliant. Elle dessert plus de
400 clients actifs dans les secteurs de l'automobile, de l'agroalimentaire, du traitement
de surface et de la plasturgie.`,

  mission: `Fournir à nos clients industriels des solutions chimiques fiables, innovantes
et durables, en combinant l'expertise technique avec un service de proximité irréprochable.`,

  values: [
    { title: 'Fiabilité', description: 'Nous tenons nos engagements envers nos clients et partenaires.' },
    { title: 'Innovation', description: 'Nous investissons en R&D pour proposer des formulations à la pointe.' },
    { title: 'Durabilité', description: 'Nos procédés respectent les normes environnementales les plus strictes.' },
    { title: 'Proximité', description: 'Chaque client bénéficie d\'un interlocuteur dédié et réactif.' },
  ],

  segments: [
    {
      name: 'Distribution',
      share: '55%',
      description: 'Revente de matières premières chimiques provenant de fournisseurs européens et asiatiques. Stock permanent de 1 200 références.',
    },
    {
      name: 'Formulation',
      share: '30%',
      description: 'Développement et production de mélanges sur mesure selon cahier des charges client. Atelier de formulation à Liège (2 000 m²).',
    },
    {
      name: 'Conseil & Services',
      share: '15%',
      description: 'Audits procédés, assistance technique on-site, formation des équipes client, gestion réglementaire REACH/SDS.',
    },
  ],

  keyFigures: [
    { label: 'Clients actifs', value: '400+' },
    { label: 'Références en stock', value: '1 200' },
    { label: 'Pays fournisseurs', value: '18' },
    { label: 'Collaborateurs', value: '340' },
    { label: 'Chiffre d\'affaires', value: '€82M' },
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
        'Validation responsable achats (>€10 000 : validation DAF)',
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
    { name: 'Kevin Brasseur', title: 'Responsable R&D / Formulation', email: 'k.brasseur@novachem.be', phone: '+32 4 220 10 50', department: 'R&D' },
    { name: 'Nathalie Pirard', title: 'Responsable Comptabilité & Finance', email: 'n.pirard@novachem.be', phone: '+32 4 220 10 60', department: 'Finance' },
    { name: 'Julien Collin', title: 'Key Account Manager – Automobile', email: 'j.collin@novachem.be', phone: '+32 4 220 10 11', department: 'Commercial' },
    { name: 'Amina Okafor', title: 'Key Account Manager – Agroalimentaire', email: 'a.okafor@novachem.be', phone: '+32 4 220 10 12', department: 'Commercial' },
    { name: 'Pierre Gilles', title: 'Technico-commercial – Plasturgie', email: 'p.gilles@novachem.be', phone: '+32 4 220 10 13', department: 'Commercial' },
    { name: 'Sarah Maes', title: 'Assistante de direction', email: 's.maes@novachem.be', phone: '+32 4 220 10 02', department: 'Direction' },
  ],

  orgChart: {
    ceo: {
      name: 'Sophie Martens',
      title: 'CEO',
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
          members: [
            { name: 'Équipe Achats (4 pers.)', title: '' },
          ],
        },
        {
          name: 'Logistique & Entrepôt',
          head: 'Thomas Lecomte',
          headTitle: 'Resp. Logistique',
          members: [
            { name: 'Équipe Entrepôt (12 pers.)', title: '' },
            { name: 'Équipe Transport (3 pers.)', title: '' },
          ],
        },
        {
          name: 'Qualité & Réglementaire',
          head: 'Claire Fontaine',
          headTitle: 'Resp. Qualité',
          members: [
            { name: 'Laboratoire (5 pers.)', title: '' },
          ],
        },
        {
          name: 'R&D & Formulation',
          head: 'Kevin Brasseur',
          headTitle: 'Resp. R&D',
          members: [
            { name: 'Formulateurs (6 pers.)', title: '' },
          ],
        },
        {
          name: 'Finance & Admin',
          head: 'Nathalie Pirard',
          headTitle: 'Resp. Finance',
          members: [
            { name: 'Comptabilité (3 pers.)', title: '' },
          ],
        },
      ],
    },
  },

  suppliers: [
    { name: 'ChemBase GmbH', country: 'Allemagne', products: 'Solvants industriels, alcools', contact: 'Hans Richter', leadTime: '5–7 jours ouvrés' },
    { name: 'AsiaChem Trading', country: 'Chine', products: 'Polymères, résines époxy', contact: 'Li Wei', leadTime: '4–6 semaines' },
    { name: 'PolySource BV', country: 'Pays-Bas', products: 'Additifs plastiques, stabilisants', contact: 'Jan van der Berg', leadTime: '3–5 jours ouvrés' },
    { name: 'Industrichem SA', country: 'France', products: 'Acides, bases, pH-correcteurs', contact: 'Marie Dupont', leadTime: '2–4 jours ouvrés' },
    { name: 'SurfactanTech S.p.A.', country: 'Italie', products: 'Tensioactifs, émulsifiants', contact: 'Lorenzo Ricci', leadTime: '7–10 jours ouvrés' },
  ],

  topClients: [
    { name: 'AutoParts Belgium NV', sector: 'Automobile', since: 2008, kam: 'Julien Collin', annualVolume: '€4.2M', notes: 'Client stratégique. Contrat-cadre annuel. Sensible aux délais.' },
    { name: 'FoodPack SA', sector: 'Agroalimentaire', since: 2015, kam: 'Amina Okafor', annualVolume: '€1.8M', notes: 'Exige certification alimentaire sur chaque lot. Audits réguliers.' },
    { name: 'PlastiForm SPRL', sector: 'Plasturgie', since: 2012, kam: 'Pierre Gilles', annualVolume: '€1.1M', notes: 'Fort potentiel de croissance. Demande fréquente de nouvelles formulations.' },
    { name: 'MetalCoat Industries', sector: 'Traitement de surface', since: 2003, kam: 'Marc Dubois', annualVolume: '€3.1M', notes: 'Relation historique. Exigeant sur qualité et conformité REACH.' },
  ],
}

export type Contact = typeof company.contacts[number]
export type Supplier = typeof company.suppliers[number]
