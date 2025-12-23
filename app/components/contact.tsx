import DividerQuen from "./divider-quen";
import ContactForm from "./contact-form";

const Contact = () => {
  return (
    <>
      <DividerQuen />
      <section id="contact">
        <div className="container">
          <div className="flex flex-col justify-center items-center">
            <h1 className="flex mb-10 text-white gap-5 text-4xl sm:text-6xl font-bold leading-tight ">
              Entre em
              <span className="text-primary">contato</span>
            </h1>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
