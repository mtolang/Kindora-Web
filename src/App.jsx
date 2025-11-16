import { useState } from 'react'
import './App.css'
import logo from './asset/logo1.png'
import member1 from './asset/Member1-Canon.jpg'
import member2 from './asset/Member2-Adan.jpg'
import member3 from './asset/Member3-Tolang.png'
import member4 from './asset/Member4-Ravago.jpg'
import apkFile from './asset/app-release.apk?url'
import { db } from './firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

function App() {
  const [selectedMember, setSelectedMember] = useState(1);
  const [feedbackEmail, setFeedbackEmail] = useState('');
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const teamMembers = [
    {
      id: 1,
      socials: ["gmail", "facebook"],
      name: "Kirt Santiago Cañon",
      role: "System Analyst | Document Specialist",
      description: "Crafting comprehensive documentation and analyzing system requirements to ensure project success.",
      image: member1,
      links:['kcanon_200000000855@uic.edu.ph', 'https://www.facebook.com/share/1BMVgmWUqU/?mibextid=wwXIfr']
    },
    {
      id: 2,
      socials: ["gmail", "instagram", "facebook"],
      name: "Jeremy R. Adan",
      role: "Project Manager",
      description: "Orchestrating team efforts and ensuring seamless project delivery from concept to completion.",
      image: member2,
      links:['jadan_220000002083@uic.edu.ph', 'https://www.instagram.com/jerexalts?igsh=ZWlxZ2xkZjBlYWw4&utm_source=qr', 'https://www.facebook.com/share/1C9ytZJAvz/?mibextid=wwXIfr']
    },
    {
      id: 3,
      socials: ["gmail", "instagram", "facebook"],
      name: "Martin Rey Tolang",
      role: "Lead Developer | Lead Designer",
      description: "Building elegant solutions and designing intuitive interfaces that bring ideas to life.",
      image: member3,
      links:['	mtolang_210000001675@uic.edu.ph', 'https://www.instagram.com/kuso_otoko03/', 'https://www.facebook.com/Martin.Mystery.11.03']
    },
    {
      id: 4,
      socials: ["gmail", "instagram", "facebook"],
      name: "Andrew G. Ravago",
      role: "Lead Tester | Assistant Developer",
      description: "Ensuring quality through rigorous testing and contributing innovative development solutions.",
      image: member4,
      links:['	aravago_220000000942@uic.edu.ph', 'https://www.instagram.com/druvago', 'https://www.facebook.com/DruVago132']
    }
  ];

  const handleFeedbackSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      await addDoc(collection(db, 'Feedback'), {
        email: feedbackEmail,
        feedback: feedbackMessage,
        timestamp: serverTimestamp(),
        source: 'website'
      });

      setSubmitStatus('success');
      setFeedbackEmail('');
      setFeedbackMessage('');
      
      setTimeout(() => setSubmitStatus(''), 5000);
    } catch (error) {
      console.error('Error submitting feedback:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(''), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <img src={logo} alt="Kindora Logo" className="logo-img" />
            <span>Kindora</span>
          </div>
          <ul className="nav-menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#team">The Team</a></li>
            <li><a href="#feedback">Feedback</a></li>
            <li><a href={apkFile} download="Kindora-App.apk" className="download-btn">Download</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section" id="home">
        <div className="hero-content">
          <img src={logo} alt="Kindora Logo" className="hero-logo" />
          <h1 className="hero-title">Kindora</h1>
          <p className="hero-subtitle">A Mobile Platform for Collaborative Therapy and Child-Centered Care</p>
          <a href={apkFile} download="Kindora-App.apk" className="cta-button">Download Now</a>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section" id="about">
        <div className="about-container">
          <div className="about-header">
            <p className="about-label">ABOUT US</p>
            <h2 className="about-title">Bridging Therapy and Home Care</h2>
          </div>

          <div className="about-content">
            <div className="about-card">
              <div className="card-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                Kindora is a mobile platform designed to revolutionize collaborative therapy for children with developmental delays. 
                We streamline clinical operations and foster meaningful connections between therapists and parents through integrated 
                progress tracking, teletherapy sessions, and gamified learning activities that make therapy engaging and effective.
              </p>
            </div>

            <div className="about-card">
              <div className="card-icon">🌍</div>
              <h3>Our Impact</h3>
              <p>
                Aligned with UN Sustainable Development Goal 3 (Good Health and Well-being), Kindora promotes accessible, 
                inclusive, and continuous care for children in resource-limited communities. We bridge the gap between 
                professional guidance and home-based support, ensuring every child receives consistent, quality therapy.
              </p>
            </div>

            <div className="about-card">
              <div className="card-icon">🔒</div>
              <h3>Privacy & Protection</h3>
              <p>
                Child welfare is our priority. All progress data is anonymized and generalized, accessible only to authorized 
                carers and therapists. We protect sensitive information while enabling effective collaboration and 
                evidence-based care for every child's developmental journey.
              </p>
            </div>
          </div>

          <div className="about-features">
            <h3 className="features-title">Key Features</h3>
            <div className="features-grid">
              <div className="feature-item">
                <span className="feature-number">01</span>
                <h4>Therapy Assessment</h4>
                <p>In-app occupational therapy forms for comprehensive developmental evaluation</p>
              </div>
              <div className="feature-item">
                <span className="feature-number">02</span>
                <h4>Progress Tracking</h4>
                <p>Visual milestone tracking based on therapy session data and achievements</p>
              </div>
              <div className="feature-item">
                <span className="feature-number">03</span>
                <h4>Video Conferencing</h4>
                <p>Multi-party teletherapy sessions with screen sharing capabilities</p>
              </div>
              <div className="feature-item">
                <span className="feature-number">04</span>
                <h4>Resource Sharing</h4>
                <p>Upload and access therapy materials for seamless home practice</p>
              </div>
            </div>
          </div>

          <div className="about-results">
            <h3 className="results-title">Proven Results</h3>
            <p className="results-text">
              Through continuous development and user testing, Kindora has proven highly effective. Both therapists and 
              parents find it intuitive and valuable for maintaining consistent therapy between clinical and home settings. 
              Our gamified approach transforms therapy into an enjoyable experience, increasing engagement and motivation 
              while delivering evidence-based, compassionate care for children's developmental growth.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section" id="team">
        <div className="team-container">
          <p className="about-label">MEET</p>
          <h2 className="team-title">THE TEAM</h2>
          <p className="team-subtitle">We Build Better Solutions for Child-Centered Care.</p>
          
          <div className="team-carousel">
            <button 
              className="carousel-btn prev-btn"
              onClick={() => setSelectedMember(selectedMember > 1 ? selectedMember - 1 : teamMembers.length)}
            >
              ←
            </button>
            
            <div className="carousel-wrapper">
              {teamMembers.map((member) => {
                const position = member.id - selectedMember;
                let positionClass = '';
                
                if (position === 0) positionClass = 'center';
                else if (position === -1 || position === teamMembers.length - 1) positionClass = 'left';
                else if (position === 1 || position === -(teamMembers.length - 1)) positionClass = 'right';
                else if (position < 0) positionClass = 'far-left';
                else positionClass = 'far-right';

                return (
                  <div
                    key={member.id}
                    className={`team-card ${positionClass}`}
                    onClick={() => setSelectedMember(member.id)}
                  >
                    <div className="card-image-container">
                      <img src={member.image} alt={member.socials} className="card-image" />
                      <div className="card-number">{`0${member.id}`}</div>
                    </div>
                    <div className="card-info">
                      <h3 className="card-title">{member.name}</h3>
                      <p className="card-description">{member.role}</p>
                      <p className="card-bio">{member.description}</p>
                      <div className="card-socials">
                        {member.socials.map((social, index) => {
                          let href = '#';
                          
                          if (social === 'gmail') {
                            const email = member.links[0];
                            href = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${email}`;
                          } else if (social === 'facebook') {
                            const fbIndex = member.socials.indexOf('facebook');
                            href = member.links[fbIndex];
                          } else if (social === 'instagram') {
                            const igIndex = member.socials.indexOf('instagram');
                            href = member.links[igIndex];
                          }

                          return (
                            <a 
                              key={index} 
                              href={href} 
                              className="social-icon"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {social === 'gmail' && (
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                                </svg>
                              )}
                              {social === 'facebook' && (
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
                                </svg>
                              )}
                              {social === 'instagram' && (
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z"/>
                                </svg>
                              )}
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <button 
              className="carousel-btn next-btn"
              onClick={() => setSelectedMember(selectedMember < teamMembers.length ? selectedMember + 1 : 1)}
            >
              →
            </button>
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="feedback-section" id="feedback">
        <div className="feedback-container">
          <div className="feedback-header">
            <p className="feedback-label">FEEDBACK</p>
            <h2 className="feedback-title">We'd Love to Hear From You</h2>
            <p className="feedback-subtitle">Your feedback helps us improve Kindora for everyone.</p>
          </div>

          <form className="feedback-form" onSubmit={handleFeedbackSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="your.email@example.com"
                value={feedbackEmail}
                onChange={(e) => setFeedbackEmail(e.target.value)}
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="form-group">
              <label htmlFor="feedback">Your Feedback</label>
              <textarea 
                id="feedback" 
                name="feedback" 
                rows="8"
                placeholder="Share your thoughts, suggestions, or report any issues..."
                value={feedbackMessage}
                onChange={(e) => setFeedbackMessage(e.target.value)}
                required
                disabled={isSubmitting}
              ></textarea>
            </div>

            {submitStatus === 'success' && (
              <div className="status-message success">
                ✓ Thank you! Your feedback has been submitted successfully.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="status-message error">
                ✗ Oops! Something went wrong. Please try again.
              </div>
            )}

            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Feedback'}
            </button>
          </form>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-column">
            <div className="footer-logo">
              <img src={logo} alt="Kindora Logo" className="footer-logo-img" />
              <span>Kindora</span>
            </div>
            <p className="footer-description">
              A mobile platform designed to streamline clinical operations and foster collaborative 
              therapy for children with developmental delays.
            </p>
            
          </div>

          <div className="footer-column">
            <h3>Useful Links</h3>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#team">The Team</a></li>
              <li><a href="#feedback">Feedback</a></li>
            </ul>
          </div>

          <div className="footer-column">
            {/* <h3>Contact Us</h3>
            <ul className="footer-contact">
              <li>
                <span className="contact-icon">📧</span>
                <a href="mailto:kindora.support@uic.edu.ph">kindora.support@uic.edu.ph</a>
              </li>
              <li>
                <span className="contact-icon">📱</span>
                <span>Available on Android</span>
              </li>
            </ul> */}
            <div className="footer-university">
              <h4>University of the Immaculate Conception</h4>
              <p>Father Selga St., Davao City</p>
              <p>Davao del Sur, Philippines 8000</p>
            </div>

          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Kindora. All rights reserved.</p>
          <p>Developed as a Capstone Project | University of the Immaculate Conception</p>
        </div>
      </footer>
    </div>
  )
}

export default App
