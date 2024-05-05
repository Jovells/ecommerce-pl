import type { GlobalConfig } from 'payload/types'

import link from '../fields/link'
import { admins } from '../access/admins'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: admins,
  },
  fields: [
    {
      name: 'copyright',
      label: 'Copyright',
      type: 'text',
    },
    {
      name: 'navItems',
      type: 'array',
      maxRows: 6,
      fields: [
        link({
          appearances: false,
        }),
      ],
    },
  ],
}
