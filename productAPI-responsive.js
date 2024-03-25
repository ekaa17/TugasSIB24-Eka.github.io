fetch ('https://crudcrud.com/api/1ccc40a7aa92459589d3574a5aba9d85/Mahasiswa')
.then((Response) => Response.json())
.then((data) => {
    const userTable = document.getElementById ('userTable');

    data.forEach(product => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${product._id}</td>
        <td>${product.Name}</td>
        <td>${product.Jenis_Kelamin}</td>
        <td>${product.Address}</td>
        `;

            userTable.querySelector('tbody').appendChild(row);
    });
})