package org.cactus.messenger.utils;

import org.cactus.messenger.security.UserDetailsImpl;
import org.cactus.share.vo.UserAccountVO;
import org.springframework.security.core.context.SecurityContextHolder;

public class SessionUtil {

    public static UserAccountVO getUserPrincipal() {
        UserDetailsImpl userDetails = (UserDetailsImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if (userDetails != null) {
            return userDetails.getUser();
        }
        throw null;
    }

}
