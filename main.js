const person = {
    general: {
        firstName: 'artem',
        lastName: 'skachko',
        gender: 'male',
        age: `${new Date().getFullYear() - 1988}`,
        location: "Batumi, Georgia",
        languages: [
            {
                name: 'Ukrainian',
                level: 'С2',
            },
            {
                name: 'English',
                level: 'B2',
            },
            {
                name: 'Russian',
                level: 'С2',
            },
        ]
    },
    contacts: {
        phone: ['+380991153048'],
        email: 'as.skachko@gmail.com',
        messengers: [
            {
                name: 'telegram',
                nickname: '@Artem_Skachko',
                href: 'https://t.me/Artem_Skachko',
                iconClass: 'fab fa-telegram',
            },
            {
                name: 'viber',
                nickname: '+380991153048',
                href: `viber://chat?number=%2B+380991153048`,
                iconClass: 'fab fa-viber',
            },
            {
                name: 'whatsapp',
                nickname: '+380991153048',
                href: `https://wa.me/+380991153048`,
                iconClass: 'fab fa-whatsapp',
            },
        ],
        socials: [
            {
                name: 'linkedIn',
                iconClass: 'fab fa-linkedin',
                href: 'https://linkedin.com/in/art-skachko',
            },
            {
                name: 'bechance',
                iconClass: 'fab fa-behance-square',
                href: 'https://behance.net/as_skachko',
            },
            {
                name: 'facebook',
                iconClass: 'fab fa-facebook',
                href: 'https://facebook.com/art.skachko',
            }
        ],
    },
    skills:[
        {
            section: 'Front-end',
            items: [
                {
                    name: 'HTML',
                    experience: 5,
                },
                {
                    name: 'javaScript',
                    experience: 2,
                },
                {
                    name: 'CSS',
                    experience: 5,
                },
                {
                    name: 'SASS/LESS',
                    experience: 3,
                },
                {
                    name: 'Git',
                    experience: 3,
                },
                {
                    name: 'AJAX',
                    experience: 1,
                },
                {
                    name: 'React',
                    experience: 1,
                },
                {
                    name: 'Wordpress',
                    experience: 5,
                },
                {
                    name: 'Elementor',
                    experience: 5,
                },
                {
                    name: 'JSON',
                    experience: 5,
                },
                {
                    name: 'APIs',
                    experience: 2,
                },
                {
                    name: 'WPO',
                    experience: 2,
                },
            ]
        },
        {
            section: 'Back-end',
            items: [
                {
                    name: 'Postman',
                    experience: 2,
                },
                {
                    name: 'mySQL',
                    experience: 2,
                },
                {
                    name: 'phpMyAdmin',
                    experience: 2,
                },
                {
                    name: 'Webmin/Virtualmin',
                    experience: 2,
                },
                {
                    name: 'HeidiSQL',
                    experience: 2,
                },
                {
                    name: 'CLI',
                    experience: 2,
                },
            ]
        },
        {
            section: 'Design',
            items: [
                {
                    name: 'Illustrator (Ai)',
                    experience: 5,
                },
                {
                    name: 'Figma',
                    experience: 4,
                },
                {
                    name: 'Photoshop (Ps)',
                    experience: 10,
                },
                {
                    name: 'UX/UI',
                    experience: 5,
                },
                {
                    name: 'inDesign (Id)',
                    experience: 3,
                },
                {
                    name: 'Google material',
                    experience: 4,
                },
                {
                    name: 'Tilda',
                    experience: 3,
                },
                {
                    name: 'Responsive design',
                    experience: 5,
                },
            ]
        },
        {
            section: 'Management',
            items: [
                {
                    name: 'Agile',
                    experience: 2,
                },
                {
                    name: 'Team management',
                    experience: 2,
                },
                {
                    name: 'Planning',
                    experience: 2,
                },
                {
                    name: 'Risk management',
                    experience: 8,
                },
                {
                    name: 'Project planing',
                    experience: 3,
                },
                {
                    name: 'Problem solving',
                    experience: 8,
                },
                {
                    name: 'Negotiation',
                    experience: 8,
                },
                {
                    name: 'Technical writing',
                    experience: 8,
                },
                {
                    name: 'Conflict management',
                    experience: 8,
                },
                {
                    name: 'Budgeting',
                    experience: 8,
                },
            ]
        },
        {
            section: 'Other',
            items: [
                {
                    name: 'Property evaluation',
                    experience: 10,
                },
                {
                    name: 'Research skills',
                    experience: 10,
                },
                {
                    name: 'System administration',
                    experience: 2,
                },
                {
                    name: 'Hardware management',
                    experience: 2,
                },
                {
                    name: 'Miro',
                    experience: 2,
                },
                {
                    name: 'Trello',
                    experience: 3,
                },
                {
                    name: 'Asana',
                    experience: 3,
                },
                {
                    name: 'SEO',
                    experience: 2,
                },
            ]
        },
        {
            section: 'Soft skills',
            items: [
                {
                    name: 'Self-Study',
                    experience: 10,
                },

            ]
        },
    ],
    education: {
        basic: [
            {
                name: `Mykhailo Tuhan-Baranovskyi Donetsk National University of Economics and Trade`,
                specialization: `Accounting and Auditing`,
                qualification: `Accounting and Auditing professional`,
                startDate: 2006,
                endDate: 2009,
            },
            {
                name: `Donetsk Polytechnic College`,
                specialization: `Finance and credit`,
                qualification: `Junior Specialist`,
                startDate: 2003,
                endDate: 2006,
            },
        ],
        additional: [
            {
                name: `Accredited Property Appraiser`,
                certification: 'State Property Fund of Ukraine, Ukrainian Society of Appraisers',
                startDate: 2012,
                endDate: 2012,
            },
            {
                name: `Arbitration Manager (property manager, managing of readjustment, liquidation).`,
                certification: 'Ministry of Justice of Ukraine (2017)',
                startDate: 2014,
                endDate: 2017,
            },
        ],
    },
    interests: [
        'DIY',
        'design trends',
        'management',
        'programming',
        'robots',
        'data analysis'
    ],
    messengers: [
        {
            href: 'https://t.me/Artem_Skachko',
            iconClass: 'fab fa-telegram',
        },
        {
            href: `viber://chat?number=%2B+380991153048`,
            iconClass: 'fab fa-viber',
        },
        {
            href: `https://wa.me/+380991153048`,
            iconClass: 'fab fa-whatsapp',
        },
    ],
    experience: [
        {
            startDate: 2003,
            endDate: 2006,
            companyName: `Commodity Exchange "Donetsk Universal Commodity Exchange"`,
            position: `computing center technician`,
            description: `Maintenance and technical support of servers and workstations of the exchange, network equipment and internal networks,
            Digitization, processing and updating of large data sets`,
        },
        {
            startDate: 2008,
            endDate: 2009,
            companyName: `'Privat Bank' OJSC`,
            position: `Expert of the direction "Car on credit"`,
            description: `Advice to clients regarding bank products, initial assessment of solvency for making a decision on granting a loan, 
            preparation, verification and signing of loan agreements, verification of collateral, work with problem debts.`,
        },
        {
            startDate: 2010,
            endDate: 2011,
            companyName: `'Foxtrot' OJSC`,
            position: `Sales assistant (digital goods & computers)`,
            description: `Acceptance, registration of goods at the warehouse.
            Unpacking, initial setup and display of goods on showcases.
            Consulting on the product and its properties, product presentation, sales registration, post-sales customization.`,
        },
        {
            startDate: 2011,
            endDate: 2012,
            companyName: `'Delta Bank' OJSC`,
            position: `loan officer`,
            description: `Advising on the services provided by the bank, assessing the creditworthiness, drawing up loan agreements, working with problem debts.`,
        },
        {
            startDate: 2019,
            endDate: 2025,
            companyName: `'Remote Helpers'`,
            position: `Fullstack Designer => Frontend developer => Project manager`,
            description: `Development of strategies, planning, personnel management,
             management of internal and external projects. Analysis of candidates,
             conducting interviews, mentorship, accompanying employees on overseas projects,
             resolving disputes and conflicts both within the company and on projects involving company employees. 
             Consulting company clients on technical solutions and technologies, selecting necessary specialists,
             forming project teams. Practical activities in the field of design,
             front-end development, and development of comprehensive solutions.`,
        },
        {
            startDate: 2017,
            endDate: 2025,
            companyName: `Self-employment`,
            position: `Trustee in Bankruptcy`,
            description: `Practical activities in the field of independent appraisal of the value of property and property rights.
            Working with government agencies on the assessment of the value and sale of property that is in tax lien, as well as in judicial rehabilitation and liquidation procedures`,
        },
        {
            startDate: 2020,
            endDate: 2021,
            companyName: `'Dino - tech solutions'`,
            position: `Front-end developer`,
            description: `Development, support and maintenance of web resources.
            In particular, development using CMS Wordpress, both using ready-made templates / constructors, and creating themes from scratch.
            Maintenance and optimization of large client resources, including migrations, backup and data recovery`,
        },
        {
            startDate: 2012,
            endDate: 2025,
            companyName: `'MIS' LLC`,
            position: `Expert in assessing the value of property and property rights`,
            description: `Practical activities in the field of independent appraisal of the value of property and property rights.
            Working with government agencies on the assessment of the value and sale of property that is in tax lien, as well as in judicial rehabilitation and liquidation procedures`,
        },
    ],
    competitions: ['designer', 'front-end engineer', 'project manager'],
    about: [
        `I am a manager and engineer by profession. However, let me shed some light on the details.<br>`,
        `Born into a family of engineers, I have always had a fascination with taking things apart and seeing how they work.`,
        `With time and education, I gained the knowledge and wisdom to identify flaws in things and processes, and to improve and create something new.<br>`,
        `After exploring and studying various fields, I have developed the ability to solve a vast number of problems and tasks, making me an engineer.`,
        `Currently, I engage in activities such as researching, planning, designing, constructing, developing, documenting, producing, commissioning`,
        `testing, repairing, disposing, and quality management. It doesn't matter to me what the field is, the scale of the project or how complex it is.<br>`,
        `My current area of interest is IT, and I believe it will continue to be interesting as long as AI doesn't take over the world.<br>`,
        `<b>Glory to Ukraine!</b>`
    ],

    drawHeader: function () {

        const name = `
            ${this.general.firstName ? this.general.firstName : 'John'} 
            ${this.general.lastName ? this.general.lastName : 'Doe'}`;
        const competitions = this.competitions ? this.competitions.map(item => `<span>${item}</span>`) : 'please create competitions array';

        const Header = `
            <header>
                    <h1>${name} <img src="assets/img/flag-ukraine.png" alt="im ukranian"></h1>
                    <h2>${competitions.join('<hr>')}</h2>
                    <div>
                        <button id="contact-button">Contacts</button>
                        <button id="print-button"><i class="fa-solid fa-print"></i></button>
                    </div>
                    
            </header>`;

        document.body.insertAdjacentHTML('beforeend', Header);
    },
    drawBody: function () {
        const randomizer = Math.floor(Math.random()*6);
        const experience = this.experience.sort((a,b) => b.endDate < a.endDate ? -1: 1).map(item => `<div>
                            <h4>${item.companyName} <span>${item.startDate} - ${item.endDate < new Date().getFullYear() ? item.endDate : 'now'}</span></h4>
                            <h5><u>Position:</u> ${item.position}</h5>
                            <p>${item.description}</p>
                        </div>`);
        const languages = this.general.languages.map(item => `<span>${item.name}<i>${item.level}</i></span>`);
        const skills = this.skills.map(item => `
            <h5>${item.section}</h5>
            <div class="skills-row">
                ${item.items.map(skill => 
                    `<span>${skill.name}
                            <i>${skill.experience}y</i>
                        </span>`)
                .join('')}
            </div>`)
        const interests = this.interests.map(item => `<span>${item}</span>`);
        const edu_additional = this.education.additional.map(item => `
                <h4>${item.name} <span>${item.startDate} - ${item.endDate < new Date().getFullYear() ? item.endDate : 'now'}</span></h4>
                <h5><u>Certification:</u> ${item.certification}</h5>
            `);
        const edu_basic = this.education.basic.map(item => `
                <h4>${item.name} <span>${item.startDate} - ${item.endDate < new Date().getFullYear() ? item.endDate : 'now'}</span></h4>
                <h5><u>Specialization:</u> ${item.specialization}</h5>
                <h5><u>Qualification:</u> ${item.qualification}</h5>
            `);

        const Layout = `<main>
            <aside>
                <section class="location">
                    <h3>current location</h3>
                    <article>
                    ${this.general.location}
                </article>
            </section>
                <section class="languages">
                <h3>languages</h3>
                <article>
                ${languages.join('')}
                </article>
            </section>
                
                <section class="skills_tools">
                    <h3>skills & tools</h3>
                    <article>
                        ${skills.join('')}
                    </article>
                    <span id="desc">* The skills and tools specified above are used and improved daily</span>
            </section>
                <section class="interests">
                <h3>hobbies & interests</h3>
                <article>
                    ${interests.join('')}
                </article>
            </section>    
            </aside>
            <section id="main">
                <article class="about">
                    <img src="assets/portraits/face-${randomizer}.jpg" alt="face">
                    
                        <h3>Shortly about me</h3>
                        <p>
                            ${this.about.join(' ')}
                        </p>
                    
                </article>   
                <article class="experience">
                    <h3>work experience</h3>
                    <section>
                        ${experience.join('')}
                    </section>
                </article>
                <article class="education">
                    <h3>Education</h3>
                    <section class="edu_basic">
                        ${edu_basic.join('')}
                    </section>
                    <section class="edu_additional">
                        ${edu_additional.join('')}
                    </section>
                </article>
            </section>
        </main>`;
        document.body.insertAdjacentHTML('beforeend', Layout);
    },
    drawContacts: function (){
        const socials = this.contacts.messengers.map(item => `
                    <a href=${item.href} data-value=${item.nickname}>
                        <i class='${item.iconClass}'></i>
                        ${item.name}
                    </a>`);

        document.body.insertAdjacentHTML('beforeend', `
            <section class="contacts">
                    
                    <div id="modal">
                        <a href="tel:${this.contacts.phone}">
                            <i class="fa-solid fa-mobile"></i>
                            ${this.contacts.phone}
                        </a>
                        <a href="mailto:${this.contacts.email}">
                            <i class="fa-regular fa-envelope"></i> ${this.contacts.email}
                        </a>
                        
                        ${socials.join('')}
                    </div>
                    <i class="fa-regular fa-circle-xmark"></i>
            </section>
        `)
    },
    modalHandler: function (){
        const contactSection = document.querySelector('.contacts')

        document.querySelector('header #contact-button').addEventListener('click', showModal);

        function showModal() {
            const visibility = getComputedStyle(contactSection).display;
            visibility === 'none' ? contactSection.style.display = 'flex' : contactSection.style.display = 'none';
            setTimeout(() => {contactSection.classList.toggle('visible')}, 200);
            document.body.style.overflow = 'hidden';
            contactSection.addEventListener('click', hideModal)

        }

        function hideModal(e) {
            e.stopPropagation();
            const visibility = getComputedStyle(contactSection).display;
            const closeBtn = contactSection.querySelector('.fa-circle-xmark')

            if (e.target === contactSection || e.target === closeBtn){
                contactSection.classList.toggle('visible');
                setTimeout(()=> visibility === 'none'
                    ? contactSection.style.display = 'flex'
                    : contactSection.style.display = 'none' ,200);
                document.body.style.overflow = 'unset';
                contactSection.removeEventListener('click', hideModal);
            }
        }


    },
    printActions: function (){
        const contactGroup = `
        <article class="print-contacts">
            <section class="print-g-contacts">
                <span><s>Phone</s>: ${this.contacts.phone}</span>
                <span><s>Email</s>: ${this.contacts.email}</span>
                <hr>
            </section>
            <section class="print-g-messengers">
                ${this.contacts.messengers.map(item => `<span><s>${item.name}</s>: ${item.nickname}</span>`).join('')}
            </section>
            <section class="print-g-socials">
                ${this.contacts.socials.map(item => `<span><s>${item.name}</s>: ${item.href.slice(8,)}</span>`).join('')}
            </section>
        </article>
        `;


        document.querySelector('header #print-button').addEventListener('click', letsPrint);
        function letsPrint(){
            window.onbeforeprint = (e) => {
                document.querySelector('.print-contacts') === null
                ?
                document.querySelector('#main').insertAdjacentHTML('afterbegin', contactGroup)
                :
                '';
            }
            window.print();

            window.onafterprint = (e) => {
                document.querySelector('.print-contacts').remove()
            }
        }
    },


    Render: function () {
        this.drawHeader();
        this.drawBody();
        this.drawContacts();
        this.modalHandler();
        this.printActions();
    }
}

person.Render()

