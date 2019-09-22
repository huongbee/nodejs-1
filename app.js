// npm init --y
const express = require('express');
const app = express();
app.listen(3000, () => console.log('Server is running on port 3000'));

app.get('/', (req, res) => {
    res.send({
        name: 'Teo'
    })
})

app.get('/:name', (req, res) => {
    // let name = req.param('name')
    let name = req.params.name
    res.send({ name });
})
function check(req, res, next) {
    const { soA, soB } = req.params;
    if (isNaN(soA) || isNaN(soB)) {
        res.send('Error!');
        return;
    }
    next();
}

app.get('/:pheptinh/:soA/:soB', check, (req, res) => {
    try {
        let { pheptinh, soA, soB } = req.params;
        const Cal = new Calculate(pheptinh, soA, soB);
        let result = Cal.getResult();
        res.send({ result })
    } catch (error) {
        res.send({ error: error.message })
    }
})


class Calculate {
    constructor(pheptinh, soA, soB) {
        this.a = soA;
        this.b = soB;
        this.pheptinh = pheptinh;
    }
    get pt() {
        if (this.pheptinh === 'cong') return '+';
        if (this.pheptinh === 'tru') return '-';
        if (this.pheptinh === 'nhan') return '*';
        if (this.pheptinh === 'chia') return '/';
        throw new Error('Invalid operator!')
    }
    getResult() {
        let r = `${this.a} ${this.pt} ${this.b}` // '2 + 3'
        return eval(r);
    }
}
let cal = new Calculate('cong', 2, 3);
console.log(cal.getResult());


/**
 * cho đường dẫn: http://localhost:3000/cong/3/4
 * Trong đó:
 *           cong: ten phep tinh
 *           3: số a
 *           4: số b
 * Yêu cầu:
 * - Thực hiên phép tính: a + b và in kết quả ra ngoài màn hình
 * - Nếu thay đổi ten phep tinh cong -> tru : Thực hiên phép tính a-b
 * - Nếu thay đổi ten phep tinh nhan -> nhan : Thực hiên phép tính a*b
 * - Nếu thay đổi ten phep tinh chia -> chia : Thực hiên phép tính a/b
 */