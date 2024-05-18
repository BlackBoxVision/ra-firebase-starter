export const useGetFieldKey = (resource: string) => (field: string) =>
  `resources.${resource}.fields.${field}`;
