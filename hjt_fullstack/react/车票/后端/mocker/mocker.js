module.exports = {
    'GET /rest/cities': require('./rest/cities.json'),
    'POST /rest/search'(req, res) {
        return res.json({
            code:0 //成功
        })  
    },
    'GET /rest/search'(req, res) {
        const { keyword } = req.query;
        return res.json({
            result: [{
                keyword: "芜湖",
                display: "芜湖",
            }, {
                keyword: "井冈山",
                display: "井冈山",
            }]
        })
    }
}