// 服务层为数据层提供数据
'use strict'

const Service = require('egg').Service

class DiaryService extends Service{
    async list() {
        const { ctx } = this;
        try {
            // 从数据取数据
            const result = await ctx.app.mysql.select('diary')
        } catch (error) {
            
        }
    }
}

module.exports DiaryService