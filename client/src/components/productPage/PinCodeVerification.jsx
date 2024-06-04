import { useRef, useState } from 'react';
import { MapPinIcon } from '@heroicons/react/24/outline';

const PinCodeVerification = () => {
  const [visible, setVisible] = useState(false);
  const [pin, setPin] = useState('');
  const [notValidPinCode, setNotValidPinCode] = useState(false);
  const [deliveryDate, setDeliveryDate] = useState('');
  const inputRef = useRef(null);
  // const isValidPinCode = (code) => /^\d{6}$/.test(code);
  // console.log(pin);
  const checkPinCode = (e) => {
    e.preventDefault();
    console.log(pin.length);
    if (pin.length < 6 || pin.length > 6) {
      setVisible(false);
      return;
    }

    // Get the current date
    const currentDate = new Date();
    // Add 6 days to the current date
    const deliveryD = new Date(currentDate);
    deliveryD.setDate(currentDate.getDate() + 6);
    // Format the result (assuming you want it in the "dd mmm" format)
    const options = { day: 'numeric', weekday: 'long', month: 'short' };
    const formattedDeliveryDate = deliveryD.toLocaleDateString(
      'en-US',
      options
    );
    setDeliveryDate(formattedDeliveryDate);
    setVisible(true);
    // Reset the pin code after submission
    setPin('');

    // Clear the input field visually using the ref
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  const onchangePinHandler = (e) => {
    const valueLength = e.target.value.length;
    if (valueLength === 0) {
      // console.log(e.target.value);
      setNotValidPinCode(false);
      return;
    }
    if (valueLength < 6) {
      // console.log(e.target.value);
      setNotValidPinCode(true);
      setVisible(false);
      return;
    }
    if (valueLength > 6) {
      // console.log(e.target.value);
      setNotValidPinCode(true);
      // setVisible(false);
      return;
    }

    setPin(e.target.value);
    setNotValidPinCode(false);
  };

  return (
    <div className="flex flex-col gap-[12px] mt-4">
      <div>
        <p className="font-semibold text-md">DELIVERY:</p>
      </div>
      <form onSubmit={checkPinCode}>
        <div
          className={`flex gap-2 w-[300px] items-center justify-between pb-2 border-b-2 border-solid ${
            notValidPinCode ? 'border-red' : ''
          } border-Rating`}
        >
          <div className="flex gap-2 items-center justify-start">
            <MapPinIcon className="h-4 w-4 stroke-[2px] text-tree_a2" />
            <input
              onChange={onchangePinHandler}
              name="pinCode"
              type="number"
              className="w-full outline-none font-medium text-sm hidden-input__arrows"
              placeholder="Enter Delivery Pincode"
              ref={inputRef}
            />
          </div>
          <button
            type={`${notValidPinCode ? 'button' : 'submit'}`}
            id="check"
            className={` ${
              notValidPinCode ? 'text-red' : 'text-ProfileTextColor'
            } text-sm font-semibold`}
          >
            Check
          </button>
        </div>
        {/* {pin} */}
      </form>

      {visible && (
        <div className="text-sm font-medium">
          Delivery by {deliveryDate}, Tuesday
        </div>
      )}
      {notValidPinCode && (
        <div className="text-red text-sm">
          Please enter a valid 6-digit Pincode.
        </div>
      )}
    </div>
  );
};

export default PinCodeVerification;
