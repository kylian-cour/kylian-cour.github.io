/**
 * Bascule français / anglais.
 * Le français reste le texte d'origine de la page ; l'anglais est appliqué par ce script.
 */
(function () {
  "use strict";
  var EN = {
 "Kylian Couroussé – Portfolio BTS SIO option SLAM": "Kylian Couroussé – BTS SIO (SLAM option) Portfolio",
 "Télécharger mon CV (PDF)": "Download my CV (PDF)",
 "Développeur, Informaticien": "Developer, IT specialist",
 "Portrait de Kylian Couroussé": "Portrait of Kylian Couroussé",
 "Page d’accueil du CRM": "CRM home page",
 "Page d’accueil du CRM : navigation par onglets (Clients, Interventions, Demandes d’achats, Stock et facturation) et barre de recherche multicritère.": "CRM home page of ISP Conseil: tabbed navigation (Clients, Interventions, Purchase requests, Stock and invoicing) and a multi-criteria search bar.",
 "Liste des demandes d’achat": "Purchase request list",
 "Suivi de toutes les demandes : recherche par numéro, employé ou descriptif, avec la date, le commentaire et le statut de chaque demande.": "Tracking of all requests: search by number, employee or description, with the date, comment and status of each request.",
 "Création d’une demande d’achat": "Creating a purchase request",
 "Formulaire utilisé par un employé : informations générales de la demande, puis liste des produits demandés (libellé, lien, quantité, code produit) avec ajout et suppression de lignes.": "Form used by an employee: general request information, then the list of requested products (label, link, quantity, product code) with add and remove line buttons.",
 "Contrôle des données saisies": "Input validation",
 "Exemple de contrôle à la saisie : un message d’erreur s’affiche car le code produit « 99999 » n’existe pas dans la base de stock. Cela garantit la cohérence des données enregistrées.": "Input validation example: an error message appears because product code “99999” does not exist in the stock database. This ensures the consistency of the saved data.",
 "Notification par e-mail": "Email notification",
 "E-mail récapitulatif généré à la création d’une demande : employé, date, descriptif, commentaire et tableau des produits demandés avec leurs liens d’achat.": "Summary email generated when a request is created: employee, date, description, comment and a table of the requested products with their purchase links.",
 "Passage de la commande": "Placing the order",
 "Espace de la responsable pour commander à partir d’une demande : rappel des produits demandés à gauche, saisie du prix d’achat HT, des frais de port, du coefficient, du fournisseur et de la quantité commandée à droite.": "Manager’s area for ordering from a request: reminder of the requested products on the left, entry of the purchase price (excl. VAT), shipping costs, coefficient, supplier and ordered quantity on the right.",
 "Réception et mise en stock": "Receiving and stocking",
 "Espace de réception d’une livraison : pour chaque produit, saisie des lots ou des numéros de série reçus, puis mise en stock.": "Delivery receiving area: for each product, entry of the batches or serial numbers received, then putting into stock.",
 "Modification d’une demande": "Editing a request",
 "Fiche détaillée d’une demande : statut, produit demandé, informations de commande (fournisseur, prix d’achat et de vente HT, frais de port, coefficient) et livraison associée.": "Detailed request sheet: status, requested product, order information (supplier, purchase and selling price excl. VAT, shipping costs, coefficient) and linked delivery.",
 "Votre nom": "Your name",
 "Votre e-mail": "Your email",
 "Objet": "Subject",
 "Portfolio de Kylian Couroussé, étudiant en BTS SIO option SLAM (Solutions logicielles et applications métiers) à Nantes : parcours, stages et projets.": "Portfolio of Kylian Couroussé, BTS SIO student (SLAM option: software solutions and business applications) in Nantes: background, internships and projects.",
 "Accueil": "Home",
 "À propos": "About",
 "Parcours": "Background",
 "Projets": "Projects",
 "Mon CV": "My CV",
 "Je suis Kylian Couroussé": "I’m Kylian Couroussé",
 "Nom :": "Name:",
 "Profil :": "Profile:",
 "Développeur": "Developer",
 "E-mail :": "Email:",
 "Téléphone :": "Phone:",
 "Compétences": "Skills",
 "Figma (Maquettage)": "Figma (Mockups)",
 "À propos de moi": "About me",
 "Je m’appelle Kylian et je me forme pour devenir développeur Full-Stack. Depuis tout petit, je suis passionné par le développement web et applicatif, et par le développement en général.": "My name is Kylian and I’m training to become a Full-Stack developer. Ever since I was little, I’ve been passionate about web and application development, and about development in general.",
 "Titulaire d’un Bac Pro SN (Systèmes numériques), option RISC (Réseaux informatiques et systèmes communicants), je prépare aujourd’hui un BTS SIO (Services informatiques aux organisations), option SLAM (Solutions logicielles et applications métiers). Je me spécialise et j’en apprends un peu plus chaque jour.": "I hold a Bac Pro SN (Digital Systems) with the RISC option (Computer Networks and Communicating Systems), and I’m now preparing a BTS SIO (IT Services for Organisations) with the SLAM option (Software Solutions and Business Applications). I’m specialising and learning a little more every day.",
 "Actuellement, j’approfondis mes connaissances en développement tout en m’appuyant sur de solides bases en systèmes et réseaux. Mon objectif est de continuer à développer mes compétences et d’acquérir un maximum d’expérience grâce à mes formations, afin de devenir un développeur Full-Stack compétent et polyvalent.": "I’m currently deepening my development knowledge while building on solid foundations in systems and networks. My goal is to keep developing my skills and gain as much experience as possible through my training, so I can become a competent and versatile Full-Stack developer.",
 "Retrouvez en un coup d’œil ma formation, mes stages et mes compétences.": "My education, internships and skills at a glance.",
 "Voici, en résumé, mon parcours scolaire et professionnel.": "Here is a summary of my education and work experience.",
 "Moi": "Me",
 "En étude pour devenir développeur Full-Stack.": "Studying to become a Full-Stack developer.",
 "Parcours scolaire": "Education",
 "BTS SIO (Services informatiques aux organisations)": "BTS SIO (IT Services for Organisations)",
 "2025 - 2027 (En cours de formation)": "2025 - 2027 (In progress)",
 "BTS SIO option SLAM (Solutions logicielles et applications métiers), j’apprends la programmation, la création d’applications (PC, mobile, web) et la gestion des bases de données.": "BTS SIO SLAM option (Software Solutions and Business Applications): I’m learning programming, application development (PC, mobile, web) and database management.",
 "Bac Pro SN (Systèmes numériques)": "Bac Pro SN (Digital Systems)",
 "Bac Pro SN option RISC (Réseaux informatiques et systèmes communicants), j’ai appris à installer, configurer et dépanner des équipements réseau tout en assurant leur sécurité.": "Bac Pro SN with the RISC option (Computer Networks and Communicating Systems): I learned to install, configure and troubleshoot network equipment while keeping it secure.",
 "Expériences professionnelles": "Work experience",
 "Préparateur de commande E-commerce": "E-commerce order picker",
 "2025 - Présent (job étudiant)": "2025 - Present (student job)",
 "Réceptionner et prendre en charge les commandes clients": "Receive and process customer orders",
 "Prélever les produits dans les rayons et respecter les quantités demandées": "Pick products from the shelves and respect the requested quantities",
 "Accueillir le client lors du retrait de sa commande et lui remettre ses achats": "Welcome customers when they collect their order and hand over their purchases",
 "Respecter les règles d’hygiène, de sécurité et les délais de préparation": "Follow hygiene and safety rules and preparation deadlines",
 "Développeur logiciel (stage)": "Software developer (internship)",
 "Mai 2026 - Juin 2026 (7 semaines)": "May 2026 - June 2026 (7 weeks)",
 "Développement d’une partie du CRM interne à l’entreprise": "Development of part of the company’s internal CRM",
 "Gestion des demandes d'achat, commande, réception et mise en stocks des produits": "Management of purchase requests, orders, receiving and stocking of products",
 "Connexion aux différentes bases de données": "Connection to the various databases",
 "Gestion des droits utilisateurs (accès et rôles)": "User rights management (access and roles)",
 "Technicien de maintenance (stage)": "Maintenance technician (internship)",
 "2022 - 2025 (6 stages de 3 à 4 semaines chacun)": "2022 - 2025 (6 internships of 3 to 4 weeks each)",
 "Stages de seconde, de première et de terminale": "Internships during lycée (seconde, première and terminale)",
 "Maintenance et installation sur PC fixe, PC portable, imprimante et téléphone": "Maintenance and installation on desktop PCs, laptops, printers and phones",
 "Maintenance et installation à domicile": "Maintenance and installation at customers’ homes",
 "Gestion en autonomie des ateliers des différents magasins (première et terminale)": "Independent management of the workshops of the different stores (première and terminale)",
 "Gestion et formation d’un stagiaire (terminale)": "Management and training of an intern (terminale)",
 "Voici les différents projets que j’ai réalisés durant ma formation et mes stages.": "Here are the projects I carried out during my studies and internships.",
 "Développement d’un CRM": "CRM development",
 "Réalisé lors de mon stage de première année de BTS, ce projet m’a permis de travailler en mode projet et de mettre en pratique les connaissances acquises en cours.": "Carried out during my first-year BTS internship, this project allowed me to work in project mode and apply the knowledge gained in class.",
 "Au début du projet, j’ai réalisé un cahier des charges ainsi que des maquettes fonctionnelles, que j’ai ensuite présentés au responsable de l’entreprise. À la suite de cet entretien, j’ai commencé le développement de la solution en prenant en compte l’architecture et le code existants.": "At the start of the project, I wrote a requirements specification and functional mockups, which I then presented to the company manager. After this meeting, I began developing the solution, taking the existing architecture and code into account.",
 "L’objectif était de développer un CRM permettant de gérer l’ensemble du processus d’achat et de gestion des produits. J’ai notamment développé plusieurs espaces : un espace permettant aux employés de créer des demandes d’achat, un espace dédié à la responsable pour passer les commandes, ainsi qu’un espace permettant aux employés de réceptionner les produits et de les mettre en stock.": "The goal was to develop a CRM to manage the entire purchasing and product management process. In particular, I developed several areas: one for employees to create purchase requests, one for the manager to place orders, and one for employees to receive products and put them into stock.",
 "Le projet comprenait également la gestion des informations relatives aux produits (libellé, prix, quantité, fournisseur, numéro de série ou de lot, etc.), tout en veillant à garantir la cohérence et l’intégrité des données en base de données. J’ai également mis en place une gestion des droits utilisateurs ainsi que des mesures de sécurité pour protéger le CRM et la base de données.": "The project also included managing product information (label, price, quantity, supplier, serial or batch number, etc.), while ensuring data consistency and integrity in the database. I also implemented user rights management and security measures to protect the CRM and the database.",
 "À l’issue des sept semaines de stage, j’ai livré le projet dans son intégralité, avec une solution fonctionnelle répondant aux besoins définis par l’entreprise.": "At the end of the seven-week internship, I delivered the complete project, with a working solution that met the needs defined by the company.",
 "Information :": "Information:",
 "toutes les informations visibles sur ces captures d’écran sont fausses. Ce sont des exemples et des tests réalisés pendant le développement.": "all the information visible in these screenshots is fake. It consists of examples and tests carried out during development.",
 "Cliquez sur une image pour l’agrandir et lire sa légende.": "Click an image to enlarge it and read its caption.",
 "Formations en ligne suivies en complément du BTS :": "Online courses taken alongside the BTS:",
 "re": "st",
 "année": "year",
 "e": "nd",
 "année de BTS": "year of BTS",
 "Quatre cours suivis pendant ma première année de BTS. Cliquez sur un cours pour afficher sa fiche.": "Four courses taken during my first year of BTS. Click a course to show its sheet.",
 "Cybersécurité": "Cybersecurity",
 "Découvrir les bases de la sécurité numérique": "Discover the basics of digital security",
 "Cours terminé": "Course completed",
 "· Démarré le 7 janv. 2026": "· Started Jan 7, 2026",
 "Descriptif :": "Description:",
 "Cours d’initiation à la cybersécurité : comprendre les menaces courantes et adopter les bons réflexes pour protéger ses données et ses comptes.": "Introductory cybersecurity course: understand common threats and adopt good habits to protect your data and accounts.",
 "Fiche de synthèse :": "Summary sheet:",
 "Principales menaces (hameçonnage, logiciels malveillants, mots de passe faibles)": "Main threats (phishing, malware, weak passwords)",
 "Bonnes pratiques de protection des données et des accès": "Good practices for protecting data and access",
 "Pourquoi ce choix :": "Why this choice:",
 "Compléter mes bases en systèmes et réseaux (Bac Pro SN) par la sécurité, qu’un développeur doit intégrer dès la conception.": "To complement my systems and networks foundations (Bac Pro SN) with security, which a developer must build in from the design stage.",
 "Lien avec mon projet :": "Link with my project:",
 "Dans mon CRM, j’ai mis en place une gestion des droits utilisateurs et des mesures de sécurité pour protéger l’application et la base de données.": "In my CRM, I implemented user rights management and security measures to protect the application and the database.",
 "Lien avec ma formation :": "Link with my training:",
 "Lié à la cybersécurité des services informatiques, l’un des blocs de compétences du BTS SIO.": "Related to the cybersecurity of IT services, one of the skill blocks of the BTS SIO.",
 "Développement": "Development",
 "Créer une maquette web avec Figma": "Create a web mockup with Figma",
 "· Démarré le 20 janv. 2026": "· Started Jan 20, 2026",
 "Cours pour apprendre à concevoir la maquette d’un site web avec Figma, de la structure des pages à la mise en forme de l’interface.": "Course on designing a website mockup with Figma, from page structure to interface styling.",
 "Organiser une interface (pages, blocs, composants)": "Organise an interface (pages, blocks, components)",
 "Produire une maquette claire à présenter avant le développement": "Produce a clear mockup to present before development",
 "Le maquettage est la première étape d’un projet web et Figma est très utilisé par les équipes de développement.": "Mockup design is the first step of a web project, and Figma is widely used by development teams.",
 "Pour le CRM, j’ai réalisé des maquettes fonctionnelles, présentées au responsable de l’entreprise avant de commencer le développement.": "For the CRM, I created functional mockups, presented to the company manager before starting development.",
 "Complète la conception d’applications vue en SLAM. Figma fait partie de mes compétences.": "Complements the application design covered in SLAM. Figma is one of my skills.",
 "Intégrer l’IA générative dans son quotidien": "Integrate generative AI into your daily life",
 "· Démarré le 3 févr. 2026": "· Started Feb 3, 2026",
 "Cours de découverte de l’IA générative : comprendre son fonctionnement et l’utiliser efficacement et de façon responsable.": "Introductory course on generative AI: understand how it works and use it effectively and responsibly.",
 "Principes de l’IA générative et rédaction de requêtes (prompts)": "Principles of generative AI and writing prompts",
 "Limites et précautions : vérifier les résultats, protéger les données": "Limits and precautions: check results, protect data",
 "Comprendre un outil devenu courant dans les métiers du développement, afin de l’utiliser avec esprit critique.": "To understand a tool that has become common in development jobs, so I can use it with a critical mind.",
 "Peut servir d’appui pour la documentation ou la recherche de solutions pendant un projet comme le CRM, à condition de toujours vérifier les résultats.": "Can serve as support for documentation or finding solutions during a project like the CRM, provided the results are always checked.",
 "Utile pour les recherches et la veille technologique demandées en BTS SIO.": "Useful for the research and technology watch required in the BTS SIO.",
 "Apprendre à programmer avec JavaScript": "Learn to program with JavaScript",
 "En cours (28 % de progression)": "In progress (28% complete)",
 "· Démarré le 10 févr. 2026": "· Started Feb 10, 2026",
 "Cours d’initiation à la programmation avec JavaScript, le langage du web côté navigateur. Ce cours n’est pas encore terminé.": "Introductory course on programming with JavaScript, the browser-side language of the web. This course is not yet completed.",
 "Bases du langage (variables, conditions, boucles, fonctions)": "Language basics (variables, conditions, loops, functions)",
 "Suite du programme à compléter prochainement": "Rest of the programme to be completed soon",
 "JavaScript est indispensable pour devenir développeur Full-Stack, mon objectif.": "JavaScript is essential to become a Full-Stack developer, which is my goal.",
 "Permettra de rendre les interfaces plus dynamiques, par exemple l’ajout et la suppression de lignes produit dans le formulaire de demande d’achat du CRM.": "Will make interfaces more dynamic, for example adding and removing product lines in the CRM’s purchase request form.",
 "Renforce le développement web abordé en SLAM.": "Strengthens the web development covered in SLAM.",
 "49 salles terminées": "49 rooms completed",
 "TryHackMe est une plateforme d’apprentissage de la cybersécurité par la pratique : chaque « salle » propose un cours et des exercices dans un environnement virtuel.": "TryHackMe is a hands-on cybersecurity learning platform: each “room” offers a lesson and exercises in a virtual environment.",
 "Badges obtenus :": "Badges earned:",
 "thèmes travaillés": "topics covered",
 "Réseau, Linux et Windows (Networking, Linux…)": "Networking, Linux and Windows (Networking, Linux…)",
 "Cryptographie et attaques sur les mots de passe (CyberChef, Hydra)": "Cryptography and password attacks (CyberChef, Hydra)",
 "Sécurité web : OWASP Top 10, injections SQL, tests d’intrusion guidés": "Web security: OWASP Top 10, SQL injections, guided penetration tests",
 "Programmation Python et bases du DevSecOps": "Python programming and DevSecOps basics",
 "Supervision et détection d’incidents (Splunk, Wazuh, SOC)": "Monitoring and incident detection (Splunk, Wazuh, SOC)",
 "Compléter mes compétences en réseau et en sécurité, un domaine plutôt orienté SISR alors que je suis en SLAM, pour être plus polyvalent.": "To complement my skills in networking and security, a field more oriented towards SISR while I’m in SLAM, so I can be more versatile.",
 "Les salles sur l’OWASP Top 10 et les injections SQL m’aident à repérer les failles courantes à éviter dans une application comme mon CRM.": "The rooms on the OWASP Top 10 and SQL injections help me spot common flaws to avoid in an application like my CRM.",
 "Complète ce qui est vu en cours de SLAM, en m’appuyant sur mes bases en réseau du Bac Pro SN (option RISC).": "Complements what is covered in SLAM classes, building on my networking foundations from the Bac Pro SN (RISC option).",
 "En quoi cela me servira pour mon futur :": "How this will help me in the future:",
 "TryHackMe est plutôt utile pour les SISR (réseau) ; étant en SLAM (développement), cela va me permettre d’acquérir des compétences en plus de celles vues en cours. Cela me sera utile pour être plus compétent dans divers domaines.": "TryHackMe is mostly useful for SISR (networking); being in SLAM (development), it will let me gain skills in addition to those covered in class. It will help me be more competent in various fields.",
 "En quoi cela m’a servi durant mes études :": "How this helped me during my studies:",
 "à acquérir des compétences en réseau (qui n’est pas ma spécialisation) et en développement.": "to gain skills in networking (which is not my specialisation) and in development.",
 "M. Tessier": "Mr. Tessier",
 "Mme Correc": "Mrs. Correc",
 "M. Menard": "Mr. Menard",
 "Coordinateur magasin & développeur": "Store coordinator & developer",
 "Appréciation du stage de BTS (première année).": "Feedback on the BTS internship (first year).",
 "Professeure (Bac Pro SN)": "Teacher (Bac Pro SN)",
 "Appréciation de l’année de lycée (Bac Pro).": "Feedback on the lycée year (Bac Pro).",
 "Responsable magasin & technicien": "Store manager & technician",
 "Appréciation du stage de terminale.": "Feedback on the terminale internship.",
 "Vous pouvez me contacter à tout moment via :": "You can contact me at any time via:",
 "Localisation": "Location",
 "Téléphone": "Phone",
 "E-mail": "Email",
 "Envoi en cours…": "Sending…",
 "Votre message a bien été envoyé. Merci !": "Your message has been sent. Thank you!",
 "Envoyer": "Send",
 "– Tous droits réservés": "– All rights reserved"
};
  var PREFIX = [["Agrandir : ", "Enlarge: "], ["Capture d’écran du CRM : ", "CRM screenshot: "]];
  var ATTRS = ['placeholder', 'aria-label', 'title', 'alt', 'data-title', 'data-description'];
  var root = document.documentElement;
  var btn = document.getElementById('lang-toggle');

  function norm(t) { return t.replace(/\s+/g, ' ').trim(); }
  function tr(t) {
    var k = norm(t);
    if (Object.prototype.hasOwnProperty.call(EN, k)) return EN[k];
    for (var i = 0; i < PREFIX.length; i++) {
      if (k.indexOf(PREFIX[i][0]) === 0) {
        var r = tr(k.slice(PREFIX[i][0].length));
        return r === null ? null : PREFIX[i][1] + r;
      }
    }
    return null;
  }

  // Mémoriser les textes et attributs d'origine (français)
  var nodes = [], attrs = [];
  var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode: function (n) {
      var p = n.parentNode;
      if (!norm(n.nodeValue)) return NodeFilter.FILTER_REJECT;
      if (p.closest('script, style, .typed, .typed-cursor, #theme-toggle, #lang-toggle')) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  });
  while (walker.nextNode()) nodes.push({ n: walker.currentNode, o: walker.currentNode.nodeValue });
  document.querySelectorAll('*').forEach(function (el) {
    if (el.id === 'theme-toggle' || el.id === 'lang-toggle') return;
    ATTRS.forEach(function (a) { if (el.hasAttribute(a)) attrs.push({ el: el, a: a, o: el.getAttribute(a) }); });
  });
  var frTitle = document.title;
  var metaDesc = document.querySelector('meta[name="description"]');
  var frDesc = metaDesc ? metaDesc.getAttribute('content') : '';
  var typedEl = document.querySelector('.typed');
  var frTyped = typedEl ? typedEl.getAttribute('data-typed-items') : '';

  function restartTyped(items) {
    if (!typedEl || !window.heroTyped || typeof Typed === 'undefined') return;
    var opts = window.heroTyped.options;
    window.heroTyped.destroy();
    typedEl.textContent = '';
    opts.strings = items.split(',').map(function (s) { return s.trim(); });
    window.heroTyped = new Typed('.typed', opts);
  }

  function apply(lang) {
    var en = lang === 'en';
    nodes.forEach(function (x) {
      var t = en ? tr(x.o) : null;
      x.n.nodeValue = t === null ? x.o : x.o.match(/^\s*/)[0] + t + x.o.match(/\s*$/)[0];
    });
    attrs.forEach(function (x) {
      var t = en ? tr(x.o) : null;
      x.el.setAttribute(x.a, t === null ? x.o : t);
    });
    document.title = (en && tr(frTitle)) || frTitle;
    if (metaDesc) metaDesc.setAttribute('content', (en && tr(frDesc)) || frDesc);
    root.lang = en ? 'en' : 'fr';
    if (typedEl) {
      var items = (en && tr(frTyped)) || frTyped;
      typedEl.setAttribute('data-typed-items', items);
      restartTyped(items);
    }
    if (btn) {
      btn.textContent = en ? 'FR' : 'EN';
      btn.setAttribute('aria-label', en ? 'Passer le site en français' : 'Switch the site to English');
      btn.setAttribute('title', en ? 'Français' : 'English');
    }
    if (window.glightbox && window.glightbox.reload) window.glightbox.reload();
    if (window.majTheme) window.majTheme();
  }

  function saved() { try { return localStorage.getItem('lang'); } catch (e) { return null; } }
  if (btn) {
    btn.addEventListener('click', function () {
      var next = root.lang === 'en' ? 'fr' : 'en';
      try { localStorage.setItem('lang', next); } catch (e) {}
      apply(next);
    });
  }
  if (saved() === 'en') apply('en'); else apply('fr');
})();
