import styles from './SubscribeInput.module.css';
import cx from '../utils/cx';
import Button from './Button';

export default function SubscribeInput(p: {
  location?: 'body' | 'accent',
  className?: string,
  placeholder?: string,
}) {
  const placeholder = p.placeholder ?? 'you@company.com';
  const location = p.location ?? 'body';

  const className = cx(
    styles.container,
    styles[`container-location-${location}`],
    p.className,
  );

  return (
    <div className={className}>
      <input className={styles.input} type="email" placeholder={placeholder}/>
      <Button className={styles.button} location={p.location}>Sign up for early access</Button>
    </div>
  )
}
