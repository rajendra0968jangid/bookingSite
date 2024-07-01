import { Carousel } from "flowbite-react";

function Slidebar() {
  return (
    <>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>
          <img src="/download.png" alt="..." />
          <img src="/download (1).png" alt="..." />
          <img src="/download-_1_.png" alt="..." />
        </Carousel>
      </div>
    </>
  );
}

export default Slidebar;
