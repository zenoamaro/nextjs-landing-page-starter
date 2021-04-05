import styles from './Header.module.css';
import Button from '../components/Button';
import cx from '../utils/cx';

export default function Header(p: {
  className?: string,
}) {
  const className = cx(
    styles.container,
    p.className,
  );

  return (
    <header className={className}>
      <div className={styles.content}>
        LOGO
        <Button type="secondary">Sign up for early access</Button>
      </div>
    </header>
  );
}
