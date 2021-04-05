import styles from './Break.module.css';
import Section from '../components/Section';
import cx from '../utils/cx';
import Button from '../components/Button';

export default function Break(p: {
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
    <Section className={className} size="narrow" background="accent">
      <div className={styles.content}>
        <div className={styles.illustration}/>
        <div className={styles.header}>
          <h1 className={styles.title}>{p.title}</h1>
          <p className={styles.subtitle}>{p.subtitle}</p>
        </div>
        <Button size="large" location="accent">Sign up for early access</Button>
      </div>
    </Section>
  );
}
