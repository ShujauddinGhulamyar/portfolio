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
import { useTranslations } from "next-intl";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .max(50, "Name must be at most 50 characters")
    .matches(
      /^[A-Za-z\s]+$/,
      "Name must not contain numbers or special characters"
    ),
  email: yup
    .string()
    .email("Invalid email")
    .required("Email is required")
    .max(254, "Email must be at most 254 characters")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Email must be a valid format"
    ),
  message: yup
    .string()
    .required("Message is required")
    .max(500, "Message must be at most 500 characters"),
});

const Contact = () => {
  const t = useTranslations("Contact");
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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
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
        setErrorMessage(t("error_message"));
        setSubmitSuccess(false);
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage(t("unexpected_error"));
      setSubmitSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="h-full py-10"
    >
      <div className="container mx-auto h-full flex flex-col">
        <motion.div
          className="text-center mb-8"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.1,
            duration: 0.4,
            type: "spring",
            stiffness: 100,
            damping: 25,
          }}
        >
          <h3 className="text-4xl font-semibold text-accent">{t("title")}</h3>
          <p className="mt-4 text-lg max-w-3xl mx-auto text-center px-4">
            {t("description")}
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col xl:flex-row justify-center items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.4,
            duration: 0.6,
            ease: "easeOut",
            type: "spring",
            bounce: 0.3,
          }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-6 p-8 bg-transparent rounded-xl flex-1 border-white/10 max-w-[750px]"
          >
            <motion.div
              className="grid grid-cols-1 xl:grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.4,
                duration: 0.6,
                type: "spring",
                stiffness: 100,
                damping: 20,
              }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className="flex flex-col">
                <label htmlFor="name" className="sr-only">
                  {t("name")}
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder={t("name")}
                  maxLength={50}
                  className="h-12 text-lg"
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
                  {t("email")}
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder={t("email")}
                  maxLength={254}
                  className="h-12 text-lg"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-2">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.6,
                duration: 0.6,
                type: "spring",
                stiffness: 100,
                damping: 20,
              }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <label htmlFor="message" className="sr-only">
                {t("message")}
              </label>
              <Textarea
                id="message"
                className="h-48 text-lg"
                placeholder={t("message")}
                maxLength={500}
                {...register("message")}
              />
              {errors.message && (
                <p className="text-red-500 text-xs mt-2">
                  {errors.message.message}
                </p>
              )}
            </motion.div>

            <motion.div className="flex justify-center mt-6">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring" }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="flex items-center justify-center gap-2"
                  disabled={isSubmitting}
                >
                  <FaPaperPlane className="text-xl" />
                  <span>{isSubmitting ? t("sending") : t("send_message")}</span>
                </Button>
              </motion.div>
            </motion.div>

            {submitSuccess && (
              <motion.p
                className="text-green-500 mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                {t("message_sent")}
              </motion.p>
            )}
            {errorMessage && (
              <motion.p
                className="text-red-500 mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                {errorMessage}
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
