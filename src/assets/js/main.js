
function qs(expr, context) {
    return (context || document).querySelector(expr)
}
function qsa(expr, context) {
    return [].slice.call((context || document).querySelectorAll(expr),0)
}

qs('body').style.background = 'orange'