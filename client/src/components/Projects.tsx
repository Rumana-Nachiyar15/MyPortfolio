const projects = [
  {
    id: "coolsync",
    title: "COOLSYNC",
    description: "Smart Multi-Modal Supply Chain Optimization platform. Led a 6-member team in Smart India Hackathon, designed frontend with seamless UX and feature integration.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    technologies: ["React", "Flask", "Team Lead"],
    colors: ["bg-primary/20 text-primary", "bg-accent/20 text-accent", "bg-secondary/50 text-secondary-foreground"]
  },
  {
    id: "crediseal",
    title: "CrediSeal",
    description: "Cloud-Based Digital Certificate Platform for LEAP IIT-M. Built secure certificate generation & verification system with AWS integration and unique ID-based authenticity checks.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    technologies: ["React", "Flask", "AWS"],
    colors: ["bg-primary/20 text-primary", "bg-accent/20 text-accent", "bg-secondary/50 text-secondary-foreground"]
  },
  {
    id: "vst-app",
    title: "VST Marketing App",
    description: "Client project featuring a Flutter-based mobile UI delivering responsive, user-friendly experience for marketing operations with intuitive design patterns.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    technologies: ["Flutter", "Mobile UI", "Client Work"],
    colors: ["bg-primary/20 text-primary", "bg-accent/20 text-accent", "bg-secondary/50 text-secondary-foreground"]
  },
  {
    id: "gas-booking",
    title: "Gas Booking System",
    description: "DBMS project creating a database-driven booking platform that automates gas reservations and improves operational efficiency with comprehensive data management.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    technologies: ["MySQL", "Java", "DBMS"],
    colors: ["bg-primary/20 text-primary", "bg-accent/20 text-accent", "bg-secondary/50 text-secondary-foreground"]
  },
  {
    id: "vellco-website",
    title: "Vellco Enterprise Website",
    description: "Client project designing a static company website using HTML, CSS, and JavaScript for enhanced brand presence with modern web design principles.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    technologies: ["HTML", "CSS", "JavaScript"],
    colors: ["bg-primary/20 text-primary", "bg-accent/20 text-accent", "bg-secondary/50 text-secondary-foreground"]
  },
  {
    id: "portfolio",
    title: "Developer Portfolio",
    description: "Personal portfolio website showcasing projects, skills, and achievements with modern design, responsive layout, and interactive elements for professional presentation.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    technologies: ["React", "Tailwind", "Portfolio"],
    colors: ["bg-primary/20 text-primary", "bg-accent/20 text-accent", "bg-secondary/50 text-secondary-foreground"]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="projects-title">
            My <span className="gradient-text">Code</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto" data-testid="projects-description">
            Here are some of the projects I've worked on, showcasing my skills in full-stack development, 
            mobile apps, and database management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="bg-card border border-border rounded-xl overflow-hidden card-hover"
              data-testid={`project-card-${project.id}`}
            >
              <img 
                src={project.image} 
                alt={`${project.title} project screenshot`} 
                className="w-full h-48 object-cover"
                data-testid={`project-image-${project.id}`}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2" data-testid={`project-title-${project.id}`}>
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4" data-testid={`project-description-${project.id}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={tech} 
                      className={`px-2 py-1 rounded text-sm ${project.colors[techIndex] || 'bg-muted text-muted-foreground'}`}
                      data-testid={`project-tech-${project.id}-${tech.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <button 
                  className="text-primary hover:underline"
                  data-testid={`project-link-${project.id}`}
                >
                  View Project →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
