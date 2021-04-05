import styles from './Highlights.module.css';
import Section from '../components/Section';
import cx from '../utils/cx';

export default function Highlights(p: {
  className?: string,
  background?: 'normal' | 'alternate',
  title: string,
  subtitle: string,
  highlights: {
    title: string,
    text: string,
    illustration: string,
  }[],
}) {
  const className = cx(
    styles.container,
    p.className,
  );

  return (
    <Section className={className} background={p.background}>
      <div className={styles.header}>
        <h2 className={styles.title}>{p.title}</h2>
        <p className={styles.subtitle}>{p.subtitle}</p>
      </div>

      <ul className={styles.highlights}>
        {p.highlights.map((item, i) => {
          return (
            <li key={i} className={styles.highlight}>
              <div className={styles['highlight-illustration']}/>
              <div className={styles['highlight-content']}>
                <h3 className={styles['highlight-title']}>{item.title}</h3>
                <p className={styles['highlight-text']}>{item.text}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
