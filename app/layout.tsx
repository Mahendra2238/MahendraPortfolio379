import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mahendra Gaddam — Portfolio",
  description:
    "Computer Science Engineer | Full-Stack Developer & AI/ML Enthusiast. Explore projects, skills, internships, education, and contact.",
  generator: "v0.app",
  keywords: [
    "Mahendra Gaddam",
    "portfolio",
    "web developer",
    "AI",
    "ML",
    "JavaScript",
    "Python",
    "TensorFlow",
    "Internship",
    "Placement",
  ],
  openGraph: {
    title: "Mahendra Gaddam — Portfolio",
    description:
      "Full-Stack and AI/ML projects. Education, experience, skills, and contact.",
    type: "website",
    url: "https://mahendraportfolio379.vercel.app/",
  },
  metadataBase: new URL("https://mahendraportfolio379.vercel.app/"),
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon", sizes: "32x32" },
      { url: "/icon.png", type: "image/png", sizes: "192x192" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Font Awesome CSS */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          integrity="sha512-yHNm2lGxM2aOn6Rj/8VQX/3+7TiN1Gc3UfEm+Pjz6jXYxxKRoM3pgLQ+V04VQX4zYmNR7kJ6D3Rt7Xx0H+0l2Q=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body
        className={`min-h-dvh antialiased font-sans ${GeistSans.variable} ${GeistMono.variable}`}
      >
        {/* Theme initialization script */}
        <Script id="theme-init" strategy="beforeInteractive">
          {`
            (function() {
              try {
                var t = localStorage.getItem('theme');
                var m = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                var theme = t || m;
                if (theme === 'dark') document.documentElement.classList.add('dark');
              } catch (_) {}
            })();
          `}
        </Script>

        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  );
}

// import type React from "react"
// import type { Metadata } from "next"
// import { GeistSans } from "geist/font/sans"
// import { GeistMono } from "geist/font/mono"
// import { Analytics } from "@vercel/analytics/next"
// import { Suspense } from "react"
// import Script from "next/script"
// import "./globals.css"

// export const metadata: Metadata = {
//   title: "Mahendra Gaddam — Portfolio",
//   description:
//     "Computer Science Engineer | Full-Stack Developer & AI/ML Enthusiast. Explore projects, skills, internships, education, and contact.",
//   generator: "v0.app",
//   keywords: [
//     "Mahendra Gaddam",
//     "portfolio",
//     "web developer",
//     "AI",
//     "ML",
//     "JavaScript",
//     "Python",
//     "TensorFlow",
//     "Internship",
//     "Placement",
//   ],
//   openGraph: {
//     title: "Mahendra Gaddam — Portfolio",
//     description:
//       "Full-Stack and AI/ML projects. Education, experience, skills, and contact.",
//     type: "website",
//     url: "https://mahendraportfolio379.vercel.app/",
//   },
//   metadataBase: new URL("https://mahendraportfolio379.vercel.app/"),
//   icons: {
//     icon: [
//       { url: "/favicon.ico", type: "image/x-icon", sizes: "32x32" },
//       { url: "/icon.png", type: "image/png", sizes: "192x192" },
//     ],
//     shortcut: ["/favicon.ico"],
//     apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
//   },
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body
//         className={`min-h-dvh antialiased font-sans ${GeistSans.variable} ${GeistMono.variable}`}
//       >
//         {/* Theme initialization script */}
//         <Script id="theme-init" strategy="beforeInteractive">
//           {`
//             (function() {
//               try {
//                 var t = localStorage.getItem('theme');
//                 var m = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
//                 var theme = t || m;
//                 if (theme === 'dark') document.documentElement.classList.add('dark');
//               } catch (_) {}
//             })();
//           `}
//         </Script>

//         <Suspense fallback={null}>{children}</Suspense>
//         <Analytics />
//       </body>
//     </html>
//   )
// }

// // import type React from "react"
// // import type { Metadata } from "next"
// // import { GeistSans } from "geist/font/sans"
// // import { GeistMono } from "geist/font/mono"
// // import { Analytics } from "@vercel/analytics/next"
// // import { Suspense } from "react"
// // import Script from "next/script"
// // import "./globals.css"

// // export const metadata: Metadata = {
// //   title: "Mahendra Gaddam — Portfolio",
// //   description:
// //     "Computer Science Engineer | Full‑Stack Developer & AI/ML Enthusiast. Explore projects, skills, internships, education, and contact.",
// //   generator: "v0.app",
// //   keywords: [
// //     "Mahendra Gaddam",
// //     "portfolio",
// //     "web developer",
// //     "AI",
// //     "ML",
// //     "JavaScript",
// //     "Python",
// //     "TensorFlow",
// //     "Internship",
// //     "Placement",
// //   ],
// //   openGraph: {
// //     title: "Mahendra Gaddam — Portfolio",
// //     description: "Full‑Stack and AI/ML projects. Education, experience, skills, and contact.",
// //     type: "website",
// //   },
// //   metadataBase: new URL("https://example.com"), // replace with your final domain when deploying
// // }

// // export default function RootLayout({
// //   children,
// // }: Readonly<{
// //   children: React.ReactNode
// // }>) {
// //   return (
// //     <html lang="en" suppressHydrationWarning>
// //       <head>
// //         // app/head.tsx
// //       export default function Head() {
// //         return (
// //           <>
// //             <title>Mahendra Gaddam — Portfolio</title>
// //             <link rel="icon" href="/icon.png" type="image/png" />
// //           </>
// //         )
// //       }

// //         <Script id="theme-init" strategy="beforeInteractive">
// //           {`
// //             (function() {
// //               try {
// //                 var t = localStorage.getItem('theme');
// //                 var m = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
// //                 var theme = t || m;
// //                 if (theme === 'dark') document.documentElement.classList.add('dark');
// //               } catch (_) {}
// //             })();
// //           `}
// //         </Script>
// //       </head>
// //       <body className={`min-h-dvh antialiased font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
// //         <Suspense fallback={null}>{children}</Suspense>
// //         <Analytics />
// //       </body>
// //     </html>
// //   )
// // }
