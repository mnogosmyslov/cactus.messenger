package org.cactus.messenger.controller;

import org.cactus.messenger.common.PageNames;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

@Controller
@RequestMapping("/chat")
public class ChatController {

    @RequestMapping(method = GET)
    public String messengerView() {
        return PageNames.MESSENGER;
    }

}
