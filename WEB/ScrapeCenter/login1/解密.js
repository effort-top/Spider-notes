function get_token(data){
    var result = btoa(data);
    return result
}
var data = {
    "username":"55678",
    "password":"45765456"
}
var data_str = JSON.stringify(data)
console.log(get_token(data_str))
