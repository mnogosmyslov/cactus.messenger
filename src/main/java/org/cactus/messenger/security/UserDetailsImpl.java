package org.cactus.messenger.security;

import org.cactus.share.enums.UserAccountRoleEnum;
import org.cactus.share.vo.UserAccountVO;
import org.springframework.security.core.GrantedAuthority;

import java.util.Collection;

public class UserDetailsImpl implements UserAuthDetails<UserAccountVO> {

    private UserAccountVO user;

    private final String roleHierarchyValue =
            UserAccountRoleEnum.ROLE_USER.name() + ">" + UserAccountRoleEnum.ROLE_ANONYMOUS.name() + " ";

    public UserDetailsImpl(UserAccountVO user) {
        this.user = user;
    }


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        /*List<UserAccountRoleEnum> userRoles = new ArrayList<>();
        userRoles.add(user.getRole());

        if (userRoles.isEmpty()) {
            return Collections.emptyList();
        }

        RoleHierarchyImpl roleHierarchy = new RoleHierarchyImpl();
        roleHierarchy.setHierarchy(roleHierarchyValue);

        Collection<? extends GrantedAuthority> authorities =
                roleHierarchy.getReachableGrantedAuthorities(userRoles);*/

        return null;
    }

    @Override
    public UserAccountVO getUser() {
        return this.user;
    }

    @Override
    public String getPassword() {
        return user.getPassword();
    }

    @Override
    public String getUsername() {
        return user.getLogin();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
