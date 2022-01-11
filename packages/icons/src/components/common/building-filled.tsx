import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { IconProps } from '../../@types/props'

const _prefix = getPrefixCls('icon-building-filled')

export const BuildingFilled = forwardRef<SVGSVGElement | null, IconProps>(
  ({ prefixCls = _prefix, className, children, ...rest }, ref) => {
    const cls = cx(prefixCls, className)

    return (
      <svg
        className={cls}
        ref={ref}
        role="icon"
        {...rest}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1024 1024"
        version="1.1"
      >
        <path
          d="M554.666667 106.666667a128 128 0 0 1 128 128v597.333333a85.333333 85.333333 0 0 1-85.333334 85.333333H234.666667a128 128 0 0 1-128-128V234.666667a128 128 0 0 1 128-128h320z m298.666666 298.666666a85.333333 85.333333 0 0 1 85.333334 85.333334v341.333333a85.333333 85.333333 0 0 1-85.333334 85.333333h-42.666666a85.333333 85.333333 0 0 1-85.333334-85.333333V490.666667a85.333333 85.333333 0 0 1 85.333334-85.333334h42.666666zM426.666667 704h-64a21.333333 21.333333 0 0 0-21.184 18.837333L341.333333 725.333333v85.333334a21.333333 21.333333 0 0 0 18.837334 21.184L362.666667 832h64a21.333333 21.333333 0 0 0 21.184-18.837333L448 810.666667v-85.333334a21.333333 21.333333 0 0 0-21.333333-21.333333z m-85.333334-234.666667h-42.666666a21.333333 21.333333 0 0 0-21.184 18.837334L277.333333 490.666667v42.666666a21.333333 21.333333 0 0 0 18.837334 21.184L298.666667 554.666667h42.666666a21.333333 21.333333 0 0 0 21.184-18.837334L362.666667 533.333333v-42.666666a21.333333 21.333333 0 0 0-21.333334-21.333334z m149.333334 0h-42.666667a21.333333 21.333333 0 0 0-21.184 18.837334L426.666667 490.666667v42.666666a21.333333 21.333333 0 0 0 18.837333 21.184L448 554.666667h42.666667a21.333333 21.333333 0 0 0 21.184-18.837334L512 533.333333v-42.666666a21.333333 21.333333 0 0 0-21.333333-21.333334z m-149.333334-128h-42.666666a21.333333 21.333333 0 0 0-21.184 18.837334L277.333333 362.666667v42.666666a21.333333 21.333333 0 0 0 18.837334 21.184L298.666667 426.666667h42.666666a21.333333 21.333333 0 0 0 21.184-18.837334L362.666667 405.333333v-42.666666a21.333333 21.333333 0 0 0-21.333334-21.333334z m149.333334 0h-42.666667a21.333333 21.333333 0 0 0-21.184 18.837334L426.666667 362.666667v42.666666a21.333333 21.333333 0 0 0 18.837333 21.184L448 426.666667h42.666667a21.333333 21.333333 0 0 0 21.184-18.837334L512 405.333333v-42.666666a21.333333 21.333333 0 0 0-21.333333-21.333334z"
          p-id="14991"
        ></path>
      </svg>
    )
  }
)

if (__DEV__) {
  BuildingFilled.displayName = 'BuildingFilled'
}
