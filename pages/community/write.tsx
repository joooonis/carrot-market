import { NextPage } from 'next';

const Write: NextPage = () => {
  return (
    <div className="px-4 py-10">
      <textarea
        className="scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full mt-1 resize-none shadow-sm w-full focus:ring-orange-500 rounded-md border-gray-300 focus:border-orange-500"
        rows={8}
        placeholder="Ask a question!"
      />
      <button className="mt-2 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none ">
        Submit
      </button>
    </div>
  );
};

export default Write;
