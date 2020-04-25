const Controller = require('egg').Controller
const path = require('path')

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'Hellor World'
  }
}
module.exports = HomeController