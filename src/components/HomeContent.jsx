// components/HomeContent.jsx
import React from 'react';

const HomeContent = () => {
  return (
    <main className="space-y-12 bg-white mb-16">
      {/* Tables */}
      <section className="space-y-12 px-4 md:px-8">
        {/* Student Table */}
        <div>
          <h2 className="font-bold text-xl mb-4">Jumlah Siswa</h2>

          {[1, 2, 3].map((_, index) => (
            <div key={index} className="overflow-x-auto border rounded shadow mb-6">
              <table className="min-w-full text-sm text-center border-collapse">
                <thead>
                  <tr>
                    <th colSpan="8" className="bg-[#2aa7e2] text-white px-4 py-2">Tahun 2019 / 2020</th>
                  </tr>
                  <tr className=" font-semibold">
                    <th className="border px-3 py-2">Kelas VII</th>
                    <th className="border px-3 py-2">Jumlah Rumbel</th>
                    <th className="border px-3 py-2">Kelas VIII</th>
                    <th className="border px-3 py-2">Jumlah Rumbel</th>
                    <th className="border px-3 py-2">Kelas IX</th>
                    <th className="border px-3 py-2">Jumlah Rumbel</th>
                  </tr>
                  <tr className="bg-blue-100">
                    <th className="border px-3 py-2">L</th>
                    <th className="border px-3 py-2">P</th>
                    <th className="border px-3 py-2">L</th>
                    <th className="border px-3 py-2">P</th>
                    <th className="border px-3 py-2">L</th>
                    <th className="border px-3 py-2">P</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="">
                    <td className="border px-3 py-2">140</td>
                    <td className="border px-3 py-2">196</td>
                    <td className="border px-3 py-2">140</td>
                    <td className="border px-3 py-2">196</td>
                    <td className="border px-3 py-2">140</td>
                    <td className="border px-3 py-2">196</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
        </div>

        {/*Data Runga kelas*/}
        <div>
          <h2 className="font-bold text-xl mb-4">Data Ruang Kelas</h2>
          <div className="overflow-x-auto border rounded shadow">
            <table className="min-w-full text-sm text-center border-collapse">
              <thead className="bg-[#2aa7e2] text-white">
                <tr className="bg-[#2aa7e2] text-white">
                  <th colSpan="4" className="border px-4 py-2">Jumlah Ruang Kelas Asli</th>
                  <th className="border px-4 py-2" rowSpan="2">Jumlah ruang lainnya yang dipakai untuk ruang kelas (e)</th>
                  <th className="border px-4 py-2" rowSpan="2">Jumlah ruang yang digunakan untuk ruang kelas (f) = (d+e)</th>
                </tr>
                <tr className="bg-[#2aa7e2] text-white">
                  <th className="border px-4 py-2">Ukuran 7x9 m2</th>
                  <th className="border px-4 py-2">Ukuran &gt; 63 m2</th>
                  <th className="border px-4 py-2">Ukuran &lt; 63 m2</th>
                  <th className="border px-4 py-2">Jumlah (d) = (a + b + c)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-blue-50">
                  <td className="border px-4 py-2">4</td>
                  <td className="border px-4 py-2">23</td>
                  <td className="border px-4 py-2">-</td>
                  <td className="border px-4 py-2">27</td>
                  <td className="border px-4 py-2">-</td>
                  <td className="border px-4 py-2">27</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>


        {/* Facility Table */}
        <div>
          <h2 className="font-bold text-xl mb-4">Data Ruang Kelas</h2>
          <div className="overflow-x-auto border rounded shadow mt-6">
            <table className="min-w-full text-sm text-center border-collapse">
              <thead className="bg-[#2aa7e2] text-white">
                <tr>
                  <th className="border px-4 py-2" rowSpan="2">No</th>
                  <th className="border px-4 py-2" rowSpan="2">Jenis Ruangan</th>
                  <th className="border px-4 py-2" rowSpan="2">Jumlah Ruangan</th>
                  <th className="border px-4 py-2" rowSpan="2">Jumlah Yang Kondisinya Baik</th>
                  <th className="border px-4 py-2" rowSpan="2">Jumlah Yang Kondisinya Rusak</th>
                  <th className="border px-4 py-2" colSpan="2">Kategori Kerusakan</th>
                </tr>
                <tr>
                  <th className="border px-4 py-2">Berat</th>
                  <th className="border px-4 py-2">Sedang</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Perpustakaan", 1, 1, "", "", ""],
                  ["Ruang Komputer", 1, 1, "", "", ""],
                  ["Lab. IPA Fisika", 1, "", 1, 1, ""],
                  ["Lab. IPA Biologi", 1, "", 1, 1, ""],
                  ["Ruang TU", 1, "", 1, 1, ""],
                  ["Ruang Guru", 1, 1, "", "", ""],
                  ["Ruang Kepala Sekolah", 1, 1, "", "", ""],
                  ["Ruang BP", 1, 1, "", "", ""],
                  ["Ruang UKS", 1, 1, "", "", ""],
                  ["Ruang Ibadah", 1, 1, "", "", ""],
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-blue-50" : "bg-white"}>
                    <td className="border px-4 py-2">{i + 1}</td>
                    <td className="border px-4 py-2">{row[0]}</td>
                    <td className="border px-4 py-2">{row[1]}</td>
                    <td className="border px-4 py-2">{row[2]}</td>
                    <td className="border px-4 py-2">{row[3]}</td>
                    <td className="border px-4 py-2">{row[4]}</td>
                    <td className="border px-4 py-2">{row[5]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        

        {/* Staff Table */}
        <div>
          <h2 className="font-bold text-xl mb-4">Data Tenaga Pendidik dan Kependidikan</h2>
          <div className="overflow-x-auto border rounded shadow">
            <table className="min-w-full text-sm text-center border-collapse">
              <thead className="bg-[#2aa7e2] text-white">
                <tr>
                  <th className="border px-4 py-2">No</th>
                  <th className="border px-4 py-2">Guru / Staff</th>
                  <th className="border px-4 py-2">SMP Negeri</th>
                  <th className="border px-4 py-2">S-1</th>
                  <th className="border px-4 py-2">S-2</th>
                  <th className="border px-4 py-2">Sedang S-1</th>
                  <th className="border px-4 py-2">Keterangan</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Guru PNS", 32, 23, 8, "-", "1 Orang D-1"],
                  ["Guru Non PNS", 5, 5, "-", "-", "-"],
                  ["Guru PNS DPK", 2, 1, 1, "-", "-"],
                  ["Staf TU PNS", 4, "-", "-", "-", "-"],
                  ["Staf TU Non PNS", 9, "-", "-", "-", "-"],
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-blue-50" : "bg-white"}>
                    <td className="border px-4 py-2">{i + 1}</td>
                    <td className="border px-4 py-2">{row[0]}</td>
                    <td className="border px-4 py-2">{row[1]}</td>
                    <td className="border px-4 py-2">{row[2]}</td>
                    <td className="border px-4 py-2">{row[3]}</td>
                    <td className="border px-4 py-2">{row[4]}</td>
                    <td className="border px-4 py-2">{row[5]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomeContent;