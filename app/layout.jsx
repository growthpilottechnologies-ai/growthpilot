import "./globals.css";import Header from "@/components/Header";import Footer from "@/components/Footer";
export const metadata={title:"GrowthPilot Technologies | Web, Software & Digital Growth",description:"Web development, SaaS, mobile apps, SEO and digital marketing from GrowthPilot Technologies.",icons:{icon:"/logo.png"}};
export const viewport={width:"device-width",initialScale:1,viewportFit:"cover"};
export default function RootLayout({children}){return(<html lang="en"><body><Header/><main>{children}</main><Footer/></body></html>)}
