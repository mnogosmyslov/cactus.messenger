package org.cactus.messenger.controller;

import org.cactus.messenger.common.PageNames;
import org.cactus.messenger.security.UserDetailsImpl;
import org.cactus.share.service.ChatService;
import org.cactus.share.service.UserAccountService;
import org.cactus.share.vo.UserVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

@Controller
@RequestMapping("/chat")
public class ChatController {

    @Autowired
    private UserAccountService userAccountService;

	@Autowired
	private ChatService chatService;

    @RequestMapping(method = GET)
    public String messengerView(ModelMap modelMap) {
//        TODO: get full info about user from auth request
//        UserDetails userDetails = (UserDetailsImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
//        UserVO userVO = userAccountService.getUserVOByLogin(userDetails.getUsername());
//        modelMap.addAttribute("userAccount", userVO);
//        modelMap.addAttribute("contacts", userAccountService.getAllContacts(userVO));
// 	    modelMap.addAttribute("chats", chatService.getAllChats(userVO.getId()));

        return PageNames.MESSENGER;
    }

}
