# 字节面试题之Drag_Drop
良好的用户体验
1. 基础好   细节、能力增长梯度
2. 比较复杂的特效

## GitHub 拖拽上传功能
1. 给要拖拽的元素加一个dragable, 让效果更加真实，可以加一个cursor：move
2. 拖拽元素在上空的感觉
3. drag 三个事件
    - dragstar 
    - drag
    - dragend
4. drop 异步
    - dropenter    border dashed
    - dropvoer   多次
    - leave 离开

5. drag + drop 良好的用户体验模拟API，
    - dragable = true 属性
    - dragstart drag dragend
    - dragenter dragover dragleave + drop
    - 阻止默认行为  event.preventDefault
    - oForm submit