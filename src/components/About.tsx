

function About(){
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    return (
    <>
    <section className="about-section">
        <h1 className="about-section-title">🎭За Мен</h1>
        <div className="info-container">
            <div className="about-img" ></div>
            <div className="info-card">
                <p>Аз съм Рошко Пирожко. Парти аниматор, който над 9 години радва малчугани. </p>
            </div>
        </div>
    </section>
    <section className="about-service-section">
        <h1 className="about-service-section-title">🎉Какво предлагам</h1>
        <div className="info-container">
            <div className="info-card">
                <p>Предлагам парти анимация, която включва игри, танци, музика и много забавление за деца на възраст от 4 до 12 години.</p>
            </div>
            <div className="about-img"></div>
        </div>
    </section>
    <section className="about-section">
        <h1 className="about-section-title">🎈Защо да изберете мен</h1>
        <div className="info-container">
            <div className="about-img"></div>
            <div className="info-card">
                <p>С мен ще получите професионално обслужване, креативни идеи и много усмивки. Аз съм тук, за да направя вашето парти незабравимо!</p>
            </div>
        </div>
    </section>
    <section className="about-contact-section">
        <h1 className="about-contact-section-title">📞Свържете се с мен</h1>
        <div className="info-container">
            <div className="info-card">
                <p>За повече информация и резервации, моля свържете се с мен на телефон: 0888 123 456. Очаквам ви!</p>
            </div>
        </div>
    </section>
    </>
)};

export default About;