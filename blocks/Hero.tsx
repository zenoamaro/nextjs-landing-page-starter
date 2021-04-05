import styles from './Hero.module.css';
import Section from '../components/Section';
import cx from '../utils/cx';
import SubscribeInput from '../components/SubscribeInput';

export default function Hero(p: {
  id?: string,
  className?: string,
  title: string,
  subtitle: string,
  illustration: string,
  subscribePlaceholder?: string,
  subscribeAction?: string,
}) {
  const className = cx(
    styles.container,
    p.className,
  );

  return (
    <Section id={p.id} className={className}>
      <div className={styles.header}>
        <h1 className={styles.title}>{p.title}</h1>
        <p className={styles.subtitle}>{p.subtitle}</p>
        {p.subscribeAction && <SubscribeInput className={styles.subscribe} placeholder={p.subscribePlaceholder} action={p.subscribeAction}/>}
      </div>
      <div className={styles.illustration}/>
    </Section>
  );
}
