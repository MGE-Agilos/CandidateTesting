import type { BusinessCaseContent } from '../../types'

// English version — content translated from the original Dutch documents
export const bmuEn: BusinessCaseContent = {
  company: {
    name: 'BMU – Brabantse Melk Unie',
    tagline: 'Quality dairy products from the pasture',
    founded: 1871,
    employees: 24000,
    revenue: '€ 11.5 billion (2018)',
    headquarters: 'Rotterdam, Netherlands',
    description: `In 1871, a group of Dutch farmers joined forces to establish a local dairy. In 1928, one of the most modern factories in Europe was built.

After World War II, mergers led to "De Zuid-Nederlandse Melk Unie". In 1989, a merger with "Verenigde Melkboeren" brought turnover to €1.2 billion. Subsequent acquisitions included Vlaamse Melkboer NV (Aalter, 1991), De Limburgse Melkboeren (Bree, 1997) and Inovatech Argentina (Rosario, 2005).

In 2011, the name Brabantse Melk Unie (BMU) was adopted for Belgium and the Netherlands. In other countries, the Dutch Quality Milkproducts (DQM) brand is used.

BMU currently employs nearly 24,000 people and processes over 11 billion kg of milk per year. More than 75% of revenue is generated outside Belgium and the Netherlands.`,
    mission: `To supply quality dairy products to consumers worldwide, with respect for farmers, animals, the environment and our employees.`,
    values: [
      { title: 'Sustainability', description: 'Only pasture milk, sustainable packaging (>85% renewable materials), fair prices for farmers.' },
      { title: 'Quality', description: 'Quality is essential in food production. Correct sample-taking and timely delivery to the lab are critical.' },
      { title: 'Safety', description: 'Workplace safety always takes priority. Management is deeply committed to this following serious past accidents.' },
      { title: 'Diversity', description: 'BMU values diversity of thought and diverse team composition. HR actively promotes an inclusive working environment.' },
      { title: 'People as capital', description: 'Employees are offered sufficient task variety and encouraged to take on tasks from other departments.' },
    ],
    segments: [
      { name: 'BMU Consumer Dairy', share: '~45 %', description: 'Wide range of dairy products for consumers (milk, yoghurt, desserts...). Office in Antwerp. Sites: Aalter, Bree, Frankfurt, Lansing, Chiang Mai, Rosario, Leeuwarden West.' },
      { name: 'BMU Dairy Essentials', share: '~35 %', description: 'Cheese, butter and milk powder. Office in Antwerp. Same sites as Consumer Dairy.' },
      { name: 'BMU Specialised Nutrition', share: '~10 %', description: 'High-nutritional-value dairy for specific consumer groups. Office in Rotterdam. Sites: Berlin, Leeuwarden East.' },
      { name: 'BMU Ingredients', share: '~10 %', description: 'Dairy-derived ingredients for the food, animal feed and pharmaceutical industries. Office in Berlin.' },
    ],
    keyFigures: [
      { label: 'Founded', value: '1871' },
      { label: 'Employees', value: '24,000' },
      { label: 'Milk processed', value: '11 bn kg' },
      { label: 'Revenue (2018)', value: '€11.5 bn' },
      { label: 'Sites', value: '9 countries' },
      { label: 'Revenue outside BE/NL', value: '> 75 %' },
    ],
    processes: [
      {
        title: 'UHT Processing',
        steps: [
          'Receipt and storage of raw milk (quality check on arrival)',
          'Pre-heating and homogenisation',
          'UHT sterilisation: 2–5 seconds at 135–150°C (all micro-organisms eliminated)',
          'Aseptic filling into carton packaging',
          'Quality control and sample-taking (timely delivery to lab)',
          'Palletising and cold storage',
          'Delivery to clients',
        ],
        responsible: 'Team Leader + Team A/B/C members',
        delay: 'Continuous production process – 3 shifts (6am–2pm / 2pm–10pm / 10pm–6am)',
      },
      {
        title: 'Sample-taking and Quality Control',
        steps: [
          'Samples taken according to strict protocols (timing, quantity, method)',
          'Correct labelling and packaging of samples',
          'Timely delivery to the laboratory (Lab Manager: Jana Segers)',
          'Analysis by lab and reporting',
          'In case of deviations: immediate notification to team leader and quality department',
        ],
        responsible: 'Team members (under team leader supervision) + Lab Manager',
        delay: 'Samples must be delivered on time — no delays tolerated',
      },
      {
        title: 'Machine Maintenance During Breakdowns',
        steps: [
          'On breakdown: stop the production line and secure the situation',
          'IMMEDIATELY notify the maintenance manager (Pascale Vandewege)',
          'Contact De Backers firm — do NOT attempt to repair yourself',
          'De Backers sends a two-person team on site',
          'Team leader follows up and communicates to team and management',
          'After repair: verify restart and document',
        ],
        responsible: 'Team Leader + Pascale Vandewege + De Backers firm',
        delay: 'De Backers always has two teams of two people on standby',
      },
      {
        title: 'Shift Handover',
        steps: [
          'Incoming team arrives 10 minutes before shift start',
          'Written and verbal briefing by the outgoing team leader',
          'Handover: production status, ongoing issues, action points',
          'Leave the production area clean (remove waste, clean machines)',
          'Pass on any specific information to the next team',
        ],
        responsible: 'Team Leaders (Karen Stevens, Julan Chen, + new TL)',
        delay: 'Handover takes 10–15 minutes per shift change',
      },
    ],
    contacts: [
      { name: 'Dominique De Vrieze', title: 'Production Director BMU Belgium', email: 'd.devrieze@bmu.be', phone: '+32 9 300 10 01', department: 'Belgium Management' },
      { name: 'Sasha Davids', title: 'Plant Manager Aalter', email: 's.davids@bmu.be', phone: '+32 9 300 20 01', department: 'Aalter Management' },
      { name: 'Chris De Graeve', title: 'Plant Manager Bree', email: 'c.degraeve@bmu.be', phone: '+32 11 400 20 01', department: 'Bree Management' },
      { name: 'Linda Van Maldegem', title: 'HR Business Partner Aalter', email: 'l.vanmaldegem@bmu.be', phone: '+32 9 300 30 01', department: 'HR' },
      { name: 'Jana Segers', title: 'Lab Manager Aalter', email: 'j.segers@bmu.be', phone: '+32 9 300 40 01', department: 'Laboratory' },
      { name: 'Pascale Vandewege', title: 'Maintenance Manager Aalter & Bree', email: 'p.vandewege@bmu.be', phone: '+32 9 300 50 01', department: 'Maintenance' },
      { name: 'Karen Stevens', title: 'UHT Team Leader – Team B', email: 'k.stevens@bmu.be', phone: '+32 9 300 60 01', department: 'UHT' },
      { name: 'Julan Chen', title: 'UHT Team Leader – Team C', email: 'j.chen@bmu.be', phone: '+32 9 300 60 02', department: 'UHT' },
      { name: 'Peter Nagels', title: 'Former UHT Team Leader – Team A', email: 'p.nagels@bmu.be', phone: '+32 9 300 60 00', department: 'UHT' },
      { name: 'Sofie Delens', title: 'Cheese Team Leader – Team A', email: 's.delens@bmu.be', phone: '+32 9 300 61 01', department: 'Cheese' },
      { name: 'Gary Philips', title: 'Sales & Marketing Director – Consumer Dairy', email: 'g.philips@bmu-consumerdairy.com', phone: '+32 3 700 10 01', department: 'Consumer Dairy' },
    ],
    orgChart: {
      ceo: { name: 'Sasha Davids', title: 'Plant Manager Aalter' },
      departments: [
        {
          name: 'UHT Department',
          head: '[New Team Leader – You]',
          headTitle: 'Team Leader Team A',
          members: [
            { name: 'Karen Stevens', title: 'Team Leader Team B' },
            { name: 'Julan Chen', title: 'Team Leader Team C' },
            { name: 'Team A: 10 members', title: '(see team overview)' },
          ],
        },
        {
          name: 'Cheese Department',
          head: 'Sofie Delens',
          headTitle: 'Team Leader Team A',
          members: [
            { name: 'Nancy Degryse', title: 'Team Leader Team B' },
            { name: 'Danny Stevens', title: 'Team Leader Team C' },
          ],
        },
        {
          name: 'Milk Powder Department',
          head: 'Louise Taghon',
          headTitle: 'Team Leader Team A',
          members: [
            { name: 'Noel De Lange', title: 'Team Leader Team B' },
            { name: 'Karel Voet', title: 'Team Leader Team C' },
          ],
        },
        {
          name: 'Butter Department',
          head: 'Angie Roberts',
          headTitle: 'Team Leader Team A',
          members: [
            { name: 'Stijn Degraeve', title: 'Team Leader Team B' },
            { name: 'Nina Dekorte', title: 'Team Leader Team C' },
          ],
        },
        {
          name: 'HR & Support',
          head: 'Linda Van Maldegem',
          headTitle: 'HR Business Partner',
          members: [
            { name: 'Jana Segers', title: 'Lab Manager' },
            { name: 'Pascale Vandewege', title: 'Maintenance Manager' },
          ],
        },
      ],
    },
    suppliers: [
      { name: 'Member dairy farmers', country: 'Belgium / Netherlands', products: 'Raw pasture milk', contact: 'Via cooperative structure', leadTime: 'Daily supply' },
      { name: 'De Backers firm', country: 'Belgium (Ruiselede)', products: 'UHT machine maintenance Aalter', contact: 'Pascale De Backers', leadTime: 'On-call — team always available' },
      { name: 'Davids firm', country: 'Belgium (Bree)', products: 'Machine maintenance Bree', contact: 'Stevie Donckers', leadTime: 'On-call — team always available' },
      { name: 'Packaging suppliers', country: 'Europe', products: 'Carton packaging, caps, films (>85% renewable)', contact: 'Purchasing Rotterdam', leadTime: 'Variable' },
    ],
    topClients: [
      { name: 'TopAction', sector: 'Retail / Supermarket', since: 2010, kam: 'Gary Philips', annualVolume: 'High volume', notes: 'Demanding client, frequent complaints, urgent deliveries possible. Extra effort earns loyalty.' },
      { name: 'Carrefour Belgium', sector: 'Retail / Supermarket', since: 2005, kam: 'Gary Philips', annualVolume: 'High volume', notes: 'Strategic client for the Consumer Dairy division.' },
      { name: 'Delhaize Group', sector: 'Retail / Supermarket', since: 2003, kam: 'Gary Philips', annualVolume: 'High volume', notes: 'Strict quality requirements — regular audits.' },
      { name: 'Albert Heijn', sector: 'Retail / Netherlands', since: 2008, kam: 'Gary Philips', annualVolume: 'High volume', notes: 'Important Dutch retail market.' },
    ],
  },
  emails: [
    {
      id: 'b01',
      from: 'Sasha Davids',
      fromEmail: 's.davids@bmu.be',
      subject: 'Switch to two-shift system',
      body: `Date: 17 September 20XX
To: All Team Leaders
From: Sasha Davids

Dear colleagues,

Dominique has decided that Aalter will switch to a two-shift system from 1 November. Bree can wait until 1 December.
This means you need to put your heads together within your departments on how to redistribute the shifts and how you, as team leaders, will manage the teams in the coming months. Please encourage your team members to take leave during the winter months as much as possible.
From 1 May, we expect to be able to switch back to a three-shift system. We anticipate one day per week of temporary unemployment in December/January.

Please submit your proposal to me by the end of this week. I will then schedule a meeting per department to discuss further.

Here is an overview of projects planned for the winter months:
• Replacement of two outdated machines in the Cheese department
• Adaptation of the production hall in the Milk Powder department
• No projects in Butter Aalter, but there are projects in Butter Bree
• Possible complete renewal of the production line in the UHT department. The decision between Aalter and Bree is still open. If this project goes to Bree, one of our team leaders will need to temporarily support Bree as a project team member.
• The UHT department in Rosario needs to be brought up to standard this winter. BMU Rotterdam has asked Chris and me to second an experienced team leader from Belgium to Rosario for a few months (December, January).

Please also propose names for the project teams — not the same "favourites" again. We want new people who can bring new perspectives. Via Zoom or Teams you can work very broadly.

Kind regards,
Sasha Davids`,
      deliverAtMinute: 0,
      priority: 'high',
      category: 'internal',
    },
    {
      id: 'b02',
      from: 'Sasha Davids',
      fromEmail: 's.davids@bmu.be',
      subject: 'UHT Project Aalter or Bree',
      body: `Date: 29 September 20XX
To: <your name>; Karen Stevens; Julan Chen
From: Sasha Davids

Hi everyone,

I received the following information from the project coordinator at BMU Rotterdam:

"With an investment of five million euros, three old one-litre carton filling lines will be replaced by a high-speed carton filling line, an aseptic filling line for 1,000 ml carton packaging with Helicap — a screw cap that allows the pack to be opened immediately."

"The goal of this new line is to reduce losses and increase efficiency. In addition to the line itself, an aseptic tank of 45,000 litres, packaging machines and a palletising installation will contribute to this objective. The new line will be able to process no fewer than 15,000 units per hour."

Please start thinking about how we can sell this to the unions. I fear this means we will be able to operate with fewer people per team, and the unions will figure that out too. If this leaks, we can expect union action. Hopefully they will give this project to Bree first.

Kind regards,
Sasha`,
      deliverAtMinute: 0,
      priority: 'high',
      category: 'internal',
    },
    {
      id: 'b03',
      from: 'Linda Van Maldegem',
      fromEmail: 'l.vanmaldegem@bmu.be',
      subject: 'Your team – Member overview',
      body: `Date: 30 September 20XX
To: <your name>
From: Linda Van Maldegem

Hello,

Here is an overview of your team members:

Name              | Age | Since | Notes
------------------|-----|-------|------------------------------------------
Piet Kregels      | 58  | 1991  | Part-time farmer, very experienced, pillar of the team
Louise De Windt   | 46  | 1995  | Divorced, 3 children, frequently requests salary advances
Laleh Lankarani   | 38  | 2015  | Excellent worker, originally from Egypt, has lived and worked in Belgium for 10 years
Linda Termont     | 22  | 2017  | Always first to request to stay home in winter
Sandy Peeters     | 26  | 2014  | Ambitious, wants to grow, takes responsibility
Nand De Brabandere| 51  | 1991  | Part-time farmer
Philippe Durée    | 30  | 2015  | Ambitious, higher degree in philosophy, started as a student jobber
Noel Vindevogel   | 44  | 1999  | Not very ambitious, increasingly cutting corners
Fred Maertens     | 23  | 2019  | Former student jobber, not meeting expectations
Daniel De Winter  | 41  | 2014  | Ambitious, wants to transfer, poor fit in the group, outspoken, very critical, difficulty controlling emotions, already received 2 warnings

Kind regards,
Linda`,
      deliverAtMinute: 0,
      priority: 'high',
      category: 'internal',
    },
    {
      id: 'b04',
      from: 'Daniel De Winter',
      fromEmail: 'daniel.dewinter@bmu.be',
      subject: 'Transfer request – Cheese team',
      body: `Date: 1 October 20XX
To: <your name>
From: Daniel De Winter

Hello,

Welcome, but I hope we will only work together briefly. Let me explain. I would like to put myself forward as a candidate for the vacancy in the Cheese team.

I have been working in UHT for a long time and feel it is time to move to a different department. I want to grow into a team leader role, but now that you have been appointed as Peter's successor, my chances of promotion have once again been blocked.

In two years, a team leader in Cheese (Danny Stevens) will retire, and if I have already been working there for two years by then, I can seize that opportunity.

I would appreciate your support for this transfer.

Kind regards,
Daniel`,
      deliverAtMinute: 0,
      priority: 'normal',
      category: 'internal',
    },
    {
      id: 'b05',
      from: 'Sofie Delens',
      fromEmail: 's.delens@bmu.be',
      subject: 'Vacancy in my team',
      body: `Date: 30 September 20XX
To: Sasha Davids
CC: <your name>; Linda Van Maldegem
From: Sofie Delens

Hi Sasha,

HR has passed me the list of candidates who would like to fill the vacancy in my team. I see Daniel De Winter's name on there. To be clear — I do not want that man in my team. He is a bad apple and a source of problems.

My preference goes to Janny Devogelaere, who has been working with us as a student jobber for three years, fits perfectly in the team and is a hard worker.

Kind regards,
Sofie`,
      deliverAtMinute: 0,
      priority: 'normal',
      category: 'internal',
    },
    {
      id: 'b06',
      from: 'Philippe Durée',
      fromEmail: 'philippe.duree@bmu.be',
      subject: 'Confidential – Situation in the team',
      body: `Date: 20 September 20XX
To: Peter Nagels
CC: (forwarded to <your name>)
From: Philippe Durée

Hello,

I feel it is my responsibility to point out a number of things that are going wrong in the team.

• Daniel De Winter clearly has difficulty controlling his emotions (anger, frustration). When you are not around, he goes around commanding and reprimanding everyone as if he is already team leader. I know you are thinking about working closer to home — fine — but please do not inflict Daniel on us as our new team leader.

• Daniel and Sandy are clearly positioning themselves to succeed you. These two can barely stand each other and are competing with one another. Every attempt to bring the team together turns into chaos.

• It has leaked that we are getting a fully modernised and automated new line this winter, causing unrest among team members. Some fear for their jobs.

• Nand is no longer focused. His own farm is in financial difficulty and this weighs on him. He is frequently absent for short periods and this burdens the team.

• Laleh is an excellent worker but does not feel fully accepted in the group. She could take on more responsibility but seems reluctant. Some team members do not take her seriously and make jokes about her origins.

• I am also frustrated by the rather typical small-town mentality in this factory. The way people sometimes speak condescendingly about colleagues from Bree bothers me. As a Limburger, I have also experienced "digs" here multiple times.

I also want to let you know that I will be putting myself forward as a team leader candidate when your departure becomes official. I already have Piet's support.

Kind regards,
Philippe`,
      deliverAtMinute: 0,
      priority: 'high',
      category: 'internal',
    },
    {
      id: 'b07',
      from: 'Jana Segers',
      fromEmail: 'j.segers@bmu.be',
      subject: 'Sample-taking',
      body: `Date: 29 September 20XX
To: <your name>
From: Jana Segers

Hi <your name>,

Welcome aboard. Glad you're here. Your predecessor had been letting things slide for a while and generally ignored my signals that Team A was not strictly following the sample-taking rules.

I want to insist once again that samples must be taken according to the agreed rules and delivered to the lab on time. This works perfectly in the other two teams. I took the liberty of observing your team during sample-taking and witnessed some alarming things.

Can you please restore order? Please also remind your team member Daniel De Winter that he must treat my staff with more respect when delivering samples. Meryem and Berat, who are of Turkish origin, have complained about this on multiple occasions.

It is also not acceptable that he regularly stops for a long conversation with one of my staff members he knows from before. This happens particularly during the night shift.

Thank you in advance.

Kind regards,
Jana Segers
Lab Manager Aalter`,
      deliverAtMinute: 0,
      priority: 'urgent',
      category: 'internal',
    },
    {
      id: 'b08',
      from: 'Sasha Davids',
      fromEmail: 's.davids@bmu.be',
      subject: 'Open Day – Possible activist action',
      body: `Date: 1 October 20XX
To: All Team Leaders
From: Sasha Davids

Dear colleagues,

It appears we can expect an action by a group of "healthy food activists" (Planeat BE) at the open day.
A negative article has apparently appeared in the press about the activities of BMU Ingredients in Berlin — as if dangerous experiments threatening health and the environment are taking place there.
I called Berlin and they laughed it off. Apparently a German tabloid published a ridiculous article that has been amplified on conspiracy websites.

Please think about how we can prepare for this. Can we handle it ourselves if problems arise, or do we request police support?

Kind regards,
Sasha`,
      deliverAtMinute: 0,
      priority: 'high',
      category: 'internal',
    },
    {
      id: 'b09',
      from: 'Linda Van Maldegem',
      fromEmail: 'l.vanmaldegem@bmu.be',
      subject: 'Points of attention – Team A UHT',
      body: `Date: 1 October 20XX
To: <your name>
From: Linda Van Maldegem

Hello,

I know you have only just started, but I want to draw your attention to a number of issues regarding Team A.

• Complaints from Jana Segers about sample-taking.

• Short-term absenteeism (1–2 days) is 10% higher than in other teams.

• This summer, student jobbers repeatedly came to me asking to change teams (complaints of bullying, poor atmosphere, being given the worst tasks).

• Daniel drops by every five minutes asking about team leader vacancies and, now that he has heard you are coming on board, wants to leave immediately for the Cheese team.

• Please have a conversation with Louise — we cannot keep giving her salary advances.

• Fred Maertens seemed promising but is currently not meeting expectations. He had a performance warning conversation last month with Peter and me. Please let me know this week whether there is improvement. If not, I propose dismissal.

• Laleh came to see me. She wants to move to Aalter but is having difficulty finding a rental property. She is asking if we can intervene. Is this our role?

Kind regards,
Linda`,
      deliverAtMinute: 0,
      priority: 'high',
      category: 'internal',
    },
    {
      id: 'b10',
      from: 'Pascale Vandewege',
      fromEmail: 'p.vandewege@bmu.be',
      subject: 'UHT machines – Serious incidents',
      body: `Date: 1 October 20XX
To: <your name>
CC: Sasha Davids
From: Pascale Vandewege

Hello,

I received a note from Pascale De Backers with complaints about the way Team A handles machine breakdowns.
De Backers always has two teams of two people ready to intervene immediately. Pascale observes that it is taking longer and longer for the maintenance team to be called when problems arise. This means the line is idle for longer than necessary.

Her technicians have reported that Daniel and Sandy often try to solve the problem themselves. This is unacceptable.

Her technicians also reported that two days ago, they observed Daniel and Sandy pushing each other during a heated argument about how to handle a defective machine. Piet Kregels apparently separated them.

A lot of work ahead for the new team leader. To be clear: make sure your team understands they must leave the machines alone and call De Backers immediately so the line can restart as quickly as possible.

De Backers recently hired two excellent Polish technicians. These are experienced people with extensive knowledge of the machines used in our UHT department.
After the first week, both came to complain to me about the difficult collaboration with your team. They don't speak perfect Dutch yet but are learning quickly, and the remarks from some members of your team are really inappropriate.
The claim that "foreigners" are taking local jobs is absurd. Technicians like these are simply no longer available in the local labour market.

Kind regards,
Pascale Vandewege
Maintenance Manager`,
      deliverAtMinute: 0,
      priority: 'urgent',
      category: 'internal',
    },
    {
      id: 'b11',
      from: 'Karen Stevens & Julan Chen',
      fromEmail: 'k.stevens@bmu.be',
      subject: 'Leaving the production hall tidy',
      body: `Date: 30 September 20XX
To: <your name>
From: Karen Stevens; Julan Chen

Hello,

Welcome to our department. We look forward to working with you.
A few concerns about your team though. We're counting on you to sort things out.

Your team is not leaving the production area tidy. The agreement is that all waste is cleaned up and the production area is left in order — it makes it so much more pleasant for the next team to start.

We'd also appreciate a proper handover briefing for the team coming after yours. Please ensure this happens in an orderly and correct manner even when you're not there. The "cockerel" behaviour between Philippe, Sandy and Daniel often causes misunderstandings during the handover.

When your team takes over, they need to be present 10 minutes early so our people can finish their shift on time. People like Louise, Nand, Fred and Noel are often just barely on time or late. Members of our teams are starting to grumble about this.

If you feel like flying to Argentina to support the plant there, we encourage you. We have absolutely no desire to go. That project is yours if it ever materialises — it'll probably go to Bree first anyway.

Kind regards,
Karen and Julan`,
      deliverAtMinute: 0,
      priority: 'normal',
      category: 'internal',
    },
    {
      id: 'b12',
      from: 'Sasha Davids',
      fromEmail: 's.davids@bmu.be',
      subject: 'Confidential – Deputy team leader role',
      body: `Date: 15 September 20XX
To: UHT Team Leaders
From: Sasha Davids

Hi everyone,

We have noticed that team leaders are often absent from the shop floor due to leave, meetings or project participation. We are therefore considering creating a deputy team leader function. Please share your thoughts.
The UHT department would serve as a pilot project. Do you see potential candidates? What competencies are important to fulfil this role well? Rotterdam is also pushing for employees with a migration background to be given opportunities at this level.
Linda recently discovered that Laleh holds a university degree from Cairo and sees great potential in her.

@Peter: I am thinking here of Piet Kregels — a nice reward for his years of loyal service, he is truly a pillar of the team.

Kind regards,
Sasha`,
      deliverAtMinute: 0,
      priority: 'high',
      category: 'internal',
    },
    {
      id: 'b13',
      from: 'Peter Nagels',
      fromEmail: 'p.nagels@bmu.be',
      subject: 'Minimum staffing – Week of 8 October',
      body: `Date: 20 September 20XX
To: Sasha Davids
From: Peter Nagels

Hi Sasha,

The week of 8 October, my team has the morning shift. The minimum staffing is eight people, but I have four holiday requests that week and everyone has a valid reason. We will need to arrange cover (student jobbers, colleagues from other teams).

• Daniel De Winter: leave Monday to Wednesday for home renovation works
• Louise De Windt: family leave Monday to Thursday for youngest daughter's operation
• Philippe Durée: leave Wednesday, Thursday and Friday. City trip to Amsterdam — booked since the beginning of the year, wedding anniversary celebration
• Piet Kregels: full week's leave to bring in the harvest on his farm

Wishing my successor all the best.

Note: the open day still needs to be arranged within the team — it's going to be a tricky one.

P.S. On Saturday 6 October I am hosting farewell drinks at Café The Bridge on the village square. My successor is also invited, as are you of course.

Kind regards,
Peter`,
      deliverAtMinute: 0,
      priority: 'high',
      category: 'internal',
    },
    {
      id: 'b14',
      from: 'Daniel De Winter',
      fromEmail: 'daniel.dewinter@bmu.be',
      subject: 'Maintenance firm De Backers',
      body: `Date: 1 October 20XX
To: <your name>
From: Daniel De Winter

Hello,

I just want to flag that De Backers is a complete bunch of bunglers.
I have been working with these machines for years and know them inside out. Why we always have to call those bunglers to solve a problem is beyond me. Outsourcing maintenance is a terrible idea. We would be better off with our own technicians. They are generally young guys who take forever to analyse a problem (basically googling it) and keep calling their boss for solutions. Listening to us is apparently not an option.

Now they've even hired two older Poles who only talk to each other in incomprehensible Polish. That's really not acceptable! You can't expect me to speak English at work, let alone learn Polish. And who knows what they're saying about us in Polish!

Kind regards,
Daniel`,
      deliverAtMinute: 0,
      priority: 'normal',
      category: 'internal',
    },
    {
      id: 'b15',
      from: 'Sasha Davids',
      fromEmail: 's.davids@bmu.be',
      subject: 'Open Day – Sunday 7 October',
      body: `Date: 10 September 20XX
To: All Team Leaders
From: Sasha Davids

Hello,

Sunday 7 October is the day. We are organising our fifth open day for clients, local residents and other interested parties. Weather forecasts promise a beautiful day.

From 1pm to 6pm, one team will be working in each department so visitors can observe production live. According to the agreed arrangements, this year it is the A teams' turn to handle production and welcome clients.

This year, a delegation from our site in Argentina will be visiting and are particularly interested in the UHT department.

In the future, we will increasingly welcome staff from foreign sites. Some employees may stay with us for a few months to better understand the site's operations. They will join your teams in production. I am counting on you to welcome them with respect and enthusiasm.

Kind regards,
Sasha`,
      deliverAtMinute: 0,
      priority: 'normal',
      category: 'internal',
    },
    {
      id: 'b16',
      from: 'Sasha Davids',
      fromEmail: 's.davids@bmu.be',
      subject: 'Customer complaints – Meeting Tuesday 2 October 3pm',
      body: `Date: 30 September 20XX
To: <your name>; Karen Stevens; Julan Chen
From: Sasha Davids

Dear colleagues,

Tuesday 2 October I expect all three of you in my office at 3pm to discuss this.

Kind regards,
Sasha`,
      deliverAtMinute: 0,
      priority: 'urgent',
      category: 'internal',
    },
    {
      id: 'b17',
      from: 'Gary Philips',
      fromEmail: 'g.philips@bmu-consumerdairy.com',
      subject: 'Customer complaints – Quality report',
      body: `Date: 28 September 20XX
To: Sasha Davids
From: Gary Philips – Sales & Marketing Director, Consumer Dairy division

Hi Sasha,

Based on a number of customer quality complaints, we conducted an investigation across all factories involved in milk production.
We regret to inform you that your site is at the very bottom of the rankings, while your neighbours in Bree are scoring excellently.

We expect a concrete action plan from you by the end of October. I will personally come to visit at the end of October to hear your proposals.

Kind regards,
Gary`,
      deliverAtMinute: 0,
      priority: 'urgent',
      category: 'client',
    },
    {
      id: 'b18',
      from: 'Piet Kregels',
      fromEmail: 'piet.kregels@bmu.be',
      subject: 'Open Day Sunday 7 October',
      body: `Date: 28 September 20XX
To: <your name>
CC: union representatives
From: Piet Kregels

Hello,

The team asked me to raise this with you.
We feel it is unreasonable that Team A has to cover the open day on Sunday 7 October. The evening before we have the farewell of our former team leader Peter, and on Monday 8 October we have the morning shift. We are asking your colleagues Karen and Julan to swap.

Thank you in advance,

Kind regards,
Piet`,
      deliverAtMinute: 0,
      priority: 'high',
      category: 'internal',
    },
    {
      id: 'b19',
      from: 'Sasha Davids',
      fromEmail: 's.davids@bmu.be',
      subject: 'Urgent TopAction order – Working Saturday 6 October',
      body: `Date: 30 September 20XX
To: <your name>; Karen Stevens; Julan Chen
From: Sasha Davids

Dear colleagues,

The supermarket chain TopAction has just placed an urgent order.
This means we also need to work on Saturday of the week of 8 October. However, only the morning and afternoon shifts need to produce. The afternoon shift will probably be able to stop by 8pm. The night shift does not need to come in.

Thank you for your understanding. TopAction is a demanding client who often complains, and by making this extra effort we can earn some goodwill with them.

Please thank the team members for their efforts in advance. We will provide pizzas for both shifts (at noon and at 6pm).

Kind regards,
Sasha`,
      deliverAtMinute: 0,
      priority: 'high',
      category: 'client',
    },
    {
      id: 'b20',
      from: 'Linda Van Maldegem',
      fromEmail: 'l.vanmaldegem@bmu.be',
      subject: 'Personal relationships in the workplace',
      body: `Date: 1 October 20XX
To: <your name>; Sofie Delens
From: Linda Van Maldegem

Dear colleagues,

I would like to discuss a delicate matter with you.
Louise De Windt has informed me that she will soon be moving in with Karel Voet (Team Leader Team A, Milk Powder).
She has asked to fill the vacancy in the Cheese department in Sofie's team so that she and Karel would always be on the same shift.

She is currently in Team A in the UHT department, but it appears she also had a relationship with Nand De Brabandere. Nand is reacting very negatively to the breakup and Louise would therefore prefer to work in a different team.

Please share your input on this.

Kind regards,
Linda`,
      deliverAtMinute: 0,
      priority: 'normal',
      category: 'internal',
    },
  ],
}
