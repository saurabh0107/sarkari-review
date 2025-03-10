import Homepage from "@/components/HomePage/Homepage";
import { v1Router } from "@/utils/useaxios";

export default async  function Home() {
 
let groups  = await v1Router.get('master/groups')
console.log("groups",groups)

if(groups.error)  return <> No groups found </>

return (
     <>
          <Homepage groups={groups.data} />       
     </>
  );
}


export const metadata = {
  title: 'Sarkari review',
  description: 'India ',
}

