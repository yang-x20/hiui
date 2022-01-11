import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { IconProps } from '../../@types/props'

const _prefix = getPrefixCls('icon-drag-outlined')

export const DragOutlined = forwardRef<SVGSVGElement | null, IconProps>(
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
          d="M529.984 110.634667l0.426667 0.192a42.346667 42.346667 0 0 1 9.045333 5.845333l0.192 0.149333 0.341333 0.32 2.176 2.026667 106.666667 106.666667a42.666667 42.666667 0 0 1-57.621333 62.826666l-2.709334-2.496L554.666667 252.373333V469.333333h216.981333l-33.813333-33.834666-2.496-2.709334a42.666667 42.666667 0 0 1 60.117333-60.117333l2.709333 2.496 106.666667 106.666667c0.810667 0.810667 1.6 1.642667 2.346667 2.517333l0.149333 0.192 0.448 0.554667 1.493333 1.92-1.941333-2.474667A42.666667 42.666667 0 0 1 917.333333 512v1.066667l-0.064 1.28L917.333333 512a43.178667 43.178667 0 0 1-0.938666 8.938667 42.261333 42.261333 0 0 1-9.066667 18.517333l-0.149333 0.192-0.32 0.341333-2.026667 2.176-106.666667 106.666667-2.709333 2.496a42.666667 42.666667 0 0 1-54.912 0l-2.709333-2.496-2.496-2.709333a42.666667 42.666667 0 0 1 0-54.912l2.496-2.709334L771.626667 554.666667H554.666667v216.96l33.834666-33.792 2.709334-2.496a42.666667 42.666667 0 0 1 60.117333 60.117333l-2.496 2.709333-106.666667 106.666667a42.922667 42.922667 0 0 1-2.517333 2.346667l-0.192 0.149333-0.554667 0.448-1.92 1.493333 2.474667-1.941333a42.666667 42.666667 0 0 1-15.424 8.277333l-0.682667 0.213334 0.682667-0.213334A42.368 42.368 0 0 1 512 917.333333h-1.066667l-1.28-0.064L512 917.333333a43.178667 43.178667 0 0 1-11.349333-1.536l-0.682667-0.192 0.682667 0.213334a42.368 42.368 0 0 1-16.106667-8.490667l-0.192-0.149333a42.922667 42.922667 0 0 1-2.517333-2.346667l-106.666667-106.666667-2.496-2.709333a42.666667 42.666667 0 0 1 0-54.912l2.496-2.709333 2.709333-2.496a42.666667 42.666667 0 0 1 54.912 0l2.709334 2.496L469.333333 771.626667V554.666667H252.352l33.813333 33.834666a42.666667 42.666667 0 0 1 2.496 57.621334l-2.496 2.709333a42.666667 42.666667 0 0 1-57.621333 2.496l-2.709333-2.496-106.666667-106.666667-2.026667-2.176a42.922667 42.922667 0 0 1-0.32-0.341333l2.346667 2.517333a43.157333 43.157333 0 0 1-6.826667-8.874666A42.496 42.496 0 0 1 106.666667 512v-0.64l0.064-1.856L106.666667 512a43.178667 43.178667 0 0 1 0.938666-8.938667 42.261333 42.261333 0 0 1 9.066667-18.517333l0.149333-0.192c0.746667-0.853333 1.536-1.706667 2.346667-2.517333l106.666667-106.666667a42.666667 42.666667 0 0 1 62.826666 57.621333l-2.496 2.709334L252.330667 469.333333H469.333333V252.330667l-33.834666 33.834666a42.666667 42.666667 0 0 1-57.621334 2.496l-2.709333-2.496a42.666667 42.666667 0 0 1-2.496-57.621333l2.496-2.709333 106.666667-106.666667 2.176-2.026667 0.341333-0.32-2.517333 2.346667a43.157333 43.157333 0 0 1 18.133333-10.773333l0.682667-0.213334-0.682667 0.213334A42.368 42.368 0 0 1 512 106.666667h0.64c0.64 0 1.237333 0.042667 1.856 0.064L512 106.666667a43.178667 43.178667 0 0 1 11.349333 1.536l0.682667 0.192-0.682667-0.213334c2.304 0.64 4.522667 1.472 6.634667 2.453334z"
          p-id="44836"
        ></path>
      </svg>
    )
  }
)

if (__DEV__) {
  DragOutlined.displayName = 'DragOutlined'
}
