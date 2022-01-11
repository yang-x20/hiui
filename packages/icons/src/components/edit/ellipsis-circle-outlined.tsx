import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { IconProps } from '../../@types/props'

const _prefix = getPrefixCls('icon-ellipsis-circle-outlined')

export const EllipsisCircleOutlined = forwardRef<SVGSVGElement | null, IconProps>(
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
          d="M512 85.333333c235.648 0 426.666667 191.018667 426.666667 426.666667s-191.018667 426.666667-426.666667 426.666667S85.333333 747.648 85.333333 512 276.352 85.333333 512 85.333333z m0 85.333334C323.477333 170.666667 170.666667 323.477333 170.666667 512s152.810667 341.333333 341.333333 341.333333 341.333333-152.810667 341.333333-341.333333S700.522667 170.666667 512 170.666667zM341.333333 448a42.666667 42.666667 0 0 1 42.666667 42.666667v42.666666a42.666667 42.666667 0 0 1-42.666667 42.666667h-42.666666a42.666667 42.666667 0 0 1-42.666667-42.666667v-42.666666a42.666667 42.666667 0 0 1 42.666667-42.666667h42.666666z m192 0a42.666667 42.666667 0 0 1 42.666667 42.666667v42.666666a42.666667 42.666667 0 0 1-42.666667 42.666667h-42.666666a42.666667 42.666667 0 0 1-42.666667-42.666667v-42.666666a42.666667 42.666667 0 0 1 42.666667-42.666667h42.666666z m192 0a42.666667 42.666667 0 0 1 42.666667 42.666667v42.666666a42.666667 42.666667 0 0 1-42.666667 42.666667h-42.666666a42.666667 42.666667 0 0 1-42.666667-42.666667v-42.666666a42.666667 42.666667 0 0 1 42.666667-42.666667h42.666666z"
          p-id="44956"
        ></path>
      </svg>
    )
  }
)

if (__DEV__) {
  EllipsisCircleOutlined.displayName = 'EllipsisCircleOutlined'
}
