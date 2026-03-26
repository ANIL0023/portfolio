export const portfolioData = {
    name: "Anil Kumar",
    title: "Full Stack Developer | MERN Stack Developer | Computer Science Student",
    location: "Karnal, Haryana",
    tagline: "Building scalable web applications and solving real-world problems with modern technologies.",
    email: "anilkumar564443@gmail.com",
    phone: "+91 9996934364",
    github: "https://github.com/ANIL0023",
    linkedin: "https://www.linkedin.com/in/anil-kumar-3032032a4/",
    resume: "https://drive.google.com/file/d/1ZEOQs3BcQKKmwJN8KlKUl1dIUqd3Cy9K/view?usp=sharing",
    web3formsKey: "b8dd7173-f76c-47cb-833c-e69d0fc75671",
    profileImage: "/profile-new.png",
    about: "I am a B.Tech Computer Science student passionate about full-stack development, building scalable web applications, and solving technical problems. I have experience with the MERN stack, Python development, and backend systems. I love learning new technologies and applying them to solve real-world problems.",

    certificates: [
        { name: "ChatGPT 4 Prompt Engineering", issuer: "Infosys", link: "https://drive.google.com/file/d/1LyTfc79MUaDUxvV-vXaFBDWs4XyfaXsW/view" },
        { name: "Master Generative AI & Generative AI tool", issuer: "Udemy", link: "https://drive.google.com/file/d/1HQM-E9E_fY2iatOlOzHLxhNPDrsvlo-Z/view" },
        { name: "Build Generative AI Apps and Solutions with No-Code Tools", issuer: "Infosys", link: "https://drive.google.com/file/d/1HQM-E9E_fY2iatOlOzHLxhNPDrsvlo-Z/view" },
        { name: "Introduction to Hardware Operating System", issuer: "IBM", link: "https://drive.google.com/file/d/12EzP0Rg_mtrUmlsXKFnJhd8AOcjm0CPi/view" },
        { name: "Basic Python towards AI/ML", issuer: "CSE Pathshala", link: "https://drive.google.com/file/d/12EzP0Rg_mtrUmlsXKFnJhd8AOcjm0CPi/view" },
    ],

    skills: {
        languages: ["C++", "Python", "Java", "C"],
        web: ["React.js", "Node.js", "Express.js", "HTML", "JavaScript", "Tailwind CSS"],
        tools: ["MongoDB", "MS SQL Server", "Tableau", "ETL", "IDQ"],
        soft: ["Problem Solving", "Team Player", "Adaptability"]
    },

    projects: [
        {
            title: "Digital Learning Platform for Rural Schools",
            description: "A full-stack MERN application for rural education access with role-based authentication, attendance tracking, and study material sharing.",
            tech: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
            image: "/projects/rural-education.png",
            github: "https://github.com/ANIL0023/Class-project-",
            link: "#"
        },
        {
            title: "Church Management System",
            description: "Web-based system to automate church administration, event scheduling, and communication modules.",
            tech: ["PHP", "HTML", "JavaScript", "Tailwind CSS"],
            image: "/projects/church-mgmt.png",
            github: "https://github.com/ANIL0023/church_management",
            link: "#"
        },
        {
            title: "Enterprise Audit and Network Discovery System",
            description: "Python-based system to audit IT infrastructure security, featuring hardware/software auditing and vulnerability detection.",
            tech: ["Python", "Socket Programming", "Risk Scoring"],
            image: "/projects/network-audit.png",
            github: "https://github.com/ANIL0023/Enterprise-Network-Audit-Discovery-System",
            link: "#"
        },
        {
            title: "Blog Platform",
            description: "A modern, full-featured blog platform built with Next.js, featuring Google authentication and a clean management interface.",
            tech: ["Next.js", "React", "MongoDB", "Tailwind CSS", "NextAuth.js"],
            image: "/projects/blog-platform.png",
            github: "https://github.com/ANIL0023/BLOG",
            link: "https://blog-w273.vercel.app/"
        }
    ],

    education: [
        {
            degree: "Bachelor of Technology in Computer Science and Engineering",
            institution: "Lovely Professional University",
            cgpa: "6.66",
            year: "2021 - Present"
        },
        {
            degree: "Intermediate (PCM)",
            institution: "Kendriya Vidyalaya",
            score: "60%",
            year: "2020"
        },
        {
            degree: "Matriculation",
            institution: "Army Public School",
            score: "70%",
            year: "2018"
        }
    ],
    internships: [
        {
            company: "DRDO – Terminal Ballistic Research Laboratory (TBRL)",
            location: "Chandigarh",
            role: "Software Development Intern",
            period: "2025", 
            description: "Developed a LAN-based Enterprise Network Audit and Discovery System to analyze and strengthen IT infrastructure security. The system automatically discovers devices across a network and performs detailed system audits on both Windows and Linux environments.",
            details: [
                "Implemented modules to assess system vulnerabilities such as RDP exposure, Bluetooth status, firewall configuration, and removable media activity.",
                "Generated risk-based classifications to identify potential security threats.",
                "Stored audit logs and historical records in a SQLite database for compliance tracking and structured analysis.",
                "Built features to generate automated PDF security reports summarizing system configurations, detected vulnerabilities, and severity levels."
            ],
            technologies: ["Python", "Tkinter", "SQLite", "ReportLab", "SSH", "WinRM", "Paramiko", "psutil", "Socket Programming", "JSON", "Threading"],
            certificate: "https://drive.google.com/file/d/1U8jZMqnBfBXFfD2WMySOm_o3blo04v2q/view?usp=sharing"
        }
    ],
    achievements: [
        {
            title: "LeetCode Achievements",
            description: "Successfully solved 150+ DSA questions on LeetCode, demonstrating strong analytical skills and proficiency in algorithms and data structures.",
            icon: "Code"
        }
    ]
};
