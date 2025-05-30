const Title = ({ title, des }) => {
  return (
    <div className="text-center space-y-4">
      <h1
        data-aos="fade-up"
        className="text-3xl conthrax md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-500 py-4 inline-block"
      >
        {title}
      </h1>
      <p data-aos="fade-up" className="max-w-lg w-full mx-auto">
        {des}
      </p>
    </div>
  );
};

export default Title;
