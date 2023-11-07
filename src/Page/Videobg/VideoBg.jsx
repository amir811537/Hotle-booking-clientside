
const VideoBg = () => {
  const sectionStyle = {
    backgroundImage: `url(https://d1pnnwteuly8z3.cloudfront.net/images/dafc1e05-b0e8-4c6d-b375-4a62333bbd5a/71fe09e2-9320-4f61-8eca-067243e2ef68.jpeg)`,
  };

  return (
    <section className="pt-40 pb-32 relative">
      <div className="absolute w-full h-full top-0 left-0 bg-cover bg-center bg-no-repeat opacity-80 bg-fixed" style={sectionStyle}></div>
      <h1 className="text-white text-3xl text-center relative">Explore Luxury Accommodations</h1>
      <p className= " py-3 text-white text-xl text-center relative">Discover a world of opulence and comfort with our handpicked selection of luxury accommodations. Whether you're seeking a lavish suite with breathtaking views, a private villa nestled in the serene countryside, or an exclusive beachfront resort, our collection of luxury options is designed to exceed your every expectation.

Indulge in spacious and elegantly designed rooms and suites, each meticulously crafted to provide the utmost in style and comfort. Immerse yourself in the finest amenities, from spa and wellness facilities to world-class dining experiences. Our luxury accommodations are not just a place to stay; they are a destination in themselves, offering you an unforgettable journey into a realm of sophistication and extravagance.

From chic urban hotels to secluded retreats in the most picturesque corners of the world, we invite you to explore our selection of luxury accommodations and elevate your travel experience to the extraordinary.</p>
    </section>
  );
};

export default VideoBg;
