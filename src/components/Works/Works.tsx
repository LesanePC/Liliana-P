import { works } from '../../data/works';
import styles from './Works.module.scss';

export const Works = () => {
  const artWorks = works.filter((work) => work.category === 'art');
  const graphicWorks = works.filter(
    (work) => work.category === 'graphic'
  );

  return (
    <section className={styles.works} id="works">
      <div className={styles.heading}>
        <div className={styles.eyebrow}>
          <span />
          МОИ РАБОТЫ
        </div>

        <h2>
          Два направления —
          <br />
          <em>одна страсть</em>
        </h2>

        <p>
          Искусство и дизайн существуют рядом.
          Каждый проект — это возможность
          исследовать форму, цвет и идею.
        </p>
      </div>

      <div className={styles.categories}>
        <WorkCategory
          title="Художественные"
          subtitle="РАБОТЫ"
          description="Живопись, графика, акварель и личные художественные проекты."
          works={artWorks}
        />

        <WorkCategory
          title="Графические"
          subtitle="РАБОТЫ"
          description="Айдентика, брендинг, плакаты и визуальные решения."
          works={graphicWorks}
        />
      </div>
    </section>
  );
};

interface WorkCategoryProps {
  title: string;
  subtitle: string;
  description: string;
  works: typeof works;
}

const WorkCategory = ({
  title,
  subtitle,
  description,
  works,
}: WorkCategoryProps) => {
  return (
    <div className={styles.category}>
      <div className={styles.categoryHeader}>
        <div>
          <span className={styles.categoryNumber}>
            0{works[0].category === 'art' ? '1' : '2'}
          </span>

          <h3>
            {title}
            <br />
            <span>{subtitle}</span>
          </h3>
        </div>

        <span className={styles.plus}>+</span>
      </div>

      <div className={styles.gallery}>
        {works.map((work, index) => (
          <div
            className={`${styles.workCard} ${
              index === 0 ? styles.large : ''
            }`}
            key={work.id}
          >
            <div
              className={styles.image}
              style={{ backgroundColor: work.color }}
            >
              <span className={styles.placeholderLetter}>
                {work.title.charAt(0)}
              </span>

              <div className={styles.overlay}>
                <span>ПОСМОТРЕТЬ →</span>
              </div>
            </div>

            <div className={styles.workInfo}>
              <span>{work.title}</span>
              <span>{work.type}</span>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.categoryFooter}>
        <p>{description}</p>

        <button type="button">
          СМОТРЕТЬ ВСЕ
          <span>↗</span>
        </button>
      </div>
    </div>
  );
};