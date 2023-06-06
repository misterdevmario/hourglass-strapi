"use client";

import {
  getActivities,
  getActivtiesGallery,
  getStaff,
  getStaffGallery,
  getDinning,
  getBreakfast,
  getBars,
  getBarsRestaurantsGallery,
  getFlyers,
  getFlyersGallery,
  putActivities,
  postActivities,
  deleteActivities
} from "@/lib/api";
import { createContext, useContext, useEffect, useState } from "react";

const infoContext = createContext();

export const useInfo = () => {
  const context = useContext(infoContext);
  if (!context) throw new Error("Provider is required");
  return context;
};

export const Provider = ({ children }) => {
  const [activityGallery, setActivityGallery] = useState();
  const [image, setImage] = useState();
  const [info, setInfo] = useState({
    activities: [],
    activitiesGallery: [],
    staff: [],
    staffGallery: [],
    dinning: [],
    breakfast: [],
    bars: [],
    barsrestaurantsGallery: [],
    flyers: [],
    flyersGallery: [],
  });

  useEffect(() => {
    (async () => {
      //Activities
      const activitiesResponse = await getActivities();
      const activitiesGalleryResponse = await getActivtiesGallery();
      const images = activitiesGalleryResponse.data.map((item) =>
        item.attributes.activity.data.map((item) => item.attributes.url)
      );
      //Staff
      const staffResponse = await getStaff();
      const staffGalleryResponse = await getStaffGallery();
      const staffImages = staffGalleryResponse.data.map((item) =>
        item.attributes.staffgallery.data.map((item) => item.attributes.url)
      );
      //Restaurants and bars
      const dinningResponse = await getDinning();
      const breakfastResponse = await getBreakfast();
      const barsResponse = await getBars();
      const restaurantsBarsGalleryResponse = await getBarsRestaurantsGallery();
      const restaurantsBarsImages = restaurantsBarsGalleryResponse.data.map(
        (item) =>
          item.attributes.restaurantsbarsgallery.data.map(
            (item) => item.attributes.url
          )
      );
      //flyers
      const flyersResponse = await getFlyers();
      const flyersGalleryResponse = await getFlyersGallery();
      const flyerImage = flyersGalleryResponse.data.map((item) =>
        item.attributes.flyersgallery.data.map((item) => item.attributes.url)
      );

      setInfo({
        activities: activitiesResponse.data,
        activitiesGallery: images.toString().split(","),
        staff: staffResponse.data,
        staffGallery: staffImages.toString().split(","),
        dinning: dinningResponse.data,
        breakfast: breakfastResponse.data,
        bars: barsResponse.data,
        barsrestaurantsGallery: restaurantsBarsImages.toString().split(","),
        flyers: flyersResponse.data,
        flyersGallery: flyerImage.toString().split(","),
      });
    })();
  }, [activityGallery, image]);

  const handleImage = (item) => {
    setImage(item);
  };

  const updateActivity = async (data, id) => {
    const res = await putActivities({ data }, id);
    setActivityGallery(res.data);
  };
  const postActivity = async (data) => {
    const res = await postActivities({ data });
    setActivityGallery(res.data);
    setImage(null)
  };
  const deleteActivity = async(id)=>{
    const res = deleteActivities(id)
    setActivityGallery(res);

  }

  return (
    <infoContext.Provider
      value={{
        info,
        updateActivity,
        activityGallery,
        handleImage,
        image,
        postActivity,
        deleteActivity
      }}
    >
      {children}
    </infoContext.Provider>
  );
};
