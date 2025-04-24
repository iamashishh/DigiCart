import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";

const ManageAddress = () => {
  const [hasAddress, setHasAddress] = useState(false);

  return (
    <div className="flex justify-center items-start min-h-screen p-4">
      <Toaster position="top-center" />
      {!hasAddress ? (
        <NoAddress setHasAddress={setHasAddress} />
      ) : (
        <AddressForm setHasAddress={setHasAddress} />
      )}
    </div>
  );
};

// No Address Found Component
const NoAddress = ({ setHasAddress }) => {
  return (
    <div className="text-center bg-white p-10 shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold">No Addresses found in your account!</h2>
      <p className="text-gray-500">Add a delivery address.</p>
      <button
        className="bg-blue-500 cursor-pointer text-white px-4 py-2 mt-4 rounded-lg hover:bg-blue-600"
        onClick={() => setHasAddress(true)}
      >
        ADD ADDRESS
      </button>
    </div>
  );
};

// Address Form Component
const AddressForm = ({ setHasAddress }) => {
  const [address, setAddress] = useState({
    name: "",
    mobile: "",
    pincode: "",
    locality: "",
    street: "",
    city: "",
    state: "",
    landmark: "",
    alternatePhone: "",
  });

  // Function to Get User's Location
  const fetchLocation = () => {
    if (navigator.geolocation) {
      toast.loading("Fetching location...");
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;

          // Call Reverse Geocoding API (OpenStreetMap)
          try {
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
            );
            const data = await response.json();

            // Update Address Fields
            setAddress({
              ...address,
              locality: data.address.suburb || "",
              street: data.address.road || "",
              city: data.address.city || data.address.town || "",
              state: data.address.state || "",
              pincode: data.address.postcode || "",
            });

            toast.dismiss();
            toast.success("Location fetc  hed successfully!");
          } catch (error) {
            toast.dismiss();
            toast.error("Failed to fetch location!");
          }
        },
        (error) => {
          toast.dismiss();
          toast.error("Error getting location. Please try again.");
        }
      );
    } else {
      toast.error("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className="w-full">
      <h2 className="text-xl font-semibold mb-4">Manage Addresses</h2>

      {/* Use Current Location Button */}
      <button
        className="bg-blue-500 cursor-pointer font-semibold text-white px-4 py-2 rounded-lg mb-4"
        onClick={fetchLocation}
      >
        <i class="ri-focus-3-fill"></i> Use my current location
      </button>

      {/* Address Form */}
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Name"
          className="p-2 border outline-none border-gray-300 rounded"
          value={address.name}
          onChange={(e) => setAddress({ ...address, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="10-digit mobile number"
          className="p-2 border outline-none border-gray-300 rounded"
          value={address.mobile}
          onChange={(e) => setAddress({ ...address, mobile: e.target.value })}
        />
        <input
          type="text"
          placeholder="Pincode"
          className="p-2 border outline-none border-gray-300 rounded"
          value={address.pincode}
          onChange={(e) => setAddress({ ...address, pincode: e.target.value })}
        />
        <input
          type="text"
          placeholder="Locality"
          className="p-2 border outline-none border-gray-300 rounded"
          value={address.locality}
          onChange={(e) => setAddress({ ...address, locality: e.target.value })}
        />
        <input
          type="text"
          placeholder="Address (Area and Street)"
          className="p-2 border outline-none border-gray-300 rounded col-span-2"
          value={address.street}
          onChange={(e) => setAddress({ ...address, street: e.target.value })}
        />
        <input
          type="text"
          placeholder="City/District/Town"
          className="p-2 border outline-none border-gray-300 rounded"
          value={address.city}
          onChange={(e) => setAddress({ ...address, city: e.target.value })}
        />
        <select
          className="p-2 border outline-none border-gray-300 rounded"
          value={address.state}
          onChange={(e) => setAddress({ ...address, state: e.target.value })}
        >
          <option>--Select State--</option>
          <option>Maharashtra</option>
          <option>Delhi</option>
        </select>
        <input
          type="text"
          placeholder="Landmark (Optional)"
          className="p-2 border outline-none border-gray-300 rounded"
          value={address.landmark}
          onChange={(e) => setAddress({ ...address, landmark: e.target.value })}
        />
        <input
          type="text"
          placeholder="Alternate Phone (Optional)"
          className="p-2 border outline-none border-gray-300 rounded"
          value={address.alternatePhone}
          onChange={(e) => setAddress({ ...address, alternatePhone: e.target.value })}
        />
      </div>

      {/* Address Type */}
      <div className="mt-4">
        <label className="mr-4">
          <input type="radio" className="cursor-pointer" name="addressType" value="Home" /> Home
        </label>
        <label>
          <input type="radio" className="cursor-pointer" name="addressType" value="Work" /> Work
        </label>
      </div>

      {/* Save & Cancel Buttons */}
      <div className="mt-4 flex gap-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          onClick={() => toast.success("Address saved successfully!")}
        >
          SAVE
        </button>
        <button
          className="text-gray-600 px-4 py-2 rounded-lg"
          onClick={() => {
            setHasAddress(false);
            toast.info("Address entry canceled.");
          }}
        >
          CANCEL
        </button>
      </div>
    </div>
  );
};

export default ManageAddress;
