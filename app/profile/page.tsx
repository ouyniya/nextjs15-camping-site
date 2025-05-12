import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";

const ProfilePage = async () => {
  const user = await currentUser();
  const lastActiveAt: unknown = user?.lastActiveAt; // or from props/data
  const date = new Date(lastActiveAt as number);
  const formatted = new Date(date).toLocaleString();

  console.log(user);

  return (
    <div className="flex flex-col border max-w-xl mx-auto my-5 rounded-2xl justify-center items-center">
      <div className="flex p-10 gap-10">
        <div className="flex overflow-hidden rounded-full w-[150px] h-[150px] shadow-lg border-4 border-gray-100">
          <Image
            src="/images/profile.jpeg"
            alt="profile image"
            className="object-cover"
            width={200}
            height={200}
          />
        </div>
        <div className="flex flex-col justify-center items-start gap-2">
          <h1 className="text-3xl font-bold">
            <span>Hello, </span>
            <span className="capitalize text-primary">{user?.firstName}</span>
          </h1>
          <p className="text-sm opacity-50">Last Active at {formatted}</p>
        </div>
      </div>

      <div>
        {!user ? <div>Not signed in</div> : <div>Hello {user?.firstName}</div>}
      </div>
    </div>
  );
};
export default ProfilePage;
