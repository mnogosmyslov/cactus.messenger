package org.cactus.messenger.controller;

import org.cactus.messenger.common.PageNames;
import org.cactus.share.vo.MessageVO;
import org.cactus.share.vo.OutputMessageVO;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Date;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

@Controller
@RequestMapping("/chat")
public class ChatController {

    @RequestMapping(method = GET)
    public String messengerView() {
        return PageNames.MESSENGER;
    }

    @MessageMapping("/chat")
    @SendTo("/conversation")
    public OutputMessageVO sendMessage(MessageVO messageVO) {
        return new OutputMessageVO(messageVO, new Date());
    }

}
