package org.cactus.messenger.config;

import org.cactus.messenger.common.PageNames;
import org.cactus.messenger.security.UserDetailsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.security.authentication.encoding.ShaPasswordEncoder;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.RememberMeServices;
import org.springframework.security.web.authentication.rememberme.TokenBasedRememberMeServices;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(securedEnabled = true)
@PropertySource("classpath:org/cactus/messenger/security.properties")
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private Environment environment;

    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    public void registerGlobalAuthentication(AuthenticationManagerBuilder auth) throws Exception {
        auth
                .userDetailsService(userDetailsService)
                .passwordEncoder(getShaPasswordEncoder());
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .csrf().disable().authorizeRequests()
                    .antMatchers("/resources/**", "/").permitAll()
                    .anyRequest().authenticated()
                .and()
                .formLogin()
                    .loginPage("/login")
                    .loginProcessingUrl("/j_spring_security_check")
                    .failureUrl("/login?error")
                    .usernameParameter("j_username")
                    .passwordParameter("j_password")
                    .defaultSuccessUrl("/" + PageNames.MESSENGER)
                    .permitAll()
                .and()
                .logout()
                    .logoutUrl("/logout")
                    .deleteCookies(environment.getProperty("app.cookieName"));
//                TODO: cookie impl
//                .and()
//                .rememberMe()
//                    .rememberMeServices(rememberMeServices())
//                    .key(environment.getProperty("app.key"));
    }

    @Bean
    public RememberMeServices rememberMeServices(){
        TokenBasedRememberMeServices rememberMeServices =
                new TokenBasedRememberMeServices(environment.getProperty("app.key"), userDetailsService);
        rememberMeServices.setCookieName(environment.getProperty("app.cookieName"));
        rememberMeServices.setParameter("rememberMe");
        rememberMeServices.setAlwaysRemember(true);
        return rememberMeServices;
    }

    @Bean
    public UserDetailsService getUserDetailsService(){
        UserDetailsService detailsService = new UserDetailsServiceImpl();
        return detailsService;
    }

    @Bean
    public ShaPasswordEncoder getShaPasswordEncoder(){
        return new ShaPasswordEncoder();
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        ShaPasswordEncoder encoder = new ShaPasswordEncoder();
        auth.userDetailsService(userDetailsService).passwordEncoder(encoder);
    }
}
