'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'Hi, I am roy, welcome to my world! waiting for V1.0..';
  }
}

module.exports = HomeController;
