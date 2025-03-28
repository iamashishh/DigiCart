import React, { useState } from 'react'
import { useSelector } from 'react-redux';

const PersonalInfo = () => {
   const user = useSelector((state) => state.auth?.usertoken?.user) || {};
    const [isEditing, setIsEditing] = useState({
      username: false,
      mobile: false,
      email: false,
    });
  
  
    const [formData, setFormData] = useState({
      username: user.username || "Guest",
      mobile: user.mobile || "Not Available",
      email: user.email || "Not Available",
    });
  return (
    <div  className="profile">

    {/* Username Section */}
    <h2 className="text-lg font-semibold flex justify-between">
      Personal Information
      {isEditing.username ? (
        <button
        onClick={() => handleSave("username")}
        className="text-green-500 text-sm"
        >
          Save
        </button>
      ) : (
        <button
        onClick={() => handleEdit("username")}
        className="text-blue-500 text-sm"
        >
          Edit
        </button>
      )}
    </h2>
    <div className="mt-4 space-y-4">
      <div className="flex gap-4">
        <input
          className="w-1/2 p-2 border outline-none bg-[rgb(250,250,250)] border-gray-300 text-gray-500 rounded"
          type="text"
          value={formData.username}
          readOnly={!isEditing.username}
          onChange={(e) => handleChange(e, "username")}
          />
        <input
          className="w-1/2 p-2 border outline-none bg-[rgb(250,250,250)] border-gray-300 text-gray-500 rounded"
          type="text"
          value={formData.username}
          readOnly={!isEditing.username}
          onChange={(e) => handleChange(e, "username")}
          />
      </div>
    </div>

    {/* Mobile Number Section */}
    <h2 className="text-lg font-semibold flex justify-between mt-6">
      Mobile Number
      {isEditing.mobile ? (
        <button
        onClick={() => handleSave("mobile")}
        className="text-green-500 text-sm"
        >
          Save
        </button>
      ) : (
        <button
        onClick={() => handleEdit("mobile")}
        className="text-blue-500 text-sm"
        >
          Edit
        </button>
      )}
    </h2>
    <input
      className="w-full p-2 mt-2 border outline-none bg-[rgb(250,250,250)] border-gray-300 text-gray-500 rounded"
      type="text"
      value={formData.mobile}
      readOnly={!isEditing.mobile}
      onChange={(e) => handleChange(e, "mobile")}
      />

    {/* Email Section */}
    <h2 className="text-lg font-semibold flex justify-between mt-6">
      Email Address
      {isEditing.email ? (
        <button
        onClick={() => handleSave("email")}
        className="text-green-500 text-sm"
        >
          Save
        </button>
      ) : (
        <button
        onClick={() => handleEdit("email")}
        className="text-blue-500 text-sm"
        >
          Edit
        </button>
      )}
    </h2>
    <input
      className="w-full p-2 mt-2 border outline-none bg-[rgb(250,250,250)] border-gray-300 text-gray-500 rounded"
      type="text"
      value={formData.email}
      readOnly={!isEditing.email}
      onChange={(e) => handleChange(e, "email")}
      />

</div>
  )
}

export default PersonalInfo