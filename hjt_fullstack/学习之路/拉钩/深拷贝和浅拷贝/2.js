// 手写浅拷贝
const shallowClone = (target) => {
    if (typeof target === 'object' && target !== 'null') {
        const cloneTarget = Array.isArray(target) ? [] : {};
        for (let props in target) {
            if (target.hasOwnProperty(props)) {
                cloneTarget[props] = target[props];
            }
        }
        return cloneTarget;
    } else {
        return target;
    }
}