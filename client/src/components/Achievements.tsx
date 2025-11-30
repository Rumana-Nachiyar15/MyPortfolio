import { Trophy, Award, Medal, BarChart3, GraduationCap, Star } from "lucide-react";

const achievements = [
  {
    id: "hackathon",
    icon: Trophy,
    title: "Smart India Hackathon 2024",
    level: "Finalist",
    description: "Selected as finalist in one of India's biggest hackathons, showcasing innovative solutions for real-world problems.",
    color: "bg-primary/20 text-primary"
  },
  {
    id: "nptel",
    icon: Award,
    title: "NPTEL Elite Certification",
    level: "C Programming",
    description: "Achieved Elite certification demonstrating exceptional performance in programming fundamentals and problem-solving skills.",
    color: "bg-accent/20 text-accent"
  },
  {
    id: "anna-university",
    icon: Medal,
    title: "Anna University Regional",
    level: "3rd Place",
    description: "Secured third position in paper presentation on \"Enhancing Underwater Domain Awareness\" at regional level competition.",
    color: "bg-secondary/50 text-secondary-foreground"
  },
  {
    id: "power-bi",
    icon: BarChart3,
    title: "Microsoft Power BI",
    level: "Data Analyst Associate",
    description: "Certified in Power BI for data analysis, visualization, and business intelligence solutions.",
    color: "bg-primary/20 text-primary"
  },
 {
  id: "aws-academy-cloud-architecting",
  icon: GraduationCap,
  title: "AWS Academy Graduate - Cloud Architecting",
  level: "Training Badge (Completed)",
  description: "Completed the AWS Academy Cloud Architecting program with practical experience in designing cloud solutions using AWS services such as S3, DynamoDB, and serverless workflows.",
  color: "bg-accent/20 text-accent"
},
  {
    id: "academic",
    icon: Star,
    title: "Academic Excellence",
    level: "CGPA 8.66",
    description: "Maintaining consistent academic performance throughout BTech Computer Science program at Ramco Institute of Technology.",
    color: "bg-secondary/50 text-secondary-foreground"
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="achievements-title">
            Key <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto" data-testid="achievements-description">
            Recognition and accomplishments that highlight my dedication to excellence in technology and academics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement) => {
            const IconComponent = achievement.icon;
            return (
              <div 
                key={achievement.id} 
                className="bg-card border border-border rounded-xl p-6 text-center card-hover"
                data-testid={`achievement-card-${achievement.id}`}
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${achievement.color}`}>
                  <IconComponent className="text-2xl" />
                </div>
                <h3 className="text-lg font-semibold mb-2" data-testid={`achievement-title-${achievement.id}`}>
                  {achievement.title}
                </h3>
                <p className={`font-medium mb-2 ${achievement.color.split(' ')[1]}`} data-testid={`achievement-level-${achievement.id}`}>
                  {achievement.level}
                </p>
                <p className="text-sm text-muted-foreground" data-testid={`achievement-description-${achievement.id}`}>
                  {achievement.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
