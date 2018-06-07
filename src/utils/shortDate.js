// Simply transforms and shortens Unix / ISO dates for consistency

export default function shortDate(timestamp) {
  return new Date(timestamp).toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });
}
