
const list = [{
    'title': '无拘无束的关系',
    'author': '克里斯多福',
    'img': "https://wfqqreader-1252317822.image.myqcloud.com/cover/545/22689545/t6_22689545.jpg"
    }, {
        'title': '无拘无束的关系',
        'author': '克里斯多福',
        'img': "https://wfqqreader-1252317822.image.myqcloud.com/cover/545/22689545/t6_22689545.jpg"
    }, {
        'title': '无拘无束的关系',
        'author': '克里斯多福',
        'img': "https://wfqqreader-1252317822.image.myqcloud.com/cover/545/22689545/t6_22689545.jpg"
    }, {
        'title': '无拘无束的关系',
        'author': '克里斯多福',
        'img': "https://wfqqreader-1252317822.image.myqcloud.com/cover/545/22689545/t6_22689545.jpg"
    }
]

function myBookCard() {
    return (
        <>
            {list.map(item => {
                return (
                    <div className="myBookCard">
                        <div className="myBookCard_body">
                            <div className="myBookCard_body_img">
                                <img src={item.img} />
                            </div>
                            <div className="myBookCard_body_info">
                                <div className="myBookCard_body_info_title">
                                    <span>{ item.title }</span>
                                </div>
                                <div className="myBookCard_body_info_author">
                                    <span>{item.author}</span>
                                </div>
                            </div>

                        </div>
                    </div>
                )
            })}
        </>
            
    )
}

export default myBookCard