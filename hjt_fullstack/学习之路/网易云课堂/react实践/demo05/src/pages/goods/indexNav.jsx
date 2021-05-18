import { withRouter } from 'react-router-dom';

function IndexNav(props) {
    function goPage(url) {
        props.history.replace(url);
    }
    return (
        <div>
            <ul>
                <li onClick={() => { goPage('/goods/item') }}>商品</li>
                <li onClick={() => { goPage('/goods/detail') }}>详情</li>
                <li onClick={() => { goPage('/goods/review') }}>评价</li>
            </ul>
        </div>
    )
}

export default withRouter(IndexNav);