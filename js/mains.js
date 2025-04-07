// Fetch products and populate the table
async function fetchProducts() {
    const response = await fetch('fetch_products.php');
    const products = await response.json();
  
    const tableBody = document.querySelector('.products table');
    tableBody.innerHTML = `
      <tr>
        <th>#</th>
        <th>الإسم</th>
        <th>القسم</th>
        <th>الحدث</th>
      </tr>
    `;
  
    products.forEach((product, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${product.name}</td>
        <td>${product.Type}</td>
        <td>
          <button onclick="deleteProduct(${product.id})">
            <i class="fa-regular fa-trash-can"></i>
          </button>
        </td>
      `;
      tableBody.appendChild(row);
    });
  }
  
  async function deleteProduct(productId) {
    const response = await fetch('delete_product.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: productId }),
    });
  
    if (response.ok) {
      alert('تم حذف المنتج بنجاح');
      fetchProducts(); 
    } else {
      alert('حدث خطأ أثناء حذف المنتج');
    }
  }
  
  document.addEventListener('DOMContentLoaded', fetchProducts);