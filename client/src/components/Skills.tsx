import { useEffect, useState } from "react";

const skillCategories = [
  {
    title: "Programming",
    skills: [
      { name: "Java", level: "Advanced", percentage: 90 },
      { name: "Python", level: "Advanced", percentage: 85 },
      { name: "SQL", level: "Intermediate", percentage: 75 }
    ]
  },
  {
    title: "Web Tech",
    skills: [
      { name: "HTML/CSS", level: "Advanced", percentage: 90 },
      { name: "JavaScript", level: "Intermediate", percentage: 75 },
      { name: "React", level: "Intermediate", percentage: 70 }
    ]
  },
  {
    title: "Frameworks",
    skills: [
      { name: "Flask", level: "Beginner", percentage: 50 },
      { name: "Flutter", level: "Beginner", percentage: 45 },
      { name: "MySQL", level: "Intermediate", percentage: 75 }
    ]
  },
  {
    title: "Analytics",
    skills: [
      { name: "Power BI", level: "Advanced", percentage: 85 },
      { name: "IBM Cognos", level: "Intermediate", percentage: 70 },
      { name: "MS Excel", level: "Advanced", percentage: 80 }
    ]
  }
];

function SkillBar({ name, level, percentage }: { name: string; level: string; percentage: number }) {
  const [animatedWidth, setAnimatedWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedWidth(percentage);
    }, 100);

    return () => clearTimeout(timer);
  }, [percentage]);

  const getBarColor = (level: string) => {
    switch (level) {
      case "Advanced":
        return "bg-primary";
      case "Intermediate":
        return "bg-accent";
      case "Beginner":
        return "bg-secondary";
      default:
        return "bg-muted";
    }
  };

  return (
    <div data-testid={`skill-${name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
      <div className="flex justify-between mb-2">
        <span className="text-sm" data-testid={`skill-name-${name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
          {name}
        </span>
        <span className="text-sm text-muted-foreground" data-testid={`skill-level-${name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
          {level}
        </span>
      </div>
      <div className="w-full bg-muted rounded-full h-2">
        <div 
          className={`h-2 rounded-full skill-bar transition-all duration-1000 ease-in-out ${getBarColor(level)}`}
          style={{ width: `${animatedWidth}%` }}
          data-testid={`skill-bar-${name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="skills-title">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto" data-testid="skills-description">
            A comprehensive overview of my technical skills and proficiency levels across various technologies and tools.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <div 
              key={category.title} 
              className="bg-card border border-border rounded-xl p-6"
              data-testid={`skill-category-${category.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <h3 className="text-xl font-semibold mb-6 text-primary" data-testid={`skill-category-title-${category.title.toLowerCase().replace(/\s+/g, '-')}`}>
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <SkillBar 
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    percentage={skill.percentage}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
