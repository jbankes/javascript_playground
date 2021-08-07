// Following along with Fireship
// https://youtu.be/Mus_vwhTCq0

// Not as good
// function feed(animal) {
//   return `Feed ${animal.name} ${animal.meal} kilos of ${animal.diet}`;
// }

// Better
function feed({ name, meal, diet }) {
  return `Feed ${name} ${meal} kilos of ${diet}`;
}

// OR

function feed(animal) {
  const { name, meal, diet } = animal;
  return `Feed ${name} ${meal} kilos of ${diet}`;
}

