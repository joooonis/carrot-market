import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="bg-slate-400 py-32 px-5 grid gap-5 font-sans min-h-screen">
      <div className="bg-white p-6 rounded-3xl shadow-2xl max-w-sm">
        <div className="font-semibold text-2xl mb-2">Select Item</div>
        <div className="space-y-2">
          <ul>
            {[1, 2, 3, 4, 5].map((c, i) => (
              <li key={i} className="first:bg-orange-500 last:bg-violet-500">
                {c}
              </li>
            ))}
          </ul>
          <ul>
            {[1, 2, 3, 4, 5].map((c, i) => (
              <li key={i} className="odd:bg-orange-500 even:bg-violet-500">
                {c}
              </li>
            ))}
          </ul>
          <ul>
            {[1].map((c, i) => (
              <li key={i} className="only:bg-orange-500">
                {c}
              </li>
            ))}
          </ul>
          <ul>
            {['1', '2', '3', ''].map((c, i) => (
              <li key={i} className="bg-red-500 py-2 empty:hidden">
                {c}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-between my-1">
          <span className="text-gray-400">Grey Chair</span>
          <span className="font-semibold">$170</span>
        </div>
        <div className="flex justify-between my-1">
          <span className="text-gray-400">Tooly Table</span>
          <span className="font-semibold">$800</span>
        </div>
        <div className="flex justify-between mt-2 pt-2">
          <span className="font-semibold">Total</span>
          <span className="font-semibold">$970</span>
        </div>
        <div className="flex">
          <button className="border-none bg-blue-500 text-white text-xl p-3 text-center rounded-xl w-2/3 mx-auto mt-3 hover:bg-violet-600 active:bg-pink-300 focus:text-cyan-800">
            Checkout
          </button>
        </div>
      </div>
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-sm group">
        <div className="bg-blue-500 text-white font-semibold text-2xl p-5 pb-20 rounded-2xl ">
          Profile
        </div>
        <div className="bg-white rounded-2xl relative -top-5 p-5">
          <div className="flex justify-between px-2">
            <div className="flex flex-col items-center space-y-1">
              <span className="text-gray-500 text-sm">Orders</span>
              <span className="font-semibold text-base">340</span>
            </div>
            <div className="bg-blue-300 w-24 h-24 rounded-full relative -top-16 group-hover:bg-yellow-800 transition-colors" />
            <div className="flex flex-col items-center space-y-1">
              <span className="text-gray-500 text-sm">Spent</span>
              <span className="font-semibold text-base">$2,310</span>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-1 relative -top-16 pt-6 -mb-16">
            <span className="font-bold text-xl">Tony Molly</span>
            <span className="text-gray-500 text-sm">New York, USA</span>
          </div>
        </div>
      </div>
      <div className="bg-white p-10 rounded-2xl shadow-2xl max-w-sm">
        <div className="flex justify-between items-center">
          <span className="text-4xl relative -left-4">⬅️</span>
          <div className="flex items-center">
            <span className="text-lg font-semibold">⭐ 4.9</span>
            <span className="text-xl p-2 shadow-lg rounded-lg ml-6">💗</span>
          </div>
        </div>
        <div className="bg-slate-500 h-72 mt-4" />
        <div className="flex flex-col mt-4">
          <div className="text-xl font-semibold">Swoon Lounge</div>
          <div className="text-sm text-gray-500">Chair</div>
        </div>
        <div className="flex justify-between items-center mt-2 mb-5">
          <div className="space-x-2">
            <button className="bg-yellow-300 rounded-full border-none w-5 h-5 focus:ring-2 ring-offset-2 ring-yellow-300 transition"></button>
            <button className="bg-indigo-300 rounded-full border-none w-5 h-5 focus:ring-2 ring-offset-2 ring-indigo-300 transition"></button>
            <button className="bg-lime-600 rounded-full border-none w-5 h-5 focus:ring-2 ring-offset-2 ring-lime-600 transition"></button>
          </div>
          <div className="flex space-x-3 justify-between items-center">
            <div className="flex justify-center items-center bg-slate-200 aspect-square w-8 rounded-lg">
              -
            </div>
            <div className="font-semibold">1</div>
            <div className="flex justify-center items-center bg-slate-200 aspect-square w-8 rounded-lg">
              +
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-3xl font-semibold">$450</span>
          <button className="bg-blue-400 text-lg text-white rounded-lg px-12 py-3 border-none">
            Add to cart
          </button>
        </div>
      </div>
      <div className="bg-white p-10 rounded-2xl shadow-2xl"></div>
    </div>
  );
};

export default Home;
