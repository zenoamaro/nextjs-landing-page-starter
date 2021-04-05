import styles from './Epilogue.module.css';
import Section from '../components/Section';
import cx from '../utils/cx';
import SubscribeInput from '../components/SubscribeInput';

export default function Epilogue(p: {
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
    <Section className={className} background="accent">
      <div className={styles.illustration}/>
      <div className={styles.header}>
        <h2 className={styles.title}>{p.title}</h2>
        <div className={styles.subtitle}>{p.subtitle}</div>
        {p.subscribeUrl && <SubscribeInput className={styles.subscribe} location="accent" url={p.subscribeUrl} placeholder={p.subscribePlaceholder} action={p.subscribeAction}/>}
      </div>
    </Section>
  );
}
