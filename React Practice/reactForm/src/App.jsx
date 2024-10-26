import { useForm } from "react-hook-form";
import './App.css'

function App() {
  const { register, handleSubmit, watch, formState: { errors ,isSubmitting } } = useForm();

  async function onSubmit(data) {
    await new  Promise((resolve) => setTimeout(resolve,5000))
    console.log("submiitting the form", data);
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>First Name :</label>
          <input className={errors.firstName ? "input-error" : ""} type="text"  {...register("firstName",
            {
              required: true,
              minLength: {value:3,message:"Min length atleast 3"},
              maxLength: {value:6,message:"Max length atleast 6"}
            })} />
            {errors.firstName && <p className="error-msg">{errors.firstName.message}</p>}
        </div>
        <br />
        <div>
          <label>Middle Name :</label>
          <input type="text" className={errors.firstName ? "input-error" : ""}  {...register("middleName")} />
        </div>
        <br />
        <div>
          <label>Last Name :</label>
          <input type="text" className={errors.firstName ? "input-error" : ""}  {...register("lastName",{ 
            pattern: /^[A-Za-z]+$/i ,
            message: "Last name is not as per the rule"
            })} />
            {errors.lastName && <p className="error-msg">{errors.lastName.message}</p>}
        </div>
        <br />
        <input type="submit" disabled={isSubmitting} value={isSubmitting ? "Submitting" : "Submit"}/>
      </form>
    </div>
  )
}

export default App
