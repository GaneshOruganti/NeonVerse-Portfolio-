
import { GraduationCap, School, Github, Linkedin, Code, Tv, BrainCircuit, Bot, Zap, Component, Award, Database, Server, Network, Rocket, Terminal, Smile, DatabaseZap, FileCode, Cpu, GitMerge, Binary, Box, Package, Layout, Search, BarChart3, Database as DatabaseIcon, BookOpen } from 'lucide-react';
import { Cloud } from 'lucide-react';

export const socialLinks = [
  { name: 'GitHub', icon: Github, url: 'https://github.com/ganeshoruganti' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/ganesh-oruganti/' },
];

export const skills = {
  ai: [
    { name: 'Python', icon: Code, tooltip: 'Primary language for ML, data analysis, and building AI backend services.' },
    { name: 'LLMs', icon: Bot, tooltip: 'Training, evaluating, and fine-tuning LLMs for classification and summarization tasks.' },
    { name: 'TensorFlow', icon: BrainCircuit, tooltip: 'Certified Google TensorFlow Developer; building deep learning models for Computer Vision and NLP.' },
    { name: 'AWS SageMaker', icon: Cloud, tooltip: 'Deploying and tuning ML models at scale for production reliability.' },
    { name: 'Vector Databases', icon: DatabaseZap, tooltip: 'Implementing semantic search and RAG pipelines for intelligent retrieval.' },
    { name: 'Scikit-learn', icon: Search, tooltip: 'Engineering robust ML pipelines and predictive analytics systems.' },
    { name: 'Pandas', icon: BarChart3, tooltip: 'Expert data wrangling and statistical analysis for large-scale datasets.' },
    { name: 'Prompt Engineering', icon: Terminal, tooltip: 'Optimizing model reasoning and reducing hallucinations through advanced prompting.' },
  ],
  backend: [
    { name: 'Node.js / Express', icon: Code, tooltip: 'Building scalable RESTful APIs with optimized performance.' },
    { name: 'FastAPI', icon: Rocket, tooltip: 'Developing high-performance AI service wrappers and async backends.'},
    { name: 'PostgreSQL', icon: DatabaseIcon, tooltip: 'Optimizing complex queries and relational schemas for high-performance applications.' },
    { name: 'MySQL', icon: DatabaseIcon, tooltip: 'Reliable relational database management for scalable system backends.' },
    { name: 'Docker', icon: Box, tooltip: 'Ensuring secure, containerized execution and consistent deployment environments.' },
    { name: 'Cloud Architecture', icon: Cloud, tooltip: 'Architecting scalable systems on AWS EC2 and Oracle Cloud.'},
    { name: 'Firebase', icon: Zap, tooltip: 'Leveraging real-time databases and authentication for collaborative apps.' },
    { name: 'Git', icon: GitMerge, tooltip: 'Proficient in version control and collaborative Agile development.' },
  ],
  frontend: [
    { name: 'React', icon: Component, tooltip: 'Building dynamic, responsive user interfaces for complex web apps.' },
    { name: 'Next.js', icon: Tv, tooltip: 'Developing full-stack applications with optimized performance and SEO.' },
    { name: 'TypeScript', icon: Code, tooltip: 'Ensuring type safety and maintainability in large production codebases.' },
    { name: 'Tailwind CSS', icon: Layout, tooltip: 'Rapidly styling modern, high-performance user interfaces.' },
  ],
  foundations: [
      { name: 'Data Structures & Algorithms', icon: Binary, tooltip: 'Solved 1300+ problems across LeetCode, GFG, and CodeChef.' },
      { name: 'OOP', icon: Box, tooltip: 'Applying modular programming principles for scalable software.' },
      { name: 'Java / C++', icon: FileCode, tooltip: 'Strong foundation in low-level programming and algorithm efficiency.' },
      { name: 'Embedded Systems', icon: Cpu, tooltip: 'Experience with microcontrollers and hardware-software control algorithms.' },
  ]
};

export const projects = [
  {
    title: "AI-Powered Online Compiler",
    description: "Full-stack compiler supporting 16+ languages with Docker-isolated execution. Integrated a custom GenAI assistant to provide real-time code optimization and debugging suggestions.",
    technologies: ["React", "Node.js", "Docker", "Firebase", "MongoDB", "LLM Integration"],
    githubUrl: "https://github.com/ganeshoruganti",
    liveUrl: "https://github.com/ganeshoruganti",
    image: "compiler",
    imageHint: "programming terminal",
  },
  {
    title: "Customer Sentiment Pipeline",
    description: "Production-grade ML pipeline classifying 50K+ feedback entries with 85% precision. Optimized on AWS SageMaker with comprehensive Power BI reporting for business intelligence.",
    technologies: ["Python", "Scikit-learn", "AWS SageMaker", "Power BI", "NLP"],
    githubUrl: "https://github.com/ganeshoruganti",
    liveUrl: "https://github.com/ganeshoruganti",
    image: "sentiment",
    imageHint: "data dashboard",
  },
  {
    title: "LLM Recommendation Engine",
    description: "Hybrid recommendation engine combining user behavioral data with Large Language Models. Achieved a 30% increase in user engagement through dynamic real-time personalization.",
    technologies: ["Python", "FastAPI", "PostgreSQL", "Streamlit", "AWS EC2", "Vector DB"],
    githubUrl: "https://github.com/ganeshoruganti",
    liveUrl: "https://github.com/ganeshoruganti",
    image: "recommendation",
    imageHint: "smart shopping",
  },
  {
    title: "CV Traffic Analytics",
    description: "Edge-optimized Computer Vision system for real-time traffic density detection. Utilized TensorFlow and OpenCV for high-accuracy object detection on resource-constrained hardware.",
    technologies: ["TensorFlow", "OpenCV", "Python", "Embedded Systems", "Edge AI"],
    githubUrl: "https://github.com/ganeshoruganti",
    liveUrl: "https://github.com/ganeshoruganti",
    image: "traffic",
    imageHint: "security camera",
  },
  {
    title: "Financial RAG Agent",
    description: "Advanced Retrieval-Augmented Generation (RAG) agent for automated financial auditing. Extracts actionable insights from complex PDF reports with near-zero hallucination rates.",
    technologies: ["LangChain", "OpenAI", "Vector Databases", "Pandas", "Pinecone"],
    githubUrl: "https://github.com/ganeshoruganti",
    liveUrl: "https://github.com/ganeshoruganti",
    image: "finance",
    imageHint: "stock charts",
  },
    {
    title: "Tech Leadership & Hackathons",
    description: "Spearheaded 50+ national-level technical events and hackathons as club founder. Directed strategic initiatives to bridge academia with industrial AI requirements.",
    technologies: ["Strategic Leadership", "Agile Management", "Project Planning"],
    githubUrl: "https://github.com/ganeshoruganti",
    liveUrl: "https://github.com/ganeshoruganti",
    image: "leadership",
    imageHint: "leadership team",
  },
];

export const experiences = [
  {
    role: "Data Analyst – AI/LLM",
    company: "Innodata Inc.",
    period: "Dec 2025 - Present",
    location: "Noida, Uttar Pradesh (Remote)",
    points: [
      "Improved model accuracy and response consistency through systematic prompt engineering across multi-task NLP workflows",
      "Architected high-quality datasets for instruction-following and summarization, directly improving model reasoning capabilities",
      "Drastically reduced model hallucinations by conducting deep error analysis and quality audits on large-scale LLM responses",
      "Engineered data strategies that aligned model training objectives with rigorous responsible AI standards"
    ],
  },
  {
    role: "Backend Developer",
    company: "Segura Invendors Private Ltd",
    period: "Feb 2025 - Nov 2025",
    location: "Vijayawada, Andhra Pradesh",
    points: [
      "Architected and deployed scalable RESTful APIs in Node.js, enhancing backend service reliability for production environments",
      "Engineered secure role-based access control systems, safeguarding sensitive platform data from unauthorized access",
      "Optimized database performance by restructuring PostgreSQL/MySQL schemas, achieving a 40% reduction in query latency",
      "Drove Agile delivery by spearheading code reviews and debugging sessions to ensure high-performance software standards"
    ],
  },
];

export const education = [
  {
    institution: "KL University, Vijayawada",
    degree: "Bachelor of Technology in Artificial Intelligence and Data Science",
    period: "Aug 2021 – May 2025",
    grade: "9.27 / 10.0",
    details: "Specialized in advanced AI research and RAG architectures. Spearheaded 2 technical clubs and founded multiple national-level hackathons, bridging the gap between academia and industry through leadership.",
    skills: ["AI Research", "System Design", "Technical Leadership", "Public Relations", "Hackathon Organization"],
    icon: GraduationCap,
  },
  {
    institution: "Sri Chaitanya Junior College, Kakinada",
    degree: "MPC, IPL",
    period: "Jun 2019 – Apr 2021",
    grade: "85.5% / 100%",
    details: "Intensive training in advanced Mathematics and Physics. Consistently ranked in top percentiles in competitive problem-solving environments.",
    skills: ["Mathematics", "Physics", "Competitive Problem Solving"],
    icon: BookOpen,
  },
  {
    institution: "Sri Chaitanya Techno School, Pithapuram",
    degree: "10th Grade",
    period: "Jun 2018 – Mar 2019",
    grade: "9.20 / 10.0",
    details: "Built strong foundations in analytical thinking and core sciences, recognized for consistent academic excellence in technical olympiads.",
    skills: ["Foundation Science", "Analytical Thinking"],
    icon: School,
  }
];

export const aboutMe = {
    summary: [
        "I am Ganesh Oruganti, an Applied AI Engineer dedicated to bridging the gap between raw data and intelligent products.",
        "With hands-on experience training LLMs at Innodata and architecting backends at Segura Invendors, I build production-ready systems that scale. I've engineered ML pipelines classifying 50K+ feedback entries with 85% accuracy and improved model consistency through rigorous prompt engineering.",
        "My foundation is built on elite problem-solving, with 1300+ DSA problems solved and leadership of national-level hackathons, combining technical depth with practical AI deployment."
    ],
    photo: {
        id: "profile_photo",
        description: "Professional headshot",
        imageUrl: "https://i.postimg.cc/PrRRvZfq/Whats-App-Image-2025-12-01-at-7-53-12-PM.jpg",
        imageHint: "professional portrait",
    },
    highlights: [
        {
            icon: BrainCircuit,
            text: 'Data Analyst – AI/LLM at Innodata'
        },
        {
            icon: Code,
            text: 'Solved 1300+ DSA Problems'
        },
        {
            icon: Zap,
            text: 'Building – Speedopus & Stock Sync'
        },
        {
            icon: Award,
            text: 'Google TensorFlow & Salesforce AI Certified'
        },
        {
            icon: Cloud,
            text: 'AWS SageMaker & EC2 Specialist'
        },
        {
            icon: Rocket,
            text: 'Production-Ready AI Product Builder'
        }
    ]
}
