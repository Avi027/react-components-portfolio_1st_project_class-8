
import { PhoneCall } from "lucide-react";
export default function TopNav(){


    return (
        
  <nav className="flex justify-between items-center p-5 py-2 bg-green-900 text-white ">
            <div><img className="h-18 pt-2" src="/hack.png" alt="logo text" /></div>

            <div className="flex gap-20 font-bold ">
                <a href="/services">Service</a>
                <a href="/works">Works</a>
                <a href="/services">Note</a>
                <a href="/services">Experience</a>
                
                
            </div>

            <div className="flex gap-2">
                <div className="font-bold text-amber-500">Call 01604400088</div>
                

            <PhoneCall size={20}/>
        </div>
       
 </nav>
    )
}