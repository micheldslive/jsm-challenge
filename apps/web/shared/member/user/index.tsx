import { UserModel } from "@jsm/backend"
import Image from "next/image"
import { Card } from "@jsm/ui"
import { format } from "date-fns"
import { useTranslation } from "react-i18next"
import { tv } from "tailwind-variants"
import { startCase } from "lodash"
import { ItemNotFound } from "~/shared/not-found"

interface UserProps {
  user?: UserModel
  loading?: boolean
}

const baseTV = tv({
  base: "w-full max-w-sm bg-white border border-neutral-200 rounded-lg shadow dark:bg-neutral-800 dark:border-neutral-700 p-6",
})

export const User = ({ user, loading }: UserProps) => {
  const { t } = useTranslation()
  const infoClass = "pt-5 text-sm font-normal"

  if (!user?.name && !loading) {
    return <ItemNotFound />
  }

  return (
    <div className={baseTV()}>
      <Card
        image={() => (
          <Image
            src={user?.picture.medium ?? ""}
            width={128}
            height={128}
            alt={`${user?.name.first} image`}
          />
        )}
        title={startCase(`${user?.name.first} ${user?.name.last}`)}
        address={startCase(`${user?.location.street}`)}
        country={startCase(
          `${user?.location.city} ${user?.location.state} CEP-${user?.location.postcode}`,
        )}
        loading={loading}
      >
        <div className={infoClass}>
          <span className='font-medium'>{t("main.user.email")}</span>{" "}
          {user?.email}
        </div>
        <div className={infoClass}>
          <span className='font-medium'>{t("main.user.gender")}</span>{" "}
          {startCase(user?.gender)}
        </div>

        {user && (
          <div className={infoClass}>
            <span className='font-medium'>
              {t("main.user.registered.label")}
            </span>{" "}
            {format(user.registered.date, "dd/MM/yyyy")}
            {t("main.user.registered.info", {
              years: user.registered.age,
            })}
          </div>
        )}
      </Card>
    </div>
  )
}
