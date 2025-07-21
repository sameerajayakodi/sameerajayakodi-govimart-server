//add address : /api/address/add

import Address from "../models/Address.js";

export const addAddress = async () => {
  try {
    const { address, userId } = req.body;
    await Address.create({ ...address, userId });
    res.json({
      success: true,
      message: "Address Added Successfully",
    });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

//get address : /api/address/get

export const getAddress = async () => {
  try {
    const { userId } = req.body;
    const addresses = await Address.find({ userId });
    res.json({
      success: true,
      addresses,
    });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};
