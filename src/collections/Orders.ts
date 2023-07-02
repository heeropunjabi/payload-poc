import { CollectionConfig } from 'payload/types';

export const Orders: CollectionConfig = {
	slug: 'orders',
	fields: [
		{
			name: 'total',
			type: 'number',
			required: true,
        },
        {
            name: 'items',
            type: 'array',
            fields: [
                {
                    name: 'product',
                    type: 'text',
                    required: true,
                    localized: true,
                },
                {
                    name: 'quantity',
                    type: 'number',
                    required: true,
                }

            ]
        },
        {
            name: 'fulfilled',
            type: 'checkbox',
            defaultValue: false,
        }
    ],
    admin: {
        //hidden: true,
        useAsTitle: 'Product',
        pagination: {
            //limit: 100,
            defaultLimit: 100,
        },
        listSearchableFields: ['total', 'items.product', 'items.quantity'],
        
    },
    timestamps: true,
    
    // admin: {
    //     useAsTitle: 'total',

    // }
};