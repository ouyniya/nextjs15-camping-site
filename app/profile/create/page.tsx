import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const CreateProfileAction = async (formData: FormData) => {
  "use server";
  const firstName = formData.get("firstName") as string;
  console.log(firstName);
};

const CreateProfile = () => {
  return (
    <section>
      <h1 className="text-xl font-semibold">New User</h1>
      <div>
        <form action={CreateProfileAction}>
          <Label htmlFor="firstName">First Name</Label>
          <Input name="firstName" type="text" />
          <Button>Create Profile</Button>
        </form>
      </div>
    </section>
  );
};
export default CreateProfile;
