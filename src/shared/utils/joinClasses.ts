export const joinClasses = (
  ...classes: (string | undefined | null | false)[]
): string => {
  const filtered = classes.filter((item): item is string => Boolean(item));

  return filtered.join(' ');
};
