export function validateForm(data) {
    const errors = []; 

    const validMethods = ['pickup', 'delivery']; 
    if (!validMethods.includes(data.method)) errors.push("Method must be pickup or delivery");

    

    console.log(errors); 

    return {
        isValid: errors.length === 0, 
        errors
    };
}