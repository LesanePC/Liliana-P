import { useState } from 'react';
import { createPortal } from 'react-dom';
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
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedWork, setSelectedWork] = useState<typeof works[0] | null>(null);

  const visibleWorks = isExpanded ? works : works.slice(0, 3);
  const showButton = works.length > 3;

  const closeModal = () => setSelectedWork(null);

  return (
    <div className={styles.category}>
      <div className={styles.categoryHeader}>
        <div>
          <span className={styles.categoryNumber}>
            0{works[0]?.category === 'art' ? '1' : '2'}
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
        {visibleWorks.map((work, index) => {
          const isLarge = index === 0;
          return (
            <div
              className={`${styles.workCard} ${isLarge ? styles.large : styles.small}`}
              key={work.id}
              onClick={() => setSelectedWork(work)}
            >
              <div
                className={styles.image}
                style={{ backgroundColor: work.color || '#E5DDD4' }}
              >
                <img src={work.image} alt={work.title} className={styles.workImage} />
                <div className={styles.overlay}>
                  <span>ПОСМОТРЕТЬ →</span>
                </div>
              </div>
              <div className={styles.workInfo}>
                <span>{work.title}</span>
                <span>{work.type}</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className={styles.categoryFooter}>
        <p>{description}</p>

        {showButton && (
          <button type="button" onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? 'СВЕРНУТЬ' : 'СМОТРЕТЬ ВСЕ'}
            <span>↗</span>
          </button>
        )}
      </div>

      {/* --- МОДАЛЬНОЕ ОКНО ЧЕРЕЗ ПОРТАЛ --- */}
      {selectedWork &&
        createPortal(
          <div className={styles.modalOverlay} onClick={closeModal}>
            <div className={styles.modalContent}>
              <button
                className={styles.modalClose}
                onClick={(e) => {
                  e.stopPropagation();
                  closeModal();
                }}
              >
                ×
              </button>
              <img
                src={selectedWork.image}
                alt={selectedWork.title}
                onClick={(e) => e.stopPropagation()}
              />
              <div className={styles.modalInfo}>
                <h3>{selectedWork.title}</h3>
                <p>{selectedWork.type}</p>
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
};