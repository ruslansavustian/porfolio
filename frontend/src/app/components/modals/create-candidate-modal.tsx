import React, { useCallback, useState } from "react";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from "@heroui/react";
import { Candidate } from "@/types";
import { useApp } from "@/contexts/AppProvider";

interface CreateCandidateModalProps {
  isOpen: boolean;
  onClose?: () => void;
}

export const CreateCandidateModal = ({
  isOpen,
  onClose,
}: CreateCandidateModalProps) => {
  const { createCandidate } = useApp();
  const [formData, setFormData] = useState<Candidate>({
    firstName: "",
    lastName: "",
    birthDate: "",
    workExperience: "",
    skills: "",
  });
  const handleOpenChange = (open: boolean) => {
    if (!open && onClose) {
      onClose();
    }
  };
  const handleSubmit = useCallback(async () => {
    await createCandidate(formData);
    onClose?.();
  }, [formData, createCandidate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={handleOpenChange}>
      <ModalContent>
        <ModalHeader>Create Candidate</ModalHeader>
        <ModalBody>
          <Input
            value={formData?.firstName}
            onChange={handleChange}
            id="firstName"
            placeholder="Name"
            label="First Name"
          />
          <Input
            value={formData?.lastName}
            onChange={handleChange}
            id="lastName"
            placeholder="Email"
            label="Last Name"
          />
          <Input
            value={formData?.birthDate}
            onChange={handleChange}
            id="birthDate"
            placeholder="Phone"
            label="Birth Date"
          />
          <Input
            value={formData?.workExperience}
            onChange={handleChange}
            id="workExperience"
            placeholder="Address"
            label="Work Experience"
          />
          <Input
            value={formData?.skills}
            onChange={handleChange}
            id="skills"
            placeholder="City"
            label="Skills"
          />
        </ModalBody>
        <ModalFooter>
          <Button color="danger" variant="light" onPress={onClose}>
            Cancel
          </Button>
          <Button color="primary" onPress={handleSubmit}>
            Create
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
