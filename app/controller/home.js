'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'Hi! Great！Welcome to my world!\nSeriously，you are so beautiful!';
  }
}

module.exports = HomeController;
