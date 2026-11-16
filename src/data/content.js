// All editable text for the site lives here.
// Paths under public/ are referenced relative to the site root (no leading slash)
// so they work at https://<user>.github.io/<repo>/.

export const profile = {
  name: 'Eleonora Zodo',
  nickname: 'Nora',
  greeting: 'Ciao!',
  tagline: 'I am a researcher in Human-Robot Collaboration.\nI study how users experience AI-powered machines.',
  photo: 'images/profile.jpg',
  landingPhoto: 'images/profile-landing.jpg',
  email: 'eleonora.zodo@gmail.com',
  linkedin: 'https://www.linkedin.com/in/eleonora-zodo/',
};

export const cv = {
  // Put your CV file at public/cv/Eleonora_Zodo_CV.pdf
  pdf: 'cv/Eleonora_Zodo_CV.pdf',
  pdfName: 'Eleonora_Zodo_CV.pdf',
};

// "My Story" — DRAFT: rewrite these paragraphs in your own words.
export const story = {
  image: {
    src: 'images/story-hourglass-hands.jpg',
    alt: 'Two hands holding an hourglass',
    author: 'Melody Zimmerman',
    authorUrl: 'https://unsplash.com/@prairiepilgrim?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
    sourceUrl: 'https://unsplash.com/photos/two-hands-holding-a-sand-glass-in-front-of-a-window-gZcYif_FEwU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
  },
  intro:
    'I am a researcher in Human-Robot Collaboration.\nI study how users experience AI-powered machines.',
  chapters: [
    {
      title: 'Where it started',
      text: 'My path into HCI began with a curiosity for how people experience technology, and a feeling that good design starts with listening. User-centred and participatory methods quickly became my favourite tools.',
    },
    {
      title: 'Vienna & the Austrian Institute of Technology',
      text: 'At the AIT Center for Technology Experience in Vienna I worked as a junior researcher in an interdisciplinary team, studying how workers and robots can collaborate on the shop floor. From contextual inquiry to VR-based user testing, I learnt to combine qualitative and quantitative methods to reach solid, triangulated insights.',
    },
    {
      title: 'What drives me',
      text: 'I enjoy the whole loop: going into the field, sketching ideas, prototyping, testing with real users and turning findings into guidelines a team can act on.',
    },
  ],
  skills: [
    'User research',
    'Contextual inquiry',
    'Task modelling',
    'Mixed-methods studies',
    'Think-aloud & interviews',
    'Thematic analysis',
    'Sketching & wireframing',
    'VR / Mixed Reality prototyping',
    'Worker-centred design',
    'Workshop facilitation',
  ],
};

// Order = most recent first (the homepage previews the first entries).
// Optional per-step fields: image, images (gallery), imageMaxWidth, wide.
export const projects = [
  {
    slug: 'corob-welding-hrc',
    title: "Enhancing Welders' Autonomy and Competence",
    subtitle: 'Designing human-robot interfaces for AI-powered welding cells',
    organisation: 'Eindhoven University of Technology (TU/e) — COROB, EU Horizon Europe project',
    location: 'Eindhoven, Netherlands',
    cover: 'images/corob-cell.jpg',
    summary:
      'A mixed-methods design case study on how AI-powered multi-robot welding cells will change operators’ work, and how interfaces can support their autonomy and competence instead of eroding them.',
    role: 'Lead researcher (first author), EngD trainee at TU/e',
    methods: 'Design case study: documentation analysis, contextual inquiry, survey, scenario-based focus groups, METUX analysis',
    output: 'Design implications, interface concept, NordiCHI ’26 paper',
    publication: {
      label: 'NordiCHI ’26 Adjunct · Late-Breaking Work',
      url: 'https://doi.org/10.1145/3821402.3830154',
    },
    tags: ['HRC', 'METUX', 'Mixed methods', 'Explainable AI', 'Industry 5.0', 'Interface design'],
    problem:
      'AI-powered robots are set to turn skilled welders into supervisors of semi-automated production. Human-Robot Collaboration promises safety and productivity, but its impact on workers’ sense of autonomy, competence and relatedness is barely explored. How can the interface keep operators in control and help them grow?',
    roleDetail: [
      'Ran the contextual inquiry and expert interview at the R&D centre',
      'Built the survey and made it available in English, Spanish and Greek',
      'Designed the scenario-based focus groups (personas and workflow probes)',
      'Analysed all data and translated findings into design implications',
    ],
    outcomes: [
      'Mapped the friction points of moving from manual to robotic welding',
      'Survey: high expected satisfaction (5.67/7) but only moderate trust (4.38/7)',
      '9 design implications, e.g. approval checkpoints, explainable alerts, progressive onboarding',
      'Low-code Quality Assurance interface concept for training AI quality models',
    ],
    background: [
      {
        label: 'Context',
        text: 'COROB, an EU Horizon Europe project developing two AI-powered multi-robot cells: jigless arc welding (GMAW) and tool repair via wire arc additive manufacturing (WAAM).',
      },
      {
        label: 'Project',
        text: 'Explore how these cells will reshape operators’ work practices, and how intentionally designed interfaces can support their basic psychological needs.',
      },
      {
        label: 'Method',
        text: 'Design Case Study (Wulf) with mixed methods, analysed inductively and through the METUX framework (Motivation, Engagement and Thriving in UX).',
      },
    ],
    process: [
      {
        title: 'Documentation analysis',
        short: 'Mapped the two robot cells and the operator’s duties',
        paragraphs: [
          'I reviewed the COROB project documentation to map the functionalities and constraints of the two cells. In the welding cell, two robots pick, place and align workpieces guided by computer vision, a cobot welds, and AI micro-adjusts the path in real time while sensors check the weld.',
          'The operator loads parts, starts jobs, monitors the process and inspects the result. Humans and robots share a workspace and goal but act sequentially: human-robot cooperation with shared control.',
        ],
      },
      {
        title: 'Contextual inquiry',
        short: 'Site visit and interview with a welding automation technician',
        image: 'images/corob-cell.jpg',
        imageMaxWidth: 380,
        paragraphs: [
          'At the main project partner’s R&D centre I observed the jigless welding cell in its prototyping stage and interviewed a welding automation technician with a background in manual welding.',
          'Open coding surfaced themes such as the shift from tacit craft to data-driven inquiry, gains in safety versus loss of craft challenge, long setups with rigid execution, and upskilling through expert mentorship.',
        ],
      },
      {
        title: 'Survey',
        short: '12 professionals rated acceptance, trust and control',
        paragraphs: [
          'To triangulate, I deployed a survey through the COROB network, in English, Spanish and Greek. 12 professionals across the manufacturing sector imagined operating a multi-robot welding cell and completed the Affinity for Technology (ATI), TAM-Reloaded and HUROX scales, plus open questions on interaction and data visualisation.',
          'Respondents expected high satisfaction (M = 5.67/7) and good learnability (5.13), but controllability (4.92) and especially trust (4.38) were lower. Data protection was the clearest concern.',
        ],
      },
      {
        title: 'Focus groups',
        short: 'Personas and workflow probes with 8 experts',
        paragraphs: [
          'Direct access to shop-floor welders was restricted, so two scenario-based focus groups projected domain experts into realistic futures: five COROB stakeholders and three external experts, including a former welder and two HRI specialists.',
          'Participants walked through workflow probes of each cell and four fictional personas, from a senior welder with 30 years of experience to a junior robotics engineer, and discussed where operators would feel in or out of control.',
        ],
      },
      {
        title: 'Synthesis',
        short: 'Triangulated findings through the METUX lens',
        paragraphs: [
          'Findings were triangulated across the three sources and mapped onto autonomy, competence and relatedness. Three themes stood out: onboarding and setup are major adoption barriers; tacit welding expertise and robotics skills are complementary, not interchangeable; and operators want transparency and final authority over quality decisions.',
          'These became 9 design implications, from progressive onboarding and mentorship to explainable error pop-ups, override controls, approval checkpoints and activity logs that preserve expert knowledge.',
        ],
      },
      {
        title: 'Interface concept',
        short: 'Low-code Quality Assurance module for AI-assisted QA',
        wide: true,
        images: ['images/corob-qa-main.png', 'images/corob-qa-performance.png', 'images/corob-qa-dataset.png'],
        paragraphs: [
          'In coordination with the COROB partners, the Quality Assurance module was designed as a low-code tool that lets welding experts train the AI models that assess weld quality. Operators annotate sensor data captured during the process, validating detected defects and adding new ones, so their expertise stays central.',
          'The mock-ups were reviewed in heuristic evaluations with COROB stakeholders and checked against HRI interface guidelines.',
        ],
      },
    ],
    nextSteps: [
      'Turn the mock-up into an interactive web prototype',
      'Test it in Wizard-of-Oz studies with welders, operators and maintenance staff',
      'Check whether onboarding wizards and an AI chatbot improve perceived competence',
      'Check whether explanations, approval checkpoints and overrides improve trust and autonomy',
    ],
  },
  {
    slug: 'polishing-5-0',
    title: 'Polishing 5.0',
    subtitle: 'Human–robot collaboration for Industry 5.0',
    organisation: 'Austrian Institute of Technology — Center for Technology Experience',
    location: 'Vienna, Austria',
    cover: 'images/vr-simulation.jpg',
    summary:
      'A Human-in-the-Loop solution to semi-automate the quality inspection and polishing of ceramic washbasins, designed with and for shop-floor workers and evaluated in a VR simulation.',
    role: 'Junior researcher in an interdisciplinary team',
    methods: 'Mixed methods, worker-centred design, iterative prototyping, VR-based testing',
    output: 'Research findings and design guidelines',
    // Overview shown on the Work Projects page — DRAFT: check and adjust wording.
    problem:
      'Polishing and inspecting ceramic washbasins is manual, skill-based work. Austrian SMEs wanted to semi-automate it with a robot while keeping the worker in the loop — which needs a way for workers and robots to share the task that feels intuitive, safe and trustworthy.',
    roleDetail: [
      'Took part in the contextual inquiry with end users',
      'Helped model the new human–robot task scenario',
      'Drew the digital sketches of the four interaction concepts',
      'Contributed to the VR user study and data analysis',
    ],
    outcomes: [
      'A worker-centred task model grounded in shop-floor observation',
      'Four Mixed Reality interaction concepts compared head-to-head',
      'VR study with 30 participants, including 5 real end users',
      'Triangulated design guidelines for the next development phase',
    ],
    tags: ['HRI', 'Mixed Reality', 'VR testing', 'Industry 5.0', 'Mixed methods'],
    background: [
      {
        label: 'Context',
        text: 'Lighthouse Project on AI-Enabled Automation for an Industry 5.0, in cooperation with Austrian SMEs.',
      },
      {
        label: 'Project',
        text: 'Development of a Human-in-the-Loop solution for the semi-automation of manufacturing processes.',
      },
      { label: 'Method', text: 'Mixed-methods approach, worker-centred design.' },
    ],
    process: [
      {
        title: 'Contextual inquiry',
        short: 'Observed and interviewed polishing workers on site',
        image: 'images/inquiry.gif',
        paragraphs: [
          'A contextual inquiry was carried out during a workshop with end users: we observed and talked with the workers engaged in the manual polishing of washbasins.',
        ],
      },
      {
        title: 'Task model',
        short: 'Modelled a fenceless human–robot scenario',
        image: 'images/task-model.png',
        imageMaxWidth: 360,
        paragraphs: [
          'The information collected on the shop floor was used to model a new use scenario: a joint, fenceless collaboration between a robot and a human operator for the quality inspection and polishing of ceramic basins.',
        ],
      },
      {
        title: 'Iterative prototyping',
        short: 'Sketched 4 Mixed Reality interaction variants',
        image: 'images/digital-sketch.png',
        wide: true,
        paragraphs: [
          "Starting from that scenario, we ideated a human–robot interaction system to semi-automate the workers' practice, built around a projection-based Mixed Reality interface.",
          'Four variants were outlined, differing in the devices and channels used for user input and robot output, with the aim of identifying the best one in terms of objective and subjective user experience.',
          'I drew digital sketches of the four configurations in Procreate on iPad Pro. The wireframes were reviewed iteratively through standalone critiques until a final version was reached.',
        ],
      },
      {
        title: 'User testing',
        short: 'VR study with 30 participants, think-aloud',
        image: 'images/vr-simulation.jpg',
        paragraphs: [
          'A junior engineer on the team developed a Virtual Reality simulation that reproduced the sketched configurations realistically and immersively — four conditions, presented in randomised order, in a within-subject design.',
          '30 participants performed the inspection and polishing task in VR, interacting with the robot through the four modalities while thinking aloud: 25 people with a technical background (from the AIT participant pool and TU Wien students) and 5 end users from the quality-control department.',
          'Participants completed a pre-survey, a post-task questionnaire after each condition and a final semi-structured interview.',
        ],
      },
      {
        title: 'Results',
        short: 'Triangulated data into design guidelines',
        image: 'images/analysis-miro.png',
        wide: true,
        paragraphs: [
          'We combined task performance in the VR simulation with survey self-reports and a thematic analysis of interview transcripts and observation notes to compare the conditions.',
          'None of the configurations emerged as significantly better. The original research question stayed open, but the study produced key design guidelines for the future development of the solution.',
        ],
      },
    ],
    learnings: [
      'Sharpened my digital design and sketching skills.',
      'Used multiple research tools and analysis methods to reach triangulation.',
      'Improved reporting and presenting in both English and German.',
      'Teamwork in a multicultural, interdisciplinary environment.',
    ],
  },
];
