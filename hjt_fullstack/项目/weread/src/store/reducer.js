const defaultStore = {
    state: {
        isLoading: false,
        info: [{ name: "江河" },
        { bookShelf: [] }
        ]
    }
}

export default (state = defaultStore, action) => {
    return state;
}