import { Inter, Roboto, Black_Han_Sans, Lusitana } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });

export const roboto = Roboto({ weight: ["300", "500"], subsets: ["latin"] });

export const blackHanSans = Black_Han_Sans({
    weight: ["400"],
    subsets: ["latin"],
});

export const lusitana = Lusitana({ weight: "400", subsets: ["latin"] });
