// Displays weekday name of ISO / Unix date provided

export default function weekday(timestamp) {
  return new Date(timestamp).toLocaleDateString('en-US', { weekday: 'long' });
}
