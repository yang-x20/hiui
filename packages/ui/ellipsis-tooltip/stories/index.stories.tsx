import React from 'react'

export * from './basic.stories'

export default {
  title: 'EllipsisTooltip',
  decorators: [(story: Function) => <div>{story()}</div>],
}
