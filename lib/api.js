//Method GET

//Activities

export async function getActivities() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/activities?pagination[page]=1&pagination[pageSize]=50`);
  if (!res.ok) throw new Error("Failed to fetch data");

  return res.json();
}
export async function getActivtiesGallery() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/activitiesgalleries?populate=*`
  );
  if (!res.ok) throw new Error("Failed to fetch data");

  return res.json();
}

//Staff

export async function getStaff() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/staffs`);
  if (!res.ok) throw new Error("Failed to fetch data");

  return res.json();
}

export async function getStaffGallery() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/staffgalleries?populate=staffgallery`
  );
  if (!res.ok) throw new Error("Failed to fetch data");

  return res.json();
}

//Bars and restaurants

export async function getDinning() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/dinnings`);
  if (!res.ok) throw new Error("Failed to fetch data");

  return res.json();
}

export async function getBreakfast() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/breakfasts`);
  if (!res.ok) throw new Error("Failed to fetch data");

  return res.json();
}

export async function getBars() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/bars`);
  if (!res.ok) throw new Error("Failed to fetch data");

  return res.json();
}

export async function getBarsRestaurantsGallery() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/restaurantsbarsgalleries?populate=restaurantsbarsgallery`
  );
  if (!res.ok) throw new Error("Failed to fetch data");

  return res.json();
}

//Flyers

export async function getFlyers() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/flyers`);
  if (!res.ok) throw new Error("Failed to fetch data");

  return res.json();
}

export async function getFlyersGallery() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/flyersgalleries?populate=flyersgallery`
  );
  if (!res.ok) throw new Error("Failed to fetch data");

  return res.json();
}

//Method PUT

//Activities
// export async function putActivities(id,data){
//   const res = await fetch( `${process.env.NEXT_PUBLIC_STRAPI_URL}/activities/${id}`,{method:"PUT", headers:{"Content-Type": "application/json"},body: JSON.stringify(data)})
//   if (!res.ok) throw new Error("Failed to update data");
//   return res.json()
//}
export async function putActivities(data, id) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/activities/${id}`,
    {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }
  );
res.ok?alert("Updated"):null
  if (!res.ok) throw new Error("Failed to update data");
  return res.json();
}

//Staff
export async function putStaff(id, data) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/staffs/${id}`,
    {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }
  );
  if (!res.ok) throw new Error("Failed to update data");
  return res.json();
}

//Dinning
export async function putDinning(id, data) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/dinnings/${id}`,
    {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }
  );
  if (!res.ok) throw new Error("Failed to update data");
  return res.json();
}

//Breakfast
export async function putBreakfast(id, data) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/breakfasts/${id}`,
    {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }
  );
  if (!res.ok) throw new Error("Failed to update data");
  return res.json();
}

//Bars
export async function putBars(id, data) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/bars/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to update data");
  return res.json();
}

//Flyers
export async function putFlyers(id, data) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/flyers/${id}`,
    {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }
  );
  if (!res.ok) throw new Error("Failed to update data");

  return res.json();
}

//POST

//Activities
export async function postActivities(data) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/activities`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }
  );
res.ok?alert("Post"):null
  if (!res.ok) throw new Error("Failed to update data");
  return res.json();
}

//DELETE

//Activities
export async function deleteActivities(id) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/activities/${id}`,
    {
      method: "DELETE",
     
    }
  );
res.ok?alert("Deleted"):null
  if (!res.ok) throw new Error("Failed to update data");
  return res.json();
}

// async function updateData(data) {
//   try {
//     const response = await fetch(
//       `${process.env.NEXT_PUBLIC_STRAPI_URL}/bars/1`,
//       {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       }
//     );

//     if (response.ok) {
//       console.log("Data updated successfully");
//       // Handle successful response
//     } else {
//       console.error("Error updating data:", response.status);
//       // Handle error response
//     }
//   } catch (error) {
//     console.error("Error updating data:", error);
//     // Handle network or other errors
//   }
// }

// const dataToUpdate = {
//   data: {
//     Name: "From Client2",
//   },
// };
// putBars(dataToUpdate);
