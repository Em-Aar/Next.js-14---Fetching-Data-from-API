import EmployeeData from "@/lib/employees";
import Employee from "@/components/employee";
import Button from "@/components/button";
import Link from "next/link";

export default async function Home() {

  const { data } = await EmployeeData();
  // console.log(data)

  return (
    <section>
      <Link href={'/addEmployee'}>
      <Button btnText="Add Employee" />
      </Link>
      <div className="flex flex-wrap max-w-5xl gap-6 justify-center items-center">
        {data.map((employee: EmployeeType) => {
          return (
            <Employee
              key={employee.id}
              employee_name={employee.employee_name}
              id={employee.id}
              employee_age={employee.employee_age}
              employee_salary={employee.employee_salary}
            />
          );
        })}
      </div>
    </section>
  );
}
