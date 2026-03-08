 // Updated only this section to add SKU after title and size
            let orderItems = '';

            orderData?.items?.forEach(function (item) {
                orderItems += `
                <li> 
                    <img width="40px" src="${item.image}" /> 
                    <strong>[SKU: ${item.sku ? item.sku : 'N/A'}]</strong> ${item.name},  
                    Price: ${item.price} ${orderData.currency}, 
                    Quantity: ${item.quantity}  
                    <a href="${item.product_url}">Detail</a>
                </li>`;
            });

