Page({
    data:{
        charts:[{
            id:'bar',
            name:"柱状图"
        },{
            id:'pie',
            name:"饼图"
        },{
            id:'line',
            name:"折线图"
        }
    ]
    },
    showChart(e) {
        const id = e.currentTarget.dataset.id;
        swan.navigateTo({
            url: '/pages/' + id + '/' + id
        });
    }
})