// Intersection Observer for scroll reveal animations
document.addEventListener('DOMContentLoaded', () => {
    const reveals = document.querySelectorAll('.reveal');

    // IT Projects Database
    const itProjectsData = {
        "enterprise-network": {
            title: "Enterprise Network Infrastructure & Cybersecurity Lab",
            role: "Network Engineer, Systems Administrator & Security Engineer",
            teamSize: "3 Members",
            projectType: "Enterprise Network Design & Cybersecurity Simulation",
            overview: [
                "As the Network Engineer, Systems Administrator, and Security Engineer for a three-person team, I designed, configured, and secured a simulated enterprise network that replicated the infrastructure of a modern business environment. Starting with base installations of Windows Server and Red Hat Enterprise Linux, I deployed enterprise services, configured network connectivity, implemented security controls, and integrated both Windows and Linux systems into a centralized Active Directory domain.",
                "The network was designed using separate WAN, DMZ, and internal LAN segments connected by VyOS routers and secured through an OPNsense Firewall. The environment supported a public-facing e-commerce website, enterprise email services, centralized authentication, database services, and continuous infrastructure monitoring. Throughout the project, the environment was subjected to simulated red team attacks, requiring real-time monitoring, incident response, and continuous security improvements.",
                "The project provided hands-on experience with enterprise networking, systems administration, cybersecurity operations, Active Directory management, firewall administration, Linux and Windows server deployment, and collaborative infrastructure engineering within a realistic business environment."
            ],
            diagram: {
                src: "images/enterprise-network-diagram.png",
                caption: "Detailed network topology mapping WAN, DMZ (IIS Webserver & MariaDB Database Server), and LAN segments secured via OPNsense and VyOS Routers."
            },
            roleContributions: [
                "Configured base installations of Windows Server and RHEL, defining network topologies and addressing schemas.",
                "Deployed and configured Active Directory Domain Services, DNS, Group Policy (4 GPOs), Microsoft Exchange, IIS, MariaDB, Wazuh SIEM, and Zabbix.",
                "Implemented an internal Certificate Authority to issue SSL certificates and enable secure HTTPS for the IIS web application.",
                "Configured 30+ default-deny firewall security policies on the OPNsense Firewall, enforcing traffic segmentation and NAT.",
                "Hardened Windows and Linux environments, minimizing attack surfaces and applying role-based access control (RBAC).",
                "Served as lead defender during simulated red team cyberattacks; monitored SIEM, parsed firewall logs, detected IP spoofing, and mitigated threats via IP blocking and firewall adjustments."
            ],
            stats: {
                "Role": "Lead Systems & Security Engineer",
                "Team Size": "3 Members",
                "Firewall Rules": "30+ Rules (OPNsense)",
                "GPOs Enforced": "4 GPOs",
                "Architecture": "WAN, DMZ, and LAN Segmented",
                "Monitoring": "Wazuh SIEM & Zabbix"
            },
            skills: [
                "Enterprise Network Design",
                "Firewall Administration",
                "Systems Administration",
                "Active Directory (AD DS)",
                "Linux & Windows Hardening",
                "SIEM Monitoring",
                "Incident Response",
                "Network Address Translation (NAT)",
                "PKI / Certificate Management"
            ],
            techStack: {
                "Networking": ["OPNsense", "VyOS", "NAT", "Routing & Segmentation"],
                "Microsoft Stack": ["Active Directory", "DNS", "Exchange Server", "IIS Web Server", "Group Policy", "Certificate Services (CA)"],
                "Operating Systems": ["Windows Server", "RHEL", "Windows 11"],
                "Security & Monitoring": ["Wazuh SIEM", "Zabbix", "SSL Certificates", "OS Hardening", "RBAC"],
                "Applications": ["MariaDB", "Thunderbird Mail", "Firefox"]
            }
        },
        "pentest-redteam": {
            title: "AI-Assisted Red Team Penetration Testing",
            role: "Sole Red Team Operator",
            teamSize: "Independent",
            projectType: "Penetration Testing & Red Team Operations",
            overview: [
                "This project was an individual penetration testing engagement focused on assessing the security of a simulated enterprise environment. Acting as the sole Red Team operator, I conducted a multi-phase attack against an organization's infrastructure to identify vulnerabilities, gain unauthorized access, escalate privileges, and evaluate the overall security posture. The assessment followed a realistic attack progression, beginning with internet-facing systems before moving into the DMZ and ultimately the internal LAN. Every stage of the engagement was documented in a professional penetration testing report that included technical findings, evidence, business impact, and remediation recommendations.",
                "The target environment consisted of three primary network zones: WAN (Internet-Facing Network) – Initial reconnaissance and external attack surface assessment; DMZ (Screened Subnet) – Windows web server and RHEL database server hosting publicly accessible services; Internal LAN – Active Directory Domain Controller, DNS services, Windows workstations, and Linux systems. The engagement simulated a realistic attacker progressing through each network layer while identifying opportunities for privilege escalation, persistence, and lateral movement."
            ],
            images: [
                { src: "images/nmap-scan.png", caption: "Initial port scanning and service enumeration via Nmap target discovery." },
                { src: "images/before-hack.png", caption: "Simulated public-facing web server interface before the exploit phase." },
                { src: "images/evil-winrm.png", caption: "Establishing command-line access to the host via Evil-WinRM." },
                { src: "images/openclaw-assist.png", caption: "OpenClaw AI assistant rendering target evaluation and exploit workflows." },
                { src: "images/openclaw-assist-2.png", caption: "Leveraging local AI model to script brute force and configuration checks." },
                { src: "images/after-hack.png", caption: "Privilege escalation and administrator level session establishment." },
                { src: "images/pentest-openclaw.png", caption: "Successful compromise of Active Directory Domain Controller services." }
            ],
            roleContributions: [
                "Independently planned and executed a multi-phase penetration test targeting WAN, DMZ, and internal LAN segments.",
                "Conducted thorough service enumeration and vulnerability discovery using Kali Linux, Nmap, and SMBClient.",
                "Exploited weak credentials and misconfigured services to gain initial access to Windows and Linux systems.",
                "Escalated local privileges to Administrator/Root and established persistence mechanisms across compromised endpoints.",
                "Demonstrated lateral movement within the LAN, culminating in full compromise of the Active Directory Domain Controller.",
                "Leveraged OpenClaw, a local AI agent, to automate log parsing, script scanning routines, and accelerate findings documentation.",
                "Authored a comprehensive, professional penetration testing report detailing attack paths, evidence, risk ratings, and detailed remediation advice."
            ],
            stats: {
                "Role": "Sole Red Team Operator",
                "Scope": "WAN, DMZ, & Internal LAN",
                "Target Systems": "AD Domain DC, Web & DB Servers",
                "AI Assistance": "OpenClaw Local Model",
                "Framework": "MITRE ATT&CK / OWASP"
            },
            skills: [
                "Enterprise Penetration Testing",
                "Red Team Operations",
                "Network Reconnaissance",
                "Vulnerability Assessment",
                "Active Directory Enumeration",
                "Windows & Linux Exploitation",
                "Privilege Escalation",
                "Lateral Movement",
                "Persistence Techniques",
                "Professional Security Reporting",
                "AI-Assisted Penetration Testing (OpenClaw Local Model)",
                "Risk Assessment & Remediation Planning",
                "MITRE ATT&CK Framework",
                "OWASP Security Principles"
            ],
            techStack: {
                "Offensive Platform": ["Kali Linux"],
                "Reconnaissance": ["Nmap", "Netdiscover", "SMBClient"],
                "Access & Exploitation": ["Evil-WinRM", "OpenSSH", "Reverse Shells"],
                "AI Security Agent": ["OpenClaw Local Model"],
                "Target Environments": ["Active Directory", "Windows Server", "RHEL", "Windows Workstations"]
            }
        }
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });

    reveals.forEach(reveal => {
        observer.observe(reveal);
    });

    // Particle.js configuration
    if (window.particlesJS) {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 40,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": ["#00f0ff", "#b000ff", "#ffffff"]
                },
                "shape": {
                    "type": "circle",
                },
                "opacity": {
                    "value": 0.3,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.1,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 1.5,
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 0.5
                        }
                    },
                    "push": {
                        "particles_nb": 4
                    }
                }
            },
            "retina_detect": true
        });
    }

    // Portfolio Filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add to clicked
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.classList.remove('hidden');
                    // Add a tiny delay for animation
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.classList.add('hidden');
                    }, 300);
                }
            });
        });
    });

    // Lightbox Functionality
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const closeLightbox = document.querySelector('.lightbox-close');

    if (lightbox) {
        portfolioItems.forEach(item => {
            item.addEventListener('click', () => {
                const img = item.querySelector('img');
                const caption = item.querySelector('h3').innerText;
                
                lightboxImg.src = img.src;
                lightboxCaption.innerText = caption;
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden'; // Prevent scrolling
            });
        });

        const closeLB = () => {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
            // Clear src after fade out
            setTimeout(() => {
                if(!lightbox.classList.contains('active')) {
                    lightboxImg.src = '';
                }
            }, 400);
        };

        closeLightbox.addEventListener('click', closeLB);

        lightbox.addEventListener('click', (e) => {
            if (e.target !== lightboxImg) {
                closeLB();
            }
        });
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && lightbox.classList.contains('active')) {
                closeLB();
            }
        });
    }

    // Main Portfolio Category Tabs (Creative vs IT)
    const mainTabBtns = document.querySelectorAll('.main-tab-btn');
    const subPortfolios = document.querySelectorAll('.portfolio-sub-content');

    mainTabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            mainTabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const tabTarget = btn.getAttribute('data-tab');

            subPortfolios.forEach(portfolio => {
                if (portfolio.id === `${tabTarget}-portfolio`) {
                    portfolio.classList.add('active');
                } else {
                    portfolio.classList.remove('active');
                }
            });
        });
    });

    // IT Case Study Modal
    const csModal = document.getElementById('case-study-modal');
    const csBody = document.getElementById('case-study-body');
    const csClose = document.querySelector('.case-study-close');
    const itViewBtns = document.querySelectorAll('.it-view-btn');

    if (csModal && csBody) {
        itViewBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const projectId = btn.getAttribute('data-project-id');
                const project = itProjectsData[projectId];

                if (!project) return;

                // Build HTML
                let overviewHTML = project.overview.map(p => `<p>${p}</p>`).join('');
                
                let contributionsHTML = project.roleContributions.map(c => `<li>${c}</li>`).join('');
                
                let statsHTML = Object.entries(project.stats).map(([key, val]) => `
                    <li>
                        <span class="cs-stats-label">${key}</span>
                        <span class="cs-stats-value">${val}</span>
                    </li>
                `).join('');

                let techStackHTML = Object.entries(project.techStack).map(([group, tags]) => `
                    <div class="cs-tech-group">
                        <span class="cs-tech-group-title">${group}</span>
                        <div class="cs-tech-tags">
                            ${tags.map(t => `<span class="cs-tech-tag">${t}</span>`).join('')}
                        </div>
                    </div>
                `).join('');

                let skillsHTML = project.skills.map(s => `<span class="cs-skill-badge">${s}</span>`).join('');

                let diagramHTML = '';
                if (project.diagram) {
                    diagramHTML = `
                        <div class="cs-diagram-container">
                            <img class="cs-diagram" src="${project.diagram.src}" alt="${project.title} Diagram" data-caption="${project.diagram.caption}">
                            <div class="cs-diagram-caption">${project.diagram.caption}</div>
                        </div>
                    `;
                }

                let galleryHTML = '';
                if (project.images && project.images.length > 0) {
                    galleryHTML = `
                        <div class="cs-section">
                            <h4>Project Gallery & Evidence</h4>
                            <div class="cs-gallery-grid">
                                ${project.images.map(img => `
                                    <div class="cs-gallery-item">
                                        <img class="cs-gallery-img" src="${img.src}" alt="${img.caption}" data-caption="${img.caption}">
                                        <div class="cs-gallery-caption">${img.caption}</div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    `;
                }

                csBody.innerHTML = `
                    <div class="cs-header">
                        <span class="it-category">${project.projectType}</span>
                        <h2 class="cs-title">${project.title}</h2>
                        <div class="cs-meta">
                            <div class="cs-meta-item">Role: <strong>${project.role}</strong></div>
                            <div class="cs-meta-item">Team: <strong>${project.teamSize}</strong></div>
                        </div>
                    </div>
                    <div class="cs-layout">
                        <div class="cs-main-content">
                            <div class="cs-section">
                                <h4>Overview</h4>
                                <div class="cs-text">${overviewHTML}</div>
                            </div>
                            ${diagramHTML}
                            ${galleryHTML}
                            <div class="cs-section">
                                <h4>Key Deliverables & Contributions</h4>
                                <ul class="cs-bullet-list">${contributionsHTML}</ul>
                            </div>
                        </div>
                        <div class="cs-sidebar">
                            <div class="cs-sidebar-card">
                                <h5>Project Specs</h5>
                                <ul class="cs-stats-list">${statsHTML}</ul>
                            </div>
                            <div class="cs-sidebar-card">
                                <h5>Technologies Used</h5>
                                ${techStackHTML}
                            </div>
                            <div class="cs-sidebar-card">
                                <h5>Skills Demonstrated</h5>
                                <div class="cs-skills-list">${skillsHTML}</div>
                            </div>
                        </div>
                    </div>
                `;

                // Add zoom effect handler to case study diagrams and gallery images
                const zoomableImgs = csBody.querySelectorAll('.cs-diagram, .cs-gallery-img');
                zoomableImgs.forEach(img => {
                    img.addEventListener('click', () => {
                        const lightbox = document.getElementById('lightbox');
                        const lightboxImg = document.getElementById('lightbox-img');
                        const lightboxCaption = document.getElementById('lightbox-caption');
                        if (lightbox && lightboxImg) {
                            lightboxImg.src = img.src;
                            lightboxCaption.innerText = img.getAttribute('data-caption') || img.alt;
                            lightbox.classList.add('active');
                            document.body.style.overflow = 'hidden';
                        }
                    });
                });

                csModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        });

        const closeCS = () => {
            csModal.classList.remove('active');
            document.body.style.overflow = '';
            setTimeout(() => {
                if (!csModal.classList.contains('active')) {
                    csBody.innerHTML = '';
                }
            }, 400);
        };

        if (csClose) {
            csClose.addEventListener('click', closeCS);
        }

        csModal.addEventListener('click', (e) => {
            if (e.target === csModal) {
                closeCS();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && csModal.classList.contains('active')) {
                closeCS();
            }
        });
    }
});
