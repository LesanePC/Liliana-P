import styles from './Hero.module.scss';

export const Hero = () => {
  return (
    <section className={styles.hero} id="about">
      <div className={styles.content}>
        <div className={styles.eyebrow}>
          <span />
          ИСКУССТВО · ДИЗАЙН · ИДЕЯ
        </div>

        <h1>
          Создаю
          <br />
          визуальные истории,
          <br />
          <em>которые говорят</em>
        </h1>

        <p className={styles.description}>
          Сочетаю художественный подход
          и дизайн-мышление, чтобы создавать
          эстетичные и функциональные решения
          для брендов и людей.
        </p>

        <a href="#works" className={styles.cta}>
          <span>СМОТРЕТЬ РАБОТЫ</span>
          <span className={styles.arrow}>→</span>
        </a>
      </div>

      <div className={styles.visual}>
        <div className={styles.paper}>
          <div className={styles.placeholder}>
            <span>Л</span>
          </div>

          <div className={styles.tape} />
        </div>

        <div className={styles.flower} />
        <div className={styles.brush} />
      </div>
    </section>
  );
};