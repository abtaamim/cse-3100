
export default function ContactUs() {

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      //height: "100vh",
      //margin: 0,
      //width: '100%',
      // maxWidth: '450px'
    }}>
      <h1>Contact Us</h1>
      <form style={{ width: '100%', maxWidth: '350px' }}>
        <div class="mb-3 ">
          <label for="exampleFormControlInput1" class="form-label">Name</label>
          <input class="form-control " id="exampleFormControlInput1"
            style={{ maxWidth: '450px' }}
          />
        </div>
        <div class="mb-3 pl-10">
          <label for="exampleFormControlInput1" class="form-label">Phone</label>
          <input class="form-control " id="exampleFormControlInput1"
            style={{ maxWidth: '350px' }}
          />
        </div>
        <div class="mb-3 pl-10">
          <label for="exampleFormControlInput1" class="form-label">Email</label>
          <input type="email" class="form-control " id="exampleFormControlInput1" placeholder="name@example.com"
            style={{ maxWidth: '350px' }}
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">Your Massage</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" style={{ maxWidth: '350px' }}></textarea>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}