'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'Hi, I am roy-cook, welcome to my world!';
  }
}

module.exports = HomeController;
