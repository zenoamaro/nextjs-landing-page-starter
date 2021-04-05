import styles from './Benefits.module.css';
import Section from '../components/Section';
import cx from '../utils/cx';

export default function Benefits(p: {
  id?: string,
  className?: string,
  title: string,
  subtitle: string,
  benefits: {
    title: string,
    text: string,
    illustration: string,
  }[],
  background?: 'normal' | 'alternate',
}) {
  const className = cx(
    styles.container,
    p.className,
  );

  return (
    <Section id={p.id} className={className} background={p.background}>
      <div className={styles.header}>
        <h2 className={styles.title}>{p.title}</h2>
        <p className={styles.subtitle}>{p.subtitle}</p>
      </div>

      <ul className={styles.benefits}>
        {p.benefits.map((item, i) => {
          return (
            <li key={i} className={styles.benefit}>
              <div className={styles['benefit-illustration']}/>
              <div className={styles['benefit-content']}>
                <h3 className={styles['benefit-title']}>{item.title}</h3>
                <p className={styles['benefit-text']}>{item.text}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
