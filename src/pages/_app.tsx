import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { JSX as LocalJSX } from "@ionic/core"
import { JSX as IoniconsJSX } from "ionicons"
import { HTMLAttributes, ReactText } from "react"
import React, { useEffect } from "react"
import { defineCustomElements as ionDefineCustomElements } from "@ionic/core/loader"
import Head from "next/head"
import { MantineProvider } from "@mantine/core"

/* Core CSS required for Ionic components to work properly */
import "@ionic/core/css/core.css"
/* Basic CSS for apps built with Ionic */
import "@ionic/core/css/normalize.css"
import "@ionic/core/css/structure.css"
import "@ionic/core/css/typography.css"

/* Optional CSS utils that can be commented out */
import "@ionic/core/css/padding.css"
import "@ionic/core/css/float-elements.css"
import "@ionic/core/css/text-alignment.css"
import "@ionic/core/css/text-transformation.css"
import "@ionic/core/css/flex-utils.css"
import "@ionic/core/css/display.css"
import Header from "@/components/layout/Header"

type ToReact<T> = {
  [P in keyof T]?: T[P] &
    Omit<HTMLAttributes<Element>, "className"> & {
      class?: string
      key?: ReactText
    }
}

declare global {
  export namespace JSX {
    interface IntrinsicElements
      extends ToReact<
        LocalJSX.IntrinsicElements & IoniconsJSX.IntrinsicElements
      > {}
  }
}

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    ionDefineCustomElements(window)
  })
  return (
    <>
      <Head>
        <title>Ionic React</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta
          name="description"
          content="Next.js setup with Ionic, Capacitor & Mantine UI"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "dark",
        }}
      >
        <Header
          links={[
            {
              link: "/home",
              label: "Home",
            },
            {
              link: "/about",
              label: "About",
            },
            {
              link: "/contact",
              label: "Contact",
            },
          ]}
        />
        <Component {...pageProps} />
      </MantineProvider>
    </>
  )
}
