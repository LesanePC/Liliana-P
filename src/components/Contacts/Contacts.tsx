import styles from './Contacts.module.scss';

const contacts = [
  {
    label: 'EMAIL',
    value: 'hello@liliana.design',
    href: 'mailto:hello@liliana.design',
  },
  {
    label: 'TELEGRAM',
    value: '@liliana',
    href: '#',
  },
  {
    label: 'BEHANCE',
    value: 'behance.net/liliana',
    href: '#',
  },
];

export const Contacts = () => {
  return (
    <section className={styles.contacts} id="contacts">
      <div className={styles.top}>
        <div className={styles.eyebrow}>
          <span />
          КАК СВЯЗАТЬСЯ
        </div>

        <span className={styles.number}>03</span>
      </div>

      <div className={styles.content}>
        <div className={styles.heading}>
          <h2>
            Есть идея?
            <br />
            Давайте создадим
            <br />
            <em>что-то особенное.</em>
          </h2>

          <p>
            Открыта к новым проектам,
            интересным сотрудничествам
            и творческим экспериментам.
          </p>
        </div>

        <div className={styles.contactList}>
          {contacts.map((contact) => (
            <a
              href={contact.href}
              className={styles.contact}
              key={contact.label}
            >
              <span className={styles.label}>
                {contact.label}
              </span>

              <span className={styles.value}>
                {contact.value}
                <span className={styles.arrow}>↗</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};