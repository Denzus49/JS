let brutt = {x: 216406, y: 13}
let proc= (brutt.x/100*brutt.y)
let nettoRu= (brutt.x-proc)
let cource= 0.0354
let nettoBy= (nettoRu*cource).toFixed(2)

alert(nettoBy);