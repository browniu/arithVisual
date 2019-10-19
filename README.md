# arithVisual
> 算法可视化

## 冒泡排序
```JavaScript
const bubbleSort = (array) => {
    for (let i = array.length - 1; i >= 0; i--) {
        for (let j = array.length - 1 - i; j > 0; j--) {
            if (array[j - 1] && (array[j - 1] - array[j]) > 0) {
                const last = array[j];
                array[j] = array[j - 1];
                array[j - 1] = last;
            }
        }
    }
    return array
};
```
