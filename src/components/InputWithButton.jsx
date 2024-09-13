import { Button } from "@/components/ui/button";
import { Input } from "./ui/input";
import { SslDrawer } from "./Drawer";




export function InputWithButton({domainref}) {


  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input className="flex-grow py-2 px-4" type="text" placeholder="Domain name" ref={domainref}/>
        
        <SslDrawer domainref={domainref}/>
      </div>
    </div>
  );
}
