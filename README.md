# arithVisual
> 算法可视化

## [demo](https://browniu.github.io/arithVisual/)
![demo](./static/%20bubble.gif)

## 算法实现

### 冒泡排序
```JavaScript
bubbleSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i; j++) {
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

## 可复用逻辑

### 生成指定范围内指定长度的数组
```JavaScript
randomArrayInRange = (min, max, n = 1) => Array.from({length: n}, () => Math.floor(Math.random() * (max - min + 1)) + min);
```

### 生成指定范围内指定长度的无重复数组
```JavaScript
const randomArraySingleInRange = (min, max, n = 1) => {
    if (max - min < n) max = min + n;
    const array = [];
    const creatItem = () => {
        const item = Math.floor(Math.random() * (max - min + 1)) + min;
        if (array.includes(item)) creatItem();
        else {
            array.push(item);
            if (array.length < n) creatItem();
        }
    };
    creatItem();
    return array;
};
```
