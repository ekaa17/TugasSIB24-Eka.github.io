fetch ('https://crudcrud.com/api/64bb3f8d7cb345cc9887c7876ea4c8fd/Data')
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