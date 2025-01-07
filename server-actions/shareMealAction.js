'use server';
// this function totally in server side to handle the action from submit form when add new meal
export default async function shareMealAction(formData) {
    const dataToSend = Object.fromEntries(formData)
    console.log(dataToSend);
    
}