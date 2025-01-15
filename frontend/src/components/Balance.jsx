export default function Balance({ balance }) {
  return (
    <>
      <div className="w-full bg-white text-black border rounded-md shadow-md p-2 mt-1">
        <div className="font-bold text-sm">
          Your balance
          <span className="pl-4">Rs.{balance}</span>
        </div>
      </div>
    </>
  );
}
