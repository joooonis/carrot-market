import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="bg-slate-400 py-32 px-5 grid gap-5 ">
      <div className="bg-white p-6 rounded-3xl shadow-2xl font-sans max-w-xs">
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
      <div className="bg-white p-10 rounded-2xl shadow-2xl"></div>
      <div className="bg-white p-10 rounded-2xl shadow-2xl"></div>
      <div className="bg-white p-10 rounded-2xl shadow-2xl"></div>
    </div>
  );
};

export default Home;
