const profileUser = ["Cristhian" , "Pañora", 23, {ciudad: "Quito"}]
const skills = ["front", "back"]
const inicio = ["inicio"]
// profileUser.unshift(inicio)
// profileUser.push(skills)
// console.log(profileUser)
// profileUser.pop(profileUser)
// console.log(profileUser)
// profileUser.shift(profileUser)
// console.log(profileUser)

// const findOne = profileUser.find((e) => e === 'Juan' )

// const findTwo = profileUser.find((e) => e === 'Cristhian' )

// console.log(findOne)
// console.log(findTwo)

// const newData = profileUser.filter(e => e != 12)
// console.log(newData)

// const newData2 = skills.map(e => e.toUpperCase())
// console.log(newData2)

// camino largo
// console.log(profileUser[0])
// console.log(profileUser[1])
// console.log(profileUser[2])
// console.log(profileUser[3])

//desestructuración camino corto
// const [name, lastname, edad, ciudad] = profileUser
//         0      1       2       3
// console.log(profileUser)

const newData = [...profileUser,...skills]
console.log(newData)