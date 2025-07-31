"use client"
import TopNav from "@/app/components/TopNav"
import { ComputerIcon, LaptopMinimal, LayoutGrid, Mails, TabletSmartphone, TrendingUp, Weight, WeightIcon } from "lucide-react"

export default function Home() {

  return (
    <div className="bg-green-950 text-white">

      <TopNav />
      <div className="flex flex-row justify-between h-[700px]
      mx-auto p-3 mt-10  bg-[url('/avi.png')] animate-pulse bg-contain bg-top bg-no-repeat">

        <div className="flex flex-col justify-between">
          <h1 className=" text-5xl">
            Welcome <br></br> My Hacking
            <br></br>Course Website</h1>


          <div className="underline">
            <Mails size={20} />
             Avivhai027@gmail.com</div>

          <div className="flex flex-row gap-1">
            <div className="text-8xl">10</div>
            <div className="text-4xl bg-yellow-400 text-white p-4">Years <br /> Experience</div>
          </div>

        </div>
        <div className="flex flex-col justify-between text-2xl">

          <div>I always support server web, <br /> and apps heacking</div>
          <div>

            <TrendingUp size={100} />
            <div>Ethical Hack </div>
            <div>Apps Hack </div>
            <div>Facebook Hack </div>
          </div>
        </div>

      </div>
      <div className="flex flex-row justify-between h-[600px]
      mx-auto p-20 mt-20 pt-24 bg-green-900">

        <div className="flex flex-col justify-between ">

          <div className="flex gap-1 border-0.1 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
            <ComputerIcon size={80} className="bg-red-400 p-4 rounded-full" />
            <div>
              <div className="text-4xl">Website Design </div>
              <div>80 Project</div>
            </div>
          </div>


          <div className="flex gap-1 border-0.1 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
            <LayoutGrid size={80} className="bg-red-400 p-4 rounded-full" />
            <div>
              <div className="text-4xl">Mobile design </div>
              <div>55+ Project</div>
            </div>
          </div>



          <div className="flex gap-1 border-0.1 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
            <WeightIcon size={80} className="bg-red-400 p-4 rounded-full" />
            <div>
              <div className="text-4xl">Brain Identity </div>
              <div>76+ Project</div>
            </div>
          </div>

        </div>
        <div className="flex flex-col justify-between ml-40 p-2 gap-5
        ">
          <div className="text-6xl">What do i Help?</div>
          <div className="bg-black text-amber-300 shadow-2xs">I will help you with finging a solution and solve <br /> 
            your problems,We use process design to create digital <br />
            products.Besids that also help their business. <br />
            We use process design to create digital products.</div>

          <div className="flex flex-row justify-between gap-10">


                  <div className="flex flex-col">
                    <div className="text-6xl bg-amber-400">285+</div>
                    <div className="text-2xl">Project Completed</div>

                  </div>
                  <div className="flex flex-col">
                    <div className="text-6xl bg-amber-400">999+</div>
                    <div className="text-2xl">Happy Clinet</div>

                  </div>
          </div>
         

       </div>

        <div className="flex flex-row justify-between bg-contain-last item-baseline-last object-contain">
          <div className="flex flex-col">
            <div className="bg-[url('/sad.png')] bg-contain bg-top-right object-contain bg-no-repeat p-[300px] pt-50 ">

            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
