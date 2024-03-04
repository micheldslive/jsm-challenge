import i18nConfig from "~/i18nConfig"
import "~/app/styles/tailwind.css"
import "@jsm/tailwind-config/globals.css"
import "@jsm/ui/tailwind.css"
import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import { ReactNode } from "react"
import { dir } from "i18next"
import initTranslations from "../i18n"
import { TranslationsProvider, MoreProviders } from "~/providers"
import { Layout } from "~/layout"

const roboto = Roboto({ weight: ["400", "500", "700"], subsets: ["latin"] })

export const metadata: Metadata = {
  title: "JSM Challange",
  description: "JSM Users - Challenge",
}

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }))
}

const i18nNamespaces = ["default"]

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: ReactNode
  params: { locale: string }
}) {
  const { resources } = await initTranslations(locale, i18nNamespaces)
  return (
    <html lang={locale} dir={dir(locale)}>
      <body className={roboto.className}>
        <MoreProviders>
          <TranslationsProvider
            namespaces={i18nNamespaces}
            locale={locale}
            resources={resources}
          >
            <Layout>{children}</Layout>
          </TranslationsProvider>
        </MoreProviders>
      </body>
    </html>
  )
}
