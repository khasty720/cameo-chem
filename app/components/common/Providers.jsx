import {NextUIProvider} from '@nextui-org/react';
import {ThemeProvider as NextUIThemesProvider} from 'next-themes';
export function Providers({children, navigate}) {
  return (
    <NextUIProvider navigate={navigate}>
      <NextUIThemesProvider attribute="class" defaultTheme="light">
        {children}
      </NextUIThemesProvider>
    </NextUIProvider>
  );
}
