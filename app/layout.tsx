import "@/app/ui/global.css";
import { inter, roboto } from "@/app/ui/fonts";
// import { useEffect } from "react";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // useEffect(() => {
    //     console.log(roboto);
    // }, []);

    return (
        <html lang="en">
            <body className={`${roboto.className} antialiased`}>
                {children}
            </body>
        </html>
    );
}
