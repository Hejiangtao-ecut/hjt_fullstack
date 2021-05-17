# hooks
## useState demo01
1. hooks是16.8后面的新特性，限制于使用纯函数来编写，不能包含状态，也不支持生命周期方法
    - 相当于一个加强版的函数组件，不使用类组件就能写出一个全功能的组件
const [title, setTitle] = useState('首页');
function changeTitle() {
    setTitle('1')
}

在这里使用useState相当于产生了一个state，然后进行默认赋值，通过调用setTitle来修改它的值。

## useEffect demo01
1. useEffect 接收两个参数，第一个是一个函数，用来复写方法，第二个是一个数组，表示数组里面的值发送改变的时候调用该方法
    -  useEffect(() => {
        console.log("title发生了变化");
    }, [title])
        - 这个函数只有在title发送变化的时候进行执行
## useReducer
1. React本身并不提供管理状态，通常需要使用外部库。最常用就是Redux
    - Redux核心就是组件发出action与状态组件进行通信，状态管理器收到action后，使用reducer函数计算处最新的状态，reducer的函数为(state,action) => newState