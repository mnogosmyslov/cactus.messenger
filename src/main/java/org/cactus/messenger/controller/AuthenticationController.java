package org.cactus.messenger.controller;

import org.cactus.messenger.common.PageNames;
import org.springframework.web.bind.annotation.RequestMapping;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

public class AuthenticationController {

    @RequestMapping(value = "/signin", method = GET)
    public String signinView() {
        return PageNames.SIGNIN;
    }

}
