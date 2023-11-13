const NewsLetter = () => {
  return (
    <div className="max-w-4xl mx-auto mb-32 px-5">
        <h1 className="font-bold xl:text-5xl tracking-wide">
          <span className="font-outline-2 leading-relaxed">Sign up to our</span>{" "}
          <br /> <span>newsletter</span>
        </h1>
        <form className="flex items-center justify-center space-x-5 mt-10">
          <input
            type="text"
            placeholder="Enter your email"
            className="focus:outline-none outline-none border-b-2 w-full"
          />
          <button className="bg-darksecondary text-white rounded px-5 py-2.5" type='submit'>Join</button>
        </form>
        <p className="text-sm mt-5">By signing up you accept our Privacy Policy</p>
      </div>

  )
}

export default NewsLetter