package org.cactus.messenger.service.impl;

import org.cactus.messenger.exception.UserNotFoundException;
import org.cactus.messenger.service.UserService;
import org.cactus.server.api.UserAccountApi;
import org.cactus.server.entity.UserAccount;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private RestTemplate rest;

    @Override
    public UserAccount getById(long id) {
        UserAccount userAccount = rest.getForObject(UserAccountApi.URL.GET_BY_ID, UserAccount.class, id);
        return userAccount;
    }

    @Override
    public UserAccount getByLogin(String login) {
        UserAccount userAccount = rest.getForObject(UserAccountApi.URL.GET_BY_LOGIN, UserAccount.class, login);
        if (userAccount == null) {
            throw new UserNotFoundException();
        }

        return userAccount;
    }

}
