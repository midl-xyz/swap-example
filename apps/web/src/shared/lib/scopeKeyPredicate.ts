import { Query } from '@tanstack/react-query';

export const scopeKeyPredicate = (scopeKeys: string[]) => {
  return (query: Query) => {
    return (
      scopeKeys.some((scopeKey) => query.queryKey.includes(scopeKey)) ||
      Boolean(
        query.queryKey.find(
          (key: unknown) =>
            key &&
            typeof key === 'object' &&
            scopeKeys.some(
              (scopeKey) => 'scopeKey' in key && key['scopeKey'] === scopeKey,
            ),
        ),
      )
    );
  };
};
