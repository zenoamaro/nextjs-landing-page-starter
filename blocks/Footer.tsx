import styles from './Footer.module.css';
import Button from '../components/Button';
import cx from '../utils/cx';

export default function Footer(p: {
  title: string,
  action?: string,
  actionHref?: string,
  onActionClick?(): void,
  className?: string,
}) {
  const className = cx(
    styles.container,
    p.className,
  );

  return (
    <footer className={className}>
      <div className={styles.content}>
        <div title={p.title}>{p.title}</div>
        <div>&copy; {(new Date).getFullYear()}, {p.title}</div>
        {p.action && <Button href={p.actionHref} onClick={p.onActionClick} type="secondary" location="accent">{p.action}</Button>}
      </div>
    </footer>
  );
}
