export const formData = (form: HTMLFormElement) => {
    const inputs = form.querySelectorAll('input');
    // value must be a string and each property inside value must be a string 
    let values: { [prop: string]: string } = {};

    inputs.forEach(input => {
        values[input.id] = input.value;
    });
    return values;
};