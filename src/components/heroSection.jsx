const HeroSection = () => {
  return (
    <section id="home" className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Artificial Intelligence
            </span>
            <br />
            for a Smarter Future
          </h1>
          <p className="text-lg text-gray-600 max-w-lg">
            Discover how AI is transforming industries and improving lives worldwide. Our cutting-edge solutions
            harness the power of machine learning to solve complex problems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="#"
              className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium text-center transition shadow-lg hover:shadow-primary/30"
            >
              Explore AI Solutions
            </a>
            <a
              href="#"
              className="border-2 border-gray-300 hover:border-primary text-gray-700 hover:text-primary px-6 py-3 rounded-lg font-medium text-center transition"
            >
              Learn More
            </a>
          </div>
          <div className="pt-4 flex items-center space-x-4">
            <div className="flex -space-x-2">
              <img
                className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover"
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
                alt="User 1"
              />
              <img
                className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover"
                src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
                alt="User 2"
              />
              <img
                className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover"
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
                alt="User 3"
              />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">
                Trusted by <span className="text-primary font-bold">10,000+</span> people worldwide
              </p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="relative w-full h-96 md:h-auto aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-grid-dark/5 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
            <img
              alt="hero-section"
              src="https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-secondary/20 blur-xl"></div>
          <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-accent/20 blur-xl"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;