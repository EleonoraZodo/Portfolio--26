// All editable text for the site lives here.
// Paths under public/ are referenced relative to the site root (no leading slash)
// so they work at https://<user>.github.io/<repo>/.

export const profile = {
  name: 'Eleonora Zodo',
  nickname: 'Nora',
  greeting: 'Ciao!',
  tagline: 'HCI researcher & UX designer',
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
  intro:
    "I'm Nora, a designer and researcher in Human-Computer Interaction. I care about building technology around the people who use it — especially in places where the stakes are physical, social and very real.",
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

export const projects = [
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
