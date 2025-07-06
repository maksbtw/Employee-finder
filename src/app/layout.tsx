import '@app/globals.css'
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode; }) {
    return (
        <html lang="eng">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

            </head>
            <body>
                {children}
            </body>
        </html>
    )
}