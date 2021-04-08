module.exports = app => {
    // 模型定义文件
    // app egg.js  plugins sequelize
    const { STRING, INTEGER, DATE } = app.Sequelize; // 插件哪都课拿
    const User = app.model.define('user', {       // app上的定义一个模型
        id: { type: INTEGER, primaryKey:true, autoIncrement: true },
        name: STRING(30),
        age: INTEGER,
        created_at: DATE,
        updated_at: DATE
    });
    return User;
}