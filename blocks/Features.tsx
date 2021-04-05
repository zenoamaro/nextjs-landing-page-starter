import styles from './Features.module.css';
import Section from '../components/Section';
import cx from '../utils/cx';

export default function Features(p: {
  className?: string,
  background?: 'normal' | 'alternate',
  title: string,
  subtitle: string,
  features: {
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

      <ul className={styles.features}>
        {p.features.map((item, i) => {
          return (
            <li key={i} className={styles.feature}>
              <div className={styles['feature-illustration']}/>
              <div className={styles['feature-content']}>
                <h3 className={styles['feature-title']}>{item.title}</h3>
                <p className={styles['feature-text']}>{item.text}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
