export default function Card() {
  return (
    <>
      <div className="m-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <img className="w-full" src="" alt="Placeholder Image" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">hello</div>
              <p className="text-gray-700 text-base">
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
