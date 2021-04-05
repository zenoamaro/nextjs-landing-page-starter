import styles from './Epilogue.module.css';
import Section from '../components/Section';
import cx from '../utils/cx';
import SubscribeInput from '../components/SubscribeInput';

export default function Epilogue(p: {
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
    <Section id={p.id} className={className} background="accent">
      <div className={styles.illustration}/>
      <div className={styles.header}>
        <h2 className={styles.title}>{p.title}</h2>
        <div className={styles.subtitle}>{p.subtitle}</div>
        {p.subscribeAction && <SubscribeInput className={styles.subscribe} location="accent" placeholder={p.subscribePlaceholder} action={p.subscribeAction}/>}
      </div>
    </Section>
  );
}
