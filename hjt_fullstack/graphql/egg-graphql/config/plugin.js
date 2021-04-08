'use strict';

// 一切服务都可以是插件 koa好用 但是简单 满足不了大型项目多人开发
// 有一个大家公认的约定比较好

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  sequelize: {
    enable: true,
    package:'egg-sequelize'
  }
};
