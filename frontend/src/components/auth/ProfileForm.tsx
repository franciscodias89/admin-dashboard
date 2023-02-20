import {
  Button,
  Center,
  FormErrorMessage,
  Heading,
  Input,
  useToast
} from "@chakra-ui/react";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  Form,
  FormFooter,
  FormHeader,
  FormLine,
  FormLineField,
  FormLineLabel
} from "../shared/Form";
import { useUpdateProfile } from "../../hooks/auth/useUpdateProfile";
import { useAuth } from "../../providers/AuthProvider";
import { useProfile } from "../../hooks/auth/useProfile";
import { Profile } from "../../types/profile";
import CustomAvatar from "../shared/CustomAvatar";

type FormValues = {
  username: string;
  company: string;
  website: string;
  id: number;
  avatarUrl: string
};

function ProfileForm() {
  const toast = useToast();
  const updateProfile = useUpdateProfile();
  const { session } = useAuth();
  const { data: profile } = useProfile(session?.user.email);

  const size = '96px';
  const color = 'teal';

  const {
    handleSubmit,
    register,
    setValue,
    reset,
    formState: { errors }
  } = useForm<FormValues>();

  useEffect(() => {
    if (profile) setValue('id', profile.id)
  }, [profile, setValue]);

  useEffect(() => {
    reset(profile);
  }, [profile, reset]);

  const handleUpdateProfile: SubmitHandler<FormValues> = (values) => {
    updateProfile.mutate(values as Profile, {
      onSuccess: () => {
        toast({
          description: "Your profile has been updated",
          status: "success"
        });
      },
      onError: () => {
        toast({
          description:
            "Something went wrong! If the problem persists, contact us!",
          status: "error"
        });
      }
    });
  };

  function handleAvatar(url: string) {
    setValue('avatarUrl', url)
  }

  return (
    <Form onSubmit={handleSubmit(handleUpdateProfile)}>
      <FormHeader>
        <Heading fontSize="lg" fontWeight="semibold">
          Edit profile
        </Heading>
      </FormHeader>
      <FormLine id="userName">
        <FormLineLabel>User Icon</FormLineLabel>
        <CustomAvatar size={size} color={color} url={profile?.avatarUrl} onUpload={(url: string) => {
          handleAvatar(url);
        }} />
        <Center>
          <Button><label className="button primary block" htmlFor="avatarUrl">
            {`Upload`}
          </label></Button>
        </Center>
      </FormLine>
      <FormLine isInvalid={!!errors.username}>
        <FormLineLabel htmlFor="username">Username</FormLineLabel>
        <FormLineField>
          <Input
            id="username"
            placeholder="Username"
            {...register("username", {
              required: "This is required"
            })}
          />
          <FormErrorMessage>
            {errors.username && errors.username.message}
          </FormErrorMessage>
        </FormLineField>
      </FormLine>
      <FormLine isInvalid={!!errors.website}>
        <FormLineLabel htmlFor="website">Website</FormLineLabel>
        <FormLineField>
          <Input
            id="website"
            placeholder="Website"
            {...register("website", {
              required: "This is required"
            })}
          />
          <FormErrorMessage>
            {errors.website && errors.website.message}
          </FormErrorMessage>
        </FormLineField>
      </FormLine>
      <FormLine isInvalid={!!errors.company}>
        <FormLineLabel htmlFor="company">Company</FormLineLabel>
        <FormLineField>
          <Input
            id="company"
            placeholder="Company"
            {...register("company", {
              required: "This is required"
            })}
          />
          <FormErrorMessage>
            {errors.company && errors.company.message}
          </FormErrorMessage>
        </FormLineField>
      </FormLine>
      <FormFooter>
        <Button
          colorScheme="blue"
          isLoading={updateProfile.isLoading}
          type="submit"
        >
          Save
        </Button>
      </FormFooter>
    </Form>
  );
}

export { ProfileForm };
