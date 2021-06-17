// import React, { useState } from 'react';

// const App = () => {

// const [count , setcount] = useState(0);

// const IncNum = () => {
//   setcount(count - 5);
// };

// let newTime = new Date().toLocaleTimeString();

// const [cTime , setTime] = useState(newTime);

// const UpdateTime = () => {
//   newTime = new Date().toLocaleTimeString();
//   setTime(newTime);
// }

// setInterval(UpdateTime,1000);

//   return (
//     <>
//        <h1>{cTime}</h1>
//        <button onClick={UpdateTime}>Click Me</button>
//     </>
//   );
// };

// export default App;


// import React, { useState } from 'react';

// const App = () => {

// let purple = "blueviolet";
// const [cBg , setBG] = useState(purple);
// const [name , setName] = useState ("click me");

// const BgChange = () => {
//   let newbg = "teal";
//   setBG(newbg);
//   setName("Ouch :astronaut: ");
// }

// const Bgback = () => {
//   setBG(purple);
//   setName("ayyo :astronaut: ");
// }

//   return (
//     <>
//        <div style={{ backgroundColor : cBg}}>
//        <button onClick={BgChange} onDoubleClick={Bgback}>{name}</button>
//        </div>
//     </>
//   );
// };

// export default App;



// import React, { useState } from 'react';

// const App = () => {
  
//   const [name , setName] = useState("");
//   const [lastname , setNameTwo] = useState("");
//   const [fullName , setFullname] = useState("");
//   const [lastNametwo , setLastname] = useState("");
//   const [newName , newsetName] = useState ("click me");

//   const onSubmit = (event) =>{
//     event.preventDefault();
//     setFullname(name);
//     setLastname(lastname);
//   }

//   const InputEvent = (event) =>{
//     setName(event.target.value);
//   }

//   const InputEventTwo = (event) =>{
//     setNameTwo(event.target.value);
//   }

//   const Bgback = () => {
//   newsetName("ayyo :astronaut: ");
//   }


//   return (
//     <>
//     <div className="main-div">
//     <form onSubmit={onSubmit}>
//        <div>
//        <h1>Hello {fullName} {lastNametwo}</h1>
//        <input type="text" placeholder="First Name" onChange={InputEvent} value={name}/>
//        <input type="text" placeholder="Last Name" onChange={InputEventTwo} value={lastname}/>
//        <button type="submit" onClick={Bgback}>{newName}</button>
//        </div>
//        </form>
//        </div>
//     </>
//   );
// };

// export default App;


import React, { useState } from 'react';

const App = () => {
  
  const [fullName , setFullName] = useState({
    fname:"",
    lname:"",
    email:"",
    mobile:"",
  });

  const InputEvent = (event) =>{
    // const value = event.target.value;
    // const name = event.target.name;
    
    const { name,value }= event.target;

    setFullName ((preValue) => {
         return{  
      ...preValue,
         [name]: value,
         };

    //   if(name === "fname"){
    //      return{
    //        fname:value,
    //        lname:preValue.lname,
    //        email:preValue.email,
    //        mobile:preValue.mobile,
    //      };
    //     } else if(name === "lname"){
    //       return{
    //         fname:preValue.fname,
    //         lname:value,
    //         email:preValue.email,
    //         mobile:preValue.mobile,
    //       };
    //   }  else if(name === "email"){
    //     return{
    //       fname:preValue.fname,
    //       lname:preValue.lname,
    //       email:value,
    //       mobile:preValue.mobile,
    //     };
    // } else if(name === "mobile"){
    //   return{
    //     fname:preValue.fname,
    //     lname:preValue.lname,
    //     email:preValue.email,
    //     mobile:value,
    //   };
    // }
   });
  };

  const onSubmit = (event) =>{
    event.preventDefault();
    alert("form submitted");
  };

  return (
    <>
    <div className="main-div">
    <form onSubmit={onSubmit}>
       <div>
       <h1>Hello {fullName.fname} {fullName.lname} </h1>
       <p>{fullName.email}</p>
       <p>{fullName.mobile}</p>
       <input type="text" name="fname" placeholder="First Name" onChange={InputEvent} value={fullName.fname}/>
       <input type="text" name="lname" placeholder="Last Name" onChange={InputEvent} value={fullName.lname}/>
       <input type="email" name="email" placeholder="Email" onChange={InputEvent} value={fullName.email}/>
       <input type="number" name="mobile" placeholder="Mobile Number" onChange={InputEvent} value={fullName.mobile}/>
       <button type="submit">Submit me</button>
       </div>
       </form>
       </div>
    </>
  );
};

export default App;