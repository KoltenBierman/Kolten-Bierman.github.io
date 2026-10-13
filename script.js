// Intersection Observer for scroll reveal animations
document.addEventListener('DOMContentLoaded', () => {
    const reveals = document.querySelectorAll('.reveal');

    // Projects Database for Project Modals & Technical Deep Dives
    const itProjectsData = {
        // --- 1. CYBERSECURITY & ENTERPRISE INFRASTRUCTURE ---
        "enterprise-network": {
            title: "Dogpark Enterprise Infrastructure Project",
            role: "Enterprise Infrastructure & Blue Team Defense Lead",
            teamSize: "CSUSB Systems & Security Unit",
            projectType: "Simulated Enterprise Network Design, Hardening & Cyber Defense",
            overview: [
                "Architected and defended a simulated enterprise network at California State University, San Bernardino for the simulated corporate organization \"KAM Industries.\"",
                "Designed and deployed a multi-tier infrastructure segmented into isolated WAN, DMZ, and internal LAN environments with Active Directory Domain Services (AD DS), OPNsense and VyOS firewalls, and Wazuh SIEM monitoring.",
                "Defended the enterprise against live red team intrusions and achieved an audited 94% defensive baseline compliance on NIST CSF 2.0 and NIST SP 800-53 controls via the Cyber Security Evaluation Tool (CSET)."
            ],
            diagram: {
                src: "images/enterprise-network-diagram.png",
                caption: "Detailed network topology mapping WAN, DMZ (IIS Webserver & Database Server), and internal LAN segments secured via OPNsense and VyOS firewalls."
            },
            roleContributions: [
                "Simulated Enterprise Architecture: Architected the complete enterprise environment for simulated company 'KAM Industries,' deploying Windows Server Active Directory, group policies (GPOs), organizational units, and multi-tier network segmentation.",
                "Firewall & Routing Engineering: Configured perimeter and internal firewalls (OPNsense and VyOS) with stateful inspection, strict Access Control Lists (ACLs), and NAT to isolate production assets from public-facing DMZ servers.",
                "Blue Team Security & SIEM: Deployed and configured Wazuh SIEM agents across hosts, establishing real-time telemetry pipelines and actively defending corporate assets against live intrusion attempts.",
                "NIST Compliance Auditing: Authored organizational security policies mapped to NIST CSF 2.0 and NIST SP 800-53 controls, achieving a verified 94% defensive baseline via CSET.",
                "Infrastructure Hardening: Hardened Windows and Linux environments, minimizing attack surfaces and applying strict role-based access control (RBAC) and least-privilege principles."
            ],
            stats: {
                "Simulated Enterprise": "KAM Industries",
                "Architecture": "Segmented WAN, DMZ & LAN",
                "Identity & Directory": "Active Directory (AD DS) & GPO",
                "Defensive Score": "94% Audited Baseline (CSET)",
                "Frameworks": "NIST CSF 2.0 & NIST SP 800-53",
                "SIEM Platform": "Wazuh SIEM Live Threat Hunting"
            },
            skills: [
                "Enterprise Architecture",
                "Active Directory Implementation",
                "Network Segmentation",
                "OPNsense & VyOS Firewalls",
                "Blue Team Defense",
                "Wazuh SIEM Monitoring",
                "Threat Hunting & Telemetry",
                "NIST CSF 2.0 / 800-53",
                "CSET Auditing & Governance"
            ],
            techStack: {
                "Networking & Firewalls": ["OPNsense", "VyOS", "VLANs & Subnetting", "Routing & NAT", "Firewall ACLs"],
                "Identity & Systems": ["Active Directory (AD DS)", "Group Policy (GPO)", "IIS Web Server", "Windows Server", "RHEL & Ubuntu Linux"],
                "Defensive Security": ["Wazuh SIEM Agents", "Tenable Nessus", "SQLMap", "CSET Tool", "RBAC & Account Isolation"]
            }
        },

        "kam-industries": {
            title: "Dogpark Enterprise Infrastructure Project",
            role: "Enterprise Infrastructure & Blue Team Defense Lead",
            teamSize: "CSUSB Systems & Security Unit",
            projectType: "Simulated Enterprise Network Design, Hardening & Cyber Defense",
            overview: [
                "Architected and defended a simulated enterprise network at California State University, San Bernardino for the simulated corporate organization \"KAM Industries.\"",
                "Designed and deployed a multi-tier infrastructure segmented into isolated WAN, DMZ, and internal LAN environments with Active Directory Domain Services (AD DS), OPNsense and VyOS firewalls, and Wazuh SIEM monitoring.",
                "Defended the enterprise against live red team intrusions and achieved an audited 94% defensive baseline compliance on NIST CSF 2.0 and NIST SP 800-53 controls via the Cyber Security Evaluation Tool (CSET)."
            ],
            diagram: {
                src: "images/enterprise-network-diagram.png",
                caption: "Detailed network topology mapping WAN, DMZ (IIS Webserver & Database Server), and internal LAN segments secured via OPNsense and VyOS firewalls."
            },
            roleContributions: [
                "Simulated Enterprise Architecture: Architected the complete enterprise environment for simulated company 'KAM Industries,' deploying Windows Server Active Directory, group policies (GPOs), organizational units, and multi-tier network segmentation.",
                "Firewall & Routing Engineering: Configured perimeter and internal firewalls (OPNsense and VyOS) with stateful inspection, strict Access Control Lists (ACLs), and NAT to isolate production assets from public-facing DMZ servers.",
                "Blue Team Security & SIEM: Deployed and configured Wazuh SIEM agents across hosts, establishing real-time telemetry pipelines and actively defending corporate assets against live intrusion attempts.",
                "NIST Compliance Auditing: Authored organizational security policies mapped to NIST CSF 2.0 and NIST SP 800-53 controls, achieving a verified 94% defensive baseline via CSET.",
                "Infrastructure Hardening: Hardened Windows and Linux environments, minimizing attack surfaces and applying strict role-based access control (RBAC) and least-privilege principles."
            ],
            stats: {
                "Simulated Enterprise": "KAM Industries",
                "Architecture": "Segmented WAN, DMZ & LAN",
                "Identity & Directory": "Active Directory (AD DS) & GPO",
                "Defensive Score": "94% Audited Baseline (CSET)",
                "Frameworks": "NIST CSF 2.0 & NIST SP 800-53",
                "SIEM Platform": "Wazuh SIEM Live Threat Hunting"
            },
            skills: [
                "Enterprise Architecture",
                "Active Directory Implementation",
                "Network Segmentation",
                "OPNsense & VyOS Firewalls",
                "Blue Team Defense",
                "Wazuh SIEM Monitoring",
                "Threat Hunting & Telemetry",
                "NIST CSF 2.0 / 800-53",
                "CSET Auditing & Governance"
            ],
            techStack: {
                "Networking & Firewalls": ["OPNsense", "VyOS", "VLANs & Subnetting", "Routing & NAT", "Firewall ACLs"],
                "Identity & Systems": ["Active Directory (AD DS)", "Group Policy (GPO)", "IIS Web Server", "Windows Server", "RHEL & Ubuntu Linux"],
                "Defensive Security": ["Wazuh SIEM Agents", "Tenable Nessus", "SQLMap", "CSET Tool", "RBAC & Account Isolation"]
            }
        },

        "pentest-redteam": {
            title: "Dogpark Penetration Test & Risk Assessment",
            role: "Brown Team 1 Lead Contributor / Penetration Tester",
            teamSize: "CSUSB Offensive Security Assessment Unit",
            projectType: "Enterprise Penetration Test & Critical Infrastructure Security Assessment",
            overview: [
                "Spearheaded and executed an intensive, authorized internal penetration test against live enterprise infrastructure spanning corporate WAN nodes, DMZ, screened subnets, Active Directory domain architecture, and production servers.",
                "Extended security evaluations to assess attack surfaces in simulated critical infrastructure sectors (smart water utilities and telecommunications routing backbones), analyzing lateral movement paths from enterprise IT networks into sensitive Operational Technology (OT) control systems.",
                "Compiled a professional, client-ready formal findings report detailing critical vulnerabilities, exploitation lines, CVSS 3.1 risk scores, and prescriptive remediation roadmaps."
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
                "Enterprise Exploitation: Identified and exploited critical vulnerabilities inside Windows Server (IIS), Linux PostgreSQL, and Active Directory, demonstrating post-exploitation credential harvesting and lateral movement.",
                "Critical Infrastructure Analysis: Analyzed security postures across simulated municipal utilities and telecommunications backbones, modeling how threat actors pivot from corporate IT LANs across boundary firewalls into OT control subnets.",
                "Remote Access Targeting: Analyzed and targeted remote access mechanisms (WinRM and SSH), revealing structural credential weaknesses and protocol misconfigurations.",
                "AI-Accelerated Reconnaissance: Integrated local AI tooling (OpenClaw) with Kali Linux, Nmap, and Evil-WinRM to automate reconnaissance parsing, correlate attack chains, and streamline evidence documentation.",
                "Executive Deliverable: Authored an executive-level formal penetration testing report with CVSS 3.1 modeling and prioritized remediation guidance."
            ],
            stats: {
                "Institution": "CSUSB",
                "Assessment Period": "April 20 – 26, 2026",
                "Primary Targets": "AD Domain DC, IIS Web, PostgreSQL DB",
                "Extended Scope": "Smart Water Utility & Telecommunications (OT/ICS)",
                "Scoring Standard": "CVSS 3.1 Vulnerability Framework",
                "AI Acceleration": "OpenClaw Local Model"
            },
            skills: [
                "Ethical Hacking",
                "Active Directory Security",
                "Critical Infrastructure Security",
                "Operational Technology (OT) Awareness",
                "Remote Access Security (WinRM/SSH)",
                "Threat Modeling & Attack Paths",
                "Business Impact Analysis",
                "CVSS 3.1 Scoring"
            ],
            techStack: {
                "Offensive Platform": ["Kali Linux", "Metasploit Framework", "Evil-WinRM", "OpenSSH", "Nmap", "Burp Suite Pro"],
                "Target Systems": ["Active Directory Domain Services", "Windows Server (IIS)", "Linux (PostgreSQL)", "Simulated SCADA / OT Utilities"],
                "Frameworks & Tools": ["CVSS 3.1", "MITRE ATT&CK", "OpenClaw Local Model", "Formal Attestation Reporting"]
            }
        },

        "critical-infra": {
            title: "Dogpark Penetration Test & Risk Assessment",
            role: "Brown Team 1 Lead Contributor / Penetration Tester",
            teamSize: "CSUSB Offensive Security Assessment Unit",
            projectType: "Enterprise Penetration Test & Critical Infrastructure Security Assessment",
            overview: [
                "Spearheaded and executed an intensive, authorized internal penetration test against live enterprise infrastructure spanning corporate WAN nodes, DMZ, screened subnets, Active Directory domain architecture, and production servers.",
                "Extended security evaluations to assess attack surfaces in simulated critical infrastructure sectors (smart water utilities and telecommunications routing backbones), analyzing lateral movement paths from enterprise IT networks into sensitive Operational Technology (OT) control systems.",
                "Compiled a professional, client-ready formal findings report detailing critical vulnerabilities, exploitation lines, CVSS 3.1 risk scores, and prescriptive remediation roadmaps."
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
                "Enterprise Exploitation: Identified and exploited critical vulnerabilities inside Windows Server (IIS), Linux PostgreSQL, and Active Directory, demonstrating post-exploitation credential harvesting and lateral movement.",
                "Critical Infrastructure Analysis: Analyzed security postures across simulated municipal utilities and telecommunications backbones, modeling how threat actors pivot from corporate IT LANs across boundary firewalls into OT control subnets.",
                "Remote Access Targeting: Analyzed and targeted remote access mechanisms (WinRM and SSH), revealing structural credential weaknesses and protocol misconfigurations.",
                "AI-Accelerated Reconnaissance: Integrated local AI tooling (OpenClaw) with Kali Linux, Nmap, and Evil-WinRM to automate reconnaissance parsing, correlate attack chains, and streamline evidence documentation.",
                "Executive Deliverable: Authored an executive-level formal penetration testing report with CVSS 3.1 modeling and prioritized remediation guidance."
            ],
            stats: {
                "Institution": "CSUSB",
                "Assessment Period": "April 20 – 26, 2026",
                "Primary Targets": "AD Domain DC, IIS Web, PostgreSQL DB",
                "Extended Scope": "Smart Water Utility & Telecommunications (OT/ICS)",
                "Scoring Standard": "CVSS 3.1 Vulnerability Framework",
                "AI Acceleration": "OpenClaw Local Model"
            },
            skills: [
                "Ethical Hacking",
                "Active Directory Security",
                "Critical Infrastructure Security",
                "Operational Technology (OT) Awareness",
                "Remote Access Security (WinRM/SSH)",
                "Threat Modeling & Attack Paths",
                "Business Impact Analysis",
                "CVSS 3.1 Scoring"
            ],
            techStack: {
                "Offensive Platform": ["Kali Linux", "Metasploit Framework", "Evil-WinRM", "OpenSSH", "Nmap", "Burp Suite Pro"],
                "Target Systems": ["Active Directory Domain Services", "Windows Server (IIS)", "Linux (PostgreSQL)", "Simulated SCADA / OT Utilities"],
                "Frameworks & Tools": ["CVSS 3.1", "MITRE ATT&CK", "OpenClaw Local Model", "Formal Attestation Reporting"]
            }
        },

        "meeting-minds": {
            title: "From DMX to IP: How Lighting Control Systems in Themed Entertainment Have Evolved into Modern Information Systems",
            role: "Presenter | CSUSB Meeting of the Minds",
            teamSize: "Independent Academic Research Presentation",
            projectType: "University Research Conference Presentation (CSUSB)",
            overview: [
                "“From DMX to IP: How Lighting Control Systems in Themed Entertainment Have Evolved into Modern Information Systems,” which I presented at CSUSB’s Meeting of the Minds research conference.",
                "The project examined how entertainment lighting protocols like Art-Net and Streaming ACN, or sACN, have evolved into IP-based networks that require knowledge of networking, VLANs, managed switches, and cybersecurity.",
                "Conducting this research allowed me to combine my love of information systems with my love of themed entertainment while exploring how operational technologies increasingly resemble enterprise IT environments."
            ],
            roleContributions: [
                "Protocol Evolution Research: Analyzed the technical transition from legacy serial RS-485 DMX512 standards to modern Ethernet-based UDP broadcast and multicast protocols, specifically Art-Net and sACN (ANSI E1.31).",
                "Network Architecture & Segmentation: Demonstrated the necessity of managed network switches, IGMP snooping, and dedicated VLAN segmentation to prevent multicast saturation and packet collision in high-density live show networks.",
                "Operational Technology Cybersecurity: Evaluated emerging cyber attack surfaces in connected entertainment systems, illustrating why theme park lighting networks require the same defense-in-depth, access control, and network isolation as enterprise IT.",
                "Conference Presentation: Presented and defended original findings before CSUSB faculty, department leadership, and academic peers at the annual Meeting of the Minds symposium."
            ],
            stats: {
                "Presentation Venue": "CSUSB Meeting of the Minds Research Conference",
                "Role": "Presenter",
                "Core Subject": "From DMX to IP in Themed Entertainment",
                "Protocols Evaluated": "Art-Net, sACN (ANSI E1.31) & DMX512",
                "Network Focus": "VLANs, IGMP Snooping & Managed Switches",
                "Convergence": "Operational Technology (OT) & Enterprise IT"
            },
            skills: [
                "Art-Net Protocol",
                "Streaming ACN (sACN)",
                "DMX512 Standards",
                "Managed Switch Configuration",
                "VLAN Segmentation",
                "IGMP Snooping",
                "OT Cybersecurity",
                "Public Speaking",
                "Academic Research Presentation"
            ],
            techStack: {
                "Lighting & Show Protocols": ["Art-Net (UDP)", "Streaming ACN / sACN (ANSI E1.31)", "DMX512-A", "RDM"],
                "Network Infrastructure": ["Managed Layer 2/3 Switches", "VLAN Segmentation", "Multicast & IGMP Snooping", "QoS Priority Queuing"],
                "Security & Architecture": ["Operational Technology Hardening", "Network Air-Gapping", "Broadcast Storm Protection"]
            }
        },

        // --- 2. SOFTWARE DEVELOPMENT, AI & AUTOMATION ---
        "props-tracker": {
            title: "Halloween Props Tracker",
            role: "Lead Software Architect & Developer",
            teamSize: "Castle Park Production / Independent Software",
            projectType: "Custom Inventory & Asset Management Software",
            overview: [
                "Architected and coded a standalone custom asset management database platform designed to replace legacy manual logging, completely transforming how high-value themed entertainment props, animatronics, SFX modules, and technical lighting rigs are tracked across multiple physical locations.",
                "Constructed a dynamic QR-code system allowing floor staff to instantly scan, verify, and log gear on mobile devices or handheld scanners.",
                "Integrated Python modules with OpenPyXL to automate instant Excel sheet generation for inventory audits, executive budget mapping, and post-season asset planning."
            ],
            roleContributions: [
                "Central Asset Ledger: Designed a normalized schema capturing unique asset IDs, comprehensive descriptions, categorical tags, purchase data, active deployment locations, and real-time operational status.",
                "QR-Native Tracking: Programmed a dynamic, inline QR code generator that prints individual machine-readable labels used by floor staff to quickly scan, log, and verify equipment.",
                "Dynamic Chain of Custody: Constructed location-management workflows to smoothly track inventory movement between off-site warehouses, central workshops, and active, live-show attractions.",
                "Reporting Pipelines: Integrated custom Python modules to instantly output pristine Excel sheets for inventory audits, executive budget mapping, and post-season asset planning."
            ],
            stats: {
                "Language": "Python 3",
                "Database": "Relational SQL Architecture",
                "Interface": "Custom Desktop GUI",
                "Scanning": "Dynamic Inline QR Matrix Generation",
                "Reporting": "OpenPyXL Automated Excel Exports",
                "Operational Impact": "Halved Annual Physical Audit Times"
            },
            skills: [
                "Full-Stack Software Development",
                "Relational Database Design",
                "QR System Architecture",
                "OpenPyXL Excel Automation",
                "Asset Lifecycle Management",
                "Chain of Custody Tracking"
            ],
            techStack: {
                "Core Programming": ["Python 3", "SQL", "Custom GUI Frameworks"],
                "Libraries & Engines": ["OpenPyXL", "QRCode Generator", "SQLite / Relational Database"],
                "Capabilities": ["Automated Excel Audits", "QR Label Printing", "Asset Movement Tracking"]
            }
        },

        "ai-campaign": {
            title: "AI Campaign Generator",
            role: "Full-Stack Engineer & AI Architect",
            teamSize: "Independent Software Application",
            projectType: "Full-Stack Artificial Intelligence Web Application",
            overview: [
                "Conceived and programmed a highly responsive, cloud-hosted narrative generation platform capable of building immersive storytelling environments, generating multi-turn campaign milestones, adaptive character arcs, branching dialogue, and session progress tracking based on user inputs.",
                "Structured a real-time Firebase cloud data architecture to securely store running campaign states, session context arrays, user authentication, and persistent data.",
                "Crafted modular automation pipelines inside n8n nodes to coordinate complex API calls, sanitize incoming strings, format model parameters, and manage background data processing linking local Ollama LLMs and Gemini API endpoints."
            ],
            roleContributions: [
                "Responsive Interface: Developed a clean front-end UI built for fluid, intuitive user storytelling inputs and prompt configurations.",
                "NoSQL Database Layer: Structured a real-time Firebase cloud data architecture to securely store running campaign states, session context arrays, user authentication, and persistent data.",
                "n8n Workflow Core: Crafted modular automation pipelines inside n8n nodes to coordinate complex API calls, sanitize incoming strings, format model parameters, and manage background data processing.",
                "Hybrid AI Orchestration: Engineered hybrid routing connecting local LLMs (Ollama) with Google Gemini API suite for low-latency reasoning and rich creative expansion."
            ],
            stats: {
                "Front-End": "HTML5 / CSS3 / JavaScript (ES6+)",
                "Cloud Backend": "Firebase Cloud Storage & Firestore",
                "Workflow Server": "n8n Automation Server Nodes",
                "AI Engines": "Ollama (Local LLM) & Gemini API",
                "Features": "Adaptive Characters, Branching Dialogue"
            },
            skills: [
                "Full-Stack Web Development",
                "AI Systems Integration",
                "Workflow Automation (n8n)",
                "Cloud Database Architecture",
                "Prompt Engineering",
                "API Orchestration"
            ],
            techStack: {
                "Front-End": ["HTML5", "CSS3", "JavaScript (ES6+)"],
                "Cloud & Data": ["Firebase Cloud Storage", "Firebase Auth", "NoSQL Firestore"],
                "AI & Automation": ["n8n Workflow Server", "Ollama Local LLM", "Gemini API Suite", "REST APIs"]
            }
        },

        "animatronic-bird": {
            title: "Interactive Animatronic Bird (Arduino Automation)",
            role: "Embedded Systems Engineer & Robotics Developer",
            teamSize: "Independent Themed Entertainment Tech",
            projectType: "Microcontroller & Embedded Hardware Engineering",
            overview: [
                "Designed and prototyped an independent, portable animatronic system optimized for close-up guest interactions and themed environment dressing.",
                "Programmed custom motion and effect routines featuring synchronized head movement, audio playback, and eye flicker effects.",
                "Integrated an infrared (IR) command receiver allowing operators to discretely fire specific show-control animations or ambient audio tracks from a distance, paired with a low-power, battery-optimized circuit."
            ],
            roleContributions: [
                "Microcontroller Logic: Wrote and flashed optimized control logic directly onto AVR microcontrollers (Arduino) utilizing PWM servo drivers.",
                "Motion & Effects Programming: Programmed head movement, sound, and eye flicker.",
                "Wireless IR Control: Integrated an infrared command receiver allowing discreet operator activation of custom cues and synchronized audio tracks from a distance.",
                "Circuit Engineering: Designed a low-power, battery-powered electrical schematic with power-rail isolation, allowing drop-in field deployment without tearing up scenery to run AC cables."
            ],
            stats: {
                "Platform": "Arduino (AVR Architecture)",
                "Actuation": "PWM Servomotors & Relays",
                "Effects": "Head Movement, Sound & Eye Flicker",
                "Control": "Wireless Infrared (IR) Command Array",
                "Power": "Battery-Optimized Low-Power Schematic"
            },
            skills: [
                "Embedded Systems Engineering",
                "PWM Servo Control",
                "Microcontroller Programming",
                "IR Control Systems",
                "Circuit Prototyping",
                "Low-Voltage Electronics"
            ],
            techStack: {
                "Hardware": ["Arduino Uno / Nano", "AVR Microcontroller", "PWM Servomotors", "IR Receiver Module", "Sound Module"],
                "Software": ["Arduino C++", "Motion & Effects Logic", "Low-Power Sleep Modes"],
                "Electronics": ["Circuit Bench-Testing", "Power Rail Isolation", "Soldering & Wiring Harnesses"]
            }
        },

        "raspberry-pi-node": {
            title: "Raspberry Pi Atmospheric Show Control Node",
            role: "Systems Integrator & Show Systems Developer",
            teamSize: "Themed Entertainment Tech / Production",
            projectType: "Microcomputing, Show Control & Environmental Automation",
            overview: [
                "Designed software scripts on the Raspberry Pi to intercept incoming audio frequencies and dynamically scale DMX-style lighting outputs to create responsive atmospheric effects.",
                "Engineered a standalone environmental atmospheric simulation engine that delivers tightly synchronized, random thunder audio tracks paired with strobe lighting effects."
            ],
            roleContributions: [
                "Audio-Reactive Logic: Developed Python/Bash scripts on Debian Linux to analyze incoming audio frequencies and dynamically modulate lighting outputs in real-time.",
                "Atmospheric Simulation: Engineered an autonomous thunderstorm simulation engine executing randomized ambient thunder audio tracks tightly synchronized with high-intensity strobe sequences.",
                "Lighting Integration: Synchronized high-intensity strobe cue patterns and DMX output stages to incoming audio transients."
            ],
            stats: {
                "Computing Node": "Raspberry Pi 5 (Debian Linux)",
                "Protocols": "Audio Frequency Interception & DMX512",
                "Audio Reactive": "Peak Frequency Interception",
                "Output": "Dynamic Strobe & DMX Modulation"
            },
            skills: [
                "Debian Linux Administration",
                "Show Control Automation",
                "Bash Scripting",
                "Audio-to-Light Synchronization",
                "DMX Lighting Control"
            ],
            techStack: {
                "Computing": ["Raspberry Pi 5", "Debian Linux", "Bash Scripting", "Python"],
                "Show Systems": ["DMX512 Lighting Control", "Audio DSP Interfacing", "Strobe Cues", "Real-Time Modulation"]
            }
        },

        // --- 3. THEMED ENTERTAINMENT & SEASONAL EVENTS ---
        "castle-dark": {
            title: "Castle Dark Flagship Project Portfolio",
            role: "Entertainment Manager / Project Lead",
            teamSize: "Castle Park Entertainment Division (100+ Staff)",
            projectType: "Flagship Large-Scale Seasonal Themed Event (USA Today Top 3)",
            overview: [
                "Served as the primary project lead for Castle Dark, Castle Park's flagship Halloween property, consistently maintaining its national ranking as a Top 3 Haunted Attraction in the United States by USA Today 10Best for two consecutive years.",
                "Directed the complete project lifecycle from initial concept development, world-building, scriptwriting, and spatial maze layouts through procurement, city permitting, technical installation, live operation of 100+ employees, and budget management exceeding $500,000.",
                "Generated more than $1 million in annual revenue while boosting net profitability by $100K+ through strategic planning, resource optimization, and technical innovation."
            ],
            roleContributions: [
                "Creative Direction & World-Building: Collaborated on attraction concepts, thematic scripts, and original characters (The Storyteller, The Witch, The Goblin, Bentley the Jester), perfectly balancing creative ambition against strict budget constraints and structural code limits.",
                "Maze Schematics & Spatial Design: Engineered pinpoint-accurate attraction layouts and maze blueprints using physical field measurements; optimized crowd throughput, eliminated bottlenecks, and mapped primary egress corridors.",
                "Permitting & Code Compliance: Primary liaison with city planners, building inspectors, and the Fire Marshal; authored structural approvals, verified flame-retardant treatments, occupancy limits, and ADA accessibility.",
                "Technical Show Systems: Oversaw integration of addressable DMX lighting, automated animatronics, custom pneumatic actuators, special effects (SFX) rigs, and multi-zone spatial audio networks.",
                "Workforce Leadership: Recruited, scheduled, and supervised a divisional workforce exceeding 100 performers, technicians, and area supervisors during high-capacity operations.",
                "Financial Governance: Managed production budgets exceeding $500,000 using custom Excel forecasting tools to maximize show quality and protect profit margins."
            ],
            stats: {
                "National Ranking": "Top 3 Haunted Attraction in US (USA Today 10Best)",
                "Event Revenue": "$1,000,000+ Annual Seasonal Revenue",
                "Profit Increase": "$100,000+ Net Profit Growth",
                "Division Workforce": "100+ Employees Managed",
                "Production Budget": "$500,000+ Capital & Operations Budget",
                "Compliance": "100% City & Fire Marshal Permitting Approval"
            },
            skills: [
                "Creative Direction",
                "Maze Layout Design",
                "Workforce Leadership (100+ Staff)",
                "Budget Governance ($500K+)",
                "Permitting & Code Compliance",
                "DMX & Show Systems",
                "Public Speaking"
            ],
            techStack: {
                "Show Systems": ["DMX512 Lighting", "Pneumatic Actuators & Valves", "Animatronics Automation", "Multi-Zone Spatial Audio", "SFX Fog & Strobes"],
                "Layout & Design": ["AutoCAD / Maze Floor Plans", "Queue Line Dynamics", "Emergency Egress Pathways", "ADA Compliance"],
                "Governance & Safety": ["City Permitting", "Fire Marshal Coordination", "Occupancy Limit Enforcement", "Excel Financial Forecasting"]
            }
        },

        "christmas-event": {
            title: "Christmas Event Development",
            role: "Entertainment Manager",
            teamSize: "Castle Park Operations Division",
            projectType: "Seasonal Family Entertainment Event & Winter Festival",
            overview: [
                "Led and participated in the strategic planning, multi-departmental development, operational sequencing, and on-the-ground daily management of Castle Park's winter holiday experience.",
                "Directed site layout optimization, holiday entertainment programming, operational labor scheduling, resource management, and technical asset installation plans across the park.",
                "Managed strict resource allocation and provided executive budget oversight to deliver a seamless, high-revenue family experience with optimal labor control."
            ],
            roleContributions: [
                "Site Layout Optimization: Engineered comprehensive holiday layout adjustments, queue configurations, and guest circulation paths across the park.",
                "Entertainment Programming: Programmed seasonal live entertainment, actor schedules, synchronized holiday lighting installations, and projection mapping features.",
                "Labor Scheduling & Budget Oversight: Developed labor allocation models and scheduled operations staff to maximize guest satisfaction while strictly controlling overtime and labor costs.",
                "Technical Asset Deployment: Directed installation and testing of park-wide lighting, projection mapping systems, and audio amplification networks."
            ],
            stats: {
                "Scope": "Park-Wide Holiday Transformation",
                "Key Technologies": "Projection Mapping & Synchronized Lighting",
                "Operations": "Multi-Departmental Labor Models",
                "Fiscal Control": "Executive Production Budget Oversight"
            },
            skills: [
                "Seasonal Event Management",
                "Projection Mapping",
                "Labor Scheduling",
                "Resource Allocation",
                "Interdepartmental Coordination",
                "Live Operations"
            ],
            techStack: {
                "Show Tech": ["Projection Mapping", "Park-Wide Holiday Lighting", "Audio Amplification", "Power Distribution"],
                "Operations Management": ["Staff Scheduling Models", "Excel Labor Forecasting", "Resource Leveling"]
            }
        },

        "mardi-gras-easter": {
            title: "Mardi Gras & Easter Seasonal Events",
            role: "Entertainment Manager",
            teamSize: "Castle Park Operations Division",
            projectType: "Seasonal Festivals & Family Entertainment Offerings",
            overview: [
                "Coordinated the design, logistics, staffing, and live operation of Castle Park's Mardi Gras and Easter-themed seasonal festivals.",
                "Spearheaded operational logistics, themed guest experience loops, performance schedules, tech coordination, interdepartmental communication, and temporary site logistics.",
                "Coordinated front-line staffing requirements, performer schedules, operational asset distribution, and guest service workflows to maintain high operational standards."
            ],
            roleContributions: [
                "Logistics & Site Operations: Managed physical site distribution of temporary themed assets, performance stages, and interactive guest stations.",
                "Entertainment Coordination: Scheduled performer cohorts, front-line staffing, and daily guest interaction loops.",
                "Technical Services: Coordinated audio, temporary power, and scenic placement with maintenance and facilities teams."
            ],
            stats: {
                "Events Managed": "Mardi Gras Festival & Easter Family Activations",
                "Scope": "Full-Park Themed Experience Loops",
                "Staffing": "Front-Line Staff & Actor Coordination",
                "Logistics": "Temporary Structural & Scenic Staging"
            },
            skills: [
                "Operational Logistics",
                "Performance Scheduling",
                "Temporary Site Logistics",
                "Staff Management",
                "Guest Experience Design"
            ],
            techStack: {
                "Operations": ["Guest Flow Logistics", "Staff Scheduling", "Event Staging", "Interdepartmental Workflows"]
            }
        },

        "midsummer-scream": {
            title: "Midsummer Scream Presenter",
            role: "Featured Speaker & Panelist (Representing Castle Dark)",
            teamSize: "Industry Panel Presentation",
            projectType: "Themed Entertainment Convention (2 Consecutive Years)",
            overview: [
                "Invited to speak as a featured panelist at Midsummer Scream for two consecutive years, representing Castle Dark and sharing event insights, seasonal promotions, and stories from that haunt year.",
                "Engaged with thousands of horror and themed entertainment enthusiasts, sharing promotional previews of seasonal offerings and attraction highlights.",
                "Delivered engaging presentations detailing stories and experiences from Castle Dark's award-winning haunt seasons."
            ],
            images: [
                { src: "images/midsummer-panel-1.webp", caption: "Midsummer Scream Professional Panel — Presenting Castle Dark event insights, seasonal promotions, and haunt stories to attendees." },
                { src: "images/midsummer-panel-2.webp", caption: "Featured Speaker Session — Representing Castle Dark on stage and sharing stories from that haunt year." }
            ],
            roleContributions: [
                "Castle Dark Representation: Represented Castle Dark as an invited panelist for two consecutive years, sharing event insights, seasonal promotions, and stories from each haunt year.",
                "Event Insights & Promotions: Highlighted upcoming seasonal attraction features, themed entertainment offerings, and festival dates to industry enthusiasts and convention attendees.",
                "Haunt Year Stories: Shared engaging production stories, lore development, and operational memories from Castle Dark's top-ranked seasons."
            ],
            stats: {
                "Recognition": "Featured Panelist (2 Consecutive Years)",
                "Venue": "Midsummer Scream Convention (Long Beach, CA)",
                "Audience": "Horror Enthusiasts, Industry Operators & Convention Attendees",
                "Topics": "Castle Dark Insights, Seasonal Promotions & Haunt Stories"
            },
            skills: [
                "Public Speaking",
                "Event Promotion",
                "Panel Presentations",
                "Brand Representation",
                "Storytelling"
            ],
            techStack: {
                "Presentation Topics": ["Castle Dark Event Insights", "Seasonal Promotions", "Haunt Year Stories", "Attraction Lore"]
            }
        }
    };

    // Scroll Reveal Intersection Observer
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

    // Mobile Navigation Toggle
    const mobileNavToggle = document.getElementById('mobile-nav-toggle');
    const navLinks = document.getElementById('nav-links');

    if (mobileNavToggle && navLinks) {
        mobileNavToggle.addEventListener('click', () => {
            mobileNavToggle.classList.toggle('active');
            navLinks.classList.toggle('mobile-active');
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileNavToggle.classList.remove('active');
                navLinks.classList.remove('mobile-active');
            });
        });
    }

    // Creative Portfolio Filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.classList.remove('hidden');
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

    // Global Skills Database (Master Matrix)
    window.skillsData = {
        "project-management": {
            title: "Project Management & Business Operations",
            category: "PROJECT MANAGEMENT & OPERATIONS",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>`,
            teaser: "Gantt scheduling, budget oversight ($500K+), cost estimation, WBS, procurement, risk registries, and vendor coordination.",
            preview: ["Microsoft Project", "Gantt Scheduling", "Budget Oversight ($500K+)", "Cost Estimation", "Risk Management", "Labor Models (100+ Staff)"],
            skills: [
                "Project Planning", "Scope Development", "Work Breakdown Structures (WBS)", "Milestone Planning & Scheduling",
                "Resource Allocation & Leveling", "Cost Estimation", "Budget Development & Forecasting", "Microsoft Excel Financial Modeling",
                "Risk Assessment & Mitigation Registries", "Procurement Planning",
                "Project Closeout", "Workforce Management (100+ Staff)", "Labor Planning & Staffing Models",
                "High-Volume Event Operations", "Cross-Disciplinary Team Leadership", "Vendor Coordination & Contract Support",
                "Process Improvement", "Technology Strategy", "Performance Monitoring", "Microsoft Project",
                "Microsoft Office Suite", "Google Workspace Suite"
            ]
        },

        "cybersecurity": {
            title: "Cybersecurity & Incident Response",
            category: "CYBERSECURITY & BLUE TEAM DEFENSE",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`,
            teaser: "SIEM monitoring, threat hunting, vulnerability management, defense-in-depth, and NIST framework compliance.",
            preview: ["Wazuh SIEM", "Vulnerability Management", "NIST CSF 2.0 / 800-53", "Threat Hunting", "Incident Response", "RBAC & Least Privilege"],
            skills: [
                "Vulnerability Assessments & Management", "Authorized Internal Penetration Testing", "Threat Modeling",
                "Business Impact Analysis", "Blue Team Incident Response", "Threat Hunting", "Log Analysis & Event Telemetry",
                "Security Governance & Auditing", "IAM & Role-Based Access Control (RBAC)", "Principle of Least Privilege",
                "NIST Cybersecurity Framework (CSF 2.0)", "NIST SP 800-53 Controls", "MITRE ATT&CK Matrix Mapping",
                "Zero Trust Architecture Concepts", "Wazuh SIEM Agents", "Tenable Nessus",
                "SQLMap", "Wireshark Packet Analysis", "Firewall Policy Enforcement"
            ]
        },

        "pentest-offensive": {
            title: "Offensive Security & Penetration Testing",
            category: "ETHICAL HACKING & RED TEAMING",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>`,
            teaser: "Authorized enterprise penetration testing, service exploitation, Active Directory compromise, and CVSS risk reporting.",
            preview: ["Kali Linux", "Metasploit", "Evil-WinRM / SSH", "Active Directory Testing", "CVSS Scoring", "Formal Pen Test Reports"],
            skills: [
                "Kali Linux Environment", "Metasploit Framework", "Evil-WinRM", "OpenSSH Protocol Assessment",
                "Burp Suite Pro Proxies", "Nmap Advanced Audits", "Non-Disruptive Service Enumeration", "Web App Vulnerabilities",
                "Local Privilege Escalation", "Lateral Movement & Pivoting", "Active Directory Domain Compromise", "Credential Weakness Exploitation",
                "Hashcat GPU Cracking", "John the Ripper Arrays", "CVSS 3.1 Vulnerability Modeling", "Client-Ready Attestation Reporting",
                "Business Risk Mapping", "AI-Assisted Security Operations (OpenClaw)"
            ]
        },

        "networking-infrastructure": {
            title: "Networking & Enterprise Infrastructure",
            category: "NETWORK ARCHITECTURE & ENGINEERING",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"></rect><rect x="2" y="16" width="6" height="6" rx="1"></rect><rect x="9" y="2" width="6" height="6" rx="1"></rect><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path><path d="M12 12V8"></path></svg>`,
            teaser: "Multi-segment WAN/DMZ/LAN routing, VLANs, OPNsense/VyOS firewalls, switch & fiber documentation.",
            preview: ["TCP/IP (IPv4/IPv6)", "VLANs & Subnetting", "Routing & Switching", "WAN / DMZ / LAN", "Fiber Infrastructure", "Firewall ACLs"],
            skills: [
                "TCP/IP (IPv4 & IPv6)", "Subnetting & CIDR", "VLAN Design & Trunking", "Routing & Switching Matrix Configurations",
                "DNS, DHCP & NAT", "Network Segmentation & DMZ Architecture", "Defense-in-Depth Engineering",
                "High Availability & Redundancy Planning", "Switch & Fiber Optic Documentation",
                "Physical & Logical Infrastructure Mapping", "Network Topology Engineering", "Cisco IOS Routing Concepts",
                "Cisco Packet Tracer Simulations", "OPNsense Firewall Administration", "VyOS Router Routing",
                "Low-Voltage Cabling & Patch Panels", "Field Network Troubleshooting"
            ]
        },

        "systems-virtualization": {
            title: "Systems Administration & Virtualization",
            category: "SYSTEMS & VIRTUALIZATION INFRASTRUCTURE",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2"></rect><rect x="2" y="14" width="20" height="8" rx="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>`,
            teaser: "Windows Server, Linux (RHEL/Ubuntu), Active Directory Domain Services, Group Policy, and hypervisors.",
            preview: ["Windows Server", "RHEL & Ubuntu Linux", "Active Directory (AD DS)", "Group Policy (GPO)", "VMware & Proxmox", "System Service Daemons"],
            skills: [
                "Windows 10/11", "Windows Server (IIS)", "Red Hat Enterprise Linux (RHEL)", "Ubuntu Linux",
                "Active Directory Domain Services (AD DS)", "Group Policy Objects (GPOs)", "Organizational Units (OUs)",
                "Microsoft 365, SharePoint & OneDrive", "VMware Workstation", "Proxmox Virtual Environment", "VirtualBox",
                "Virtual Machine Deployment & Snapshots", "OS Installation & Driver Updates", "OS Patching & Package Management",
                "System Hardening & Baseline Audits", "Linux Command Line Architecture", "System Service Daemon Monitoring",
                "Access Control Lists (ACLs)", "Kernel Hardening", "Backup & Disaster Recovery"
            ]
        },

        "ai-automation": {
            title: "Artificial Intelligence & Workflow Automation",
            category: "AI & WORKFLOW AUTOMATION",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path><path d="M12 6a6 6 0 0 0-6 6h12a6 6 0 0 0-6-6z"></path></svg>`,
            teaser: "Local and cloud LLM integrations (Gemini API, Ollama), prompt engineering, n8n workflow orchestration, and event-driven automation.",
            preview: ["Gemini API Suite", "Ollama Local LLMs", "Prompt Engineering", "n8n Automation Server", "Webhooks & REST APIs", "Autonomous Logic Trees"],
            skills: [
                "Google Gemini API Suite Integration", "Ollama Local LLM Deployments", "Prompt Engineering & Multi-Turn Context",
                "AI-Assisted Operations & Analysis", "Autonomous Logic Trees", "n8n Workflow Automation Server",
                "Modular Node Orchestration", "REST API Architecture", "Webhook Implementation", "Firebase Event Listeners",
                "Unstructured Payload Sanitization", "Automated Downstream API Triggers", "Industrial QR Matrix Code Systems",
                "Single-Scan Verification Workflows", "Asset Lifecycle Automation", "Background System Communications"
            ]
        },

        "show-control-tech": {
            title: "Attraction, Show Control & Entertainment Tech",
            category: "ENTERTAINMENT SYSTEMS & AUTOMATION",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`,
            teaser: "DMX512 lighting, pneumatic automation, animatronics repair, spatial audio mixing, and show control networks.",
            preview: ["DMX512 & sACN", "Animatronics Automation", "Pneumatic Actuators", "Spatial Audio Mixing", "Projection Mapping", "Interactive Attraction Triggers"],
            skills: [
                "Addressable DMX512 Lighting", "Art-Net & sACN Protocols", "MyDMX Controller Systems", "IP-Based Lighting Controls",
                "Centralized Show Control Master", "Animatronics Calibration & Repair", "Pneumatic Show Actuators & Valves",
                "Spatial Audio Routing & Mixing", "Multi-Zone Ambient Soundscapes", "Special Effects (SFX) Fog & Blasters",
                "Projection Mapping Integration", "Interactive Attraction Trigger Systems"
            ]
        },

        "technical-documentation": {
            title: "Technical Documentation & Infrastructure Mapping",
            category: "INFRASTRUCTURE DOCUMENTATION & SCHEMATICS",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`,
            teaser: "Network topology mapping, port/switch documentation, fiber pathways, maze schematics, and as-built drawings.",
            preview: ["Network Topology Maps", "Fiber Pathway Docs", "Switch Port Mapping", "Maze Schematics", "As-Built Drawings", "Technical Reports"],
            skills: [
                "Network Topology Diagrams", "Physical & Logical Infrastructure Maps", "Switch & Fiber Pathway Documentation",
                "Communication Node Surveys", "Port Mapping & Patch Schedule Docs", "Wiring & Signal-Flow Schematics",
                "Maze Schematics & Floor Plans", "Infrastructure Layout Documentation", "Technical Standard Operating Procedures (SOPs)",
                "Operational Checklists & Readiness Logs", "Formal Penetration Testing Reports", "Enterprise Risk Assessments",
                "System Architecture Documentation", "As-Built Facility Drawings", "Microsoft Visio", "AutoCAD Technical Drawings"
            ]
        },

        "cad-software": {
            title: "CAD Software & Technical Modeling",
            category: "CAD & SPATIAL MODELING",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>`,
            teaser: "2D and 3D architectural drafting, attraction schematics, physical site surveys, and spatial layouts in AutoCAD, Revit, Fusion 360, and SketchUp.",
            preview: ["AutoCAD Architecture", "Autodesk Revit", "Fusion 360", "SketchUp", "Physical Site Surveys", "Attraction Schematics"],
            skills: [
                "AutoCAD Architecture", "Autodesk Revit", "Autodesk Fusion 360", "Trimble SketchUp",
                "2D & 3D Architectural Drafting", "Physical Field Measurements & Site Surveys",
                "Attraction Schematic Design", "Maze Floor Plan Layouts", "Spatial Planning & Clearance Modeling",
                "As-Built Drafting & Revision Control", "Cross-Sectional Elevations & Details", "CAD Layer & Block Standardizations"
            ]
        }
    };

    // Global Skills Modal Handler
    window.openSkillModal = function(key) {
        const data = window.skillsData[key];
        const modal = document.getElementById('skills-modal');
        const modalBody = document.getElementById('skills-modal-body');
        if (!data || !modal || !modalBody) return;

        modalBody.innerHTML = `
            <div class="skills-modal-header">
                <div class="skills-modal-icon">${data.icon}</div>
                <div>
                    <span class="it-category">${data.skills.length} Competencies • ${data.category || ''}</span>
                    <h2 class="cs-title">${data.title}</h2>
                    ${data.teaser ? `<p class="skills-modal-subtitle">${data.teaser}</p>` : ''}
                </div>
            </div>
            <div class="skills-modal-badge-grid">
                ${data.skills.map(skill => `<div class="skill-badge-lg"><span>▹</span> ${skill}</div>`).join('')}
            </div>
        `;

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    window.closeSkillsModal = function(e) {
        if (e) {
            if (e.stopPropagation) e.stopPropagation();
            if (e.preventDefault) e.preventDefault();
        }
        const modal = document.getElementById('skills-modal');
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    };

    const skillsModal = document.getElementById('skills-modal');
    if (skillsModal) {
        skillsModal.addEventListener('click', (e) => {
            if (e.target === skillsModal) {
                window.closeSkillsModal(e);
            }
        });
    }

    // Global Lightbox Handler
    let currentGallery = [];
    let currentIndex = 0;

    window.openLightbox = function(gallery, index) {
        const lb = document.getElementById('lightbox');
        if (!gallery || !gallery.length || !lb) return;
        currentGallery = gallery;
        currentIndex = index;

        const item = currentGallery[currentIndex];
        const imgEl = document.getElementById('lightbox-img');
        const capEl = document.getElementById('lightbox-caption');
        const cntEl = document.getElementById('lightbox-counter');

        if (imgEl) imgEl.src = item.src;
        if (capEl) capEl.innerText = item.caption || '';
        if (cntEl) cntEl.innerText = `${currentIndex + 1} of ${currentGallery.length}`;

        lb.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    window.closeLightbox = function(e) {
        if (e) {
            if (e.stopPropagation) e.stopPropagation();
            if (e.preventDefault) e.preventDefault();
        }
        const lb = document.getElementById('lightbox');
        const imgEl = document.getElementById('lightbox-img');
        if (!lb) return;
        lb.classList.remove('active');
        document.body.style.overflow = '';
        setTimeout(() => {
            if (!lb.classList.contains('active') && imgEl) {
                imgEl.src = '';
                currentGallery = [];
                currentIndex = 0;
            }
        }, 200);
    };

    window.changeLightboxImage = function(direction, e) {
        if (e) {
            if (e.stopPropagation) e.stopPropagation();
            if (e.preventDefault) e.preventDefault();
        }
        if (!currentGallery || currentGallery.length <= 1) return;

        currentIndex = (currentIndex + direction + currentGallery.length) % currentGallery.length;
        const item = currentGallery[currentIndex];

        const imgEl = document.getElementById('lightbox-img');
        const capEl = document.getElementById('lightbox-caption');
        const cntEl = document.getElementById('lightbox-counter');

        if (imgEl) {
            imgEl.style.opacity = '0.3';
            imgEl.src = item.src;
            setTimeout(() => {
                imgEl.style.opacity = '1';
            }, 50);
        }
        if (capEl) capEl.innerText = item.caption || '';
        if (cntEl) cntEl.innerText = `${currentIndex + 1} of ${currentGallery.length}`;
    };

    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        document.addEventListener('click', (e) => {
            if (lightbox.classList.contains('active')) return;

            const portfolioItem = e.target.closest('.portfolio-item');
            if (portfolioItem) {
                const activeContainer = document.querySelector('.portfolio-sub-content.active') || document;
                const visibleItemEls = Array.from(activeContainer.querySelectorAll('.portfolio-item:not(.hidden)'));
                const gallery = visibleItemEls.map(el => ({
                    src: el.querySelector('img').src,
                    caption: el.querySelector('h3') ? el.querySelector('h3').innerText : ''
                }));
                const clickedIndex = visibleItemEls.indexOf(portfolioItem);
                window.openLightbox(gallery, clickedIndex >= 0 ? clickedIndex : 0);
            }
        });

        document.addEventListener('keydown', (e) => {
            if (!lightbox.classList.contains('active')) return;
            if (e.key === 'Escape') window.closeLightbox(e);
            if (e.key === 'ArrowRight') window.changeLightboxImage(1, e);
            if (e.key === 'ArrowLeft') window.changeLightboxImage(-1, e);
        });

        let touchStartX = 0;
        let touchEndX = 0;

        lightbox.addEventListener('touchstart', (e) => {
            if (e.target.closest('.lightbox-nav') || e.target.closest('.lightbox-close')) return;
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        lightbox.addEventListener('touchend', (e) => {
            if (e.target.closest('.lightbox-nav') || e.target.closest('.lightbox-close')) return;
            touchEndX = e.changedTouches[0].screenX;
            const swipeThreshold = 35;
            if (touchEndX < touchStartX - swipeThreshold) {
                window.changeLightboxImage(1, e);
            } else if (touchEndX > touchStartX + swipeThreshold) {
                window.changeLightboxImage(-1, e);
            }
        }, { passive: true });
    }

    // Main Portfolio Category Tabs (Cybersecurity vs Software vs Creative)
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

    // Global Close Project Modal Function
    window.closeCaseStudyModal = function(e) {
        if (e) {
            if (e.stopPropagation) e.stopPropagation();
            if (e.preventDefault) e.preventDefault();
        }
        const csModal = document.getElementById('case-study-modal');
        const csBody = document.getElementById('case-study-body');
        if (csModal) {
            csModal.classList.remove('active');
            document.body.style.overflow = '';
            setTimeout(() => {
                if (!csModal.classList.contains('active') && csBody) {
                    csBody.innerHTML = '';
                }
            }, 300);
        }
    };

    function openCaseStudyModal(project) {
        const csModal = document.getElementById('case-study-modal');
        const csBody = document.getElementById('case-study-body');
        if (!project || !csModal || !csBody) return;

        let overviewHTML = project.overview.map(p => `<p>${p}</p>`).join('');
        let contributionsHTML = project.roleContributions.map(c => `<li>${c}</li>`).join('');

        let statsHTML = Object.entries(project.stats).map(([key, val]) => `
            <li>
                <span class="cs-stats-label">${key}</span>
                <span class="cs-stats-value">${val}</span>
            </li>
        `).join('');

        let techStackHTML = '';
        if (project.techStack) {
            techStackHTML = Object.entries(project.techStack).map(([group, tags]) => `
                <div class="cs-tech-group">
                    <span class="cs-tech-group-title">${group}</span>
                    <div class="cs-tech-tags">
                        ${tags.map(t => `<span class="cs-tech-tag">${t}</span>`).join('')}
                    </div>
                </div>
            `).join('');
        }

        let skillsHTML = project.skills ? project.skills.map(s => `<span class="cs-skill-badge">${s}</span>`).join('') : '';

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
                    <div class="cs-meta-item">Organization / Team: <strong>${project.teamSize}</strong></div>
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
                        <h4>Key Deliverables & Responsibilities</h4>
                        <ul class="cs-bullet-list">${contributionsHTML}</ul>
                    </div>
                </div>
                <div class="cs-sidebar">
                    <div class="cs-sidebar-card">
                        <h5>Project Specs</h5>
                        <ul class="cs-stats-list">${statsHTML}</ul>
                    </div>
                    ${techStackHTML ? `
                        <div class="cs-sidebar-card">
                            <h5>Technologies & Toolsets</h5>
                            ${techStackHTML}
                        </div>
                    ` : ''}
                    ${skillsHTML ? `
                        <div class="cs-sidebar-card">
                            <h5>Skills Demonstrated</h5>
                            <div class="cs-skills-list">${skillsHTML}</div>
                        </div>
                    ` : ''}
                </div>
            </div>
        `;

        // Add zoom effect handler to project diagrams and gallery images
        const zoomableImgs = Array.from(csBody.querySelectorAll('.cs-diagram, .cs-gallery-img'));
        const csGallery = zoomableImgs.map(img => ({
            src: img.src,
            caption: img.getAttribute('data-caption') || img.alt || ''
        }));

        zoomableImgs.forEach((img, idx) => {
            img.addEventListener('click', () => {
                window.openLightbox(csGallery, idx);
            });
        });

        csModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // Delegated click handler for project buttons
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.it-view-btn');
        if (btn) {
            const projectId = btn.getAttribute('data-project-id');
            const project = itProjectsData[projectId];
            if (project) {
                openCaseStudyModal(project);
            }
            return;
        }

        // Handle Close button clicks
        if (e.target.matches('#case-study-close') || e.target.closest('#case-study-close') || e.target.classList.contains('case-study-close')) {
            window.closeCaseStudyModal(e);
            return;
        }

        if (e.target.matches('#skills-modal-close') || e.target.closest('#skills-modal-close')) {
            window.closeSkillsModal(e);
            return;
        }
    });

    const csModal = document.getElementById('case-study-modal');
    if (csModal) {
        csModal.addEventListener('click', (e) => {
            if (e.target === csModal) {
                window.closeCaseStudyModal(e);
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (csModal && csModal.classList.contains('active')) {
                window.closeCaseStudyModal(e);
            }
            if (skillsModal && skillsModal.classList.contains('active')) {
                window.closeSkillsModal(e);
            }
        }
    });
});
