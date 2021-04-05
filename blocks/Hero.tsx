import styles from './Hero.module.css';
import Section from '../components/Section';
import cx from '../utils/cx';
import SubscribeInput from '../components/SubscribeInput';

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
        <SubscribeInput className={styles.subscribe}/>
      </div>
      <div className={styles.illustration}/>
    </Section>
  );
}
