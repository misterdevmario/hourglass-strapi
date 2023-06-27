"use client";

import {
  getActivities,
  getActivtiesGallery,
  getStaff,
  getStaffGallery,
  getDinning,
  getBreakfast,
  getBars,
  getFlyers,
  getFlyersGallery,
  getBarsRestaurantsGallery,
  putBars,
  putDinning,
  putBreakfast,
  putActivities,
  putStaff,
  putFlyers,
  postActivities,
  postStaffs,
  postFlyers,
  deleteActivities,
  deleteStaffs,
  deleteFlyers,
} from "@/lib/api";
import { clock } from "@/lib/clock";
import { daysEn, daysEs, monthsEn, monthsEs } from "@/lib/hours";
import { createContext, useContext, useEffect, useState } from "react";

const infoContext = createContext();

export const useInfo = () => {
  const context = useContext(infoContext);
  if (!context) throw new Error("Provider is required");
  return context;
};

export const Provider = ({ children }) => {
  const dataInfo = new Date();
  let ampm = "";
  let ampmHours = dataInfo.getHours();

  if (ampmHours >= 12) {
    ampm = "PM";
    ampmHours = ampmHours - 12;
  } else {
    ampm = "AM";
  }

  if (ampmHours == 0) ampmHours = 12;

  const [timeDate, setTimeDate] = useState(clock);
  const [activityGallery, setActivityGallery] = useState();
  const [image, setImage] = useState();
  const [flyerImage, setFlyerImage] = useState();
  const [staffImage, setStaffImage] = useState();
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
    const timer = setInterval(() => {
      setTimeDate({
        dayNumber: dataInfo.getDate(),
        dayEs: daysEs[dataInfo.getDay()],
        dayEn: daysEn[dataInfo.getDay()],
        monthEn: monthsEn[dataInfo.getMonth()],
        monthEs: monthsEs[dataInfo.getMonth()],
        year: dataInfo.getFullYear(),
        hour: ampmHours,
        ampm,
        minutes: dataInfo.getMinutes(),
      });
    }, 1000);
    return () => clearInterval(timer);
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
  }, [activityGallery, image, staffImage, flyerImage]);

  const handleImage = (item) => {
    setImage(item);
  };
  const handleStaffImage = (item) => {
    setStaffImage(item);
  };
  const handleFlyerImage = (item) => {
    setFlyerImage(item);
  };

  const updateActivity = async (data, id) => {
    const res = await putActivities({ data }, id);
    setActivityGallery(res.data);
  };
  const postActivity = async (data) => {
    const res = await postActivities({ data });
    setActivityGallery(res.data);
    setImage(null);
  };
  const deleteActivity = async (id) => {
    const res = deleteActivities(id);
    setActivityGallery(res);
  };

  const updateBar = async (data, id) => {
    const res = await putBars({ data }, id);
    setActivityGallery(res.data);
  };
  const updateDinning = async (data, id) => {
    const res = await putDinning({ data }, id);
    setActivityGallery(res.data);
  };
  const updateBrakfast = async (data, id) => {
    const res = await putBreakfast({ data }, id);
    setActivityGallery(res.data);
  };
  const updateStaff = async (data, id) => {
    const res = await putStaff({ data }, id);
    setActivityGallery(res.data);
  };

  const postStaff = async (data) => {
    const res = await postStaffs({ data });
    setActivityGallery(res.data);
    setStaffImage(null);
  };
  const deleteStaff = async (id) => {
    const res = deleteStaffs(id);
    setActivityGallery(res);
  };

  const updateFlyer = async (data, id) => {
    const res = await putFlyers({ data }, id);
    setActivityGallery(res.data);
  };

  const postFlyer = async (data) => {
    const res = await postFlyers({ data });
    setActivityGallery(res.data);
    setFlyerImage(null);
  };
  const deleteFlyer = async (id) => {
    const res = deleteFlyers(id);
    setActivityGallery(res);
  };

  return (
    <infoContext.Provider
      value={{
        info,
        updateActivity,
        activityGallery,
        handleImage,
        image,
        handleStaffImage,
        staffImage,
        postActivity,
        deleteActivity,
        updateBar,
        updateDinning,
        updateBrakfast,
        updateStaff,
        postStaff,
        deleteStaff,
        handleFlyerImage,
        flyerImage,
        updateFlyer,
        postFlyer,
        deleteFlyer,
        timeDate,
      }}
    >
      {children}
    </infoContext.Provider>
  );
};
