import { FunnelIcon } from '@heroicons/react/24/outline'

export default function InputFilter() {
  return (
    <div>
      <div className="relative mt-2 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <FunnelIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>
        <input
          type="text"  // Set the type to text
          name="filter"  // A meaningful name for the input
          id="filter"  // A corresponding ID
          className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Filter by tag/author"
        />
      </div>
    </div>
  )
}
