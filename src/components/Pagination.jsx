export default function Pagination() {
  return (
    <div className="flex gap-5 justify-center items-center py-10">
      <button className="py-3 px-5  rounded bg-primary text-white">1</button>
      <button className="py-3 px-5  rounded bg-red-50">2</button>
      <button className="py-3  px-5 rounded bg-red-50">3</button>

      <button className="py-3  px-5 rounded bg-red-50">Next</button>
    </div>
  );
}
