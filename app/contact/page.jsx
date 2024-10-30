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
  name: yup
    .string()
    .required("Name is required")
    .max(50, "Name must be at most 50 characters"),
  email: yup
    .string()
    .email("Invalid email")
    .required("Email is required")
    .max(254, "Email must be at most 254 characters"),
  message: yup
    .string()
    .required("Message is required")
    .max(500, "Message must be at most 500 characters"),
});

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
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
        reset();
      } else {
        const errorData = await response.json();
        console.error("Error sending message:", errorData.error);
        setErrorMessage("Failed to send message. Please try again.");
        setSubmitSuccess(false);
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("An unexpected error occurred. Please try again later.");
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
      className="h-full"
    >
      <div className="container mx-auto h-full flex flex-col justify-center">
        <motion.div
          className="flex-1 text-center mb-8"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          <h3 className="text-4xl font-semibold text-accent mb-4">
            Let&apos;s connect
          </h3>
          <p className="text-white">
            I&apos;m excited to hear from you! Whether you have questions,
            feedback, or just want to chat, feel free to reach out.
          </p>
        </motion.div>

        <motion.div className="flex flex-col xl:flex-row gap-6">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 p-8 bg-transparent rounded-xl flex-1"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Name"
                  maxLength={50} // Limite le nom à 50 caractères
                  {...register("name")}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-2">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Email"
                  maxLength={254} // Limite l'email à 254 caractères
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-2">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <Textarea
                id="message"
                className="h-[150px]"
                placeholder="Type your message here (e.g., question, feedback)"
                maxLength={500} // Limite le message à 500 caractères
                {...register("message")}
              />
              {errors.message && (
                <p className="text-red-500 text-xs mt-2">
                  {errors.message.message}
                </p>
              )}
            </div>
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
              <p className="text-green-500 mt-2">Message sent successfully!</p>
            )}
            {errorMessage && (
              <p className="text-red-500 mt-2">{errorMessage}</p>
            )}
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
