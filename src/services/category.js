import Service from './Service'

class Category extends Service {
  constructor () {
    super('/category')
  }
}

export default new Category()
