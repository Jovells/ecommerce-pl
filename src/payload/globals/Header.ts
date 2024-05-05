import type { GlobalConfig } from 'payload/types'

import link from '../fields/link'
import { admins } from '../access/admins'

export const Header: GlobalConfig = {
  slug: 'header',
  access: {
    read: admins,
  },
  fields: [
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
