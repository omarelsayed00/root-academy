import Cookies from "js-cookie";
import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
  let verify = req.cookies.get("loggedin");
  let url = req.url;

  const isAdmin = Cookies.get("isAdmin");

  const pages = [];

  /*   if (!isAdmin && url.includes("committees")) {
    return NextResponse.redirect("http://localhost:3000/");
  } */

  /* 
  if (!verify && url.includes("/signin")) {
    return NextResponse.redirect("http://localhost:3000/");
  }

  if (!verify && url.includes("/loginByPhone")) {
    return NextResponse.redirect("http://localhost:3000/login");
  } 

  if (!verify && url.includes("/payment")) {
    return NextResponse.redirect("http://localhost:3000/login");
  }

  if (!verify && url.includes("/orderCompleted")) {
    return NextResponse.redirect("http://localhost:3000/login");
  }



  if (!verify && url.includes("/newOrder")) {
    return NextResponse.redirect("http://localhost:3000/login");
  }

  if (!verify && url.includes("/settings")) {
    return NextResponse.redirect("http://localhost:3000/login");
  }

 
  if (verify && url === "http://localhost:3000/login") {
    return NextResponse.redirect("http://localhost:3000/");
  } */
}
