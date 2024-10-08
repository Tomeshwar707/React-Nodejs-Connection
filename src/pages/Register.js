import axios from "axios"
import { useState } from "react"
export const Register = () => {

    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [mobile, setMobile] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [gender, setGender] = useState("")

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const result = await axios.post("http://127.0.0.1:4000/reg", { name, age, mobile, email, password, gender })
            alert(result)
            console.log(result.data)
        } catch (err) {
            console.log(err)
        }
    }
    return (<>
        <div className="container">
            <div className="alert alert-info w-50 mx-auto">
                <div className="display-5">Register</div>
                <hr />
                <form onSubmit={handleSubmit}>
                    <div className="my-3">
                        <label className="form-label" htmlFor="name">Name:</label>
                        <input className="form-control" type="text" id="name" 
                        value={name} onChange={(event)=>setName(event.target.value)} name="name" placeholder="Enter name" />
                    </div>

                    <div className="my-3">
                        <label className="form-label" htmlFor="age">Age:</label>
                        <input className="form-control" type="number" id="age"   value={age} onChange={(event)=>setAge(event.target.value)}  name="age" placeholder="Enter age" />
                    </div>


                    <div className="my-3">
                        <label className="form-label" htmlFor="gender">Gender:</label>
                        <select className="form-select" name="gender" id="gender"   value={gender} onChange={(event)=>setGender(event.target.value)} aria-label="select your gender">
                            <option selected value="">Select Gender</option>
                            <option value="m">Male</option>
                            <option value="f">Female</option>
                            <option value="o">Other</option>
                        </select>
                    </div>

                    <div className="my-3">
                        <label className="form-label" htmlFor="mobile">Mobile no.:</label>
                        <input className="form-control" type="tel" id="mobile"   value={mobile} onChange={(event)=>setMobile(event.target.value)}  name="mobile" placeholder="Enter mobile no." />
                    </div>

                    <div className="my-3">
                        <label className="form-label" htmlFor="email">Email-id:</label>
                        <input className="form-control" type="email" id="email"   value={email} onChange={(event)=>setEmail(event.target.value)}  name="email" placeholder="Enter email-id" />
                    </div>

                    <div className="my-3">
                        <label className="form-label" htmlFor="password">Password:</label>
                        <input className="form-control" type="password" id="password"   value={password} onChange={(event)=>setPassword(event.target.value)}  name="password"
                            placeholder="Enter password" />
                    </div>
                    <div className="my-3">
                        <label className="form-label" htmlFor="c-password">Confirm Password:</label>
                        <input className="form-control" type="password" id="c-password" name="c-password"
                            placeholder="Confirm Password" />
                    </div>
                    <button className="btn btn-danger" type="submit">Register</button>
                    <button className="btn btn-warning" type="reset">Clear</button>

                </form>
            </div>

        </div>

    </>)
}


