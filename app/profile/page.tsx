import { fetchLandmarkFromUserId } from "@/actions/actions";
import { currentUser } from "@clerk/nextjs/server";
import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface User {
  id: string;
  firstName: string;
  lastName: string;
  lastActiveAt: string;
  emailAddresses: string;
}

const ProfilePage = async () => {
  const user = await currentUser();

  if (!user) {
    return null;
  }

  const typedUser: User = {
    id: user.id,
    firstName: user.firstName || "",
    lastName: user.lastName || "",
    lastActiveAt: user.lastActiveAt?.toString() || "",
    emailAddresses: user.emailAddresses[0].emailAddress,
  };

  const getUserPosts = async () => {
    if (user) {
      const userPost = await fetchLandmarkFromUserId({ id: typedUser.id });
      return userPost;
    }
    return null;
  };

  const posts = await getUserPosts();
  console.log("posts");

  return (
    <div>
      <div className="max-w-5xl mx-auto mt-5 md:mt-10">
        <div className="rounded-xl shadow-lg dark:shadow-primary/20 overflow-hidden transition-colors duration-200">
          <div className="relative h-48">
            <Image
              src="/images/profile.jpeg"
              alt="Cover"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
            <div className="absolute -bottom-12 left-6">
              <Image
                src="/images/profile.jpeg"
                alt="Profile"
                width={200}
                height={200}
                className="w-24 h-24 rounded-xl object-cover border-4 shadow-lg"
              />
            </div>
          </div>

          <div className="pt-16 px-6 pb-6 border border-secondary rounded-b-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold capitalize">
                  {typedUser?.firstName} {typedUser?.lastName}
                </h1>
                <p className="text-primary">{typedUser.emailAddresses}</p>
              </div>
              <a
                href="/favorite"
                target="_blank"
                className="inline-flex items-center px-4 py-2 bg-primary hover:bg-emerald-400 text-white rounded-lg transition-colors duration-200 text-sm font-bold gap-2"
              >
                View My Favorite
                <Heart className="size-5" />
              </a>
            </div>

            <p className="mt-6"></p>
            <p className="mb-3 font-semibold">📸 My Favorite Travel Memory</p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-2xl shadow-lg group">
                <Link href={posts ? `/landmark/${posts[0]?.id}` : "/"}>
                  <Image
                    src={posts ? posts[0]?.image : ""}
                    alt="Nature"
                    className="w-full h-full object-cover"
                    width={500}
                    height={500}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-60 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-xl font-bold text-white">
                        {posts ? posts[0].name : null}
                      </h3>
                      <p className="text-white">
                        {posts ? posts[0].description : null}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>

              {posts?.splice(1, 8)?.map((item, index) => (
                <div key={index}>
                  <div className="relative overflow-hidden rounded-2xl shadow-lg group w-full h-full">
                    <Link href={`/landmark/${item?.id}`}>
                      <Image
                        src={item.image}
                        alt="Nature"
                        className="w-full h-full object-cover"
                        width={500}
                        height={500}
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-60 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <h4 className="text-sm font-bold text-white">
                            {item.name}
                          </h4>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <h2 className="text-lg font-semibold mb-3">Contact</h2>
              <a
                href="#"
                className="inline-flex items-center text-primary hover:underline"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {typedUser.emailAddresses}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfilePage;
