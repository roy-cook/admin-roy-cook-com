'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'Hi, I am roy, welcome to my world! waiting...';
  }
}

module.exports = HomeController;
