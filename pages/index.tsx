import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="bg-slate-400 py-32 px-5 grid gap-5 font-sans ">
      <div className="bg-white p-6 rounded-3xl shadow-2xl max-w-xs">
        <div className="font-semibold text-2xl mb-2">Select Item</div>
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
        <div className="bg-blue-500 text-white text-xl p-3 text-center rounded-xl w-2/3 mx-auto mt-3">
          Checkout
        </div>
      </div>
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-sm">
        <div className="bg-blue-500 text-white font-semibold text-2xl p-5 pb-20 rounded-2xl ">
          Profile
        </div>
        <div className="bg-white rounded-2xl relative -top-5 p-5">
          <div className="flex justify-between px-2">
            <div className="flex flex-col items-center space-y-1">
              <span className="text-gray-500 text-sm">Orders</span>
              <span className="font-semibold text-base">340</span>
            </div>
            <div className="bg-blue-300 w-24 h-24 rounded-full relative -top-16" />
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
      <div className="bg-white p-10 rounded-2xl shadow-2xl"></div>
      <div className="bg-white p-10 rounded-2xl shadow-2xl"></div>
    </div>
  );
};

export default Home;
