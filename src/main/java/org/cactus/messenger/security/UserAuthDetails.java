package org.cactus.messenger.security;

import org.springframework.security.core.userdetails.UserDetails;

public interface UserAuthDetails<UserEntity> extends UserDetails {

    UserEntity getUser();

}