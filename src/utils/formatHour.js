// Displays formatted hour and minutes based on provided timestamp

export default function formatHour(timestamp) {
  if (typeof timestamp === 'number') {
    timestamp *= 1000;
  }

  return new Date(timestamp)
    .toLocaleDateString('en-US', { hour12: false, hour: 'numeric', minute: 'numeric' })
    .split(' ')[1]
    .trim();
}
