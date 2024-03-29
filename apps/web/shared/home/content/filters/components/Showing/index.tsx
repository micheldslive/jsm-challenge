import { useTranslation } from "react-i18next"
import { usePaginateParamsStore } from "~/core/storage"

export const Showing = () => {
  const { itemsCount, currentCount } = usePaginateParamsStore()
  const { t } = useTranslation()
  const showing = Number(currentCount)
  const total = Number(itemsCount)
  return (
    <div>
      {`${t("main.filters.showing", {
        count: showing >= total ? total : showing,
        total,
      })} ${total === 1 ? t("main.filters.single") : t("main.filters.plural")}`}
    </div>
  )
}
