export function calculateStatus(score) {
  if (score >= 90) return 'Success';
  if (score >= 70) return 'Warning';
  return 'Error';
}

export function formatTime(date) {
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
}
