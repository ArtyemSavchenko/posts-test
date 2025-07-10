export const getSkeletonKeys = (count: number, baseKey: string) => {
  if (count <= 0) {
    return [];
  }

  return Array.from({ length: count }, (_, i) => `${baseKey}-${i}`);
};
