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
  const t = useTranslations("Contact"); // Utilisation de useTranslations pour la section Contact
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
  const [isSubmitting, setIsSubmitting] = useState(false); // État pour gérer la soumission

  const onSubmit = async (data) => {
    setIsSubmitting(true); // Démarre la soumission
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
      setIsSubmitting(false); // Arrête la soumission
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
            {t("title")}
          </h3>
          <p className="text-white">{t("description")}</p>
        </motion.div>

        <motion.div className="flex flex-col xl:flex-row gap-6">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 p-8 bg-transparent rounded-xl flex-1"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label htmlFor="name" className="sr-only">
                  {t("name")}
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder={t("name")}
                  maxLength={50}
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
                {t("message")}
              </label>
              <Textarea
                id="message"
                className="h-[150px]"
                placeholder={t("message")}
                maxLength={500}
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
                  disabled={isSubmitting} // Désactiver le bouton si en soumission
                >
                  <FaPaperPlane className="text-xl" />
                  <span>{isSubmitting ? t("sending") : t("send_message")}</span>
                </Button>
              </motion.div>
            </motion.div>
            {submitSuccess && (
              <p className="text-green-500 mt-2">{t("message_sent")}</p>
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
