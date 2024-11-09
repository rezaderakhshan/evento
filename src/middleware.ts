import { NextResponse } from "next/server";

export const middleware = (request: NextResponse) => {
  console.log(4444, request);
  console.log(222, NextResponse);
  return NextResponse.redirect(new URL("/events/all", request.url));
};

export const config = {
  matcher: ["/events"],
};
