export function getFormBody(params){
    let FormBody = [];
    for(let property in params){
        let encodedKey = encodeURIComponent(property); //user name => user%20name
        let encodedValue= encodeURIComponent(params[property]); //ankit kumar => ankit%20kumar
        FormBody.push(encodedKey + '=' + encodedValue); 
    }
    return FormBody.join('&') // 'user%20name=ankit&password=12344'
}