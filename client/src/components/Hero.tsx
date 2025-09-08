export default function Hero() {
  return (
    <section 
      id="home" 
      className="pt-16 min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="loading-animation">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6" data-testid="hero-title">
            Hi, I'm <span className="gradient-text">Rumana</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto" data-testid="hero-subtitle">
            Software Developer & Data Enthusiast passionate about creating innovative solutions through code
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => {
                const projectsSection = document.getElementById('projects');
                if (projectsSection) {
                  const offsetTop = projectsSection.offsetTop - 70;
                  window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                  });
                }
              }}
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              data-testid="button-view-work"
            >
              View My Work
            </button>
            <button
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  const offsetTop = contactSection.offsetTop - 70;
                  window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                  });
                }
              }}
              className="border border-border px-8 py-3 rounded-lg font-medium hover:bg-muted transition-colors"
              data-testid="button-get-in-touch"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
