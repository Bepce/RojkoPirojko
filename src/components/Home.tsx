import { Link } from "react-router-dom";

function Home() {
  window.scrollTo({ top: 0, left: 0, behavior: `instant` });
  return (
    <>
    <section className="hero-section">
        <div className="hero-container">
          <h1 className="hero-title">
            🎉 Където смехът расте и въображението лети 🎉
          </h1>
          <p className="hero-subtitle">
            Незабравими моменти и неспирна веселба — <strong>Рошко-Пирожко </strong>
            ще направи рожденният ден, училищно събитие или парти незабравимо.
          </p>
          <div className="hero-buttons">
            <Link to="/book" className='btn-primary'>🎈 Резервирай</Link>
            <Link to="/gallery" className='btn-secondary'>📸 Виж забавата</Link>
          </div>
        </div>
      </section>

      <section className="review-section">
        <div className="review-container">
          <h2 className="review-title">
            💬 Какво казват родителите
          </h2>
          <div className="review-grid">
            <div className="review-card">
              <p className="review-text">
                "Най-добрият аниматор. Децата много се забавляваха, а ние заедно с тях. Професионалист, усмихнат, любезен. Препоръчвам и със сигурност ще е и на следващия му рожден ден!"
              </p>
              <p className="review-author">– Мария Ц.</p>
            </div>
            <div className="review-card">
              <p className="review-text">
                "Препоръчвам с две ръце ! 
Благодаря за якото парти ! Децата са във възторг!"
              </p>
              <p className="review-author">– Симона С.</p>
            </div>
            <div className="review-card">
              <p className="review-text">
                "Забележително е как успя да накара всяко дете да се чувства специално и важно. Определено има дарба да създава незабравими спомени! Професионализмът, съчетан с искрена любов към работата с деца, си личеше във всеки един момент. Браво за невероятната енергия и всеотдайност!"
              </p>
              <p className="review-author">– Мария Д.</p>
            </div>
            <div className="review-card">
              <p className="review-text">
                "Препоръчвам с две ръце! Децата се забавлявяха на макс. Рошко-Пирожко прави уникални и запомнящи се детски партита и всеки път дава всичко от себе си!"
              </p>
              <p className="review-author">– Чудомира М.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="services-section">
        <div className="section-container">
          <h2 className="section-title">🎭 Какво предлагам</h2>
          <div className="service-grid">
            <div className="service-card">
              <h3 className="service-title">🎈 Моделиране на балони</h3>
              <p className="service-description">Шапки, мечове, животни и др. - направени на място от мен, Рошко!</p>
            </div>
            <div className="service-card">
              <h3 className="service-title">🎶 Детска дискотека</h3>
              <p className="service-description">Музикална забава подходяща за малчуганите. Пригответе се за ритмични танци и весели песнички!</p>
            </div>
            <div className="service-card">
              <h3 className="service-title">🎂 Ритуал с торта</h3>
              <p className="service-description">Нека този сладък ритуал бъде изпълнен с радост и много усмивки за нашия рожденик!</p>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="section-container">
          <h2 className="section-title">❓ Често Задавани Въпроси</h2>
          <div className="faq-list">
            <div className="faq-item">
              <h3 className="faq-question">За кого е подходящо?</h3>
              <p className="faq-answer">Програмата е подходяща за деца от 4 до 12 годишна възраст.</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Кога е най-подходящо да ви резервирам?</h3>
              <p className="faq-answer">Колкото по-рано, толкова по-добре! Препоръчвам ви да го направите поне 2 седмици предварително, особено когато става въпрос за Съобта или Неделя!</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Ако искам да откажа парти?</h3>
              <p className="faq-answer">Всичко се случва! Затова предлагам насрочване за друга дата или отказ с 72 часово преизвестие.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2 className="cta-title">Готови да Създадем Магически Спомени?</h2>
        <Link to="/book" className="cta-button">🎉 Да Започваме</Link>
      </section>
      </>
  );
}

export default Home;