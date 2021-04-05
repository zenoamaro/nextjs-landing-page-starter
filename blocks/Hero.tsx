import styles from './Hero.module.css';
import Section from '../components/Section';
import cx from '../utils/cx';

export default function Hero(p: {
  title: string,
  subtitle: string,
  illustration: string,
  className?: string,
}) {
  const className = cx(
    styles.container,
    p.className,
  );

  return (
    <Section className={className}>
      <div className={styles.header}>
        <h1 className={styles.title}>{p.title}</h1>
        <p className={styles.subtitle}>{p.subtitle}</p>
      </div>
      <div className={styles.illustration}/>
    </Section>
  );
}
