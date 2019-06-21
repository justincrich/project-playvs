export default function elo(rating1, rating2) {
  // eslint-disable-next-line no-restricted-properties
  return 1 / (1 + Math.pow(10, (rating1 - rating2) / 400));
}
