export const isLoggedin = ()=>{
      const token = localStorage.getItem("token");
      const isRemember = localStorage.getItem("isRemember");
      
      return  token !== null && isRemember === "true"  ? true : false;
}

export const isLoggedOut = ()=>{
       localStorage.removeItem("user_data");
       localStorage.removeItem("isRemember");
}

