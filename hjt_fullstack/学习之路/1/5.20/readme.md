# flex的计算公式
1. grow的计算公式
    - 将每一个比例相加，然后然后用剩余的空间除比例，得到每一份可以增长的空间，然后空间乘比例
2. shark的计算公式
    - 将总的空间除以比例的和，然后按比例分配

# 水平垂直居中的方法
1. position absolute + transform
2. display:flex
    - justify-content:center
    - align-item:center
3. display:grid
    - grid-row: 2/3
    - grid-column:2/3
4. position:absolute
    - top/bottom/left/right:0;
    - margin:auto;