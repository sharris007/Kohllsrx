'use client';

import StyledComponentsRegistry from '@/lib/registry';
import { createGlobalStyle } from 'styled-components';
import { theme } from '@/styles/theme';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: ${theme.fonts.sans};
    font-size: 14px;
    color: ${theme.colors.text};
    background: ${theme.colors.white};
    line-height: 1.5;
  }
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <GlobalStyle />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
