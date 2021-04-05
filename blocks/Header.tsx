import styles from './Header.module.css';
import Button from '../components/Button';
import cx from '../utils/cx';

export default function Header(p: {
  id?: string,
  className?: string,
  title: string,
  action?: string,
  actionHref?: string,
  onActionClick?(): void,
}) {
  const id = p.id ?? 'top';

  const className = cx(
    styles.container,
    p.className,
  );

  return (
    <header id={id} className={className}>
      <div className={styles.content}>
        <div title={p.title}>{p.title}</div>
        {p.action && <Button href={p.actionHref} onClick={p.onActionClick} type="secondary">{p.action}</Button>}
      </div>
    </header>
  );
}
