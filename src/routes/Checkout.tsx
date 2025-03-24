import { ChangeEvent, FormEvent, useActionState } from "react";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  phone: string;
};

type FormAction = {
  name: keyof FormData;
  value: string;
};

const Checkout = () => {
  const [formData, setFormData] = useActionState<FormData, FormAction>(
    (prev, { name, value }) => ({ ...prev, [name]: value }),
    {
      firstName: "",
      lastName: "",
      email: "",
      street: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
      phone: "",
    },
  );

  const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      name: ev.target.name as keyof FormData,
      value: ev.target.value,
    });
  }

  const handleSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    // Handle form submission logic here
    console.log("Form Data Submitted:", formData);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="section-vertical__padding flex flex-col md:flex-row justify-center gap-10 md:gap-24 min-h-[60vh]"
    >
      {/* Checkout address */}
      <div className="flex w-full flex-col justify-start md:w-1/2 lg:w-[45%]">
        <div className="text__dash-container mb-4">
          <h1 className="sub__heading text-center">
            <span className="sub__heading-gray">Delivery</span>{" "}
            <span className="sub__heading-primary">Information</span>
          </h1>
          <hr className="text__dash-dash" />
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              className="input-field w-1/2"
              onChange={handleChange}
              value={formData.firstName}
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              className="input-field w-1/2"
              onChange={handleChange}
              value={formData.lastName}
            />
          </div>
          <input
            type="email"
            placeholder="Email address"
            name="email"
            className="input-field"
            onChange={handleChange}
            value={formData.email}
          />
          <input
            type="text"
            placeholder="Street"
            name="street"
            className="input-field"
            onChange={handleChange}
            value={formData.street}
          />
          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="City"
              name="city"
              className="input-field w-1/2"
              onChange={handleChange}
              value={formData.city}
            />
            <input
              type="text"
              placeholder="State"
              name="state"
              className="input-field w-1/2"
              onChange={handleChange}
              value={formData.state}
            />
          </div>
          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="Zip code"
              name="zip-code"
              className="input-field w-1/2"
              onChange={handleChange}
              value={formData.zipCode}
            />
            <input
              type="text"
              placeholder="Country"
              name="country"
              className="input-field w-1/2"
              onChange={handleChange}
              value={formData.country}
            />
          </div>
          <input
            type="phone"
            placeholder="Phone"
            name="phone"
            className="input-field"
            onChange={handleChange}
            value={formData.phone}
          />
        </div>
      </div>
      {/* Payment information */}
      <div className="flex w-full flex-col justify-start md:w-1/2 lg:w-[55%]">
        <div className="text__dash-container mb-4">
          <h1 className="sub__heading text-center">
            <span className="sub__heading-gray">Cart</span>{" "}
            <span className="sub__heading-primary">Total</span>
          </h1>
          <hr className="text__dash-dash" />
        </div>
        <div className="flex justify-end">
          <div className="flex w-full flex-col gap-2 md:gap-3">
            <div className="border-white-100 flex items-center justify-between pt-4">
              <p className="text-16-gray-normal">Subtotal</p>
              <p className="text-16-gray-normal">$449.97</p>
            </div>
            <div className="border-white-100 flex items-center justify-between border-t pt-4">
              <p className="text-16-gray-normal">Shipping Fee</p>
              <p className="text-16-gray-normal">$10</p>
            </div>
            <div className="border-white-100 flex items-center justify-between border-t pt-4">
              <p className="text-16-primary-medium">Total</p>
              <p className="text-16-primary-medium">$459.97</p>
            </div>
            <button type="submit" className="filled__button mt-3">
              proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Checkout;
