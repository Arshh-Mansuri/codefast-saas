import ButtonLogin from "./components/ButtonLogin";
export default function Home() {
  const isLoggedIn = true; // This can be replaced with actual authentication logic
  const name = "Arsh";
  return (
    <main>
      <section className=" bg-base-200 ">
        <div className="max-3xl mx-auto flex justify-between items-center  px-8 py-2">
          <div className="font-bold">CodeFast-Saas</div>
          <div className="space-x-4 hidden md:block  max-md:hidden">
            <a className="link link-hover">Pricing</a>
            <a className="link link-hover">FAQ</a>
          </div>
          <div>
            <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
          </div>
        </div>
      </section>

      <section className="p-8 text-center py-32 px-8 max-w-3xl mx-auto">
        <h1 className="text-5xl font-extrabold mb-6 lg:text-5xl">
          Collect Customer feedback to build better products
        </h1>
        <div className="opacity-90">
          Create a feedback board in minutes priortize features and build
          products your customers love{" "}
        </div>

        <ButtonLogin isLoggedIn={isLoggedIn} name={name}>
          <div>This is a test </div>
        </ButtonLogin>
      </section>
    </main>
  );
}
