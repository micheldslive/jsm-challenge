import React, { ComponentProps, forwardRef } from "react"

type AvatarIconProps = Omit<ComponentProps<"svg">, "ref">

export const AvatarIcon = forwardRef<SVGSVGElement, AvatarIconProps>(
  (props, ref) => {
    return (
      <>
        <svg
          version='1.1'
          xmlns='http://www.w3.org/2000/svg'
          x='0px'
          y='0px'
          viewBox='0 0 80 80'
          ref={ref}
          {...props}
        >
          <g id='Camada_1'>
            <rect id='XMLID_1_' fill='#E6E5E4;' width='80' height='80' />
          </g>
          <g id='Camada_2'>
            <path
              id='XMLID_15_'
              fill='#B7B8B8'
              d='M80,80V66.8c-4.2-2.2-10.9-5.7-12.1-6.3c-4.7-2.3-9.6-4.2-14.7-5.8c-5.4-1.8-6.5-4.4-3.8-9.4
		c2.7-5.1,4.2-10.4,5.3-16C57,17,52.2,9.5,40.5,8.5c-9.4-0.8-15.3,2.5-16.4,11.8c-1.1,8.8,0.9,17.2,5.2,25c2.9,5.3,2.3,7.2-3.3,9.2
		c-5.2,1.9-10.5,3.5-15.4,6.2C5,63.7,3.7,65,0,67.7V80H80z'
            />
          </g>
        </svg>
      </>
    )
  },
)
