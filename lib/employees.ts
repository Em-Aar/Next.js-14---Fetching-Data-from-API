export default async function EmployeeData() {
  const res = await fetch("	https://dummy.restapiexample.com/api/v1/employees");
  if(!res.ok) throw new Error('Failed to fetch data');
  const data = await res.json();
  
  return data;
}


