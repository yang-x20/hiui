import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { IconProps } from '../../@types/props'

const _prefix = getPrefixCls('icon-right-outlined')

export const RightOutlined = forwardRef<SVGSVGElement | null, IconProps>(
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
          d="M414.165333 225.834667a42.666667 42.666667 0 0 0-62.826666 57.621333l2.496 2.709333L579.626667 512 353.834667 737.834667a42.666667 42.666667 0 0 0-2.496 57.621333l2.496 2.709333a42.666667 42.666667 0 0 0 57.621333 2.496l2.709333-2.496 256-256a42.666667 42.666667 0 0 0 2.496-57.621333l-2.496-2.709333-256-256z"
          p-id="49596"
        ></path>
      </svg>
    )
  }
)

if (__DEV__) {
  RightOutlined.displayName = 'RightOutlined'
}
