import type { BusinessCaseContent } from '../../types'

export const novachemEn: BusinessCaseContent = {
  company: {
    name: 'NovaChem Solutions',
    tagline: 'Chemistry at the service of industry',
    founded: 1987,
    employees: 340,
    revenue: '€ 82 million (2023)',
    headquarters: 'Liège, Belgium',
    description: `NovaChem Solutions is a distributor and formulator of industrial chemical products, established in Belgium since 1987. The company operates in three main segments: distribution of chemical raw materials, custom product formulation, and technical consulting for industrial clients.

NovaChem holds ISO 9001, ISO 14001 certifications and is REACH-compliant. It serves over 400 active clients in the automotive, food & beverage, surface treatment and plastics processing sectors.`,
    mission: `To provide our industrial clients with reliable, innovative and sustainable chemical solutions, combining technical expertise with an impeccable proximity service.`,
    values: [
      { title: 'Reliability', description: 'We honour our commitments to clients and partners.' },
      { title: 'Innovation', description: 'We invest in R&D to deliver cutting-edge formulations.' },
      { title: 'Sustainability', description: 'Our processes comply with the strictest environmental standards.' },
      { title: 'Proximity', description: 'Every client has a dedicated, responsive contact person.' },
    ],
    segments: [
      { name: 'Distribution', share: '55 %', description: 'Resale of chemical raw materials from European and Asian suppliers. Permanent stock of 1,200 references.' },
      { name: 'Formulation', share: '30 %', description: 'Development and production of custom blends per client specifications. Formulation workshop in Liège (2,000 m²).' },
      { name: 'Consulting & Services', share: '15 %', description: 'Process audits, on-site technical assistance, client team training, REACH/SDS regulatory management.' },
    ],
    keyFigures: [
      { label: 'Active clients', value: '400+' },
      { label: 'Stock references', value: '1,200' },
      { label: 'Supplier countries', value: '18' },
      { label: 'Employees', value: '340' },
      { label: 'Revenue', value: '€ 82M' },
      { label: 'Years in business', value: '37' },
    ],
    processes: [
      {
        title: 'Client Order Management',
        steps: [
          'Receipt of request (email / portal / phone)',
          'Check stock availability or supplier lead time',
          'Order confirmation with internal purchase order (IPO)',
          'Warehouse preparation or formulation trigger',
          'Shipment + delivery note (DN) and invoice',
          'Client satisfaction follow-up D+7',
        ],
        responsible: 'Sales + Logistics',
        delay: '24–48h for available stock / 5–10 days for supplier order',
      },
      {
        title: 'Supplier Qualification Process',
        steps: [
          'Needs identification and potential supplier sourcing',
          'Request for documentation (certificates, SDS, COA)',
          'Sample order for Q&A testing',
          'Technical validation by the laboratory',
          'Commercial negotiation and framework contract signing',
          'Registration in ERP',
        ],
        responsible: 'Purchasing + Quality',
        delay: '4 to 8 weeks depending on complexity',
      },
      {
        title: 'Client Complaint Management',
        steps: [
          'Complaint receipt and registration (CRM)',
          'Acknowledgement within 4 business hours',
          'Root cause analysis (non-conformity, delivery, billing)',
          'Corrective action plan within 48h',
          'Credit note / replacement depending on issue type',
          'Closure and 8D report for serious complaints',
        ],
        responsible: 'Quality + Sales',
        delay: 'Acknowledgement: 4h / Resolution: 2–5 days',
      },
      {
        title: 'Purchasing and Replenishment Management',
        steps: [
          'Automatic stock threshold analysis (ERP)',
          'Purchase order proposal generation',
          'Purchasing manager approval (> € 10,000: CFO approval)',
          'Supplier purchase order issuance',
          'Goods receipt + incoming quality control',
          'Stock entry and ERP update',
        ],
        responsible: 'Purchasing + Warehouse',
        delay: 'Variable per supplier (2 days to 6 weeks)',
      },
    ],
    contacts: [
      { name: 'Sophie Martens', title: 'CEO', email: 's.martens@novachem.be', phone: '+32 4 220 10 01', department: 'Management' },
      { name: 'Marc Dubois', title: 'Sales Director', email: 'm.dubois@novachem.be', phone: '+32 4 220 10 10', department: 'Sales' },
      { name: 'Isabelle Renard', title: 'Purchasing Director', email: 'i.renard@novachem.be', phone: '+32 4 220 10 20', department: 'Purchasing' },
      { name: 'Thomas Lecomte', title: 'Logistics Manager', email: 't.lecomte@novachem.be', phone: '+32 4 220 10 30', department: 'Logistics' },
      { name: 'Claire Fontaine', title: 'Quality Manager', email: 'c.fontaine@novachem.be', phone: '+32 4 220 10 40', department: 'Quality' },
      { name: 'Kevin Brasseur', title: 'R&D Manager', email: 'k.brasseur@novachem.be', phone: '+32 4 220 10 50', department: 'R&D' },
      { name: 'Nathalie Pirard', title: 'Finance Manager', email: 'n.pirard@novachem.be', phone: '+32 4 220 10 60', department: 'Finance' },
      { name: 'Julien Collin', title: 'KAM – Automotive', email: 'j.collin@novachem.be', phone: '+32 4 220 10 11', department: 'Sales' },
      { name: 'Amina Okafor', title: 'KAM – Food & Beverage', email: 'a.okafor@novachem.be', phone: '+32 4 220 10 12', department: 'Sales' },
      { name: 'Pierre Gilles', title: 'Technical Sales – Plastics', email: 'p.gilles@novachem.be', phone: '+32 4 220 10 13', department: 'Sales' },
    ],
    orgChart: {
      ceo: { name: 'Sophie Martens', title: 'CEO' },
      departments: [
        {
          name: 'Sales Division',
          head: 'Marc Dubois',
          headTitle: 'Sales Director',
          members: [
            { name: 'Julien Collin', title: 'KAM Automotive' },
            { name: 'Amina Okafor', title: 'KAM Food & Beverage' },
            { name: 'Pierre Gilles', title: 'Technical Sales Plastics' },
          ],
        },
        {
          name: 'Purchasing Division',
          head: 'Isabelle Renard',
          headTitle: 'Purchasing Director',
          members: [{ name: 'Purchasing team (4 pers.)', title: '' }],
        },
        {
          name: 'Logistics & Warehouse',
          head: 'Thomas Lecomte',
          headTitle: 'Logistics Manager',
          members: [
            { name: 'Warehouse team (12 pers.)', title: '' },
            { name: 'Transport (3 pers.)', title: '' },
          ],
        },
        {
          name: 'Quality & Regulatory',
          head: 'Claire Fontaine',
          headTitle: 'Quality Manager',
          members: [{ name: 'Laboratory (5 pers.)', title: '' }],
        },
        {
          name: 'R&D & Formulation',
          head: 'Kevin Brasseur',
          headTitle: 'R&D Manager',
          members: [{ name: 'Formulators (6 pers.)', title: '' }],
        },
        {
          name: 'Finance & Admin',
          head: 'Nathalie Pirard',
          headTitle: 'Finance Manager',
          members: [{ name: 'Accounting (3 pers.)', title: '' }],
        },
      ],
    },
    suppliers: [
      { name: 'ChemBase GmbH', country: 'Germany', products: 'Industrial solvents, alcohols', contact: 'Hans Richter', leadTime: '5–7 business days' },
      { name: 'AsiaChem Trading', country: 'China', products: 'Polymers, epoxy resins', contact: 'Li Wei', leadTime: '4–6 weeks' },
      { name: 'PolySource BV', country: 'Netherlands', products: 'Plastic additives, stabilisers', contact: 'Jan van der Berg', leadTime: '3–5 business days' },
      { name: 'Industrichem SA', country: 'France', products: 'Acids, bases, pH correctors', contact: 'Marie Dupont', leadTime: '2–4 business days' },
      { name: 'SurfactanTech S.p.A.', country: 'Italy', products: 'Surfactants, emulsifiers', contact: 'Lorenzo Ricci', leadTime: '7–10 business days' },
    ],
    topClients: [
      { name: 'AutoParts Belgium NV', sector: 'Automotive', since: 2008, kam: 'Julien Collin', annualVolume: '€ 4.2M', notes: 'Strategic client. Annual framework contract. Very sensitive to delivery timelines.' },
      { name: 'FoodPack SA', sector: 'Food & Beverage', since: 2015, kam: 'Amina Okafor', annualVolume: '€ 1.8M', notes: 'Requires food-grade certification per batch. Regular audits.' },
      { name: 'PlastiForm SPRL', sector: 'Plastics Processing', since: 2012, kam: 'Pierre Gilles', annualVolume: '€ 1.1M', notes: 'High growth potential. Frequently requests new formulations.' },
      { name: 'MetalCoat Industries', sector: 'Surface Treatment', since: 2003, kam: 'Marc Dubois', annualVolume: '€ 3.1M', notes: 'Long-standing relationship. Very demanding on quality and REACH compliance.' },
    ],
  },
  emails: [
    {
      id: 'e1',
      from: 'Marc Dubois',
      fromEmail: 'm.dubois@novachem.be',
      subject: 'Briefing – Your first day starts now',
      body: `Hello,

Welcome to the team! I'm Marc Dubois, Sales Director.

Unfortunately I'm in meetings all morning and won't be able to greet you as planned.

I'm asking you to handle the messages that come in independently. You'll find all the company context on the intranet.

For urgent questions, please contact the relevant people directly using the org chart.

Good luck and welcome again!

Marc Dubois
Sales Director – NovaChem Solutions`,
      deliverAtMinute: 0,
      priority: 'normal',
      category: 'internal',
    },
    {
      id: 'e2',
      from: 'Didier Claes',
      fromEmail: 'd.claes@autoparts-belgium.be',
      subject: 'URGENT – Delivery BC-4412 still not received!!',
      body: `Good morning,

I am contacting you urgently because our order BC-4412 (degreasing solvent NC-S220, 2,000 litres) should have been delivered yesterday morning.

Our production line has been at a standstill since 6:00 AM this morning due to lack of raw material. Every hour of downtime costs us approximately € 12,000.

I demand an immediate response with:
1. Explanation for the delay
2. Exact delivery date and time
3. Planned compensatory measures

If we do not receive a satisfactory response before 11:00 AM, we will be forced to contact our management and consider terminating the framework contract.

Didier Claes
Purchasing Manager – AutoParts Belgium NV
Tel.: +32 11 345 67 89`,
      deliverAtMinute: 5,
      priority: 'urgent',
      category: 'client',
    },
    {
      id: 'e3',
      from: 'Hans Richter',
      fromEmail: 'h.richter@chembase.de',
      subject: 'Price revision – Industrial solvents – Effective 01/02',
      body: `Dear customer,

We inform you that due to rising energy costs and raw material prices, we are obliged to revise our pricing for the industrial solvents range.

From 1 February, an 8.5% surcharge will be applied to our entire solvents catalogue (references NC-S100 to NC-S500).

We offer you the opportunity to place firm orders at current prices until 20 January, subject to stock availability.

Please do not hesitate to contact us for any further information.

Mit freundlichen Grüßen / Kind regards,

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
      subject: 'Non-conformity batch L-2024-891 – Urgent decision required',
      body: `Hello,

Following incoming inspection of batch L-2024-891 (epoxy resin EP-300, 500 kg, supplier AsiaChem Trading), our laboratory has found a viscosity deviation: 4,200 mPa·s vs. the specified 3,800 mPa·s (tolerance ±5%).

This batch is on quarantine hold. Three options are available:

Option A – Return to supplier: estimated replacement time 6 weeks. Impact on 2 pending client orders.
Option B – Client waiver: submit the batch to PlastiForm SPRL for explicit acceptance. Risk of rejection.
Option C – Internal formulation use: our R&D team estimates it can be incorporated into a secondary blend without quality impact.

I need your decision before 2:00 PM to avoid blocking the production schedule.

Thank you,
Claire Fontaine
Quality Manager – NovaChem Solutions`,
      deliverAtMinute: 30,
      priority: 'urgent',
      category: 'internal',
    },
    {
      id: 'e5',
      from: 'Fatima El Amrani',
      fromEmail: 'f.elamrani@foodpack.be',
      subject: 'New product enquiry – Food-grade preservative',
      body: `Good afternoon,

As part of our 2024 reformulation programme, we are looking for a supplier able to provide food-grade potassium sorbate (E202), packaged in 25 kg bags.

Our estimated annual requirement is 8 to 10 tonnes. The product must be accompanied by:
- Complete technical datasheet
- Safety Data Sheet (SDS)
- Typical Certificate of Analysis (COA)
- Compliance declaration with EU regulations 1333/2008 and 231/2012

Could you confirm whether NovaChem is able to meet this need, and within what timeframe you could provide a commercial proposal?

We also need a 2 kg sample for internal validation.

Looking forward to your reply,

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
      subject: 'Transport incident – Truck breakdown A602 – 3 deliveries blocked',
      body: `Hello,

Our driver Renaud has just reported an engine breakdown on the A602 towards Namur. The vehicle is immobilised with 3 deliveries on board:

1. MetalCoat Industries – Diluted sulphuric acid batch 20L × 40 (urgent order, promised for 2:00 PM)
2. PlastiForm SPRL – UV stabilisers, 200 kg (standard lead time, scheduled tomorrow, OK)
3. Garage Peugeot Seraing – Lubricant NC-L45, 50 L (private client, can wait)

The breakdown service is on its way but estimates immobilisation at a minimum of 3–4 hours. ADR-classified goods (sulphuric acid) cannot be transhipped without an ADR-certified vehicle, which we do not have available today.

Decision needed on priority:
- Hire an external ADR vehicle (cost ~€ 450, lead time 2h)?
- Call MetalCoat to negotiate postponement to tomorrow morning?
- Other solution?

Thomas Lecomte
Logistics Manager`,
      deliverAtMinute: 60,
      priority: 'urgent',
      category: 'internal',
    },
    {
      id: 'e7',
      from: 'Nathalie Pirard',
      fromEmail: 'n.pirard@novachem.be',
      subject: 'Overdue invoice – AutoParts Belgium – 62 days late',
      body: `Hello,

I would like to flag the payment situation with client AutoParts Belgium NV.

Invoice NC-2024-3847 for € 28,450.00 (30-day payment term, due 18 November) remains unpaid to date — 62 days overdue.

We sent 2 automated reminders on 25 November and 5 December, with no response.

A new order from them is currently being processed (order BC-4412, value € 11,200).

My recommendation: block shipment of BC-4412 until the invoice is settled or a firm payment commitment is received.

However, I know this is a strategic client managed by Marc Dubois. Can you make a decision, or should we escalate to Marc or Sophie Martens?

Nathalie Pirard
Finance Manager`,
      deliverAtMinute: 75,
      priority: 'high',
      category: 'internal',
    },
  ],
}
