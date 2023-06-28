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
import { daysEn, daysEs, monthsEn, monthsEs, weatherDesc, sectionTitles } from "@/lib/language";
import { createContext, useContext, useEffect, useState } from "react";
import { weatherRequest } from "@/lib/weather";

const infoContext = createContext();

export const useInfo = () => {
  const context = useContext(infoContext);
  if (!context) throw new Error("Provider is required");
  return context;
};

//CLOCK
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

//WEATHER




export const Provider = ({ children }) => {

  const [weather, setWeather] = useState("44");
  //console.log(weather)
  const [timeDate, setTimeDate] = useState(clock);
  //console.log(timeDate)
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


  const es = {
    activities: info.activities.map(item => ({activity: item.attributes.activitieEs,spot: item.attributes.spotEs})),
    dinning: info.dinning.map(item=>({members:item.attributes.membersEs,service:item.attributes.serviceEs,type:item.attributes.typeEs})),
    breakfast: info.breakfast.map(item=>({members:item.attributes.membersEs,service:item.attributes.serviceEs,type:item.attributes.typeEs})),
    flyers: info.flyers.map(item => ({name:item.attributes.nameEs, spot:item.attributes.spotEs, title:item.attributes.titleEs})),
    sectionTitles: sectionTitles.es
  }
  const en = {
    activities: info.activities.map(item => ( {activity: item.attributes.activitieEn,spot: item.attributes.spotEn})),
    dinning: info.dinning.map(item=>({members:item.attributes.membersEn,service:item.attributes.serviceEn,type:item.attributes.typeEn})),
    breakfast: info.breakfast.map(item=>({members:item.attributes.membersEn,service:item.attributes.serviceEn,type:item.attributes.typeEn})),
    flyers: info.flyers.map(item => ({name:item.attributes.nameEn, spot:item.attributes.spotEn, title:item.attributes.titleEn})),
    sectionTitles:sectionTitles.en
  }

console.log(es)
  const [language, setLanguage] = useState()

  //WEATHER
// useEffect(()=>{
// const timer = setInterval(()=>{
//   (async()=>{
//     const res= await weatherRequest()
//     const descTranslate = weatherDesc.weatherEn.indexOf(res.weather.map(item => item.description).toString())
//     setWeather(
//       {
//         descriptionEn:res.weather.map(item => item.description).toString(),
//         descriptionEs:weatherDesc.weatherEs[descTranslate],
//         degreesEn:Math.floor(res.main.temp),
//         degreesEs:Math.floor((res.main.temp - 32) * 0.5556),
//         degreesMaxEn:Math.floor(res.main.temp_max),
//         degreesMaxEs:Math.floor((res.main.temp_max - 32) * 0.5556),
//         degreesMinEn:Math.floor(res.main.temp_min),
//         degreesMinEs:Math.floor((res.main.temp_min - 32) * 0.5556),
//         tempEn:"°F",
//         tempEs:"°C",
//         nameEn:res.name,
//       }
//     )
//   })()
// },300000)
// return ()=> clearInterval(timer)
// },[weather])

  //CLOCK

//  useEffect(() => {
  //   const timer = setInterval(() => {
      // setTimeDate({
      //   dayNumber: dataInfo.getDate(),
      //   dayEs: daysEs[dataInfo.getDay()],
      //   dayEn: daysEn[dataInfo.getDay()],
      //   monthEn: monthsEn[dataInfo.getMonth()],
      //   monthEs: monthsEs[dataInfo.getMonth()],
      //   year: dataInfo.getFullYear(),
      //   hour: ampmHours,
      //   ampm,
      //   minutes: dataInfo.getMinutes(),
      // });
  //   }, 1000);
  //   return () => clearInterval(timer);
  //},[]);

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

      //Weather

      // const res= await weatherRequest()

      // setWeather(res)

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
