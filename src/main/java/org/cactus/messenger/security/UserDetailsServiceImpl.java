package org.cactus.messenger.security;

import org.cactus.share.service.UserAccountService;
import org.cactus.share.vo.UserAccountVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private UserAccountService accountService;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserAccountVO account = accountService.getAccount(username);

        UserDetailsImpl userDetails = null;
        if(account != null) {
            userDetails = new UserDetailsImpl(account);
        }

        return userDetails;
    }
}
