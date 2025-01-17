export default {
  name: "product",
  type: "document",
  title: "Product",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Product Name",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "price",
      type: "number",
      title: "Price",
      validation: (Rule) => Rule.required().min(0),
    },
    {
      name: "stock",
      type: "number",
      title: "Stock",
      validation: (Rule) => Rule.required().min(0),
    },
    {
      name: "image",
      type: "image",
      title: "Image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      type: "text",
      title: "Description",
    },
  ],
};

export const order = {
  name: "order",
  type: "document",
  title: "Order",
  fields: [
    {
      name: "customer",
      type: "object",
      title: "Customer",
      fields: [
        {
          name: "name",
          type: "string",
          title: "Name",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "email",
          type: "string",
          title: "Email",
          validation: (Rule) => Rule.required().email(),
        },
        {
          name: "address",
          type: "string",
          title: "Address",
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: "products",
      type: "array",
      title: "Products",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "productId",
              type: "reference",
              to: [{ type: "product" }],
              title: "Product",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "quantity",
              type: "number",
              title: "Quantity",
              validation: (Rule) => Rule.required().min(1),
            },
          ],
        },
      ],
    },
    {
      name: "paymentStatus",
      type: "string",
      title: "Payment Status",
      options: {
        list: [
          { title: "Pending", value: "pending" },
          { title: "Paid", value: "paid" },
          { title: "Failed", value: "failed" },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "status",
      type: "string",
      title: "Order Status",
      options: {
        list: [
          { title: "Processing", value: "processing" },
          { title: "Shipped", value: "shipped" },
          { title: "Delivered", value: "delivered" },
          { title: "Cancelled", value: "cancelled" },
        ],
      },
    },
    {
      name: "estimatedDelivery",
      type: "date",
      title: "Estimated Delivery",
    },
  ],
};

export const shipment = {
  name: "shipment",
  type: "document",
  title: "Shipment",
  fields: [
    {
      name: "shipmentId",
      type: "string",
      title: "Shipment ID",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "orderId",
      type: "reference",
      to: [{ type: "order" }],
      title: "Order ID",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "status",
      type: "string",
      title: "Status",
      options: {
        list: [
          { title: "In Transit", value: "inTransit" },
          { title: "Delivered", value: "delivered" },
          { title: "Cancelled", value: "cancelled" },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "expectedDelivery",
      type: "date",
      title: "Expected Delivery",
    },
  ],
};

export const user = {
  name: "user",
  type: "document",
  title: "User",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "email",
      type: "string",
      title: "Email",
      validation: (Rule) => Rule.required().email(),
    },
    {
      name: "password",
      type: "string",
      title: "Password (Hashed)",
      validation: (Rule) => Rule.required(),
    },
  ],
};
