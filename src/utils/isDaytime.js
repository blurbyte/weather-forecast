export default function isDaytime(sunrise, sunset, timestamp) {
  return timestamp > sunrise && timestamp < sunset ? true : false;
}
