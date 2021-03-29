const defaultStore = {
    inputValue: '',
    list:[]
}

export default (state = defaultStore, action) => {
    let newStore = JSON.parse(JSON.stringify(state));
    if (action.type === 'changeInput') {     
        newStore.inputValue = action.inputValue;
        return newStore;
    }
    if (action.type === 'addList') {
        newStore.list.push(newStore.inputValue);
        newStore.inputValue = '';
        return newStore;
    }
        if (action.type === 'deleteItem') {
            newStore.list.splice(action.index, 1);
            return newStore;
        }
    return state;
}