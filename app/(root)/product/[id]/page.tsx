import ItemDetail from "@/components/ItemDetail";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { getProductById } from "@/services/queries/productQueries";
import { CheckCircle2, Star } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation"; // Import notFound

const ProductDetail = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  let product;
  try {
    const res = await getProductById(id); // Chỉ fetch sản phẩm này
    product = res.product;
  } catch (error) {
    console.log(error);
    notFound();
  }

  if (!product) {
    notFound(); // Nếu sản phẩm không tìm thấy hoặc fetch trả về null
  }

  return (
    <div className=" bg-white rounded-xl w-full my-2 p-3">
      <ItemDetail product={product} />
      <Separator />
      <div className="mx-12">
        <div className="text-4xl my-10">Customer Review</div>
        <div className="flex ">
          <div className="w-2/3 flex flex-col gap-6 justify-start">
            <div className="flex items-start justify-start ">
              <div>
                <span className="text-4xl">4.9</span>
                /5
              </div>
              <div className="ml-3">
                <div className="flex items-center ">
                  <Star className="w-4" />
                  <Star className="w-4" />
                  <Star className="w-4" />
                  <Star className="w-4" />
                  <Star className="w-4" />
                </div>
                <div className="text-sm">Based on 21 reviews</div>
              </div>
            </div>
            <Separator className="w-96" />
            <div className="">
              <div className="flex items-center  gap-3 ">
                5 <Star className="w-4" />
                <Progress value={33} className="w-72" />
                182
              </div>
              <div className="flex items-center  gap-3 ">
                5 <Star className="w-4" />
                <Progress value={33} className="w-72" />
                182
              </div>
              <div className="flex items-center  gap-3 ">
                5 <Star className="w-4" />
                <Progress value={33} className="w-72" />
                182
              </div>
              <div className="flex items-center  gap-3 ">
                5 <Star className="w-4" />
                <Progress value={33} className="w-72" />
                182
              </div>
              <div className="flex items-center  gap-3 ">
                5 <Star className="w-4" />
                <Progress value={33} className="w-72" />
                182
              </div>
            </div>
          </div>
          <div>
            <div className="flex gap-2">
              <div>Search</div>
              <div>Most relevant</div>
              <div>All rating</div>
              <div>With media</div>
            </div>
            <Separator className="mb-4" />
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <div className="flex">
                  <Star className="w-4" />
                  <Star className="w-4" />
                  <Star className="w-4" />
                  <Star className="w-4" />
                  <Star className="w-4" />
                </div>
                <div>today</div>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-semibold text-lg"> Nashy</span>
                <div className="flex justify-center items-center">
                  <CheckCircle2 className="w-4 h-4" />{" "}
                  <span className="text-sm">Verify user</span>
                </div>
              </div>
              <p>
                More Air, less bulk. The Dn8 takes our Dynamic Air system and
                condenses it into a sleek, low-profile package. Powered by eight
                pressurised Air tubes, it gives you a responsive sensation with
                every step. Enter an unreal experience of movement.
              </p>
              <div>
                <Image
                  src="/images/airmax.png"
                  alt="footerbanner"
                  width={50}
                  height={50}
                  className="w-20 h-20 rounded-lg"
                ></Image>
              </div>
              <div className="flex text-gray-500">
                Was this review helpful?
                <div>ok</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
