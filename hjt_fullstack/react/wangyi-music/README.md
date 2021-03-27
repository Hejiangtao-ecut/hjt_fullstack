- 数据传递方案
    1. reducer  复杂
    2. props  手续多，需要一层一层传值
    3. createContext  超级函数

- createContext reducer 的异同
    - createContext
        - createContext.Provider
            - value
            - useContext 
    - createStore
        - createStore.Provider
            - store
            - 架构细致