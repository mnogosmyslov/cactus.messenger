package org.cactus.messenger.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;

@Controller
@RequestMapping("/")
public class MainController {

    @RequestMapping(method = RequestMethod.GET)
    public String startView(ModelMap model) {
        return "index";
    }

    @RequestMapping(value="/getContent", method = RequestMethod.GET, produces = {"application/json"})
    public @ResponseBody
    String show(){
        HashMap hash = new HashMap();
        hash.put("msg", "Welcome to Cactus Messenger");
        return String.valueOf(hash);
    }
}