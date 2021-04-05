import styles from './Hero.module.css';
import Section from '../components/Section';
import cx from '../utils/cx';
import SubscribeInput from '../components/SubscribeInput';

export default function Hero(p: {
  title: string,
  subtitle: string,
  illustration: string,
  subscribePlaceholder?: string,
  subscribeAction?: string,
  subscribeUrl?: string,
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
        {p.subscribeUrl && <SubscribeInput className={styles.subscribe} url={p.subscribeUrl} placeholder={p.subscribePlaceholder} action={p.subscribeAction}/>}
      </div>
      <div className={styles.illustration}/>
    </Section>
  );
}
