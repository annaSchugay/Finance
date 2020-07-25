import axios from '../transport/axios'

function NotImplementedError(message) {
  this.name = "NotImplementedError";
  this.message = (message || "too lazy to implement");
}
NotImplementedError.prototype = Error.prototype;

class Service {
  url = ''
  constructor (url) {
    this.url = url
  }
  count ({search = null, searchFields = null, query = null}) {
    throw new NotImplementedError();
  }

  create (data) {
    throw new NotImplementedError();
  }

  find ({ populate, fields, limit, offset, sort, search, searchFields, query }) {
    throw new NotImplementedError();
  }

  get ({ id, populate, fields, mapping }) {
    throw new NotImplementedError();
  }

  insert ({ entity, entities }) {
    throw new NotImplementedError();
  }

  async list ({ populate, fields, page, pageSize, sort, search, searchFields, query } = {}) {
    const params = {
      page: page || 1
    }
    if (populate) {
      params.populate = populate
    }
    if (fields) {
      params.fields = fields
    }
    if (pageSize) {
      params.pageSize = pageSize
    }
    if (search) {
      params.search = search
    }
    if (sort) {
      params.sort = sort
    }
    if (searchFields) {
      params.searchFields = searchFields
    }
    if (query) {
      params.query = query
    }

    const { data } = await axios.get(this.url, {
      params
    })
    return data
  }

  remove ({ id }) {
    throw new NotImplementedError();
  }

  update () {
    throw new NotImplementedError();
  }
}

export default Service
