import React, { useRef , useState} from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      toast.error("Please fill in all fields");
      return;
    }

    emailjs
      .sendForm("service_0div1a9", "template_68u8dds", form.current, {
        publicKey: "Vt6U7PEVEvRPX3M1i",
      })
      .then(
        () => {
          setName("");
          setEmail("");
          setMessage("");
          e.target.reset();
          toast.success("Message sent!");
          
        },
        (error) => {
          toast.error("Message not sent");
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="contact" className="pt-32 min-h-screen">
      <div className="mb-20">
        <h1 className="text-sectionfcolor font-bold text-center text-6xl sm:text-8xl md:text-[120px] px-2.5">
          CONTACT
        </h1>
      </div>
      <div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col justify-center items-center gap-4"
        >
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="from_name"
            placeholder="Your Name*"
            className="bg-[#0E0F26] border-0 w-80 sm:w-1/2 py-5 px-5 rounded-lg text-white"
          />

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            placeholder="E-Mail Address*"
            className="bg-[#0E0F26] border-0 w-80 sm:w-1/2 py-5 px-5 rounded-lg text-white"
          />

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            name="message"
            placeholder="Message*"
            className="bg-[#0E0F26] border-0 w-80 sm:w-1/2 h-52 py-5 px-5 rounded-lg text-white"
          />
          <input
            type="submit"
            value="Send"
            className="px-12 py-3 rounded-md bg-[#3C54DB] active:bg-[#3B52C3] text-white mt-10 hover:bg-primaryText"
          />
          <Toaster/>
        </form>
      </div>
    </section>
  );
};

export default Contact;
