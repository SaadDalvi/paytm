export default function GreenButton({ label,onClick }) {
    return (
      <>
        <div className="pt-2">
          <button
          onClick={onClick}
            type="button"
            className="text-white w-full bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-600 dark:border-green-600"
          >
            {label}
          </button>
        </div>
      </>
    );
  }
  