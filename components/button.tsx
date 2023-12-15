import Link from "next/link";
export default function Button({btnText,className}: {
  btnText: string;
  className?: string;
})
 {
  return (
    <div>
      <button
        className={`bg-gray-900 text-slate-100 py-2 px-4 rounded-md ${className}`}
      >
        {btnText}
      </button>
    </div>
  );
}