"use client"

import { useTranslation } from "react-i18next"
import { Container } from "../container"
import { JSMLogo } from "./Logo"
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa"
import { Social } from "./Social"

export const Footer = () => {
  const { t } = useTranslation()
  return (
    <footer className='bg-neutral-750 mt-8'>
      <Container className='py-10 flex flex-col items-center gap-5 justify-center'>
        <JSMLogo />
        <h4 className='text-white text-base font-medium'>
          {t("footer.company.name")}
        </h4>

        <div className='pt-2 pb-4 flex  flex-col gap-4'>
          <h5 className='text-white text-sm font-normal text-center'>
            {t("footer.social.follow")}
          </h5>
          <Social
            social={[
              {
                href: "https://www.facebook.com/juntossomosmais",
                target: "_blank",
                icon: <FaFacebookF color='white' size={22} />,
              },
              {
                href: "https://www.linkedin.com/company/juntos-somos-mais/",
                target: "_blank",
                icon: <FaLinkedinIn color='white' size={25} />,
              },
              {
                href: "https://www.instagram.com/juntossomosmais",
                target: "_blank",
                icon: <FaInstagram color='white' size={28} />,
              },
            ]}
          />
        </div>
      </Container>
    </footer>
  )
}
