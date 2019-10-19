// 冒泡排序
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

// 移动天平
const moveBalance = (length, i) => {
    const balance = document.querySelector('.balance');
    balance.style.right = `${40 * i}px`;
};

// 交换位置
const interchange = (array, i) => {
    const right = document.querySelector(`.blocks li:nth-child(${i + 1})`);
    const left = document.querySelector(`.blocks li:nth-child(${i})`);
    right.innerHTML = `<span>${array[i]}</span>`;
    left.innerHTML = `<span>${array[i - 1]}</span>`
};

console.log(bubbleSort([3, 1, 5, 2, 4]));

