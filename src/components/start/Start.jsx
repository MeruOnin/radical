import Input from "../form/Input";

const Start = () => {
  const Balls = ({ zIndex, top, right }) => {
    return (
      <div
        className={`w-20 rounded-full h-20 bg-blue-500 absolute top-[${top}] right-[${right}]`}
      ></div>
    );
  };

  return (
    <>
      <Balls right={`20rem`} />
      <div className="bg-background-elm rounded-3xl p-4 max-w-60 w-fit flex flex-col justify-center items-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <header>
          <img
            src="src/assets/radical.png"
            className="w-32 h-32"
            alt="radical logo"
          />
        </header>
        <main className="text-center">
          <h1 className="text-h1 font-iranSans">رادیکال</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste illum
            ratione doloribus esse vitae modi vero ab, fugit incidunt officiis!
          </p>
          <Input title={`کد ورود`} type={`number`} />
        </main>
      </div>
    </>
  );
};

export default Start;
