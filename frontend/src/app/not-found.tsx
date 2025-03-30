import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const NotFounds = () => {
  return (
    <div className=" h-screen flex justify-center items-center flex-col">
      <Image src={"/images/404.svg"} width={500} height={500} alt={"404"} />
      <Link href="/"> <Button>Back To Home</Button></Link>
    </div>
  )
}
export default NotFounds