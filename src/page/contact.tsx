import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

import {
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  Input,
  Textarea,
} from "@nextui-org/react";

import { IoIosMail } from "react-icons/io";
import { BsChatRightText } from "react-icons/bs";
import { IoPersonOutline, IoPersonCircleOutline } from "react-icons/io5";
import { useRef } from "react";
import { toast } from "sonner";

export const Contact = ({ children }: { children: React.ReactNode }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm();

  const form = useRef(null);

  const onSubmit = () => {
    const SERVICE_ID = "service_bsm3gmn";
    const TEMPLATE_ID = "template_7cbjxck";
    const PUBLIC_KEY = "xC-f-ISh8dASjlzQu";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current!, PUBLIC_KEY).then(
      (response) => {
        console.log("sended", response);
        toast.success("send sucessfully");
        onOpenChange();
      },
      (error) => {
        console.log("error not sended", error);
        toast.error("error! try again...");
      }
    );
  };

  return (
    <>
      <Button
        size="sm"
        variant="solid"
        color="success"
        endContent={<IoPersonOutline />}
        onPress={onOpen}
      >
        {children}
      </Button>
      <Modal
        backdrop="blur"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={false}
        className="bg-[#1c1b23]"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Write Me a Message..!
              </ModalHeader>
              <ModalBody>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col gap-4"
                  ref={form}
                >
                  <Input
                    label="Email"
                    placeholder="xyz"
                    labelPlacement="outside"
                    radius="sm"
                    startContent={
                      <IoIosMail className="text-xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    {...register("user_email", {
                      required: true,
                      pattern: /@gmail.com/i,
                    })}
                    errorMessage={
                      errors.Email && "Please enter a valid email address"
                    }
                    autoComplete="off"
                  />
                  <Input
                    label="Name"
                    placeholder="John"
                    labelPlacement="outside"
                    radius="sm"
                    startContent={
                      <IoPersonCircleOutline className="text-xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    {...register("user_name", { required: true, min: 3 })}
                    errorMessage={errors.Name && "name is required"}
                    autoComplete="off"
                  />
                  <Textarea
                    label="Message"
                    labelPlacement="outside"
                    placeholder="Enter your Message"
                    className="col-span-12 md:col-span-6 mb-6 md:mb-0"
                    startContent={
                      <BsChatRightText className="text-sm text-default-400 pointer-events-none flex-shrink-0 mt-1" />
                    }
                    {...register("message", {
                      required: true,
                      max: 1000,
                      min: 10,
                      maxLength: 1000,
                    })}
                    errorMessage={errors.Message && "message is required"}
                    autoComplete="off"
                  />
                  <div className="flex flex-row gap-x-2 justify-end items-center">
                    <Button color="danger" variant="light" onPress={onClose}>
                      Close
                    </Button>
                    <Button
                      color={!isValid || isSubmitting ? "default" : "success"}
                      type="submit"
                      disabled={!isValid || isSubmitting}
                      value="Send"
                    >
                      send
                    </Button>
                  </div>
                </form>
                <div className="my-5 h-[1px] w-full bg-default-200 relative">
                  <div className="absolute -top-3 left-1/2 w-6 h-fit bg-[#1c1b23] text-center">
                    or
                  </div>
                </div>
                <div className="flex flex-row gap-x-2 justify-center items-center mb-6">
                  <IoIosMail className="text-xl text-default-500 pointer-events-none flex-shrink-0" />
                  <span className="text-sm text-default-500">
                    tharan130723@gmail.com
                  </span>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
