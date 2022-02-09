import '../styles/globals.css'

import AnalyticsProvider from "next-lytics"
import { GoogleAnalytics } from "next-lytics/plugins"

const plugins = [
  GoogleAnalytics({
    trackingId: "UA-54452813-24",
  }),
]

function MyApp({ Component, pageProps }) {
  return (
    <AnalyticsProvider plugins={plugins}>
      <Component {...pageProps} />
    </AnalyticsProvider>
  )
}

export default MyApp
