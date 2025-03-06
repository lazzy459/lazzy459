// 5. Name Initial in Uppercase
function nameInitial(name) {
  let initials = name.split(' ').map(word => word[0]?.toUpperCase() || '').join('');
  return `Initials: ${initials}`;
}
console.log(nameInitial('John Doe')); // Output: Initials: JD