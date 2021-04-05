import styles from './Break.module.css';
import Section from '../components/Section';
import cx from '../utils/cx';
import Button from '../components/Button';

export default function Break(p: {
  id?: string,
  className?: string,
  title: string,
  subtitle: string,
  illustration: string,
  action?: string,
  actionHref?: string,
  onActionClick?(): void,
}) {
  const className = cx(
    styles.container,
    p.className,
  );

  return (
    <Section id={p.id} className={className} size="narrow" background="accent">
      <div className={styles.content}>
        <div className={styles.illustration}/>
        <div className={styles.header}>
          <h1 className={styles.title}>{p.title}</h1>
          <p className={styles.subtitle}>{p.subtitle}</p>
        </div>
        {p.action && <Button href={p.actionHref} onClick={p.onActionClick} size="large" location="accent">{p.action}</Button>}
      </div>
    </Section>
  );
}
