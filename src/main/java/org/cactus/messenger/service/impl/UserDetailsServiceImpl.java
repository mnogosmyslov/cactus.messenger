package org.cactus.messenger.service.impl;

import org.cactus.messenger.service.UserService;
import org.cactus.server.api.UserAccountApi;
import org.cactus.server.entity.UserAccount;
import org.cactus.server.model.UserDetailsImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private UserService userService;

    @Autowired
    private RestTemplate restTemplate;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {

        UserAccount user = restTemplate.getForObject(UserAccountApi.URL.USER_AUTHENTICATE, UserAccount.class, email);
        UserDetailsImpl userDetails = null;
        if(user != null) {
            userDetails = new UserDetailsImpl(user);
        }

        return userDetails;
    }

}