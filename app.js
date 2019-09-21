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