function solve(data){
    let employees = []

    for (const element of data) {
        let name = element;
        let personalNumber = element.length;
        
        let obj = {
            name,
            personalNumber
        }

        employees.push(obj);
    }

    employees.forEach(emp => console.log(`Name: ${emp.name} -- Personal Number: ${emp.personalNumber}`))
}

solve([
  "Alice Johnson",
  "Sarah O'Connor",
  "Tom Lee",
  "Natalie Portman",
  "Chris Evans",
  "John",
  "Anna-Marie"
]
)