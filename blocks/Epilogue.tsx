import styles from './Epilogue.module.css';
import Section from '../components/Section';
import cx from '../utils/cx';

export default function Epilogue(p: {
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
    <Section className={className} background="accent">
      <div className={styles.illustration}/>
      <div className={styles.header}>
        <h2 className={styles.title}>{p.title}</h2>
        <div className={styles.subtitle}>{p.subtitle}</div>
      </div>
    </Section>
  );
}
