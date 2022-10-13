import type { NextPage } from 'next';

const ItemDetail: NextPage = () => {
  return (
    <div className="px-4">
      <div>
        <div className="bg-gray-300 mt-8 h-80" />
        <div className="flex items-center space-x-2 mt-4">
          <div className="bg-gray-300 p-6 rounded-full" />
          <div className="flex items-start flex-col justify-start">
            <p className="font-bold text-sm">Steve Jebs</p>
            <p className="text-xs text-gray-500 font-semibold">
              View profile &rarr;
            </p>
          </div>
        </div>
        <div className="mt-8">
          <h1 className="font-bold text-3xl text-gray-900">Galaxy S50</h1>
          <span className="font-medium text-2xl text-gray-900">$140</span>
          <p className="my-6 text-gray-700">
            My money&apos;s in that office, right? If she start giving me some
            bullshit about it ain&apos;t there, and we got to go someplace else
            and get it, I&apos;m gonna shoot you in the head then and there.
            Then I&apos;m gonna shoot that bitch in the kneecaps, find out where
            my goddamn money is. She gonna tell me too. Hey, look at me when
            I&apos;m talking to you, motherfucker. You listen: we go in there,
            and that ni**a Winston or anybody else is in there, you the first
            motherfucker to get shot. You understand?
          </p>
          <div className="flex items-center space-x-4">
            <button className="flex-1 py-3 bg-orange-500 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 font-medium hover:bg-orange-600 focus:ring-orange-500">
              Talk to seller
            </button>
            <button>
              <svg
                className="h-6 w-6 "
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <h2 className="text-2xl font-bold text-gray-900">Similar items</h2>
        <div className=" mt-6 grid grid-cols-2 gap-4">
          {[1, 2, 3, 4, 5, 6].map((_, i) => (
            <div key={i}>
              <div className="h-56 w-full mb-4 bg-slate-300" />
              <h3 className="text-gray-700 -mb-1">Galaxy S60</h3>
              <span className="text-sm font-medium text-gray-900">$6</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
