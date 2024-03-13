import { ComponentPropsWithoutRef } from "react"
import { useTranslation } from "react-i18next"
import { tv } from "tailwind-variants"

const baseTV = tv({
  base: "w-full max-w-sm bg-white border border-neutral-200 rounded-lg shadow dark:bg-neutral-800 dark:border-neutral-700 p-6 text-center",
})

interface ItemNotFoundProps extends ComponentPropsWithoutRef<"div"> {}

export const ItemNotFound = ({ className, ...props }: ItemNotFoundProps) => {
  const { t } = useTranslation()

  return (
    <div className={baseTV({ className })} {...props}>
      {t("main.user.not-found")}
    </div>
  )
}
