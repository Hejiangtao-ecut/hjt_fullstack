// 榜单卡片
import proptypes from 'prop-types';


function weekCard(e) {
    console.log(e)
    return (
        <div className="weekCard_body">
            <div className="weekCard_body_img">
                {/* 图片 */}
                <img src={e.item.img} alt=""/>
            </div>
            <div className="weekCard_body_info">
                {/* 信息 */}
                <div className="weekCard_body_info_title">
                    <div className="weekCard_body_info_author_name">
                        {e.item.name}
                    </div>
                </div>
                <div className="weekCard_body_info_author">
                    <div className="weekCard_body_info_title_name">
                        {e.item.author}
                    </div>

                </div>
            </div>
        </div>
    )
}
export default weekCard