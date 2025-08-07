import {useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const App = () => {
  // first section usestate //
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDate2, setSelectedDate2] = useState(null);
  const [selectedDate3, setSelectedDate3] = useState(null);
  const [selectedDate4, setSelectedDate4] = useState(null);

  return (
    <div className="container mx-auto shadow-md bg-white rounded-sm pb-6">
      <section>
        <div className="flex flex-col items-center justify-center py-4 w-full">
          <h1 className="text-[22px] font-bold text-center">
            ডেবনেয়ার লিমিটেড । অরবিটেক্স নিটওয়্যার লিমিটেড
          </h1>
          <p>গোরাট, আশুলিয়া, সাভার, ঢাকা-১৩৪১</p>
          <p className="text-[14px]"> চুড়ান্ত নিষ্পত্তিকরন হিসাব </p>
        </div>
      </section>

      {/*  first section done */}
      <section className="text-gray-600 body-font py-1">
        <div className="container px-5 mx-auto">
          <div>
            <h3 className="font-extrabold uppercase text-[14px] py-2 px-2 bg-sky-700 text-white shadow-sm">
              কর্মচারীর অব্যাহতির তথ্য ও সংক্রান্ত তারিখসমূহ.
            </h3>
          </div>
          <div className="flex flex-wrap md:flex-nowrap gap-0">
            {/* Left Column (70%) */}
            <div className="w-full md:w-[60%]">
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm text-left text-black border border-gray-300">
                  <tbody>
                    <tr className="border-b border-t border-gray-300">
                      <th className="font-bold  py-[4px] px-[4px]">আইডি নং</th>
                      <td className="py-[4px] px-[4px]">
                        <div className="relative">
                          <input
                            type="number"
                            className="w-full font-bold px-1 text-[12px] py-[6px] shadow-xs text-gray-900 bg-transparent border border-gray-300  placeholder-gray-400  focus:outline-none leading-relaxed"
                            placeholder="Enter employee id...."
                          />
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <th className="font-bold  w-1/3 py-[4px] px-[4px]">
                        নামঃ
                      </th>
                      <td className="py-[6px] px-[4px]">
                        <input
                          type="text"
                          disabled
                          className="w-full  px-1 text-[12px] py-[6px] shadow-xs text-gray-900 bg-transparent border border-gray-300  placeholder-gray-400  focus:outline-none leading-relaxed"
                          value={"মোঃ জনাব আলী"}
                        />
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <th className="font-bold  py-[4px] px-[4px]">পদবীঃ</th>
                      <td className="py-[6px] px-[4px]">
                        <input
                          type="text"
                          disabled
                          className="w-full  px-1 text-[12px] py-[6px] shadow-xs text-gray-900 bg-transparent border border-gray-300  placeholder-gray-400  focus:outline-none leading-relaxed"
                          value={"সিনিয়র অফিসার"}
                        />
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <th className="font-bold  py-[4px] px-[4px]">
                        সাব সেকশনঃ
                      </th>
                      <td className="py-[5px] px-[4px]">
                        <div className="relative">
                          <input
                            type="text"
                            disabled
                            className="w-full  px-1 text-[12px] py-[6px] shadow-xs text-gray-900 bg-transparent border border-gray-300  placeholder-gray-400  focus:outline-none leading-relaxed"
                            value={"অ্যাকাউন্টস"}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <th className="font-bold  py-[4px] px-[4px]">
                        যোগদানের তারিখঃ
                      </th>
                      <td className="py-[6px] px-[4px]">
                        <div className="w-full">
                          <input
                            type="text"
                            disabled
                            className="w-full  px-1 text-[12px] py-[6px] shadow-xs text-gray-900 bg-transparent border border-gray-300  placeholder-gray-400  focus:outline-none leading-relaxed"
                            value={"10-05-2024"}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th className="font-bold  py-[4px] px-[4px]">
                        অব্যাহতির ধরণঃ
                      </th>
                      <td className="py-[3.5px] px-[4px]">
                        <div className="relative">
                          <select
                            id="resign_type"
                            className="border py-[7px] font-bold border-gray-300 text-gray-600 text-base  font-400 w-full focus:outline-none"
                          >
                            <option value="Resign">RESIGN</option>
                          </select>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Right Column (30%) */}
            <div className="w-full md:w-[40%]">
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm text-left text-black border border-gray-300">
                  <tbody>
                    <tr className="border-b border-gray-300 ">
                      <th className="font-bold  px-[4px]">তারিখঃ</th>
                      <td className="px-[4px] py-[4px]">
                        <div className="w-full">
                          <DatePicker
                            selected={selectedDate4}
                            onChange={(date: any) => setSelectedDate4(date)}
                            dateFormat="dd/MM/yyyy"
                            className=" text-[11px] font-bold border py-[7px] w-[310px] border-gray-300 px-[4px]   focus:outline-none"
                            placeholderText="DD-MM-YYYY"
                          />
                        </div>
                      </td>
                    </tr>

                    <tr className="border-b border-gray-300">
                      <th className=" font-bold   px-[4px] py-[4px]">সেকশনঃ</th>
                      <td className="px-[4px] py-[4px]">
                        <input
                          type="text"
                          disabled
                          className="w-full  px-1 text-[12px] py-[7px] shadow-xs text-gray-900 bg-transparent border border-gray-300  placeholder-gray-400  focus:outline-none leading-relaxed"
                          value={"অ্যাকাউন্টস"}
                        />
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <th className="font-bold   px-[4px]">অব্যাহতির তারিখঃ</th>
                      <td className="px-[4px] py-[4px]">
                        <div className="w-full">
                          <DatePicker
                            selected={selectedDate}
                            onChange={(date: any) => setSelectedDate(date)}
                            dateFormat="dd/MM/yyyy"
                            className=" px-[4px] border w-[310px] font-bold py-[7px] border-gray-300 text-[11px]  focus:outline-none"
                            placeholderText="DD-MM-YYYY"
                          />
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <th className="font-bold   px-[4px]">কার্যকরী তারিখঃ</th>
                      <td className="px-[4px] py-[4px]">
                        <div className="w-full">
                          <DatePicker
                            selected={selectedDate2}
                            onChange={(date: any) => setSelectedDate2(date)}
                            dateFormat="dd/MM/yyyy"
                            className=" px-[4px] text-[11px] w-[310px] py-[7px] font-bold border border-gray-300  focus:outline-none"
                            placeholderText="DD-MM-YYYY"
                          />
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <th className="font-bold  px-[4px] w-full">
                        বেতন প্রদানের তারিখঃ
                      </th>
                      <td className="px-[4px] py-[4px]">
                        <div className="w-full">
                          <DatePicker
                            selected={selectedDate3}
                            onChange={(date: any) => setSelectedDate3(date)}
                            dateFormat="dd/MM/yyyy"
                            className=" px-[4px] text-[11px] w-[310px] py-[7px] font-bold border border-gray-300  focus:outline-none"
                            placeholderText="DD-MM-YYYY"
                          />
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <th className="font-bold  px-[4px] py-[4px]">
                        মাসের নামঃ
                      </th>
                      <td className="px-[4px] py-[4px] font-bold">
                        <input
                          type="text"
                          disabled
                          className="w-full  px-1 text-[12px] py-[6px] shadow-xs text-gray-900 bg-transparent border border-gray-300  placeholder-gray-400  focus:outline-none leading-relaxed"
                          value={"February-2025"}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end first section */}

      {/* salary information with leave, absent days section */}

      <section>
        <div className="container px-5 py-1 mx-auto">
          <div>
            <h3 className="font-extrabold uppercase text-[14px] py-2 px-2 bg-sky-700 text-white shadow-sm">
              বেতন ও উপস্থিতি সংক্ষিপ্ত বিবরণ.
            </h3>
          </div>
          <div className="flex flex-wrap gap-0">
            {/* Box 1 */}
            <div className="w-full lg:w-1/4">
              <div className="h-full  bg-opacity-75 overflow-hidden text-center relative">
                <table className="min-w-full text-sm text-left text-black border border-gray-300">
                  <tbody>
                    <tr className="border-b border-gray-300 ">
                      <th className="font-bold  py-[9px] px-[5px]">
                        মূল বেতনঃ
                      </th>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <th className="font-bold  py-[9px] px-[5px]">
                        বাড়ী ভাড়াঃ
                      </th>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <th className="font-bold  py-[9px] px-[5px]">
                        চিকিৎসা ভাতাঃ
                      </th>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <th className="font-bold  py-[9px] px-[5px]">খাদ্যঃ</th>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <th className="font-bold  py-[9px] px-[5px]">যাতায়াতঃ</th>
                    </tr>
                    <tr>
                      <th className="font-bold  py-[10px] px-[5px]">
                        সর্বসাকূল্যঃ
                      </th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Box 2 */}
            <div className="w-full lg:w-1/4">
              <div className="h-full   overflow-hidden text-center relative">
                <table className="min-w-full text-sm text-left text-black border border-gray-300">
                  <tbody>
                    {[
                      "মূল বেতন",
                      "বাড়ী ভাড়া",
                      "চিকিৎসা ভাতা",
                      "খাদ্য ভাতা",
                      "যাতায়াত ভাতা",
                    ].map((placeholder, idx) => (
                      <tr key={idx} className="border-b border-gray-300">
                        <td className="py-[4px] px-[5px]">
                          <input
                            disabled
                            type="number"
                            className="w-full px-2 py-1 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 placeholder-gray-400 focus:outline-none"
                            placeholder={placeholder}
                          />
                        </td>
                      </tr>
                    ))}
                    <tr>
                      <td className="py-[11px] px-[5px] bg-gray-300 text-black">
                        <h4 className="font-bold">০০.০০ ৳</h4>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Box 3 */}
            <div className="w-full lg:w-1/4">
              <div className="h-full  bg-opacity-75 overflow-hidden text-center relative">
                <table className="min-w-full text-sm text-left text-black border border-gray-300">
                  <tbody>
                    <tr className="border-b border-gray-300">
                      <th className="font-bold  py-[9px] px-[5px]">
                        উপস্থিতিঃ
                      </th>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <th className="font-bold  py-[9px] px-[5px]">
                        সাপ্তাহিক ছুটি / অন্যন্য ছুটিঃ
                      </th>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <th className="font-bold  py-[9px] px-[5px]">
                        অনুপস্থিতিঃ
                      </th>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <th className="font-bold  py-[9px] px-[5px]">মোট দিনঃ</th>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <th className="font-bold  py-[29.5px] px-[5px]">মোটঃ</th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Box 4 */}
            <div className="w-full lg:w-1/4">
              <div className="h-full  bg-opacity-75 overflow-hidden text-center relative">
                <table className="min-w-full text-sm text-left text-black border border-gray-300">
                  <tbody>
                    {[...Array(3)].map((_, idx) => (
                      <tr key={idx} className="border-b border-gray-300">
                        <td className="py-[4px] px-[5px]">
                          <input
                            type="number"
                            className="w-full px-2 py-1 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 placeholder-gray-400 focus:outline-none"
                            placeholder="০ দিন"
                          />
                        </td>
                      </tr>
                    ))}
                    <tr className="border-b border-gray-300 font-bold">
                      <td className="py-[10px] px-[5px]">
                        <input
                          type="number"
                          className="w-full px-2 py-1 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 placeholder-gray-400 focus:outline-none"
                          placeholder="০ দিন"
                        />
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300 font-bold bg-gray-300 text-black">
                      <td className="py-[24px] px-[5px]">
                        <h4>০০.০০ ৳</h4>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end salary information with leave, absent days section */}

      {/* over time section */}
      <section>
        <div className="container px-5 py-1 mx-auto">
          <div>
            <h3 className="font-extrabold uppercase text-[14px] py-2 px-2 bg-sky-700 text-white shadow-sm">
              ওভারটাইম হিসাব সংক্ষিপ্ত বিবরণ.
            </h3>
          </div>

          <div className="flex flex-wrap gap-0">
            {/* Box 1 - 30% */}
            <div className="w-full lg:basis-[30%] border border-gray-300">
              <div className="h-full bg-opacity-75 overflow-hidden text-center relative flex justify-center items-center">
                <p className="text-center font-bold text-[14px]">
                  ওভার টাইমঃ <br /> ( মূল বেতন / ২০৮) * ওভার টাইম ঘন্টা।
                </p>
              </div>
            </div>

            {/* Box 2 - 35% */}
            <div className="w-full lg:basis-[35%]">
              <div className="h-full bg-opacity-75 overflow-hidden text-center relative">
                <table className="min-w-full text-sm text-left text-black border border-gray-300">
                  <tbody>
                    <tr className="border-b border-gray-300">
                      <th className="font-bold py-[12px] px-[5px]">
                        মোট ওভারটাইমঃ
                      </th>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <th className="font-bold py-[12px] px-[5px]">
                        ওভারটাইম হারঃ
                      </th>
                    </tr>

                    <tr className="border-b border-gray-300">
                      <th className="font-bold py-[12px] px-[5px] text-right">
                        মোটঃ
                      </th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Box 3 - 35% */}
            <div className="w-full lg:basis-[35%]">
              <div className="h-full bg-opacity-75 overflow-hidden text-center relative">
                <table className="min-w-full text-sm text-left text-black border border-gray-300">
                  <tbody>
                    <tr className="border-b border-gray-300">
                      <td className="py-[5px] px-[5px]">
                        <input
                          type="number"
                          className="w-full px-2 py-[6px] text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 placeholder-gray-400 focus:outline-none"
                          placeholder="০ ঘন্টা"
                        />
                      </td>
                    </tr>

                    <tr className="border-b border-gray-300">
                      <td className="py-[5px] px-[5px]">
                        <input
                          type="number"
                          className="w-full px-2 py-[6px] text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 placeholder-gray-400 focus:outline-none"
                          placeholder="০০.০০"
                        />
                      </td>
                    </tr>

                    <tr className="border-b border-gray-300 font-bold bg-gray-300 text-black">
                      <td className="py-[12.5px] px-[5px]">
                        <h4>০০.০০ ৳</h4>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* end overtime section */}

      {/* earn leave section  */}

      <section>
        <div className="container px-5 py-1 mx-auto">
          <div>
            <h3 className="font-extrabold uppercase text-[14px] py-2 px-2 bg-sky-700 text-white shadow-sm">
              অর্জিত ছুটি ও প্রাপ্য হিসাব বিবরণ.
            </h3>
          </div>

          <div className="flex flex-wrap gap-0">
            {/* Column 1 - 30% */}
            <div className="w-full lg:basis-[30%] border border-gray-300">
              <div className="h-full bg-opacity-75 py-4 overflow-hidden text-center px-10 relative flex justify-center items-center">
                <p className="text-center font-bold text-[14px]">
                  অবশিষ্ট ছুটি ও চাকরীর মেয়াদ ০১ বছরের উপরে হলে মোট উপস্থিত
                  দিন/১৮ * প্রতিদিন হার।
                </p>
              </div>
            </div>

            {/* Column 2 - 40% */}
            <div className="w-full lg:basis-[40%]">
              <div className="h-full bg-opacity-75 overflow-hidden text-center relative">
                <table className="min-w-full text-sm text-left text-black border border-gray-300">
                  <tbody>
                    <tr className="border-b border-gray-300 ">
                      <th className="font-bold py-[12px] px-[5px]">
                        অবশিষ্ট ছুটির দিন সংখ্যা = মোট উপস্থিত দিন / ১৮ঃ
                      </th>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <th className="font-bold py-[12px] px-[5px]">
                        অবশিষ্ট ছুটি ভোগের দিন সংখ্যাঃ
                      </th>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <th className="font-bold py-[12px] px-[5px]">
                        অবশিষ্ট ছুটি প্রদেয় দিন সংখ্যাঃ
                      </th>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <th className="font-bold py-[12px] px-[5px]">
                        প্রতিদিন হারঃ
                      </th>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <th className="font-bold py-[12px] px-[5px] text-right">
                        মোটঃ
                      </th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Column 3 - 15% */}
            <div className="w-full lg:basis-[15%]">
              <div className="h-full bg-opacity-75 overflow-hidden text-center relative">
                <table className="min-w-full text-sm text-left text-black border border-gray-300">
                  <tbody>
                    <tr className="border-b border-gray-300">
                      <td className="py-[5px] px-[5px]">
                        <input
                          type="text"
                          className="w-full px-2 py-[6px] text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 placeholder-gray-400 focus:outline-none"
                          placeholder="০ দিন"
                        />
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-[22px] px-[5px]"></td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-[22px] px-[5px]"></td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-[22px] px-[5px]"></td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-[22px] px-[5px]"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Column 4 - 15% */}
            <div className="w-full lg:basis-[15%]">
              <div className="h-full bg-opacity-75 overflow-hidden text-center relative">
                <table className="min-w-full text-sm text-left text-black border border-gray-300">
                  <tbody>
                    <tr className="border-b border-gray-300">
                      <td className="py-[5px] px-[5px]">
                        <input
                          type="number"
                          className="w-full px-2 py-[6px] text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 placeholder-gray-400 focus:outline-none"
                          placeholder="০.০০"
                        />
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-[5px] px-[5px]">
                        <input
                          type="number"
                          className="w-full px-2 py-[6px] text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 placeholder-gray-400 focus:outline-none"
                          placeholder="০.০০"
                        />
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-[5px] px-[5px]">
                        <input
                          type="number"
                          className="w-full px-2 py-[6px] text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 placeholder-gray-400 focus:outline-none"
                          placeholder="০.০০"
                        />
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-[5px] px-[5px]">
                        <input
                          type="number"
                          className="w-full px-2 py-[6px] text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 placeholder-gray-400 focus:outline-none"
                          placeholder="০.০০"
                        />
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300 font-bold bg-gray-300 text-black">
                      <td className="py-[12.5px] px-[5px]">
                        <h4>০০.০০ ৳</h4>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* end eard leave section */}
      {/* service benefit section */}

      <section>
        <div className="container px-5 py-1 mx-auto">
          <div>
            <h3 className="font-extrabold uppercase text-[14px] py-2 px-2 bg-sky-700 text-white shadow-sm">
              অর্জিত ছুটি ও প্রাপ্য হিসাব বিবরণ.
            </h3>
          </div>

          <div className="flex flex-wrap gap-0">
            {/* Column 1 - 30% */}
            <div className="w-full lg:basis-[30%] border border-gray-300">
              <div className="h-full bg-opacity-75 py-4 overflow-hidden text-center px-10 relative flex justify-center items-center">
                <p className="text-center font-bold text-[14px]">
                  সার্ভিস বেনিফিট - চাকরীর মেয়াদ ০৫-১০ বছরঃ মূল বেতন/৩০ * প্রতি
                  বছরের জন্য ১৪ দিনের বেসিক টাকা। ১০ বছর এর উপরেঃ মূল বেতন/৩০ *
                  প্রতি পূর্ণ বছরের জন্য ৩০ দিনের বেসিক টাকা।
                </p>
              </div>
            </div>

            {/* Column 2 - 40% */}
            <div className="w-full lg:basis-[40%]">
              <div className="h-full bg-opacity-75 overflow-hidden text-center relative">
                <table className="min-w-full text-sm text-left text-black border border-gray-300">
                  <tbody>
                    <tr className="border-b border-gray-300 ">
                      <th className="font-bold py-[12px] px-[5px]">
                        যোগদানের তারিখঃ
                      </th>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <th className="font-bold py-[12px] px-[5px]">
                        অব্যাহতির কার্যকরির তারিখঃ
                      </th>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <th className="font-bold py-[12px] px-[5px]">
                        মোট সার্ভিস দিন, যোগদান থেকে অব্যাহতি পর্যন্তঃ
                      </th>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <th className="font-bold py-[12px] px-[5px]">
                        প্রাপ্য বছরের সংখ্যা - মোট দিন/৩৬৫ঃ
                      </th>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <th className="font-bold py-[12px] px-[5px] text-right">
                        মোটঃ
                      </th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Column 3 - 15% */}
            <div className="w-full lg:basis-[15%]">
              <div className="h-full bg-opacity-75 overflow-hidden text-center relative">
                <table className="min-w-full text-sm text-left text-black border border-gray-300">
                  <tbody>
                    <tr className="border-b border-gray-300">
                      <td className="py-[5px] px-[5px]">
                        <input
                          disabled
                          type="text"
                          className="w-full px-2 py-[6px] text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 placeholder-gray-400 focus:outline-none"
                          placeholder="২৪-০৫-২০২৪"
                        />
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-[5px] px-[5px]">
                        <input
                          type="text"
                          disabled
                          className="w-full px-2 py-[6px] text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 placeholder-gray-400 focus:outline-none"
                          placeholder="২২-০৯-২০২৪"
                        />
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-[5px] px-[5px]">
                        <input
                          type="text"
                          
                          className="w-full px-2 py-[6px] text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 placeholder-gray-400 focus:outline-none"
                          placeholder="০ দিন"
                        />
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-[5px] px-[5px]">
                        <input
                          type="text"
                          disabled
                          className="w-full px-2 py-[6px] text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 placeholder-gray-400 focus:outline-none"
                          placeholder="০.০০"
                        />
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-[22.5px] px-[5px]"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Column 4 - 15% */}
            <div className="w-full lg:basis-[15%]">
              <div className="h-full bg-opacity-75 overflow-hidden text-center relative">
                <table className="min-w-full text-sm text-left text-black border border-gray-300">
                  <tbody>
                    <tr className="border-b border-gray-300">
                      <td className="py-[5px] px-[5px]">
                        <input
                          disabled
                          type="text"
                          className="w-full px-2 py-[6px] text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 placeholder-gray-400 focus:outline-none"
                          placeholder="০.০০"
                        />
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-[5px] px-[5px]">
                        <input
                          disabled
                          type="text"
                          className="w-full px-2 py-[6px] text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 placeholder-gray-400 focus:outline-none"
                          placeholder="০.০০"
                        />
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-[5px] px-[5px]">
                        <input
                          disabled
                          type="text"
                          className="w-full px-2 py-[6px] text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 placeholder-gray-400 focus:outline-none"
                          placeholder="০.০০"
                        />
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-[5px] px-[5px]">
                        <input
                          disabled
                          type="number"
                          className="w-full px-2 py-[6px] text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 placeholder-gray-400 focus:outline-none"
                          placeholder="০.০০"
                        />
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300 font-bold bg-gray-300 text-black">
                      <td className="py-[12.5px] px-[5px]">
                        <h4>০০.০০ ৳</h4>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* end service benefit section */}

      {/* benefit section start */}
      <section>
        <div className="container px-5 py-1 mx-auto">
          <div>
            <h3 className="font-extrabold uppercase text-[14px] py-2 px-2 bg-sky-700 text-white shadow-sm">
              সুবিধার হিসাব বিবরণ.
            </h3>
          </div>

          <div className="flex flex-wrap gap-0">
            {/* Box 1 - 30% */}
            <div className="w-full lg:basis-[30%] border border-gray-300">
              <div className="h-full bg-opacity-75 overflow-hidden text-center relative flex justify-center items-center">
                <p className="text-center font-bold text-[14px]">সুবিধা</p>
              </div>
            </div>

            {/* Box 2 - 35% */}
            <div className="w-full lg:basis-[35%]">
              <div className="h-full bg-opacity-75 overflow-hidden text-center relative">
                <table className="min-w-full text-sm text-left text-black border border-gray-300">
                  <tbody>
                    <tr className="border-b border-gray-300">
                      <th className="font-bold py-[12px] px-[5px]">
                        অন্যন্য ভাতাঃ
                      </th>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <th className="font-bold py-[12px] px-[5px]">
                        হাজিরা বোনাসঃ
                      </th>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <th className="font-bold py-[12px] px-[5px]">
                        খাবার বিলঃ
                      </th>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <th className="font-bold py-[12px] px-[5px]">
                        ক্ষতিপূরণঃ
                      </th>
                    </tr>

                    <tr className="border-b border-gray-300">
                      <th className="font-bold py-[12px] px-[5px] text-right">
                        মোটঃ
                      </th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Box 3 - 35% */}
            <div className="w-full lg:basis-[35%]">
              <div className="h-full bg-opacity-75 overflow-hidden text-center relative">
                <table className="min-w-full text-sm text-left text-black border border-gray-300">
                  <tbody>
                    <tr className="border-b border-gray-300">
                      <td className="py-[5px] px-[5px]">
                        <input
                          type="text"
                          className="w-full px-2 py-[6px] text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 placeholder-gray-400 focus:outline-none"
                          placeholder="০০.০০"
                        />
                      </td>
                    </tr>

                    <tr className="border-b border-gray-300">
                      <td className="py-[5px] px-[5px]">
                        <input
                          type="text"
                          className="w-full px-2 py-[6px] text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 placeholder-gray-400 focus:outline-none"
                          placeholder="০০.০০"
                        />
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-[5px] px-[5px]">
                        <input
                          type="text"
                          className="w-full px-2 py-[6px] text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 placeholder-gray-400 focus:outline-none"
                          placeholder="০০.০০"
                        />
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-[5px] px-[5px]">
                        <input
                          type="text"
                          className="w-full px-2 py-[6px] text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 placeholder-gray-400 focus:outline-none"
                          placeholder="০০.০০"
                        />
                      </td>
                    </tr>

                    <tr className="border-b border-gray-300 font-bold bg-gray-300 text-black">
                      <td className="py-[12.5px] px-[5px]">
                        <h4>০০.০০ ৳</h4>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* end benefit section */}

      {/* another benefit section */}
      <section>
        <div className="container px-5 py-1 mx-auto">
          <div>
            <h3 className="font-extrabold uppercase text-[14px] py-2 px-2 bg-sky-700 text-white shadow-sm">
              অন্যন্য সুবিধার হিসাব বিবরণ.
            </h3>
          </div>

          <div className="flex flex-wrap gap-0">
            {/* Box 1 - 30% */}
            <div className="w-full lg:basis-[30%] border border-gray-300">
              <div className="h-full bg-opacity-75 overflow-hidden text-center relative flex justify-center items-center">
                <p className="text-center font-bold text-[14px]">
                  অন্যন্য সুবিধা
                </p>
              </div>
            </div>

            {/* Box 2 - 35% */}
            <div className="w-full lg:basis-[35%]">
              <div className="h-full bg-opacity-75 overflow-hidden text-center relative">
                <table className="min-w-full text-sm text-left text-black border border-gray-300">
                  <tbody>
                    <tr className="border-b border-gray-300">
                      <th className="font-bold py-[12px] px-[5px]">
                        টিফিন বিলঃ
                      </th>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <th className="font-bold py-[12px] px-[5px]">
                        নাইট বিলঃ
                      </th>
                    </tr>
                     <tr className="border-b border-gray-300">
                      <th className="font-bold py-[12px] px-[5px]">
                         অতিরিক্ত কর্মঘন্টাঃ 
                      </th>
                    </tr>

                    <tr className="border-b border-gray-300">
                      <th className="font-bold py-[12px] px-[5px] text-right">
                        মোটঃ
                      </th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Box 3 - 35% */}
            <div className="w-full lg:basis-[35%]">
              <div className="h-full bg-opacity-75 overflow-hidden text-center relative">
                <table className="min-w-full text-sm text-left text-black border border-gray-300">
                  <tbody>
                    <tr className="border-b border-gray-300" >
                      <td className="py-[5px] px-[5px]" colSpan={3}>
                        <input
                          type="text"
                          className="w-full px-2 py-[6px] text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 placeholder-gray-400 focus:outline-none"
                          placeholder="০০.০০"
                        />
                      </td>
                    </tr>

                    <tr className="border-b border-gray-300">
                      <td className="py-[5px] px-[5px]" colSpan={3}>
                        <input
                          type="text"
                          className="w-full px-2 py-[6px] text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 placeholder-gray-400 focus:outline-none"
                          placeholder="০০.০০"
                        />
                      </td>

                    </tr>
                     <tr className="border-b border-gray-300">
                      <td className="py-[5px] px-[5px]">
                        <input
                          type="text"
                          className="w-full px-2 py-[6px] text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 placeholder-gray-400 focus:outline-none"
                          placeholder="০ ঘন্টা"
                        />
                      </td>
                      <td className="py-[5px] px-[5px]">
                        <input
                          type="text"
                          className="w-full px-2 py-[6px] text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 placeholder-gray-400 focus:outline-none"
                          placeholder="০০.০০"
                        />
                      </td>
                      <td className="py-[5px] px-[5px]">
                        <input
                          type="text"
                          className="w-full px-2 py-[6px] text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 placeholder-gray-400 focus:outline-none"
                          placeholder="০০ টাকা"
                        />
                      </td>
                    </tr>

                    <tr className="border-b border-gray-300 font-bold bg-gray-300 text-black">
                      <td className="py-[12.5px] px-[5px]"  colSpan={3}>
                        <h4>০০.০০ ৳</h4>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end another benefit section */}

      {/* deduction section start  */}
      <section>
        <div className="container px-5 py-1 mx-auto">
          <div>
            <h3 className="font-extrabold uppercase text-[14px] py-2 px-2 bg-sky-700 text-white shadow-sm">
              বিবিধ কর্তন.
            </h3>
          </div>

          <div className="flex flex-wrap gap-0">
            {/* Column 1 - 30% */}
            <div className="w-full lg:basis-[30%] border border-gray-300">
              <div className="h-full bg-opacity-75 py-4 overflow-hidden text-center px-10 relative flex justify-center items-center">
                <p className="text-center font-bold text-[14px]">বিবিধ</p>
              </div>
            </div>

            {/* Column 2 - 40% */}
            <div className="w-full lg:basis-[40%]">
              <div className="h-full bg-opacity-75 overflow-hidden text-center relative">
                <table className="min-w-full text-sm text-left text-black border border-gray-300">
                  <tbody>
                    <tr className="border-b border-gray-300 ">
                      <th className="font-bold py-[12px] px-[5px]">
                        অনুপস্থিতির জন্য কর্তনঃ
                      </th>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <th className="font-bold py-[12px] px-[5px]">
                        অনুপস্থিতির জন্য কর্তনঃ
                      </th>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <th className="font-bold py-[12px] px-[5px]">
                        ট্যাক্স প্রযোজ্য ক্ষেত্রেঃ
                      </th>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <th className="font-bold py-[12px] px-[5px]">
                        স্ট্যাম্পঃ
                      </th>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <th className="font-bold py-[12px] px-[5px] text-right">
                        মোটঃ
                      </th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Column 3 - 15% */}
            <div className="w-full lg:basis-[15%]">
              <div className="h-full bg-opacity-75 overflow-hidden text-center relative">
                <table className="min-w-full text-sm text-left text-black border border-gray-300">
                  <tbody>
                    <tr className="border-b border-gray-300">
                      <td className="py-[5px] px-[5px]">
                        <input
                          type="text"
                          className="w-full px-2 py-[6px] text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 placeholder-gray-400 focus:outline-none"
                          placeholder="০ দিন"
                        />
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-[22px] px-[5px]"></td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-[22px] px-[5px]"></td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-[22px] px-[5px]"></td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-[22px] px-[5px]"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Column 4 - 15% */}
            <div className="w-full lg:basis-[15%]">
              <div className="h-full bg-opacity-75 overflow-hidden text-center relative">
                <table className="min-w-full text-sm text-left text-black border border-gray-300">
                  <tbody>
                    <tr className="border-b border-gray-300">
                      <td className="py-[5px] px-[5px]">
                        <input
                          type="number"
                          className="w-full px-2 py-[6px] text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 placeholder-gray-400 focus:outline-none"
                          placeholder="০.০০"
                        />
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-[5px] px-[5px]">
                        <input
                          type="number"
                          className="w-full px-2 py-[6px] text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 placeholder-gray-400 focus:outline-none"
                          placeholder="০.০০"
                        />
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-[5px] px-[5px]">
                        <input
                          type="number"
                          className="w-full px-2 py-[6px] text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 placeholder-gray-400 focus:outline-none"
                          placeholder="০.০০"
                        />
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="py-[5px] px-[5px]">
                        <input
                          type="number"
                          className="w-full px-2 py-[6px] text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 placeholder-gray-400 focus:outline-none"
                          placeholder="০.০০"
                        />
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300 font-bold bg-gray-300 text-black">
                      <td className="py-[12.5px] px-[5px]">
                        <h4>০০.০০ ৳</h4>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end deduction section */}

      {/* total amount section   */}
      <section>
        <div className="container px-5 py-1 mx-auto">
          <div>
            <h3 className="font-extrabold uppercase text-[14px] py-2 px-2 bg-sky-700 text-white shadow-sm">
              মোট প্রদেয়.
            </h3>
          </div>

          <div className="flex flex-wrap gap-0">
            <div className="w-full lg:basis-[60%]">
              <div className="h-full bg-opacity-75 overflow-hidden text-center relative">
                <div className="h-full bg-opacity-75 border border-gray-300 overflow-hidden text-center relative flex justify-center items-center">
                  <p className="text-center font-bold text-[18px]">
                    মোট প্রদেয়ঃ
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full lg:basis-[40%]">
              <div className="h-full bg-opacity-75 overflow-hidden text-center relative">
                <table className="min-w-full text-sm text-left text-black border border-gray-300">
                  <tbody>
                    <tr className="border-b border-gray-300 text-[18px] font-bold bg-gray-300 text-center text-black">
                      <td className="py-[12.5px] px-[5px]">
                        <h4>০০.০০ ৳</h4>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end total ammount section */}

      {/* BUTTON SECTION */}
      <div className="container px-5 pt-8 mx-auto">
        <div className="flex justify-end gap-2">
          <button className="text-xl w-32 h-12 rounded bg-sky-500 text-white relative overflow-hidden group z-10 hover:text-white duration-1000">
            <span className="absolute bg-sky-600 w-36 h-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span>
            <span className="absolute bg-sky-800 w-36 h-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>
            প্রিন্ট
          </button>

          <button className="text-xl w-32 h-12 rounded bg-emerald-500 text-white relative overflow-hidden group z-10 hover:text-white duration-1000">
            <span className="absolute bg-emerald-600 w-36 h-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span>
            <span className="absolute bg-emerald-800 w-36 h-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>
            সংরক্ষণ
          </button>
        </div>
      </div>
      {/* END BUTTON SECTION */}
    </div>
  );
};

export default App;
