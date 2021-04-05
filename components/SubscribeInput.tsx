import styles from './SubscribeInput.module.css';
import Button from './Button';
import cx from '../utils/cx';

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
    <form method="GET" action="/api/subscribe"> {/* Yes, GET */}
      <div className={className}>
        <input className={styles.input} name="email" type="email" required placeholder={placeholder}/>
        <input className={styles.pooh} name="b_3951c19vtqb9xa0we_9rv293" tabIndex={-1} defaultValue=""/>
        <Button className={styles.button} size="large">{action}</Button>
      </div>
    </form>
  )
}
