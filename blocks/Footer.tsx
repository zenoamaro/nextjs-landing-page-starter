import styles from './Footer.module.css';
import Button from '../components/Button';
import cx from '../utils/cx';

export default function Footer(p: {
  className?: string,
}) {
  const className = cx(
    styles.container,
    p.className,
  );

  return (
    <footer className={className}>
      <div className={styles.content}>
        <div>LOGO</div>
        <div>&copy; 2021, LOGO</div>
        {/* <Button location="accent" type="secondary">Sign up for early access</Button> */}
      </div>
    </footer>
  );
}
