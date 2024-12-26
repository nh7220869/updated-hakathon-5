import Image from "next/image";

function Cart() {
  return (
    <div className="flex flex-wrap md:flex-nowrap p-20 gap-6">
      {/* Left Section: Updated Content (60%) */}
      <div className="w-full md:w-[60%] p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">How would you like to get your order?</h2>
        <p className="text-gray-600 mb-6">
          Customs regulation for India require a copy of the recipient&apos;s KYC. The address on the KYC needs to match the shipping address. Our courier will contact you via SMS/email to obtain a copy of your KYC. The KYC will be stored securely and used solely for the purpose of clearing customs (including sharing it with customs officials) for all orders and returns. If your KYC does not match your shipping address, please click the link for more information. 
          <a href="#" className="underline text-gray-900">Learn More</a>
        </p>

        {/* Rectangle Image with "Deliver It" */}
        <Image 
          src="/hori.png" 
          alt="Hori Image"
          width={720}  
          height={24}  
          className="h-24 w-[15cm]"
        />

        {/* Form for Name and Address */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Enter your name and address:</h2>
          <form className="space-y-4">
            {/* Name Fields */}
            <div className="flex flex-col">
              <label htmlFor="firstName" className="text-gray-800 mb-2 font-semibold">First Name</label>
              <input 
                type="text" 
                id="firstName" 
                name="firstName" 
                placeholder="First Name"
                className="p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="lastName" className="text-gray-800 mb-2 font-semibold">Last Name</label>
              <input 
                type="text" 
                id="lastName" 
                name="lastName" 
                placeholder="Last Name"
                className="p-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Address Fields */}
            <div className="flex flex-col">
              <label htmlFor="address1" className="text-gray-600 mb-2">Address Line 1</label>
              <input 
                type="text" 
                id="address1" 
                name="address1" 
                placeholder="Address Line 1"
                className="p-2 border border-gray-300 rounded-md"
              />
              <p className="ml-2 text-gray-400 mt-2">We do not ship to P.O. boxes</p>
            </div>
            <div className="flex flex-col">
              <label htmlFor="address2" className="text-gray-400 mb-2">Address Line 2</label>
              <input 
                type="text" 
                id="address2" 
                name="address2" 
                placeholder="Address Line 2"
                className="p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="address3" className="text-gray-400 mb-2">Address Line 3</label>
              <input 
                type="text" 
                id="address3" 
                name="address3" 
                placeholder="Address Line 3"
                className="p-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* City and Zip Code Fields in 2 Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label htmlFor="city" className="text-gray-600 mb-2">City</label>
                <input 
                  type="text" 
                  id="city" 
                  name="city" 
                  placeholder="City"
                  className="p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="zipcode" className="text-gray-600 mb-2">Zip Code</label>
                <input 
                  type="text" 
                  id="zipcode" 
                  name="zipcode" 
                  placeholder="Zip Code"
                  className="p-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>

            {/* Country and PAN */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative flex flex-col">
                <label htmlFor="state" className="text-gray-600 mb-2">State/Territory</label>
                <input 
                  type="text" 
                  id="state" 
                  name="state" 
                  placeholder="State/Territory"
                  className="p-2 border border-gray-300 rounded-md pl-10"  
                />
              </div>

              <div className="relative flex flex-col">
                <label htmlFor="country" className="text-gray-600 mb-2">Country</label>
                <input 
                  type="text" 
                  id="country" 
                  name="country" 
                  placeholder="Country"
                  className="p-2 border border-gray-300 rounded-md pl-10" 
                />
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col space-y-4 mt-4">
              <h1 className="text-2xl font-semibold">What&apos;s your contact information?</h1>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="Email"
                className="p-2 border border-gray-300 rounded-md"
              />
              <p className="text-gray-400 ml-2 mt-2">A confirmation email will be sent after checkout.</p>
              <input 
                type="text" 
                id="phone" 
                name="phone" 
                placeholder="Phone Number"
                className="p-2 border border-gray-300 rounded-md"
              />
              <p className="ml-2 text-gray-400 mt-2">A carrier might contact you to confirm delivery.</p>
            </div>

            {/* PAN */}
            <div className="flex flex-col space-y-4">
              <label htmlFor="pan" className="text-gray-600 mb-2 text-2xl font-semibold">What&apos;s your PAN?</label>
              <input 
                type="text" 
                id="pan" 
                name="pan" 
                placeholder="PAN"
                className="p-2 border border-gray-300 rounded-md"
              />
              <p className="text-gray-400 ml-10">Enter your PAN to enable payment with UPI, Net Banking, or local card methods.</p>
            </div>

            {/* Save PAN and Consent Checkboxes */}
            <div className="flex flex-col space-y-6 mt-4">
              <p className="flex items-center space-x-2 mt-4">
                <input type="checkbox" id="savePAN" name="savePAN" className="form-checkbox" />
                <label htmlFor="savePAN" className="text-gray-400">Save PAN details to my profile</label>
              </p>
              <p className="flex items-center space-x-2">
                <input type="checkbox" id="consent" name="consent" className="form-checkbox" />
                <label htmlFor="consent" className="text-gray-400">
                  I have read and consent to eShopWorld processing my information in accordance with the Privacy Statement and Cookie Policy.
                </label>
              </p>
            </div>

            {/* Submit Button */}
            <button type="submit" className="w-full text-gray-500 bg-gray-200 p-4 rounded-full font-medium shadow-md">
              Continue
            </button>
          </form>
        </div>
      </div>

      {/* Right Section: Cart Details & Summary (40%) */}
      <div className="w-full md:w-[40%] p-6 rounded-lg">
        {/* Cart Details */}
        <div className="text-left mb-6 bg-gray-100 p-4">
          <h2 className="text-xl font-bold text-gray-800 mb-3">Free Delivery</h2>
          <p className="text-gray-600">
            Applies to orders of ₹ 14,000.00 or more.{' '}
            <a href="#" className="underline text-gray-900">View Details</a>
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-4">Order Summary</h2>
        <div className="bg-white shadow-md p-6 rounded-lg">
          {/* Product List */}
          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-700">1 x Product Name</p>
            <p className="text-gray-700">₹3000.00</p>
          </div>

          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-700">Shipping</p>
            <p className="text-gray-700">₹1000.00</p>
          </div>

          <div className="flex justify-between items-center font-bold text-gray-900 text-xl">
            <p>Total</p>
            <p>₹4000.00</p>
          </div>

          {/* Place Order Button */}
          <button className="w-full mt-6 bg-blue-500 text-white p-4 rounded-full shadow-md">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
