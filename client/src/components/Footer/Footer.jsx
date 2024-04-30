import FooterLower from "./FooterLower";
import FooterUpper from "./FooterUpper";

const Footer = () => {
  return (
    <>
      {/* Footer Container */}
      <div className="mx-auto border-[1px] max-w-[1400px]">
        {/* Upper Container */}
        <FooterUpper />

        {/* Lower Container */}
        <FooterLower />
      </div>
    </>
  );
};

export default Footer;
