type FunctionProps = {
    // onSomthing 函数 参数+返回值
    a: number
    onSomthing: () => void;
    // input:num
    onChange: (num: number) => void;
    // @types/react  泛型如何去做这件事
    onClick(event:React.MouseEvent<HTMLButtonElement>)
}

// T 类型占位
type Dog<T> = {
    name: string,
    type:T
}

const dog: Dog<number> = {
    name: 'aowu···',
    type:1234321
}
const Item:RegExpMatchArray.FC<Props> => (
    return (
        <div></div>
    )
)