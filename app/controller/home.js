'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'Hi, welcome to my world！\n Seriously，you are so beautiful!';
  }
}

module.exports = HomeController;
