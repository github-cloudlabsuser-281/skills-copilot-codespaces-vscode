function skillsMember() {
  const member = {
    name: 'Eduardo',
    age: 25,
    skills: ['JavaScript', 'React', 'Node.js'],
  }
  console.log(`Hello! My name is ${member.name} and I am ${member.age} years old. My skills are: ${member.skills.join(', ')}.`)
}