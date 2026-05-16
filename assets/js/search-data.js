// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-research",
          title: "research",
          description: "Single strontium atoms coupled to nanophotonic cavities for hybrid quantum systems.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Publications, talks, and posters. See also my Google Scholar and ORCID profiles.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Side projects spanning instrumentation, simulation, and theory. Most have code on GitHub.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-news",
          title: "news",
          description: "All news items.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-lineage",
          title: "lineage",
          description: "Academic genealogy, traced advisor by advisor back to 19th-century Harvard.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/lineage/";
          },
        },{id: "news-b-sc-hons-in-physics-from-university-of-delhi",
          title: 'B.Sc. (Hons.) in Physics from University of Delhi',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2022-07-16-bsc/";
            },},{id: "news-starting-my-master-39-s-at-iit-delhi",
          title: 'Starting my master&amp;#39;s at IIT Delhi',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2022-08-01-msc-start/";
            },},{id: "news-summer-at-the-saha-institute-kolkata",
          title: 'Summer at the Saha Institute, Kolkata',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2023-05-20-saha-kolkata/";
            },},{id: "news-first-paper-out",
          title: 'First paper out',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024-02-16-first-paper/";
            },},{id: "news-master-39-s-thesis-defence",
          title: 'Master&amp;#39;s thesis defence',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024-05-06-thesis-defense/";
            },},{id: "news-first-trip-to-gothenburg",
          title: 'First trip to Gothenburg',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024-07-10-first-gothenburg-visit/";
            },},{id: "news-m-sc-in-physics-from-iit-delhi",
          title: 'M.Sc. in Physics from IIT Delhi',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024-08-10-msc-iit-delhi/";
            },},{id: "news-started-my-phd-at-chalmers",
          title: 'Started my PhD at Chalmers',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024-10-08-phd-start/";
            },},{id: "news-featured-in-the-chalmers-mc2-newsletter",
          title: 'Featured in the Chalmers MC2 newsletter',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024-10-16-chalmers-newsletter/";
            },},{id: "news-first-optics-work-fibre-coupling",
          title: 'First optics work — fibre coupling',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024-11-14-fiber-coupling/";
            },},{id: "news-winter-school-on-ultracold-atom-simulations-in-benasque",
          title: 'Winter school on ultracold-atom simulations in Benasque',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-02-16-benasque/";
            },},{id: "news-cleanroom-fabrication-license",
          title: 'Cleanroom fabrication license',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-06-11-cleanroom-license/";
            },},{id: "news-phd-education-evaluation-committee-at-uppsala",
          title: 'PhD education evaluation committee at Uppsala',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-10-06-uppsala-evaluation/";
            },},{id: "news-first-poster-presentation",
          title: 'First poster presentation',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-11-10-poster-chalmers-winter-school/";
            },},{id: "projects-whispering-gallery-modes-in-microresonators",
          title: 'Whispering-gallery modes in microresonators',
          description: "Modelling electromagnetic whispering-gallery modes in cylindrical microresonators.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/10_whispering/";
            },},{id: "projects-is-air-ideal",
          title: 'Is air ideal?',
          description: "A homebuilt manometer experiment to check ideal-gas behaviour in air.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/11_is_air_ideal/";
            },},{id: "projects-strontium88-python-library",
          title: 'strontium88 Python library',
          description: "Atomic-properties calculator for Sr-88 — transitions, branching ratios, decay rates.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_strontium88/";
            },},{id: "projects-uhv-chamber-design-solidworks",
          title: 'UHV chamber design (SolidWorks)',
          description: "Full CAD assembly of the strontium experiment&#39;s vacuum chamber, optics, and feedthroughs.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_uhv_chamber/";
            },},{id: "projects-water-cooled-helmholtz-coils",
          title: 'Water-cooled Helmholtz coils',
          description: "Custom magnetic-field coils for MOT and bias fields — design, simulation, sourcing.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_helmholtz_coils/";
            },},{id: "projects-sr-88-decay-scheme-analyser",
          title: 'Sr-88 decay-scheme analyser',
          description: "Object-oriented MATLAB code for atomic level-structure simulations and branching-ratio analysis.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_decay_scheme/";
            },},{id: "projects-red-pitaya-as-a-pid-controller",
          title: 'Red Pitaya as a PID controller',
          description: "Using a Red Pitaya FPGA board as a digital PID lock via PyRPL, with documented setup notes.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_red_pitaya/";
            },},{id: "projects-field-theory-on-branching-lattices",
          title: 'Field theory on branching lattices',
          description: "A new method for computing propagators in discrete space, with extensions to AdS geometries.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_discrete_fields/";
            },},{id: "projects-measuring-g-with-an-arduino-and-a-pendulum",
          title: 'Measuring g with an Arduino and a pendulum',
          description: "Using an Arduino-based microphone to find gravitational acceleration from a pendulum&#39;s acoustic response.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_find_g/";
            },},{id: "projects-glauber-modelling-of-heavy-ion-collisions",
          title: 'Glauber modelling of heavy-ion collisions',
          description: "Monte Carlo simulation of relativistic nucleus-nucleus collisions at TeV energies.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_glauber/";
            },},{id: "projects-solar-distillation-systems-with-quantum-dot-enhancement",
          title: 'Solar distillation systems with quantum-dot enhancement',
          description: "Thermal modelling and experimental analysis of nanoparticle-enhanced solar stills.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_solar_distillation/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/cv.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%70%72%69%74%77%69%73%68@%63%68%61%6C%6D%65%72%73.%73%65", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0001-4796-4857", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=rninKe0AAAAJ", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/pritwish1101", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/pritwish", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
