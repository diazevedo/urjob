export default function preparePositions(positions) {
  return positions.map((p) => ({
    ...p,
    title: p.title.replace(/(<([^>]+)>)/gi, ''),
    city: p.location.area[3] || 'Australia',
    state: p.location.area[1] || 'Australia',
    tag: p.category.label === 'Unknown' ? false : p.category.label,
  }));
}
