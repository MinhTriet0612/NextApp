

export default function Table({ data }) {
  return (
    <div>
      <table className="w-full border-collapse rounded-lg shadow-lg">
        <thead>
          <tr className="bg-gray-700 text-white">
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">House</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="odd:bg-gray-100 even:bg-gray-200 hover:bg-gray-300 transition">
              <td className="px-4 py-2 border">{item.name}</td>
              <td className="px-4 py-2 border">{item.house}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
