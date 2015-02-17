package org.cactus.messenger.controller;

import org.cactus.messenger.common.PageNames;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

@Controller
@RequestMapping("/")
public class MainController {

    @RequestMapping(method = RequestMethod.GET)
    public String printWelcome(ModelMap model) {
        return PageNames.INDEX;
    }

    @RequestMapping(value="/getContent", method = RequestMethod.GET, produces = {"application/json"})
    public @ResponseBody
    String show(){
        HashMap<String, String> hash = new HashMap<String, String>();
        hash.put("msg", "welcome to spring angular js");
        return String.valueOf(hash);
    }

    @RequestMapping(value = "/profile", method = GET)
    public String profileView() {
        return PageNames.PROFILE;
    }
}