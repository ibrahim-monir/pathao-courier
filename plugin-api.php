<?php
function getPtOrderData(bool|WC_Order|WC_Order_Refund $order): array
{
    $orderData = $order->get_data();
    $orderItems = 0;
    $totalWeight = 0;
    // add items to order
    $orderData['items'] = array_values(array_map(function ($item) use (&$orderItems, &$totalWeight) {

        $quantity = $item->get_quantity();
        $totalWeight += (float)$item->get_product()->get_weight();

        $orderItems += $quantity;

        return [
            'name' => $item->get_name(),
            'sku'          => $product ? $product->get_sku() : '', // <--- Add this line
            'quantity' => $item->get_quantity(),
            'weight' => $totalWeight,
            'price' => $item->get_total(),
            'product_id' => $item->get_product_id(),
            'variation_id' => $item->get_variation_id(),
            'image' => wp_get_attachment_image_src($item->get_product()->get_image_id(), 'thumbnail')[0] ?? null,
            'product_url' => $item->get_product()->get_permalink(),
        ];

    }, $order->get_items()));
