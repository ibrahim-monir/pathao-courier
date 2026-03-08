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

            orderTotalItemsDom.html(orderData?.total_items);
            orderItemsDom.html(orderItems);

            let defaultCityId = orderData?.shipping?.city_id ?? orderData?.billing?.city_id
            let defaultZoneId = orderData?.shipping?.zone_id ?? orderData?.billing?.city_id
            let defaultAreaId = orderData?.shipping?.area_id ?? orderData?.billing?.city_id
            await populateCityZoneArea(defaultCityId, defaultZoneId, defaultAreaId);
            await populateStores();

            // Autofill item description with product name + quantity, each on a new line
            const productDescriptions = orderData?.items?.map(item => `${item.name} x${item.quantity} - ${item.sku ? item.sku : 'No SKU'}`).join('\n');
            itemDescriptionInput.val(productDescriptions);
