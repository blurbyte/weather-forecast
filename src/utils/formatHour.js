export default function formatHour(timestamp) {
  return new Date(timestamp)
    .toLocaleDateString('en-US', { hour12: false, hour: 'numeric', minute: 'numeric' })
    .split(' ')[1];
}
