import React from "react";
import ImageContainer from "@/components/common/ImageContainer";
import Image from "next/image";
import Banner from "@/components/common/banner";
export default function PricePage() {
  return (
    <>
      <div className="relative  lg:justify-center">
        <Banner
          title="Price"
          description="Is mission has always been to organize the world's information and make it universally accessible and useful."
        />
        <div className="bg-gray h-screen py-10 flex justify-center">
          <div className="w-[848px] bg-white rounded-xl border border-brown  ">
            <div className=" ">
              <div className="px-20 py-5">
                <h2 className="uppercase font-semibold">Type</h2>
                <div className="flex justify-between">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      id="exampleRadios1"
                      value="option1"
                    />
                    <label class="form-check-label" for="exampleRadios1">
                      Front-end
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      value=""
                      id="defaultCheck1"
                    />
                    <label class="form-check-label" for="defaultCheck1">
                      Back-end
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="html"
                      name="fav_language"
                      value="Mobile deveopment"
                    />
                    <label for="html">Mobile deveopment</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="html"
                      name="fav_language"
                      value="Project outsourcing"
                    />
                    <label for="html">Project outsourcing</label>
                  </div>
                </div>
              </div>
              <div className="px-20 py-5">
                <label className="mb-4 text-lg font-semibold ">Title</label>
                <div className="flex items-center  w-[100%] h-12   overflow-hidden border rounded-lg border-brown">
                  <input
                    type="text"
                    className="flex-1 px-4 outline-none placeholder:text-base-200"
                    placeholder="Scarlett"
                  />
                </div>
              </div>
              <div className="px-20 py-5">
                <label className="mb-4 text-lg font-semibold ">Name</label>
                <div className="flex items-center  w-[100%] h-12   overflow-hidden border rounded-lg border-brown">
                  <input
                    type="text"
                    className="flex-1 px-4 outline-none placeholder:text-base-200"
                    placeholder="Johansson"
                  />
                </div>
              </div>
              <div className="px-20 py-5">
                <label className="mb-4 text-lg font-semibold ">Email</label>
                <div className="flex items-center  w-[100%] h-12   overflow-hidden border rounded-lg border-brown">
                  <input
                    type="text"
                    className="flex-1 px-4 outline-none placeholder:text-base-200"
                    placeholder="blackwidow@ithorse.com"
                  />
                </div>
              </div>
              <div className="px-20 py-5">
                <label className="mb-4 text-lg font-semibold ">
                  Phone number
                </label>
                <div className="flex items-center  w-[100%] h-12   overflow-hidden border rounded-lg border-brown">
                  <input
                    type="text"
                    className="flex-1 px-4 outline-none placeholder:text-base-200"
                    placeholder="+976 95398822"
                  />
                </div>
              </div>
              <div className="justify-content-center">
                <div className="px-20 py-5">
                  <label className="mb-4 text-lg font-semibold ">
                    Inquiry details
                  </label>
                  <div className=" w-[100%]  h-fit  overflow-hidden border rounded-lg border-brown">
                    <textarea
                      type="text"
                      className="flex justify-center w-full min-h-[24px] h-32 px-4 outline-none placeholder:text-base-200"
                      placeholder="How can we help you?"
                    />
                  </div>
                </div>
              </div>
              <div className="px-20 ">
                <input type="checkbox" id="vehicle1" value="Bike" />
                <label for="">
                  {" "}
                  Agree to collect and use personal information.
                </label>
              </div>
              <div className="flex justify-center py-5">
                <button className="py-2 text-white rounded bg-blue px-14">
                  Send request
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
