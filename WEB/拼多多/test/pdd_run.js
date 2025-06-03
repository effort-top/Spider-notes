require('./pdd_env.js')
require('./pdd.js')

function get_anti(){
    window._at.updateServerTime(Date.now())
    var anti_ = window._at.messagePack()
    return anti_
}
console.log(get_anti());
