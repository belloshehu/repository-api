import { NextResponse } from "next/server";

export async function GET(request) {
  // "https://www.bulksmsnigeria.com/api/v1/sms/create",

  const response = await fetch(
    "https://www.bulksmsnigeria.com/api/v1/sms/create",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        body: "Hello bello, it is runor",
        from: "RUNOR-PLATFORM",
        to: "+2349061983150",
        api_token:
          "G8eEclqvINjg5NalBEOPXlOZQzBzwksJkxIsC5E1mwRzyMs0bQN62uS6j9Ra",
      }),
    }
  );
  const { data } = await response.json();
  console.log(data);
  return NextResponse.json({ status: data.status, message: data.message });
}
