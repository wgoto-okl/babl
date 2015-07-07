const foo = 1;

console.log(foo);

const obj = {
    val: 10,
    test: function () {
        window.setTimeout(() => {
            console.log(this.val);
        }, 10);
    }
};

const arr = [0, 0, 10, 1];

const arrCopy = [...arr];

const [alpha, beta, charlie] = arr;
