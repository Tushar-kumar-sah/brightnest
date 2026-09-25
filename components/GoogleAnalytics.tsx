"use client"

import Script from "next/script"

export default function GoogleAnalytics() {
  // Use a default tracking ID or get it from environment variables
  const gaId = process.env.NEXT_PUBLIC_GA_ID || "G-EBP1YLYT55"

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${gaId}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  )
}
