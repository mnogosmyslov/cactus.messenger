package org.cactus.messenger.controller;

import org.cactus.messenger.common.PageNames;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import static org.springframework.web.bind.annotation.RequestMethod.*;

@Controller
public class AuthenticationController {

    @RequestMapping(value = "/sign_up", method = GET)
    public String signupView() {
        return PageNames.SIGNUP;
    }

    @RequestMapping(value = "/login", method = GET)
    public String loginView() {
        return PageNames.LOGIN;
    }

}
