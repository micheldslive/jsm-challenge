import { useTranslation } from "react-i18next"
import { Container } from "../container"
import { JSMLogo } from "./Logo"

export const Footer = () => {
  const { t } = useTranslation()
  return (
    <footer className='bg-neutral-750 dark:bg-neutral-760'>
      <Container className='lg:container p-10 flex flex-col items-center gap-5 justify-center'>
        <JSMLogo />
        <h4 className='text-white text-base font-medium'>
          {t("footer.company.name")}
        </h4>
      </Container>
    </footer>
  )
}
