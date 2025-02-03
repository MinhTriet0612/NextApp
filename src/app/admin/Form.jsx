import { useRef } from "react"

export default function Form({ handleForm }) {
  const nameRef = useRef('')
  const houseRef = useRef('')

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Add User</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
            placeholder="Enter name"
            ref={nameRef}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">House</label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
            placeholder="Enter house"
            ref={houseRef}
          />
        </div>
        <button
          type="button"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          onClick={() => handleForm(nameRef.current.value, houseRef.current.value)}
        >
          Submit
        </button>
      </form>
    </div>
  )
}

