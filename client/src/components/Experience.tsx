import { ChevronRight } from "lucide-react";

const experiences = [
  {
    id: "inspire-softech",
    title: "Data Visualization and Analysis Intern",
    company: "Inspire Softech Solutions",
    duration: "Oct 2024 – Nov 2024",
    responsibilities: [
      "Developed interactive dashboards and reports to support data-driven decision-making",
      "Created insights to support decision-making and potential campaign performance tracking"
    ]
  },
  {
    id: "oasis-infobyte",
    title: "Website Development Intern",
    company: "Oasis InfoByte",
    duration: "Dec 2023 – Jan 2024",
    responsibilities: [
      "Designed and developed responsive web solutions with a focus on functionality",
      "Gained practical experience in modern web development practices and technologies"
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="experience-title">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto" data-testid="experience-description">
            My internship experiences have provided valuable hands-on exposure to real-world development and data analysis challenges.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <div 
              key={exp.id} 
              className="bg-card border border-border rounded-xl p-6 card-hover"
              data-testid={`experience-card-${exp.id}`}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold" data-testid={`experience-title-${exp.id}`}>
                    {exp.title}
                  </h3>
                  <p className="text-primary font-medium" data-testid={`experience-company-${exp.id}`}>
                    {exp.company}
                  </p>
                </div>
                <span className="text-muted-foreground text-sm mt-2 md:mt-0" data-testid={`experience-duration-${exp.id}`}>
                  {exp.duration}
                </span>
              </div>
              <ul className="text-muted-foreground space-y-2">
                {exp.responsibilities.map((responsibility, index) => (
                  <li 
                    key={index} 
                    className="flex items-start gap-2"
                    data-testid={`experience-responsibility-${exp.id}-${index}`}
                  >
                    <ChevronRight className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    {responsibility}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
