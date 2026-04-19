export interface CheckOutFormData {
    firstName: string;
    lastName: string;
    postalCode: string;
}

export interface CheckOutData {
    standardData: CheckOutFormData;
    emptyData: CheckOutFormData;
    emptyFirstName: CheckOutFormData;
    emptyLastName: CheckOutFormData;
    emptyPostalCode: CheckOutFormData;
}

export const checkOutData: CheckOutData = {
    standardData: {
        firstName: 'MyName',
        lastName: 'MyLastName',
        postalCode: '12345'
    },

    emptyData: {
        firstName: '',
        lastName: '',
        postalCode: ''
    },

    emptyFirstName: {
        firstName: '',
        lastName: 'MyLastName',
        postalCode: '12345'
    },

    emptyLastName: {
        firstName: 'MyName',
        lastName: '',
        postalCode: '12345'
    },

    emptyPostalCode: {
        firstName: 'MyName',
        lastName: 'MyLastName',
        postalCode: ''
    }
};