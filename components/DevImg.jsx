import Image from "next/image";

const DevImg = ({ containerStyles, imgSrc }) => {
  return (
    <div className={`${containerStyles}`}>
      <Image
        src={imgSrc}
        className="rounded-tl-[270px] rounded-tr-[285px] rounded-br-[230px] rounded-bl-[300px]"
        fill
        priority
        alt="Sandaldeep"
      />
    </div>
  );
};

export default DevImg;
