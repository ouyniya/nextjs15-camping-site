import { SubmitButton } from "@/components/form/Buttons";
import FormInput from "@/components/form/FormInput";
import FormContainer from "@/components/form/FormContainer";
import { CreateProfileAction } from "@/actions/actions";

const CreateProfile = () => {
  return (
    <section className="flex flex-col gap-3">
      <h1 className="text-xl font-semibold">New User</h1>
      <div>
        <FormContainer
          action={CreateProfileAction}
          className="flex flex-col gap-3"
        >
          <div className="flex flex-col gap-3 px-5 py-7 border-1 rounded-xl">
            <FormInput
              name="firstName"
              label="First Name"
              type="text"
              defaultValue=""
              placeHolder="First Name"
            />
            <FormInput
              name="lastName"
              label="Last Name"
              type="text"
              defaultValue=""
              placeHolder="Last Name"
            />
            <FormInput
              name="username"
              label="Username"
              type="text"
              defaultValue=""
              placeHolder="Username"
            />
            <SubmitButton
              text="Create Profile"
              size="lg"
              className="hover:cursor-pointer font-bold"
            />
          </div>
        </FormContainer>
      </div>
    </section>
  );
};
export default CreateProfile;
