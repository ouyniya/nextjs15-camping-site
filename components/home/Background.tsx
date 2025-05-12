function Background() {
  return (
    <div className="relative overflow-x-clip">
    {/* social section */}
    <div>
      <div
        className="absolute h-[400px] w-screen top-0 left-1/2 -translate-x-1/2 bg-primary/10 -z-10"
        style={{
          maskImage:
            "radial-gradient(50% 50% at top center, black, transparent)",
          WebkitMaskImage:
            "radial-gradient(50% 50% at top center, black, transparent)", // for Safari support
        }}
      ></div>
      <div className="container">

      </div>
    </div>

  </div>
  );
}
export default Background;
