import { Controller, Post } from "@nestjs/common";
import { Body, Get, Req, Res } from "@nestjs/common";

@Controller("logout")
export class UserLogoutController {
  constructor() {}

  // 로그아웃
  @Post()
  logout(@Req() req, @Res() res) {
    res.logout();
    res.clearCookie("connect.sid", { httpOnly: true });
    res.send("ok");
  }
}
