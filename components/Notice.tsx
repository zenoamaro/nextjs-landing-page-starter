import styles from './Notice.module.css';
import cx from '../utils/cx';

export default function Notice(p: {
  id?: string,
  className?: string,
  children?: React.ReactNode,
}) {
  const className = cx(
    styles.container,
    p.className,
  );

  return (
    <section id={p.id} className={className}>
      {p.children}
    </section>
  )
}
