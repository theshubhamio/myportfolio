import React, { useEffect } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from "yup";
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const ContactMeSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "",
      comment: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email address").required("Email is required"),
      type: Yup.string().required("Please select a type of enquiry"),
      comment: Yup.string().required("Message is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const result = await submit(values);
        if (result?.type === "success") {
          onOpen({
            type: "success",
            message: `Thank you, ${values.firstName}. Your message has been sent successfully!`,
          });
          resetForm();
        } else {
          onOpen({
            type: "error",
            message: result?.message || "An unknown error occurred.",
          });
        }
      } catch (error) {
        console.error("Error in submit:", error);
        onOpen({
          type: "error",
          message: "Submission failed. Please try again later.",
        });
      }
    },
  });

  useEffect(() => {
    if (response && response.type !== "success") {
      console.log("UseEffect Responce: ")
      console.log(response)
      onOpen(response); // Only trigger onOpen if response is valid and doesn't trigger success again
      if (response.type === "success") {
        formik.resetForm();
      }
    }
  }, [response, onOpen, formik]);
  

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#0B0C10"
      id="contactme-section"
      width="100%"
    >
      <VStack w="100%" alignItems="center" margin={"5px"}>
        <Heading as="h1" size="2xl" textAlign="center" color="#D6D8DA" m={10}>
          Contact Me
        </Heading>
        <Box w={{ base: "90%", md: "70%", lg: "50%" }}>
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={8}>
              <FormControl isInvalid={formik.touched.firstName && !!formik.errors.firstName}>
                <FormLabel color="#D6D8DA" htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  style={{
                    borderWidth: "2px",
                    borderColor: "#52575C",
                    ":focus": {
                      borderColor: "#00BCD4",
                    },
                  }}
                  {...formik.getFieldProps("firstName")}
                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.touched.email && !!formik.errors.email}>
                <FormLabel color="#D6D8DA" htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  style={{
                    borderWidth: "2px",
                    borderColor: "#52575C",
                    ":focus": {
                      borderColor: "#00BCD4",
                    },
                  }}
                  {...formik.getFieldProps("email")}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.touched.type && !!formik.errors.type}>
                <FormLabel color="#D6D8DA" htmlFor="type">Type of enquiry</FormLabel>
                <Select id="type"
                  name="type"
                  style={{
                    borderWidth: "2px",
                    borderColor: "#52575C",
                    ":focus": {
                      borderColor: "#00BCD4",
                    },
                  }}
                  {...formik.getFieldProps("type")}>
                  <option color="#D6D8DA" value="">Select an option</option>
                  <option color="#D6D8DA" value="hireMe">Freelance project proposal</option>
                  <option color="#D6D8DA" value="openSource">Open source consultancy session</option>
                  <option color="#D6D8DA" value="other">Other</option>
                </Select>
                <FormErrorMessage>{formik.errors.type}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.touched.comment && !!formik.errors.comment}>
                <FormLabel color="#D6D8DA" htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  style={{
                    borderWidth: "2px",
                    borderColor: "#52575C",
                    ":focus": {
                      borderColor: "#00BCD4",
                    },
                  }}
                  {...formik.getFieldProps("comment")}
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>
              <Button
                type="submit"
                backgroundColor="#52575C"
                color="white"
                width="full"
                _hover={{ backgroundColor: "#00BCD4" }}
                isLoading={isLoading}
              >
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default ContactMeSection;
