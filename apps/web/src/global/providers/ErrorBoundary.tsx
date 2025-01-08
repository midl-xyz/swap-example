'use client';

import * as Sentry from '@sentry/react';

export const ErrorBoundary = ({
  children,
  fallback,
}: {
  children: React.ReactNode;
  fallback: Sentry.ErrorBoundaryProps['fallback'];
}) => {
  return (
    <Sentry.ErrorBoundary fallback={fallback}>{children}</Sentry.ErrorBoundary>
  );
};
