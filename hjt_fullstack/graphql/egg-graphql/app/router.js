'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  // 根据restful 概念暴露资源
  router.resources('users', '/users', controller.users);
};
