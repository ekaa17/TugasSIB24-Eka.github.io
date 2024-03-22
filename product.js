fetch ('https://crudcrud.com/api/42a430b640084ba5851a5066b1d11d2d/Biodata')
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