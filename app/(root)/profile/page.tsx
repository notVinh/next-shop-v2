import Image from "next/image";
import { BadgeDollarSign, CheckCircle2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import UserTable from "@/components/custom/UserTable";

const Profile = () => {
  // const { user } = useUser();
  //   console.log(user);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const resProfile = await axios.get("/api/user/profile");
  //     console.log(resProfile.data);
  //   };
  //   fetchData();
  // }, []);

  return (
    <div className="flex-row flex flex-1 h-screen gap-2 my-2">
      <div className="rounded-xl w-full bg-white overflow-hidden ">
        <div className="w-full h-44 relative bg-black"></div>
        <div className="flex-row flex w-[1000px] m-auto gap-5 px-2 rounded-xl relative -top-20 ">
          <div className="border-2 rounded-3xl bg-white w-52 h-52 flex flex-col justify-center items-center">
            <Image
              src="/logo.png"
              alt="avatar"
              width={100}
              height={100}
              className=" cursor-pointer w-auto h-auto"
            />
          </div>
          <div className="flex-col self-end flex-1">
            <div className="flex flex-row justify-between items-center ">
              <div>
                <div className="flex flex-row items-center gap-2">
                  <div className="font-bold text-3xl">Đặng Quang Vinh</div>
                  <CheckCircle2 />
                </div>
              </div>
              <BadgeDollarSign />
            </div>
            <div>
              <div>Xin chào tớ tên là Vinh</div>
              <div className="flex flex-row justify-end gap-10 items-center w-full">
                <div>
                  <div className="font-semibold text-lg">Buy</div>
                  <div className="text-3xl font-extrabold">12</div>
                </div>
                <div>
                  <div className="font-semibold text-lg">Like</div>
                  <div className="text-3xl font-extrabold">12</div>
                </div>
                <div>
                  <div className="font-semibold text-lg">Follow</div>
                  <div className="text-3xl font-extrabold">50</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <UserTable />
      </div>
      <div className="bg-white w-96 rounded-xl px-2">
        <div>History View</div>
        <Separator />
        <div className="flex flex-col gap-2 mt-3">
          <div className="flex flex-col justify-between">
            <div className="flex flex-row w-full h-28 gap-2">
              <div className="w-28 h-28 bg-black rounded-lg flex flex-col justify-center items-center">
                <Image
                  src="/logo.png"
                  alt="avatar"
                  width={50}
                  height={50}
                  className="w-auto h-auto"
                />
              </div>
              <div>Sneaker</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
