import { Lightbulb, FileText } from "lucide-react";

export default function Innovation() {
  return (
    <section id="innovation" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="innovation-title">
            Innovation & <span className="gradient-text">Research</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto" data-testid="innovation-description">
            My contributions to research and innovation in technology, including published patents and academic papers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Patents */}
          <div className="bg-card border border-border rounded-xl p-6" data-testid="patents-section">
            <div className="flex items-center gap-3 mb-4">
              <Lightbulb className="text-primary text-2xl" />
              <h3 className="text-xl font-semibold" data-testid="patents-title">Patents</h3>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4" data-testid="patent-ovarian-cancer">
                <h4 className="font-semibold mb-2" data-testid="patent-title-ovarian-cancer">
                  Deep Learning based Ovarian Cancer Detection
                </h4>
                <p className="text-sm text-muted-foreground mb-2" data-testid="patent-subtitle-ovarian-cancer">
                  Using Spectral Domain Optical Coherence Tomography
                </p>
                <p className="text-xs text-muted-foreground" data-testid="patent-publication-ovarian-cancer">
                  Published: 202441006342 A, India | 16/02/2024
                </p>
                <p className="text-sm text-muted-foreground mt-2" data-testid="patent-description-ovarian-cancer">
                  Developed a deep learning-based system for early, non-invasive ovarian cancer detection using 
                  SD-OCT images with 3D CNN and Bi-LSTM models, achieving high diagnostic accuracy.
                </p>
              </div>
            </div>
          </div>

          {/* Papers */}
          <div className="bg-card border border-border rounded-xl p-6" data-testid="papers-section">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="text-primary text-2xl" />
              <h3 className="text-xl font-semibold" data-testid="papers-title">Research Papers</h3>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-accent pl-4" data-testid="paper-tts">
                <h4 className="font-semibold mb-2" data-testid="paper-title-tts">
                  Text-to-Speech Systems Analysis
                </h4>
                <p className="text-sm text-muted-foreground mb-2" data-testid="paper-subtitle-tts">
                  A Study on Intelligibility, Naturalness, and Fluency
                </p>
                <p className="text-xs text-muted-foreground" data-testid="paper-publication-tts">
                  Presented at IEEE ESCI-25, Published in IEEE Xplore Digital Library
                </p>
                <p className="text-sm text-muted-foreground mt-2" data-testid="paper-description-tts">
                  Comprehensive analysis of text-to-speech systems focusing on quality metrics 
                  and performance evaluation criteria.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
