export default function weekday(timestamp) {
  return new Date(timestamp).toLocaleDateString('en-US', { weekday: 'long' });
}
