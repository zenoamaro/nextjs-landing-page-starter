import styles from './Button.module.css';
import cx from '../utils/cx';

export default function Button(p: {
  size?: 'normal' | 'small',
  type?: 'primary' | 'secondary',
  location?: 'body' | 'accent',
  className?: string,
  children: React.ReactNode,
}) {
  const size = p.size ?? 'normal';
  const type = p.type ?? 'primary';
  const location = p.location ?? 'body';

  const className = cx(
    styles.container,
    styles[`container-size-${size}`],
    styles[`container-type-${type}`],
    styles[`container-location-${location}`],
    p.className,
  );

  return (
    <div className={className}>
      {p.children}
    </div>
  )
}
