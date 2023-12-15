import Employee from "@/components/employee"



export default async function page({params:{id}}:any) {
    const res = await fetch(`https://dummy.restapiexample.com/api/v1/employee/${id}`)
    if(!res.ok) throw new Error('Failed to fetch data')
    const {data} = await res.json()
console.log(data)

  return (
    <div>
      <Employee id={id} employee_name={data.employee_name} employee_age={data.employee_age} employee_salary={data.employee_salary}/>
    </div>
  )
}
