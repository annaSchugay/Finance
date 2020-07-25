import Service from './Service'

class Account extends Service {
  constructor () {
    super('/account')
  }
}

export default new Account()
