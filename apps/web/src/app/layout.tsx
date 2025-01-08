import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import { css, cx } from '~/styled-system/css';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={css({
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      })}
    >
      <body
        className={cx(
          inter.className,
          css({
            display: 'flex',
            flexDirection: 'column',
            bg: '#FEFEFE',
          }),
        )}
      >
        {children}
      </body>
    </html>
  );
}
