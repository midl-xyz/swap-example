'use client';

import { Button } from '@/shared';
import { FallbackRender } from '@sentry/react';
import { CopyIcon, RotateCwIcon } from 'lucide-react';
import { useState } from 'react';
import { css } from '~/styled-system/css';
import { hstack } from '~/styled-system/patterns';

export const ErrorMessage = ({
  error,
  resetError,
  componentStack,
  eventId,
}: {
  error: Error;
  resetError: () => void;
  componentStack: string | null;
  eventId: string;
}) => {
  return (
    <div
      className={css({
        p: 4,
        borderRadius: 'md',
        width: 'full',
        maxWidth: 600,
        margin: 'auto',
      })}
    >
      <p
        className={css({
          textStyle: 'h3',
        })}
      >
        Something went wrong
      </p>
      <p className={css({ color: 'neutral.600' })}>
        Sorry, an unexpected error occurred while processing your request. If
        this issue persists, please contact support providing the error ID.
      </p>

      <div
        className={css({
          bg: 'neutral.100',
          borderRadius: 'md',
          p: 4,
          mt: 4,
        })}
      >
        {eventId && (
          <div
            className={css({
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            })}
          >
            <div>
              <strong>Error ID:</strong> {eventId}
            </div>
            <Button
              onClick={() => navigator.clipboard.writeText(eventId)}
              appearance="ghost"
            >
              <CopyIcon width={16} height={16} />
            </Button>
          </div>
        )}
        <details>
          <summary
            className={css({
              fontSize: 12,
              cursor: 'pointer',
            })}
          >
            Show details
          </summary>
          <p
            className={css({
              color: 'neutral.600',
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word',
              overflowX: 'auto',
              fontSize: 12,
            })}
          >
            <strong>Error:</strong> {error.message}
          </p>
          <pre
            className={css({
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word',
              overflowX: 'auto',
              fontSize: 12,
            })}
          >
            {componentStack}
          </pre>
        </details>
      </div>

      <br />
      <div className={hstack()}>
        <Button onClick={resetError} appearance="tertiary">
          <RotateCwIcon width={16} height={16} />
          <span>Reload the page</span>
        </Button>

        <Button appearance="secondary">Contact support</Button>
      </div>
    </div>
  );
};

export const renderErrorMessage: FallbackRender = ({
  error,
  resetError,
  componentStack,
  eventId,
}) => {
  return (
    <ErrorMessage
      error={error}
      resetError={resetError}
      componentStack={componentStack}
      eventId={eventId}
    />
  );
};
