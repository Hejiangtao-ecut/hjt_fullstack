module.exports = {
    entry:'./src/main.js',
    output:{
        filename:'[name].js'
    },
    // 每种类型的静态文件
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
        ]
    }

}