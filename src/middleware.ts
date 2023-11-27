import Cookies from "js-cookie";
import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
  let verify = req.cookies.get("loggedIn");
  let url = req.url;

  const pages = [];

  /*   if (!verify && url.includes("http://localhost:3000/")) {
    return NextResponse.redirect("http://localhost:3000/login");
  } */

  if (!verify && url.includes("/players")) {
    return NextResponse.redirect("http://localhost:3000/login");
  }

  if (!verify && url.includes("/store")) {
    return NextResponse.redirect("http://localhost:3000/login");
  }

  if (!verify && url.includes("/trainings")) {
    return NextResponse.redirect("http://localhost:3000/login");
  }

  if (!verify && url.includes("/matches")) {
    return NextResponse.redirect("http://localhost:3000/login");
  }

  if (!verify && url.includes("/rules")) {
    return NextResponse.redirect("http://localhost:3000/login");
  }

  if (!verify && url.includes("/news")) {
    return NextResponse.redirect("http://localhost:3000/login");
  }

  if (verify && url === "http://localhost:3000/login") {
    return NextResponse.redirect("http://localhost:3000/");
  }
}
