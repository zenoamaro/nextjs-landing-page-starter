export default function cx(...className: (string|boolean|undefined)[]): string {
  return className.filter(Boolean).join(' ');
}
