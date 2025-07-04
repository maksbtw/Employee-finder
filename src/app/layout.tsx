import '@app/globals.css'
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode; }) {
    return (
        <html lang="eng">
            <body>
                {children}
            </body>
        </html>
    )
}