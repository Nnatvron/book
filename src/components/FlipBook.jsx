import HTMLFlipBook from "react-pageflip";

export default function FlipBook() {
  return (
    <div className="w-full flex justify-center py-10">
      <HTMLFlipBook
        width={350}
        height={500}
        size="stretch"
        minWidth={315}
        minHeight={400}
        maxWidth={600}
        maxHeight={800}
        drawShadow={true}
        className="shadow-xl rounded-md"
      >
        {/* Halaman 1 */}
        <div className="bg-pink-50 flex flex-col items-center justify-center p-6 font-serif">
          <h1 className="text-3xl font-bold text-pink-600">❣ Love Story Book ❣</h1>
          <p className="mt-4 text-center text-pink-500">
            Sebuah kisah yang hanya kamu dan aku yang tahu.
          </p>
        </div>

        {/* Halaman 2 */}
        <div className="bg-white p-6 font-serif">
          <h2 className="text-2xl text-pink-600 font-bold">Bab 1</h2>
          <p className="mt-4 leading-relaxed text-gray-700">
            Pada suatu hari, ada seseorang yang diam-diam memperhatikanmu...
          </p>
        </div>

        {/* Halaman 3 */}
        <div className="bg-white p-6 font-serif">
          <h2 className="text-2xl text-pink-600 font-bold">Bab 2</h2>
          <p className="mt-4 leading-relaxed text-gray-700">
            Dan tanpa disadari, kamu jadi alasan dia tersenyum setiap hari.
          </p>
        </div>

        {/* Tambah halaman lain di sini */}
      </HTMLFlipBook>
    </div>
  );
}
