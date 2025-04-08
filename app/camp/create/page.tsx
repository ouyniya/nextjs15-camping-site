import { SubmitButton } from "@/components/form/Buttons";
import FormInput from "@/components/form/FormInput";
import FormContainer from "@/components/form/FormContainer";
import { CreateLandmarkAction } from "@/actions/actions";
import CategoryInput from "@/components/form/CategoryInput";
import TextareaInput from "@/components/form/TextareaInput";
import ProvinceInput from "@/components/form/ProvinceInput";
import MapClientWrapper from "./MapClientWrapper";

export default async function CreateLandmark() {
  return (
    <section className="flex flex-col gap-3 max-w-[750px] m-auto">
      <h1 className="text-xl font-semibold xl:text-center">Create Landmark</h1>
      <div>
        <FormContainer
          action={CreateLandmarkAction}
          className="flex flex-col gap-3"
        >
          <div className="flex flex-col gap-3 px-5 py-7 border-1 rounded-xl">
            <div className="flex gap-5 w-full">
              <FormInput
                name="name"
                label="Landmark Name"
                type="text"
                defaultValue=""
                placeHolder="Landmark Name"
              />

              {/* Category */}
              <CategoryInput />
            </div>

            <div className="flex gap-5 w-full">
              {/* Textarea */}
              <TextareaInput
                name="description"
                labelText="Description"
                defaultValue=""
              />
            </div>

            <div className="flex gap-5 w-full">
              {/* Price */}
              <FormInput
                name="price"
                label="Price"
                type="number"
                defaultValue=""
                placeHolder="Price"
              />
              <ProvinceInput />
            </div>

            <MapClientWrapper />

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
