import { SubmitButton } from "@/components/form/Buttons";
import FormInput from "@/components/form/FormInput";
import FormContainer from "@/components/form/FormContainer";
import { CreateLandmarkAction } from "@/actions/actions";
import { currentUser } from "@clerk/nextjs/server";

export default async function CreateProfile() {
  const user = await currentUser();

  return (
    <section className="flex flex-col gap-3">
      <h1 className="text-xl font-semibold">Create Landmark</h1>
      <div>
        <FormContainer
          action={CreateLandmarkAction}
          className="flex flex-col gap-3"
        >
          <div className="flex flex-col gap-3 px-5 py-7 border-1 rounded-xl">
            <FormInput
              name="name"
              label="Landmark Name"
              type="text"
              defaultValue=""
              placeHolder="Landmark Name"
            />

            <SubmitButton
              text="Create Landmark"
              size="lg"
              className="hover:cursor-pointer font-bold"
            />
          </div>
        </FormContainer>
      </div>
    </section>
  );
}
