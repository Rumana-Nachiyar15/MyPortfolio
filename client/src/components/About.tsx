export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="about-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto" data-testid="about-description">
            BTech Computer Science and Business Systems student with a passion for software development and data-driven problem solving. 
            Currently pursuing my degree at Ramco Institute of Technology with a CGPA of 8.66.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Professional workspace" 
              className="rounded-xl shadow-lg w-full h-auto card-hover"
              data-testid="about-image"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-6" data-testid="about-journey-title">
              My Journey
            </h3>
            <p className="text-muted-foreground mb-6" data-testid="about-journey-text">
              I'm driven by the desire to gain practical experience in software development and data-driven problem solving. 
              My goal is to contribute to real-world projects while expanding my technical expertise and building a strong 
              foundation for a successful career in technology.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card p-4 rounded-lg border border-border" data-testid="about-education-card">
                <h4 className="font-semibold text-primary mb-2">Education</h4>
                <p className="text-sm text-muted-foreground">BTech CSBS, Ramco Institute</p>
              </div>
              <div className="bg-card p-4 rounded-lg border border-border" data-testid="about-cgpa-card">
                <h4 className="font-semibold text-primary mb-2">CGPA</h4>
                <p className="text-sm text-muted-foreground">8.66 (7th Semester)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
