export const modifyPayload = (values: any): FormData => {
    const obj = { ...values };
    const data = JSON.stringify(obj);
    const formData = new FormData();
    formData.append('data', data);
    return formData;
};
