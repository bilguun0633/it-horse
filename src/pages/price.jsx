import React from "react";

import Image from "next/legacy/image";

import ImageContainer from "@/components/common/ImageContainer";
import InputCheckbox from "@/components/common/InputCheckbox";
import InputRadio from "@/components/common/InputRadio";
import Banner from "@/components/common/banner";

export default function PricePage() {
  return (
    <>
      <div className="relative lg:justify-center">
        <Banner
          title="Price"
          description="Is mission has always been to organize the world's information and make it universally accessible and useful."
        />
        <div className="flex justify-center  py-10 bg-gray">
          <div className="w-[848px] bg-white rounded-xl border border-brown  ">
            <div className="">
              <div className="px-20 py-5">
                <h2 className="font-semibold uppercase">Type</h2>
                <div className="flex gap-4">
                  <InputRadio name="type" label="Front-End" />
                  <InputRadio name="type" label="Back-End" />
                  <InputRadio name="type" label="Mobile development" />
                  <InputRadio name="type" label="Project outsourcing" />
                </div>
              </div>
              <div className="px-20 py-5">
                <label className="mb-4 text-lg font-semibold ">Title</label>
                <div className="flex items-center mt-4 w-[100%] h-12   overflow-hidden border rounded-lg border-brown">
                  <input
                    type="text"
                    className="flex-1 px-4 outline-none placeholder:text-base-200"
                    placeholder="Scarlett"
                  />
                </div>
              </div>
              <div className="px-20 py-5">
                <label className="mb-4 text-lg font-semibold">Name</label>
                <div className="flex items-center mt-4  w-[100%] h-12   overflow-hidden border rounded-lg border-brown">
                  <input
                    type="text"
                    className="flex-1 px-4 outline-none placeholder:text-base-200"
                    placeholder="Johansson"
                  />
                </div>
              </div>
              <div className="px-20 py-5">
                <label className="mb-4 text-lg font-semibold ">Email</label>
                <div className="flex items-center mt-4 w-[100%] h-12   overflow-hidden border rounded-lg border-brown">
                  <input
                    type="text"
                    className="flex-1 px-4 outline-none placeholder:text-base-200"
                    placeholder="blackwidow@ithorse.com"
                  />
                </div>
              </div>
              <div className="px-20 py-5">
                <label className="mb-4 text-lg font-semibold ">Phone number</label>
                <div className="flex mt-4 items-center  w-[100%] h-12   overflow-hidden border rounded-lg border-brown">
                  <input
                    type="text"
                    className="flex-1 px-4 outline-none placeholder:text-base-200"
                    placeholder="+976 95398822"
                  />
                </div>
              </div>
              <div className="justify-content-center">
                <div className="px-20 py-5">
                  <label className=" text-lg font-semibold  ">Inquiry details</label>
                  <div className=" mt-4 w-[100%]  h-fit  overflow-hidden border rounded-lg border-brown">
                    <textarea
                      type="text"
                      className="flex justify-center w-full min-h-[24px] h-32 px-4 py-2 outline-none placeholder:text-base-200"
                      placeholder="How can we help you?"
                    />
                  </div>
                </div>
                <div className="px-20">
                  <InputCheckbox label="Agree to collect and use personal information." />
                </div>
              </div>
              <div className="flex justify-center py-5">
                <button className="py-2 text-white rounded bg-blue px-14">Send request</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
