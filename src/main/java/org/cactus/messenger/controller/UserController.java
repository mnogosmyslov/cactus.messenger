package org.cactus.messenger.controller;

import org.cactus.share.service.UserAccountService;
import org.cactus.share.vo.UserAccountVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.Assert;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import static org.springframework.web.bind.annotation.RequestMethod.*;

@Controller
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserAccountService userAccountService;

    // TODO: implement it
    @ResponseBody
    @RequestMapping(value = "/{id}", method = GET, produces = {"application/json"})
    public String getUserByID(@PathVariable long id){
        Assert.notNull(id);
        UserAccountVO user = userAccountService.getById(id);

        return user.getLogin() + " : " + user.getId();
    }

}
