const defaultStore = {
    inputValue: 'Write Something',
    list: ['demo1', 'demo2', 'demo3']
}

function reducer(state = defaultStore, action){
    // console.log(state,action)
    // reducer 里只能接收state，不能改变state
    if (action.type === 'changeInput') {
        let newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if (action.type === 'addItem') {
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }
        
    return state;
}

export default reducer