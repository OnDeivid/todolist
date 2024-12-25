import UserCarsData from "../models/UserCarsData";

export const getUserCarsData = async (userId) => UserCarsData.findOne({ userId }) 