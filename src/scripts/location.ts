// location.ts
export async function getLocation(): Promise<{ lat: number; lng: number }> {
  // 1. First try browser geolocation
  if ("geolocation" in navigator) {
    try {
      const position = await new Promise<GeolocationPosition>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, {
          enableHighAccuracy: false,
          timeout: 10000
        });
      });
      return {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
    } catch (error) {
      console.log("Browser geolocation failed",error);
    }
  }

  // 2. Fallback to IP geolocation (free service)
  try {
    const response = await fetch('https://ipwho.is/');
    const data = await response.json();
    return {
      lat: data.latitude,
      lng: data.longitude
    };
  } catch (error) {
    console.log("IP geolocation failed");
  }

  // 3. Final fallback - default coordinates (Tehran)
  return {
    lat: 35.6892,
    lng: 51.3890
  };
}