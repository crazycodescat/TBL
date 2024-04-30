import { Form } from "react-router-dom";

const FooterUpper = () => {
  return (
    <>
      <div className="grid grid-cols-1 p-4 py-16 gap-y-14 lg:grid-cols-3 md:px-10 bg-white">
        <div className="flex flex-col gap-6">
          <div className="w-20">
            <p className="text-xl font-bold text-FContentCColor">SHOP</p>
            <hr className="border-[2px] text-Rating rounded-b-xl" />
          </div>
          <div className="flex flex-col gap-3 text-tree">
            <a className="hover:text-Rating" href="#">
              True Wireless Earbuds
            </a>
            <a className="hover:text-Rating" href="#">
              Wireless Headphones
            </a>
            <a className="hover:text-Rating" href="#">
              Mobile Accessories
            </a>
            <a className="hover:text-Rating" href="#">
              Wired Headphones
            </a>
            <a className="hover:text-Rating" href="#">
              Wireless Speakers
            </a>
            <a className="hover:text-Rating" href="#">
              Smart Watches
            </a>
            <a className="hover:text-Rating" href="#">
              Party Speakers
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-6 md:col-start-2 md:-col-end-1">
          <div className="w-20">
            <p className="text-xl font-bold text-FContentCColor">HELP</p>
            <hr className="border-[2px] text-Rating rounded-b-xl" />
          </div>
          <div className="flex flex-col gap-3 text-tree">
            <a className="hover:text-Rating" href="#">
              Track Your Orders
            </a>
            <a className="hover:text-Rating" href="#">
              Return Policy
            </a>
            <a className="hover:text-Rating" href="#">
              Bulk Orders
            </a>
          </div>
        </div>

        <div className="">
          <p className="text-xl text-FContentCColor font-bold mb-4">
            SUBCRIBE TO OUR EMAIL ALERTS!
          </p>
          <Form action="/">
            <div className="flex flex-col gap-6">
              <input
                className="outline-none p-4 px-6 border-[1px] border-tree_a0 rounded-full"
                type="email"
                name="email"
                placeholder="Email"
                required
                multiple
              />
              <button
                type="submit"
                className="p-4 bg-Rating text-white font-medium rounded-full hover:bg-[#245726]"
              >
                SUBSCRIBE
              </button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default FooterUpper;
