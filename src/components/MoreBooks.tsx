import styles from './MoreBooks.module.css';

type PlannedBook = {
  title: string;
  status: string;
};

export default function MoreBooks({ dict }: { dict: any }) {
  const items: PlannedBook[] = dict?.moreBooks?.items ?? [];

  return (
    <section id="more-books" className={styles.section}>
      <div className="container">
        <div className={styles.heading}>
          <h2 className={styles.title}>{dict?.moreBooks?.title ?? 'More books in this series'}</h2>
          <p className={styles.subtitle}>
            {dict?.moreBooks?.subtitle ?? 'Two more volumes are planned for this series.'}
          </p>
        </div>

        {items.length > 0 && (
          <div className={styles.grid}>
            {items.map((item, index) => (
              <article key={`${item.title}-${index}`} className={`${styles.card} ux-hover-card`}>
                <div className={styles.inner}>
                  <div className={styles.content}>
                    <div className={styles.kicker}>{item.status}</div>
                    <h3 className={styles.bookTitle}>{item.title}</h3>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
