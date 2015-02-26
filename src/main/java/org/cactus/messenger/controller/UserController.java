package org.cactus.messenger.controller;

import org.cactus.messenger.common.PageNames;
import org.cactus.share.service.UserAccountService;
import org.cactus.share.vo.UserAccountVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.util.Assert;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

@Controller
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserAccountService userAccountService;

    @ResponseBody
    @RequestMapping(value = "/{id}", method = GET, produces = {"application/json"})
    public String getUserByID(@PathVariable long id){
        Assert.notNull(id);
        UserAccountVO user = userAccountService.getById(id);

        return user.getLogin() + " : " + user.getId();
    }

	@RequestMapping(value = "/new", method = RequestMethod.POST)
	public String createUser(@RequestBody UserAccountVO userAccountVO, BindingResult bindingResult) throws SQLException {
		Assert.notNull(userAccountVO);
		if (bindingResult.hasErrors()) {
			return PageNames.SIGNUP;
		} else {
			userAccountService.createUserAccount(userAccountVO);
			return PageNames.INDEX;
		}
	}

	@RequestMapping(value = "/{id}/edit", method = RequestMethod.PUT,
			headers = "Content-Type=application/json")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public UserAccountVO updateUser(@RequestBody UserAccountVO userAccountVO) {
		Assert.notNull(userAccountVO);
		return userAccountService.updateUserAccount(userAccountVO);
	}

	@RequestMapping(method = RequestMethod.GET)
	public List getAllUser() {
		return userAccountService.getAllUserAccount();
	}

	@RequestMapping(value = "/getUserByLogin/{login}", method = RequestMethod.GET)
	public UserAccountVO getUserByLogin(@PathVariable String login){
		Assert.notNull(login);
		return userAccountService.getByLogin(login);
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void deleteUser(@PathVariable long id) {
		Assert.notNull(id);
		userAccountService.deleteUserAccount(id);
	}
}
