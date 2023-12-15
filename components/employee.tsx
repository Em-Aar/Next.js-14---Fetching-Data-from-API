import Image from "next/image"
import Button from "./button"
import Link from "next/link"

export default function Employee({employee_name,employee_salary,employee_age,id}:EmployeeType ) {
  return (
    <div className="w-64 bg-gray-200 p-4 rounded-md shadow-lg flex flex-col justify-between">
        <Image 
        src={'/profile.png'}
        alt="profile-image"
        width={50}
        height={50}
        className="rounded-full "/>
      <p>Id:{id}</p>
      <p>Name:{employee_name}</p>
      <p>Age:{employee_age}</p>
      <p>Salary:{employee_salary}</p>
      <div>
        <Link href={`/${id}`}>
        <Button btnText="Detail" className="text-xs" />
        </Link>
      </div>
    </div>
  )
}
