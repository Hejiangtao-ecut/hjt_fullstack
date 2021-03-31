const list = [{
    'title': '阿甘正传',
    'author': '格鲁姆',
    'img': "https://wfqqreader-1252317822.image.myqcloud.com/cover/774/809774/t6_809774.jpg",
    'reason': '读过《XXX》也在读此书'
}, {
        'title': '阿甘正传',
        'author': '格鲁姆',
        'img': "https://wfqqreader-1252317822.image.myqcloud.com/cover/774/809774/t6_809774.jpg",
        'reason': '读过《XXX》也在读此书'
    }, {
        'title': '阿甘正传',
        'author': '格鲁姆',
        'img': "https://wfqqreader-1252317822.image.myqcloud.com/cover/774/809774/t6_809774.jpg",
        'reason': '读过《XXX》也在读此书'
    }, {
        'title': '阿甘正传',
        'author': '格鲁姆',
        'img': "https://wfqqreader-1252317822.image.myqcloud.com/cover/774/809774/t6_809774.jpg",
        'reason': '读过《XXX》也在读此书'
    }
]

function tuiCard() {
    return (
        <>
            {list.map(item => {
                return (
                    <div className="tuiCard">
                        <div className="tuiCard_body">
                            <div className="tuiCard_body_img">
                                <img src={item.img} />
                            </div>
                            <div className="tuiCard_body_info">
                                <div className="tuiCard_body_info_title">
                                    <span>{item.title}</span>
                                    <br/>
                                </div>
                                <div className="tuiCard_body_info_author">
                                    <span>{item.author}</span>
                                    <br/>
                                </div>
                                <div className="tuiCard_body_info_reason">
                                    <span>{ item.reason}</span>
                                </div>
                            </div>

                        </div>
                    </div>
                )
            })}
        </>

    )
}
export default tuiCard