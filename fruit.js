exports.getFruit = getFruit

function getFruit () {
    const tab = [
        {name: "pomme", color: "white", bg: "limegreen"},
        {name: "banane", color: "black", bg: "gold"},
        {name: "fraise", color: "white", bg: "red"},
        {name: "orange", color: "black", bg: "orange"},
        {name: "myrtille", color: "white", bg: "purple"},
        {name: "cerise", color: "white", bg: "magenta"}
    ]

    const fruit = tab[Math.floor(Math.random() * tab.length )]
    return fruit
}
exports.getOtherFruits = getOtherFruits
function getOtherFruits () {
    const OF = ['framboise', 'papaye', 'pasteque']
    return OF
}