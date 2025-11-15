import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper.jsx";
import Button from "../components/Button.jsx";
import emailjs from "emailjs-com";
import { useState } from "react";
import toast from "react-hot-toast"; 


const successToast = () =>
  toast.custom((t) => (
    <div
      className={`${
        t.visible ? "animate-enter" : "animate-leave"
      } bg-white dark:bg-dark-surface/80 backdrop-blur-xl border border-black/10 dark:border-white/10 shadow-xl rounded-2xl px-5 py-4 flex items-center gap-3`}
    >
      <div className="text-green-500 text-xl">✔</div>
      <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
        Message sent successfully!
      </div>
    </div>
  ));

const errorToast = () =>
  toast.custom((t) => (
    <div
      className={`${
        t.visible ? "animate-enter" : "animate-leave"
      } bg-white dark:bg-dark-surface/80 backdrop-blur-xl border border-red-300 dark:border-red-600 shadow-xl rounded-2xl px-5 py-4 flex items-center gap-3`}
    >
      <div className="text-red-500 text-xl">✖</div>
      <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
        Failed to send message. Try again!
      </div>
    </div>
  ));

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
  
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          successToast(); // 🔥 Modern popup
          setLoading(false);
          e.target.reset();
        },
        (error) => {
          errorToast(); // 🔥 Error popup
          console.log(error);
          setLoading(false);
        }
      );
  };
  

  return (
    <SectionWrapper
      id="contact"
      eyebrow="Contact"
      title="Let’s build something extraordinary together."
      description="Share a glimpse of your idea, and I’ll help you bring it to life. I typically respond within 24 hours."
    >
      <motion.form
        onSubmit={sendEmail}
        className="mx-auto max-w-3xl space-y-6 rounded-3xl border border-light-foreground/10 bg-light-surface/70 p-8 shadow-lg shadow-light-foreground/10 backdrop-blur-xl transition-colors dark:border-dark-foreground/10 dark:bg-dark-surface/70 dark:shadow-black/30"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="grid gap-6 md:grid-cols-2">
          <label className="flex flex-col gap-2 text-sm font-medium text-light-foreground dark:text-dark-foreground">
            Name
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="rounded-2xl border border-light-foreground/10 bg-light-background/80 px-4 py-3 text-base text-light-foreground transition-colors duration-300 placeholder:text-light-subtle/70 focus:border-light-accent focus:outline-none focus:ring-2 focus:ring-light-accent/40 dark:border-dark-foreground/10 dark:bg-dark-background/80 dark:text-dark-foreground dark:placeholder:text-dark-subtle/70 dark:focus:border-dark-accent dark:focus:ring-dark-accent/40"
            />
          </label>

          <label className="flex flex-col gap-2 text-sm font-medium text-light-foreground dark:text-dark-foreground">
            Email
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              required
              className="rounded-2xl border border-light-foreground/10 bg-light-background/80 px-4 py-3 text-base text-light-foreground transition-colors duration-300 placeholder:text-light-subtle/70 focus:border-light-accent focus:outline-none focus:ring-2 focus:ring-light-accent/40 dark:border-dark-foreground/10 dark:bg-dark-background/80 dark:text-dark-foreground dark:placeholder:text-dark-subtle/70 dark:focus:border-dark-accent dark:focus:ring-dark-accent/40"
            />
          </label>
        </div>

        <label className="flex flex-col gap-2 text-sm font-medium text-light-foreground dark:text-dark-foreground">
          Message
          <textarea
            rows={5}
            name="message"
            placeholder="Share your thoughts — I’ll get back to you soon."
            required
            className="rounded-2xl border border-light-foreground/10 bg-light-background/80 px-4 py-3 text-base text-light-foreground transition-colors duration-300 placeholder:text-light-subtle/70 focus:border-light-accent focus:outline-none focus:ring-2 focus:ring-light-accent/40 dark:border-dark-foreground/10 dark:bg-dark-background/80 dark:text-dark-foreground dark:placeholder:text-dark-subtle/70 dark:focus:border-dark-accent dark:focus:ring-dark-accent/40"
          />
        </label>

        <div className="pt-2">
          <Button
            type="submit"
            variant="primary"
            className="w-full sm:w-auto"
          >
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </div>
      </motion.form>
    </SectionWrapper>
  );
};

export default Contact;
