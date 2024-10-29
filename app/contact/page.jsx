"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import { useState } from "react";

// Validation schema with Yup
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup.string().notRequired(),
  subject: yup.string().required("Subject is required"),
  message: yup.string().required("Message is required"),
});

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setErrorMessage("");
      } else {
        const errorData = await response.json();
        console.error("Error sending message:", errorData.error);
        setErrorMessage("Failed to send message. Please try again.");
        setSubmitSuccess(false);
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("An unexpected error occurred. Please try again.");
      setSubmitSuccess(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.2, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-6">
          {/* Form */}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4 p-8 bg-transparent rounded-xl"
            >
              <h3 className="text-3xl text-accent">Let's connect</h3>
              <p className="text-white/60 text-sm">
                I'm excited to hear from you! Whether you have questions,
                feedback, or just want to chat, feel free to reach out.
              </p>
              {/* Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <Input type="text" placeholder="Name" {...register("name")} />
                  {errors.name && (
                    <p className="text-red-500 text-xs">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col">
                  <Input
                    type="email"
                    placeholder="Email"
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col">
                  <Input
                    type="text"
                    placeholder="Phone (Optional)"
                    {...register("phone")}
                  />
                </div>
                <div className="flex flex-col">
                  <Input
                    type="text"
                    placeholder="Subject"
                    {...register("subject")}
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-xs">
                      {errors.subject.message}
                    </p>
                  )}
                </div>
              </div>
              {/* Textarea */}
              <div className="flex flex-col">
                <Textarea
                  className="h-[150px]"
                  placeholder="Type your message here"
                  {...register("message")}
                />
                {errors.message && (
                  <p className="text-red-500 text-xs">
                    {errors.message.message}
                  </p>
                )}
              </div>
              {/* Button */}
              <motion.div className="flex justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring" }}
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="flex items-center justify-center py-3 gap-2"
                  >
                    <FaPaperPlane className="text-xl" />
                    <span>Send message</span>
                  </Button>
                </motion.div>
              </motion.div>
              {submitSuccess && (
                <p className="text-green-500 mt-2">
                  Message sent successfully!
                </p>
              )}
              {errorMessage && (
                <p className="text-red-500 mt-2">{errorMessage}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
