import { Link } from "react-router-dom";


function Home() {
  return (
    <>
    <section className="hero-section">
        <div className="hero-container">
          <h1 className="hero-title">
            🎉 Where Giggles Grow and Imagination Takes Flight!
          </h1>
          <p className="hero-subtitle">
            Magical moments, silly surprises, and unforgettable fun — <strong>[Your Name]</strong>
            brings joy to birthdays, school events, and parties of all shapes and sizes.
          </p>
          <div className="hero-buttons">
            <Link to="/book" className='btn-primary'>🎈 Book Now</Link>
            <Link to="/gallery" className='btn-secondary'>📸 Watch the Fun</Link>
          </div>
        </div>
      </section>

      <section className="review-section">
        <div className="review-container">
          <h2 className="review-title">
            💬 What Parents Are Saying
          </h2>
          <div className="review-grid">
            <div className="review-card">
              <p className="review-text">
                "[Your Name] was absolutely amazing at our daughter’s party! The kids laughed non-stop and didn’t want it to end!"
              </p>
              <p className="review-author">– Sarah M.</p>
            </div>
            <div className="review-card">
              <p className="review-text">
                "Such energy, creativity, and kindness. My son says it was the best birthday ever! Thank you for the magical memories."
              </p>
              <p className="review-author">– Jason T.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="services-section">
        <div className="section-container">
          <h2 className="section-title">🎭 What I Offer</h2>
          <div className="service-grid">
            <div className="service-card">
              <h3 className="service-title">🎈 Balloon Twisting</h3>
              <p className="service-description">Wacky hats, silly swords, and animals that wiggle – all made on the spot!</p>
            </div>
            <div className="service-card">
              <h3 className="service-title">✨ Magic Shows</h3>
              <p className="service-description">Interactive, hilarious, and full of surprises – perfect for any age group.</p>
            </div>
            <div className="service-card">
              <h3 className="service-title">🎤 Party Hosting</h3>
              <p className="service-description">Games, music, and non-stop fun to keep the celebration rolling smoothly.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="section-container">
          <h2 className="section-title">❓ Frequently Asked Questions</h2>
          <div className="faq-list">
            <div className="faq-item">
              <h3 className="faq-question">What ages do you entertain?</h3>
              <p className="faq-answer">I specialize in parties for children ages 3–10, but I can tailor fun for a variety of age groups!</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">How far in advance should we book?</h3>
              <p className="faq-answer">The sooner the better! I recommend booking 4–6 weeks in advance, especially for weekends.</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">What if I need to cancel?</h3>
              <p className="faq-answer">Life happens! I offer flexible rescheduling or cancellations with at least 72 hours notice.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2 className="cta-title">Ready to Create Magical Memories?</h2>
        <Link to="/book" className="cta-button">🎉 Let’s Get Started</Link>
      </section>
      </>
  );
}

export default Home;