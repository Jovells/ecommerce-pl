import type { AccessArgs } from 'payload/config'

import { checkRole } from '../collections/Users/checkRole'
import type { User } from '../payload-types'

type isAdmin = (args: AccessArgs<unknown, User>) => boolean

export const managers: isAdmin = ({ req: { user } }) => {
  return checkRole(['manager', 'admin'], user)
}
