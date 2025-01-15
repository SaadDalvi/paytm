export default function Appbar() {
  return (
    <>
      <div className="flex w-full justify-between items-center bg-white text-black border rounded-md shadow-md p-2">
        <div>PayTM App</div>

        <div className="flex justify-center items-center gap-2">
          <div>Hello</div>
          <div className="bg-slate-400 rounded-full w-8 h-8 flex items-center justify-center">
            <div>U</div>
          </div>
        </div>
      </div>
    </>
  );
}
