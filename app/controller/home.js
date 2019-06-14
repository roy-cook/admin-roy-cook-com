'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'Hi! Welcome to my world!';
  }
}

module.exports = HomeController;
