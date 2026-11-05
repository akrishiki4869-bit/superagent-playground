/** Return a greeting for a person. */
export function greet(name, locale = 'en') {
  if (locale === 'zh') return `你好，${name}！`
  return `Hello, ${name}!`
}
