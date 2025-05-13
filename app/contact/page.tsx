"use client";

import Footer from "@/components/home/Footer";
import { Clock, Map, PhoneCall } from "lucide-react";
import { LineIcon } from "react-share";
import { useState } from "react";

function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", text: "" });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus("Email sent successfully!");
      } else {
        setStatus(`Error: ${data.message}`);
      }
    } catch (error) {
      console.log(error);
      setStatus("Failed to send email.");
    }
  };

  return (
    <div>
      <section className="mb-32">
        <div
          id="map"
          className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30989.781240210494!2d100.49270781424475!3d13.85567943541312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29b6bae759d47%3A0xa96cffdce5a933fa!2z4LmA4LiX4Lio4Lia4Liy4Lil4LiZ4LiE4Lij4LiZ4LiZ4LiX4Lia4Li44Lij4Li1IOC4reC4s-C5gOC4oOC4reC5gOC4oeC4t-C4reC4h-C4meC4meC4l-C4muC4uOC4o-C4tSDguJnguJnguJfguJrguLjguKPguLU!5e0!3m2!1sth!2sth!4v1747098666670!5m2!1sth!2sth"
            width="100%"
            height="480"
            loading="lazy"
          ></iframe>
        </div>
        <div className="container px-6 md:px-12">
          <div className="block rounded-lg  md:py-16 md:px-12 -mt-[60px] backdrop-blur-[30px] border border-gray-300">
            <div className="flex flex-wrap">
              <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
                <form onSubmit={handleSubmit}>
                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Name"
                      className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                    />
                  </div>
                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Email"
                      className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                      id="exampleInput91"
                    />
                  </div>
                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <textarea
                      name="text"
                      value={formData.text}
                      onChange={handleChange}
                      required
                      placeholder="Message"
                      className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                      id="exampleFormControlTextarea1"
                      rows={3}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="mb-6 w-full rounded bg-primary text-white px-6 py-3  font-bold uppercase leading-normal lg:mb-0 hover:cursor-pointer"
                  >
                    Send Email
                  </button>
                </form>

                {status && <p className="mt-4 text-primary">{status}</p>}
              </div>
              <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
                <div className="flex flex-wrap">
                  <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                    <div className="flex items-start">
                      <div className="shrink-0">
                        <div className="inline-block rounded-md bg-primary p-4 text-white">
                          <PhoneCall className="size-5" />
                        </div>
                      </div>
                      <div className="ml-6 grow">
                        <p className="mb-2 font-bold ">Support</p>
                        <p className="text-sm opacity-60">support@nysdev.com</p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                    <div className="flex items-start">
                      <div className="srink-0">
                        <div className="inline-block rounded-md bg-primary p-4 text-white">
                          <Map className="size-5" />
                        </div>
                      </div>
                      <div className="ml-6 grow">
                        <p className="mb-2 font-bold">Address</p>
                        <p className="text-sm opacity-60">
                          123 test Rd., <br />
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:mb-12 lg:w-full lg:px-6 xl:w-6/12">
                    <div className="align-start flex">
                      <div className="shrink-0">
                        <div className="inline-block rounded-md bg-primary p-3.5 text-primary">
                          <LineIcon className="size-6" />
                        </div>
                      </div>
                      <div className="ml-6 grow">
                        <p className="mb-2 font-bold ">Line ID</p>
                        <p className="text-neutral-500">@testID</p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:mb-12 xl:w-6/12">
                    <div className="align-start flex">
                      <div className="shrink-0">
                        <div className="inline-block rounded-md bg-primary p-4 text-white">
                          <Clock className="size-5" />
                        </div>
                      </div>
                      <div className="ml-6 grow">
                        <p className="mb-2 font-bold ">Business Hours</p>
                        <p className="text-neutral-500">9 AM to 6 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
export default ContactPage;
