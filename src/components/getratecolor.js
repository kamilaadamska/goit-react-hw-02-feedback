export const getRateColor = rate => {
  switch (rate) {
    case 'good':
      return '#469A49';
    case 'neutral':
      return '#FAD02C';
    case 'bad':
      return '#E12A2A';
    default:
      throw new Error(`Rating type is not recognized.`);
  }
};
