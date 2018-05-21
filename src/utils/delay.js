// Waits for milliseconds to pass

export default async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
