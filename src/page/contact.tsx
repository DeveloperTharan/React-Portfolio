import { useForm } from "react-hook-form";

import {
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  Input,
  Textarea,
  Image,
} from "@nextui-org/react";

import { IoIosMail } from "react-icons/io";
import { BsChatRightText } from "react-icons/bs";
import { IoPersonOutline, IoPersonCircleOutline } from "react-icons/io5";

export const Contact = ({ children }: { children: React.ReactNode }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);

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
                Feel free to contact.
              </ModalHeader>
              <ModalBody>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col gap-4"
                >
                  <Input
                    label="Email"
                    placeholder="xyz"
                    labelPlacement="outside"
                    radius="sm"
                    startContent={
                      <IoIosMail className="text-xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    endContent={
                      <div className="pointer-events-none flex items-center">
                        <span className="text-default-400 text-small">
                          @gmail.com
                        </span>
                      </div>
                    }
                    {...register("Email", {
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
                    {...register("Name", { required: true, min: 3 })}
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
                    {...register("Message", {
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
                      color="success"
                      type="submit"
                      disabled={!isValid || isSubmitting}
                      endContent={
                        isValid && (
                          <Image
                            src="/email-send.gif"
                            alt="gif"
                            className="w-5 h-5 mix-blend-color-burn"
                          />
                        )
                      }
                    >
                      send
                    </Button>
                  </div>
                </form>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
