export async function getTokenRequest(data) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/auth/local`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );
  res.ok?alert("Post"):null
    if (!res.ok) throw new Error("Failed to get token data");
    
    return res.json();
  }