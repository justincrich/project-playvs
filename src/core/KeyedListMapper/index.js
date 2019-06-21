export default function KeyedListMapper({
  list,
  selectId,
  children,
  start = 0,
  end = list.length - 1,
}) {
  const generateId = item => {
    if (selectId && typeof selectId === 'function') {
      return selectId(item);
    }
    return JSON.stringify(item);
  };
  if (list && typeof children === 'function') {
    return list.reduce((acc, item, index) => {
      if (index >= start && index <= end) {
        acc.push(children(generateId(item), item, index));
      }
      return acc;
    }, []);
  }
  throw new Error('KeyedListMapper: No list provided');
}
