import { Users, Check } from "lucide-react";

const responsibilities = [
  "Organized and promoted workshops/events",
  "Coordinated society activities",
  "Facilitated communication among members"
];

const impacts = [
  "Enhanced member participation through outreach initiatives",
  "Professional development events organization",
  "Built strong community connections"
];

export default function Beyond() {
  return (
    <section id="beyond" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="beyond-title">
            Beyond <span className="gradient-text">Code</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto" data-testid="beyond-description">
            My involvement in extracurricular activities and leadership roles that complement my technical skills.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-xl p-8" data-testid="csi-secretary-card">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-primary/20 p-3 rounded-full">
                <Users className="text-primary text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold" data-testid="csi-title">
                  Secretary, Computer Society of India
                </h3>
                <p className="text-muted-foreground" data-testid="csi-subtitle">
                  Leadership & Community Building
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-primary" data-testid="responsibilities-title">
                  Key Responsibilities
                </h4>
                <ul className="space-y-2 text-muted-foreground">
                  {responsibilities.map((responsibility, index) => (
                    <li 
                      key={index} 
                      className="flex items-start gap-2"
                      data-testid={`responsibility-${index}`}
                    >
                      <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-primary" data-testid="impact-title">
                  Impact & Achievements
                </h4>
                <ul className="space-y-2 text-muted-foreground">
                  {impacts.map((impact, index) => (
                    <li 
                      key={index} 
                      className="flex items-start gap-2"
                      data-testid={`impact-${index}`}
                    >
                      <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      {impact}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
