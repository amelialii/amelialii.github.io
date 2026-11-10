import './HomeResearch.css';
// Served from public/research/ at stable URLs (not hashed by Vite).
const researchPdf = '/research/urs-2025-poster.pdf';
const researchPdf2 = '/research/urs-2026-poster.pdf';


const HomeResearch = () => {
  return (
    <div className="research-section">
      <h2 className="section-title">Research</h2>
      <div className="research-content">
        <div className="research-focus">
          <p className="research-focus-text">
            I'm currently a Research Assistant at{' '}
            <a href="https://goldenneurolab.com/" target="_blank" rel="noopener noreferrer" className="research-focus-link">
              Golden Lab
            </a>
            , where I work on applying machine learning to classify behavior from physiological time-series data. My work focuses on how we can learn behavioral patterns from noisy real-world biological signals.
          </p>
          <p className="research-focus-text research-focus-aim">
            This research project aims to uncover relationships between physiological dynamics and behavioral states in freely moving animals, with applications in neuroscience and anesthetic state analysis.
          </p>
        </div>
        <div className="research-pdf-container">
          <a 
            href={researchPdf2} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="pdf-subheader"
          >
            Presentation: 2026 UW Undergraduate Research Symposium
          </a>
          <div className="pdf-wrapper">
            <div className="pdf-decorative-frame">
              <iframe
                src={researchPdf2}
                className="research-pdf"
                title="UW Undergraduate Research Symposium 2025"
              />
            </div>
          </div>
          <p className="research-more-text">More research stuff coming once published :D</p>
        </div>
      </div>
    </div>
  );
};

export default HomeResearch;
