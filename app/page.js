import ButtonLogin from "./components/ButtonLogin";
import FAQListItem from "./components/FAQListItem";
export default function Home() {
  const isLoggedIn = true; // This can be replaced with actual authentication logic
  const name = "Arsh";

  const pricingFeatures = [
    "Unlimited feedback boards",
    "Team collaboration",
    "Priority support",
  ];
  console.log(process.env.MONGO_URI);
  return (
    <main>
      <section className=" bg-base-200 ">
        <div className="max-3xl mx-auto flex justify-between items-center  px-8 py-2">
          <div className="font-bold">CodeFast-Saas</div>
          <div className="space-x-4">
            <a className="link link-hover" href="#pricing">
              Pricing
            </a>
            <a className="link link-hover" href="#faq">
              FAQ
            </a>
          </div>
          <div>
            <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
          </div>
        </div>
      </section>

      <section className="p-8 text-center py-32 px-8 max-w-3xl mx-auto">
        <div className="flex justify-center items-center">
          {/* <Image
            src={productDemo}
            alt="Product Demo"
            className="w-40 h-40 mb-8"
          /> */}
        </div>
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
      {/* PRICING section */}

      <section className="bg-base-200 py-32" id="pricing">
        <div className="px-8 max-w-3xl mx-auto text-center">
          <p className="text-sm uppercase text-primary font-medium mb-6">
            Pricing
          </p>
          <h2 className="text-4xl font-extrabold mb-12">
            A pricing that adapts to your needs
          </h2>
          <div className="p-8 bg-base-100 w-96 rounded-3xl shadow-lg mx-auto">
            <h3 className="text-2xl font-bold mb-4">Pro Plan</h3>
            <p className="text-4xl font-extrabold mb-4">
              $29<span className="text-base font-medium">/month</span>
            </p>
            <ul className="space-y-2 mb-6 text-sm text-left">
              {pricingFeatures.map((feature, index) => (
                <li key={index}>✔ {feature}</li>
              ))}
            </ul>
            <ButtonLogin
              isLoggedIn={isLoggedIn}
              name={name}
              extraStyle="w-full"
            />
          </div>
        </div>
      </section>
      {/* FAQ section */}
      <section className="py-32" id="faq">
        <p className="text-sm uppercase text-primary font-medium mb-6">FAQ</p>
        <h2 className="text-4xl font-extrabold mb-12">
          Frequently Asked Questions
        </h2>
        <ul>
          {[
            {
              question: "Can I get a refund ",
              answer: "No forget your money lol",
            },
          ].map((qa) => (
            <FAQListItem key={qa.question} qa={qa} />
          ))}
        </ul>
      </section>
    </main>
  );
}
