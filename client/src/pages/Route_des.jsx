import { useState } from "react";
import "../pages/Route.css"
export const Route_des = ()=>{

    const [user,setuser] = useState({
        username:"Sammed",
        email:"",
        Mobile_no:"",
        start_point:"",
        destination:""
    });

   const  handleInput = (e)=>{
    console.log(e)
    let name= e.target.name;
    let value = e.target.value;

    setuser({
        ...user,
        [name]:value
    })
   }

    return  <>
    <section>
        <main>
            <div className="section-route">
                <div className="container grid grid-two-cols">
                    <div className="cheakingbus">
                        <div className="mainheading">
                Search Your Destination
                        </div> <br />
                    <form className="user">
                        <div >
                            <label htmlFor="username">User_Name</label> <br />
                            <input type="text" name="username" placeholder="Enter User Name" id="username" required autoComplete="off"
                            value={user.username}
                            onChange={handleInput}
                            />
                        </div>

                        <div>
                            <label htmlFor="email">Email</label><br />
                            <input type="text"
                             value={user.email}
                             onChange={handleInput} name="email" placeholder="Enter Email" id="email" required autoComplete="off"/>
                        </div>

                        <div>
                            <label htmlFor="Mobile_no">Mobile Number</label><br />
                            <input type="number"
                             value={user.Mobile_no}
                             onChange={handleInput} name="Mobile_no" placeholder="Enter Mobile Number" id="Mobile_no" required autoComplete="off"/>
                        </div>

                        <div>
                            <label htmlFor="start_point">Start_Point</label><br />
                            <input type="text" name="start_point" placeholder="Starting Point" id="start_point"
                             value={user.start_point}
                             onChange={handleInput} required autoComplete="off"/>
                        </div>

                        <div>
                            <label htmlFor="Destination">Destination</label><br />
                            <input type="text" name="Destination" placeholder="Enter Destination"
                             value={user.destination}
                             onChange={handleInput} id="Destination" required autoComplete="off"/>
                        </div>
                        <br />
                       <a href=""> <button id="button" type="button" class="btn btn-outline-secondary">Cheack</button></a>
                    </form>
                    </div>
                </div>
            </div>
        </main>
    </section>
    </>
}; 