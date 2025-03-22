// import Homepage from "@/components/HomePage/Homepage";
// import { v1Router } from "@/utils/useaxios";
// import { Provider } from "react-redux";
// import {reduxStore} from "../redux/store"
// export default async  function Home() {
 
// let groups  = await v1Router.get('master/groups')
// console.log("groups",groups)

// if(groups.error)  return <> No groups found </>

// return (
//      <>
//      <Provider store={reduxStore}>
//           <Homepage groups={groups.data} />  
//           </Provider>     
//      </>
//   );
// }


// export const metadata = {
//   title: 'Sarkari review',
//   description: 'India ',
// }




import HomeClient from "../app/HomeClient";
import { v1Router } from "@/utils/useaxios";

export const metadata = {
  title: "Sarkari Review",
  description: "India",
};

export default async function Home() {
  let groups;

  try {
    const response = await v1Router.get("master/groups");
    groups = response.data;
  } catch (error) {
    console.error("Error fetching groups:", error);
    return <>No groups found</>;
  }

  return <HomeClient groups={groups} />;
}

