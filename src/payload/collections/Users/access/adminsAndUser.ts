import type { Access } from 'payload/types'

import { checkRole } from '../checkRole'

const adminsAndUser: Access = ({ req: { user } }) => {
  console.log('user', user)
  console.log('checkRole', checkRole(['admin', 'customer'], user))
  if (user) {
    if (checkRole(['admin'], user)) {
      return true
    }

    return {
      id: {
        equals: user.id,
      },
    }
  }

  return false
}

export default adminsAndUser
