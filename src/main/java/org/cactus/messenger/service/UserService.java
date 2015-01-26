package org.cactus.messenger.service;

import org.cactus.server.entity.UserAccount;

public interface UserService {

    UserAccount getById(long id);

}
