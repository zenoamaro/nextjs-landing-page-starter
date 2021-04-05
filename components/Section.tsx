import styles from './Section.module.css';
import cx from '../utils/cx';

export default function Section(p: {
  id?: string,
  className?: string,
  size?: 'normal' | 'narrow',
  background?: 'normal' | 'alternate' | 'accent',
  children: React.ReactNode,
}) {
  const size = p.size ?? 'normal';
  const background = p.background ?? 'normal';

  const className = cx(
    styles.container,
    styles[`container-size-${size}`],
    styles[`container-background-${background}`],
    p.className,
  );

  return (
    <section id={p.id} className={className}>
      <div className={styles.content}>
        {p.children}
      </div>
    </section>
  )
}
