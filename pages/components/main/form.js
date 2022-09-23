export default function Form(){
    return (
        <form className="bg-form-color max-w-xl">
            <h3 className=" text-lg font-semibold text-center pt-5">Create Cookie Stand</h3>
            <div className="">
                <label>Location</label>
                <input className=""></input>
            </div>
            <section className="flex">
                <div className="">
                    <label>Minimum Customers Per Hour</label>
                    <input></input>
                </div>
                <div>
                    <label>Maximum Customers Per Hour</label>
                    <input></input>
                </div>
                <div>
                    <label>Average Cookies Per Hour</label>
                    <input></input>
                </div>
            </section>
      </form>
    )
}