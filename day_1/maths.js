function Add(a, b) {
    return a+b

    
}
function Sub(a, b) {
    return a - b


}

// module.exports  = Add
// module.exports = Sub
// if we write like this , Sub overwrite Add . so we'llonly can use sub

// to tackle this we'll create a object here.

module.exports = {
    Addfunc:Add,
    Subfunc:Sub
}

