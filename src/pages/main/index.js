import React, {Component} from 'react';
import styles from './styles.module.scss'
import cn from 'classnames'

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.steps = [];
        this.state = {
            step: 0
        }
    }

    componentDidMount() {
        this.targetArray = this.randomArraySingleInRange(1, 10, 10);
        console.log(this.bubbleSort(this.targetArray));
        console.log(this.steps);
        this.nextStep()
    }

    bubbleSort = (array) => {
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array.length - i; j++) {
                let exchange = [];
                if (array[j - 1] && (array[j - 1] - array[j]) > 0) {
                    const last = array[j];
                    array[j] = array[j - 1];
                    array[j - 1] = last;
                    exchange = [j - 1, j]
                }
                this.steps.push({index: j, array: array.slice(), exchange})
            }
        }
        return array
    };

    randomArraySingleInRange = (min, max, n = 1) => {
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


    nextStep() {
        if (this.state.step < this.steps.length) {
            this.setState({step: this.state.step + 1})
        }
    }

    autoStep() {
        const timer = setInterval(() => {
            if (this.state.step < this.steps.length) this.nextStep();
            else clearInterval(timer)
        }, 1000)
    }

    renderList(index) {
        const list = this.steps[index - 1].array;
        const balancePos = this.steps[index - 1].index - 1;
        const exchange = this.steps[index - 1].exchange;
        return (<ul className={styles.list}>
            <div style={{
                height: (balancePos <= 0) ? '32px' : '66px',
                transform: `translateY(${(balancePos > 0 ? balancePos - 1 : 0) * (32 + 3)}px)`
            }}
                 className={styles.balance}/>
            {list.map((item, index) => (
                <li
                    className={cn({[styles.act]: ((index === balancePos) || index === balancePos - 1)})}
                    key={item}>
                    <span
                        className={cn({[styles.act]: (index === exchange[0] || index === exchange[0] - 1)})}
                        style={{width: index === exchange[0] ? `${(list[exchange[0] + 1] / 11) * 100}%` : index === exchange[0] + 1 ? `${(list[exchange[0]] / 11) * 100}%` : `${(item / 11) * 100}%`}}
                    >{item}</span></li>
            ))}
        </ul>)
    }

    render() {
        const {step} = this.state;
        return (
            <div className={cn(styles.root, 'browniu-app-root')}>
                <div className={styles.panel}>
                    <span onClick={() => this.autoStep()} className={styles.button}>冒泡排序</span>
                </div>
                {step > 0 && this.renderList(step)}
            </div>
        );
    }
}
