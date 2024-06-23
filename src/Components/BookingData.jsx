export default function BookingData() {
  return (
    <>
      <div className="container mx-auto my-8">
        <div className="overflow-x-auto">
          <table className="min-w-full table-fixed border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-200">
                <th className="w-1 py-3 px-6 text-left border-b border-gray-300">
                  Sr.no
                </th>
                <th className="w-1 py-3 px-6 text-left border-b border-gray-300">
                  Name
                </th>
                <th className="w-1 py-3 px-6 text-left border-b border-gray-300">
                  Phone
                </th>
                <th className="w-1 py-3 px-6 text-left border-b border-gray-300">
                  Email
                </th>
                <th className="w-1 py-3 px-6 text-left border-b border-gray-300">
                  Location
                </th>
                <th className="w-1 py-3 px-6 text-left border-b border-gray-300">
                  Rent
                </th>
                <th className="w-1 py-3 px-6 text-left border-b border-gray-300">
                  Image
                </th>
                <th className="w-1 py-3 px-6 text-left border-b border-gray-300">
                  Edit
                </th>
                <th className="w-1 py-3 px-6 text-left border-b border-gray-300">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-100">
                <td className="py-3 px-1 border-b border-gray-200">1</td>
                <td className="py-3 px-1 border-b border-gray-200">2</td>
                <td className="py-3 px-1 border-b border-gray-200">2</td>
                <td className="py-3 px-1 border-b border-gray-200">2</td>
                <td className="py-3 px-1 border-b border-gray-200">2</td>
                <td className="py-3 px-1 border-b border-gray-200">2</td>
                <td className="py-3 px-1 border-b border-gray-200">
                  <img src="" alt="" />
                </td>
                <td className="py-3 px-1 border-b border-gray-200">
                  <button className="rounded-md bg-cyan-700 text-white size-12">
                    Edit
                  </button>
                </td>
                <td className="py-3 px-1 border-b border-gray-200">
                  <button className="rounded-md bg-red-700 text-white size-12">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
