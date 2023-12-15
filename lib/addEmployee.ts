export async function addEmployee({EmployeeName,salary,age}:{EmployeeName:string,salary:string,age:string}) {
    const newEmployee = {
        name: EmployeeName,
        salary: salary,
        age: age
    }

    const res = await fetch('https://dummy.restapiexample.com/api/v1/create',{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(newEmployee)
})
if(!res.ok) throw new Error ('Failed to fetch data')
const {status,data} = await res.json()
return alert(`Status:${status}, Name:${data.name}, Age:${data.age}, Salary:${data.salary} updated successfully`)
}

