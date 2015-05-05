package org.cactus.messenger.config;

import org.cactus.share.common.ServiceNames;
import org.cactus.share.service.ChatService;
import org.cactus.share.service.UserAccountService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.remoting.caucho.HessianProxyFactoryBean;

import javax.annotation.Resource;

@Configuration
@PropertySource("classpath:messages/app.properties") //TODO remote server
public class ServicesConfig {

    @Resource
    private Environment env;

    @Bean
    HessianProxyFactoryBean userAccountServiceBean() {
        return createServiceBean(ServiceNames.USER_ACCOUNT_SERVICE, UserAccountService.class);
    }

	@Bean
	HessianProxyFactoryBean chatServiceBean() {
		return createServiceBean(ServiceNames.CHAT_SERVICE, ChatService.class);
	}


    /**
     * Method makes available to add services implementation
     * from server to the messenger spring context
     *
     * @param name  service name, used on server
     * @param clazz service implementation type
     * @return instance of HessianProxyFactoryBean
     */

    private HessianProxyFactoryBean createServiceBean(String name, Class clazz) {
        HessianProxyFactoryBean factory = new HessianProxyFactoryBean();
        factory.setServiceUrl(getServiceURL(name));
        factory.setServiceInterface(clazz);
        factory.setOverloadEnabled(true);

        return factory;
    }

    private String getServiceURL(String name) {
        return env.getRequiredProperty("service.base.url") + name;
    }

}
