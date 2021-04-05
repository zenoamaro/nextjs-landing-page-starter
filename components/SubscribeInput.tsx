import styles from './SubscribeInput.module.css';
import cx from '../utils/cx';
import Button from './Button';

export default function SubscribeInput(p: {
  location?: 'body' | 'accent',
  className?: string,
  action?: string,
  placeholder?: string,
}) {
  const action = p.action ?? 'Join early access';
  const placeholder = p.placeholder ?? 'you@company.com';
  const location = p.location ?? 'body';

  const className = cx(
    styles.container,
    styles[`container-location-${location}`],
    p.className,
  );

  return (
    <form>
      <div className={className}>
        <input className={styles.input} type="email" placeholder={placeholder}/>
        <Button className={styles.button} size="large">{action}</Button>
      </div>
    </form>
  )
}
